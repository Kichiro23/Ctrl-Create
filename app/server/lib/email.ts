import { Resend } from "resend";
import { env } from "./env";

const resend = env.resendApiKey ? new Resend(env.resendApiKey) : null;

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  discountType?: string;
  discountId?: string;
  message: string;
}) {
  if (!resend) {
    console.warn("RESEND_API_KEY not set — email not sent");
    return { sent: false, reason: "no_api_key" };
  }

  try {
    await resend.emails.send({
      from: `Cylux Code <${env.resendFromEmail}>`,
      to: env.ownerEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New message from Cylux Code contact form</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
        ${data.businessName ? `<p><strong>Business:</strong> ${escapeHtml(data.businessName)}</p>` : ""}
        ${data.serviceType ? `<p><strong>Service:</strong> ${escapeHtml(data.serviceType)}</p>` : ""}
        ${data.budget ? `<p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>` : ""}
        ${data.timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>` : ""}
        ${data.discountType && data.discountType !== "none" ? `<p><strong>Discount Applied For:</strong> ${escapeHtml(data.discountType.toUpperCase())}</p>` : ""}
        ${data.discountId ? `<p><strong>ID Reference:</strong> ${escapeHtml(data.discountId)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      `,
    });
    return { sent: true };
  } catch (err) {
    console.error("Failed to send email:", err);
    return { sent: false, reason: "send_failed" };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
