import nodemailer from "nodemailer";

const CONTACT_EMAIL = "salabaojeffrey024@gmail.com";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return Response.json(
      { error: "Email sending is not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\nFrom: ${name} (${email})`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }
}
