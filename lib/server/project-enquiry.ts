import "server-only";

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

const MAX_REQUEST_BYTES = 32_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

type EnquirySource = "homepage" | "intake";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function clientAddress(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(request: Request) {
  const now = Date.now();
  const address = clientAddress(request);
  const current = rateLimitBuckets.get(address);

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(address, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;

  if (rateLimitBuckets.size > 500) {
    rateLimitBuckets.forEach((bucket, key) => {
      if (bucket.resetAt <= now) {
        rateLimitBuckets.delete(key);
      }
    });
  }

  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function isCrossSiteRequest(request: Request) {
  return request.headers.get("sec-fetch-site") === "cross-site";
}

async function readBody(request: Request): Promise<Record<string, unknown>> {
  const declaredLength = Number(request.headers.get("content-length") || 0);

  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    throw new RequestBodyError("too_large");
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() || "";

  if (contentType.includes("application/json")) {
    const rawBody = await request.text();

    if (rawBody.length > MAX_REQUEST_BYTES) {
      throw new RequestBodyError("too_large");
    }

    try {
      const parsed = JSON.parse(rawBody) as unknown;

      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new RequestBodyError("invalid");
      }

      return parsed as Record<string, unknown>;
    } catch (error) {
      if (error instanceof RequestBodyError) {
        throw error;
      }
      throw new RequestBodyError("invalid");
    }
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const entries = await request.formData();
    return Object.fromEntries(entries.entries());
  }

  throw new RequestBodyError("unsupported");
}

class RequestBodyError extends Error {
  constructor(public readonly reason: "invalid" | "too_large" | "unsupported") {
    super(reason);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").slice(0, 100);
}

function budgetLabel(data: ContactFormData) {
  if (data.budgetNotSure || !data.currency || data.estimatedBudget === null) {
    return "Not sure yet";
  }

  return `${data.currency} ${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(data.estimatedBudget)}`;
}

function deliveryEmail(data: ContactFormData, source: EnquirySource) {
  const safe = {
    fullName: escapeHtml(data.fullName),
    workEmail: escapeHtml(data.workEmail),
    phone: escapeHtml(data.phone),
    company: escapeHtml(data.company),
    projectType: escapeHtml(data.projectType),
    budget: escapeHtml(budgetLabel(data)),
    preferredLaunchDate: escapeHtml(data.preferredLaunchDate),
    projectDetails: escapeHtml(data.projectDetails).replace(/\r?\n/g, "<br />"),
    source: source === "homepage" ? "Homepage contact form" : "Project intake page",
  };

  return `
    <h2>New BuiltIt project request</h2>
    <h3>Contact</h3>
    <ul>
      <li><strong>Name:</strong> ${safe.fullName}</li>
      <li><strong>Work email:</strong> ${safe.workEmail}</li>
      <li><strong>Phone / WhatsApp:</strong> ${safe.phone}</li>
      <li><strong>Company:</strong> ${safe.company}</li>
    </ul>
    <h3>Project</h3>
    <ul>
      <li><strong>Project type:</strong> ${safe.projectType}</li>
      <li><strong>Estimated budget:</strong> ${safe.budget}</li>
      <li><strong>Preferred launch date:</strong> ${safe.preferredLaunchDate}</li>
      <li><strong>Submitted from:</strong> ${safe.source}</li>
    </ul>
    <h3>Project details</h3>
    <p>${safe.projectDetails}</p>
    <p><em>No meeting has been reserved. Arrange a real available time after qualification if needed.</em></p>
  `;
}

function deliveryText(data: ContactFormData, source: EnquirySource) {
  const sourceLabel = source === "homepage" ? "Homepage contact form" : "Project intake page";

  return [
    "New BuiltIt project request",
    "",
    `Name: ${data.fullName}`,
    `Work email: ${data.workEmail}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Company: ${data.company}`,
    `Project type: ${data.projectType}`,
    `Estimated budget: ${budgetLabel(data)}`,
    `Preferred launch date: ${data.preferredLaunchDate}`,
    `Submitted from: ${sourceLabel}`,
    "",
    "Project details:",
    data.projectDetails,
    "",
    "No meeting has been reserved. Arrange a real available time after qualification if needed.",
  ].join("\n");
}

export async function handleProjectEnquiry(request: Request, source: EnquirySource) {
  if (isCrossSiteRequest(request)) {
    return json({ error: "Request not allowed" }, 403);
  }

  if (isRateLimited(request)) {
    return json({ error: "Too many requests" }, 429);
  }

  let body: Record<string, unknown>;

  try {
    body = await readBody(request);
  } catch (error) {
    if (error instanceof RequestBodyError) {
      if (error.reason === "too_large") {
        return json({ error: "Request is too large" }, 413);
      }

      if (error.reason === "unsupported") {
        return json({ error: "Unsupported request format" }, 415);
      }
    }

    return json({ error: "Invalid request" }, 400);
  }

  // A filled hidden field is treated as an automated submission. Return the
  // normal response so bots do not learn which trap was triggered.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ message: "Project request received" });
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return json(
      { error: "Please check the highlighted fields", details: result.error.flatten() },
      400
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Project enquiry delivery is not configured");
    return json({ error: "Unable to send the request right now" }, 503);
  }

  try {
    const resend = new Resend(apiKey);
    const enquiryRecipient = process.env.INTAKE_EMAIL || "jana4tamam@gmail.com";
    const data = result.data;
    const response = await resend.emails.send({
      from: "BuiltIt Enquiries <intake@builtit.net>",
      to: [enquiryRecipient],
      subject: `New BuiltIt project request: ${safeSubject(data.fullName)} — ${data.projectType}`,
      reply_to: data.workEmail,
      html: deliveryEmail(data, source),
      text: deliveryText(data, source),
    });

    if (response.error) {
      throw new Error("Email provider rejected the request");
    }

    return json({ message: "Project request sent" });
  } catch {
    console.error("Project enquiry delivery failed");
    return json({ error: "Unable to send the request right now" }, 502);
  }
}
