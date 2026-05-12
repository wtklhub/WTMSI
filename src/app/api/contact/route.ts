import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_ADDRESSES = [process.env.CONTACT_TO_EMAIL!];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailSubject = subject?.trim()
    ? `[WTMSI Contact] ${subject.trim()}`
    : `[WTMSI Contact] New inquiry from ${name}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="border-bottom: 2px solid #e50914; padding-bottom: 12px; color: #e50914;">
        New Contact Inquiry
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; width: 120px; background: #f5f5f5;">Name</td>
          <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; background: #f5f5f5;">Email</td>
          <td style="padding: 8px 12px;">
            <a href="mailto:${escapeHtml(email)}" style="color: #e50914;">${escapeHtml(email)}</a>
          </td>
        </tr>
        ${
          subject
            ? `<tr>
          <td style="padding: 8px 12px; font-weight: 600; background: #f5f5f5;">Subject</td>
          <td style="padding: 8px 12px;">${escapeHtml(subject)}</td>
        </tr>`
            : ""
        }
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; background: #f5f5f5;">Message</td>
          <td style="padding: 8px 12px; white-space: pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #888;">
        Sent from the WTMSI website contact form.
      </p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "WTMSI Website <onboarding@resend.dev>",
    to: TO_ADDRESSES,
    replyTo: email,
    subject: emailSubject,
    html,
  });

  if (error) {
    console.error("[contact/route] Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
