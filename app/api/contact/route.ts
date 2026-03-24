import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "kyndrixmc@gmail.com",
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e05c77; margin-bottom: 4px;">New Portfolio Message</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />

          <p style="margin: 0 0 6px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 6px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 0 0 16px;"><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #aaa; font-size: 12px;">Sent from bao-portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
