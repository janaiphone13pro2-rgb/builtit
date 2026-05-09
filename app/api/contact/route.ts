import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";

export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const safe = {
      fullName: escapeHtml(data.fullName),
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone),
      company: escapeHtml(data.company || "Not provided"),
      projectType: escapeHtml(data.projectType),
      budget: escapeHtml(data.budget),
      selectedDate: escapeHtml(data.selectedDate),
      selectedTime: escapeHtml(data.selectedTime),
      message: escapeHtml(data.message),
    };
    const resend = new Resend(apiKey);
    const toEmail = process.env.INTAKE_EMAIL || "jana4tamam@gmail.com";

    await resend.emails.send({
      from: "BuiltIt Contact <intake@builtit.net>",
      to: [toEmail],
      subject: `New BuiltIt booking: ${data.fullName} - ${data.projectType}`,
      reply_to: data.email,
      html: `
        <h2>New BuiltIt Landing Page Booking</h2>
        <h3>Contact</h3>
        <ul>
          <li><strong>Name:</strong> ${safe.fullName}</li>
          <li><strong>Email:</strong> ${safe.email}</li>
          <li><strong>Phone:</strong> ${safe.phone}</li>
          <li><strong>Company:</strong> ${safe.company}</li>
        </ul>
        <h3>Project</h3>
        <ul>
          <li><strong>Type:</strong> ${safe.projectType}</li>
          <li><strong>Budget:</strong> ${safe.budget}</li>
          <li><strong>Selected Date:</strong> ${safe.selectedDate}</li>
          <li><strong>Selected Time:</strong> ${safe.selectedTime}</li>
        </ul>
        <h3>Message</h3>
        <p>${safe.message}</p>
      `,
    });

    return NextResponse.json({ message: "Contact request sent" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact request" },
      { status: 500 }
    );
  }
}
