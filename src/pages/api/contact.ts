import type { NextApiRequest, NextApiResponse } from "next";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { name, email, subject, message } = (req.body || {}) as ContactPayload;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, message: "Name, email, subject, and message are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, message: "Please provide a valid email address." });
  }

  // Placeholder for integration with email provider (e.g. Resend, SendGrid, or SMTP).
  // Current behavior: validates payload and simulates successful submission.
  return res.status(200).json({
    ok: true,
    message: "Thanks for reaching out. Your message has been received.",
    data: {
      name,
      email,
      subject,
      receivedAt: new Date().toISOString(),
    },
  });
}
