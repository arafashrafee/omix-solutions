import { Resend } from "resend";
import { siteConfig } from "@/lib/data";
import type { ReminderMethod } from "@/lib/contact-reminder";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "OMIX Solutions <onboarding@resend.dev>";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  serviceLabel?: string;
  budget?: string;
  budgetLabel?: string;
  message: string;
  reminderMethod?: ReminderMethod;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fieldRow(label: string, value: string | undefined): string {
  if (!value?.trim()) return "";
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#64748b;vertical-align:top;width:140px;">${label}</td>
      <td style="padding:8px 12px;color:#0f172a;">${escapeHtml(value)}</td>
    </tr>`;
}

export function buildContactEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0f172a;margin:0 0 16px;">New contact form submission</h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;">
        ${fieldRow("Name", data.name)}
        ${fieldRow("Email", data.email)}
        ${fieldRow("Phone", data.phone)}
        ${fieldRow("Service", data.serviceLabel ?? data.service)}
        ${fieldRow("Budget", data.budgetLabel ?? data.budget)}
        ${fieldRow("Message", data.message)}
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#94a3b8;">
        Sent from omixsolutions.com/contact
      </p>
    </div>`;
}

export function buildConfirmationEmailHtml(data: ContactFormData): string {
  const { phone, email, address } = siteConfig.contact;

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0f172a;margin:0 0 8px;">Thanks for reaching out, ${escapeHtml(data.name)}!</h2>
      <p style="color:#475569;line-height:1.6;">
        We received your message and will get back to you within 24 hours.
      </p>
      <div style="margin:24px 0;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4;">
        <p style="margin:0 0 12px;font-weight:600;color:#0f766e;">Our contact details</p>
        <p style="margin:0 0 8px;color:#334155;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p style="margin:0 0 8px;color:#334155;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0;color:#334155;"><strong>Office:</strong> ${escapeHtml(address)}</p>
      </div>
      <p style="color:#64748b;font-size:14px;line-height:1.6;">
        For urgent projects, call us directly and we can set up a consultation the same day.
      </p>
      <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">
        — ${siteConfig.name}
      </p>
    </div>`;
}

export async function sendContactEmails(data: ContactFormData): Promise<void> {
  if (!resend) {
    throw new Error("Email service is not configured");
  }

  await resend.emails.send({
    from: FROM_EMAIL,
    to: CONTACT_TO,
    replyTo: data.email,
    subject: `New inquiry from ${data.name} — OMIX Solutions`,
    html: buildContactEmailHtml(data),
  });

  if (data.reminderMethod === "email") {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We received your message — OMIX Solutions",
      html: buildConfirmationEmailHtml(data),
    });
  }
}
