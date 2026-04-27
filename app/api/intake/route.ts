import { NextResponse } from "next/server";
import { Resend } from "resend";
import { intakeSchema } from "@/lib/schemas/intake";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    // Validate the request body
    const result = intakeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const toEmail = process.env.INTAKE_EMAIL || "jana4tamam@gmail.com";

    // Format the email content
    const emailContent = `
      <h2>New Intake Form Submission</h2>
      
      <h3>About You</h3>
      <ul>
        <li><strong>Name:</strong> ${data.fullName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Role:</strong> ${data.role}</li>
      </ul>

      <h3>Project Details</h3>
      <ul>
        <li><strong>Service Needed:</strong> ${data.serviceNeeded}</li>
        <li><strong>Description:</strong> ${data.projectDescription}</li>
        <li><strong>Has Domain:</strong> ${data.hasDomain}</li>
        ${data.designReference ? `<li><strong>Design Reference:</strong> ${data.designReference}</li>` : ""}
        <li><strong>Budget Range:</strong> ${data.budgetRange}</li>
      </ul>

      <h3>Availability</h3>
      <ul>
        <li><strong>Preferred Contact:</strong> ${data.contactMethod}</li>
        <li><strong>Best Time:</strong> ${data.bestTime}</li>
        <li><strong>Timeline:</strong> ${data.timeline}</li>
        <li><strong>How They Found Us:</strong> ${data.hearAbout}</li>
        ${data.additionalInfo ? `<li><strong>Additional Info:</strong> ${data.additionalInfo}</li>` : ""}
      </ul>
    `;

    // Send the email
    await resend.emails.send({
      from: "BuiltIt Intake <intake@builtit.net>",
      to: [toEmail],
      subject: `New Intake: ${data.fullName} - ${data.serviceNeeded}`,
      html: emailContent,
      reply_to: data.email,
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Intake form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
