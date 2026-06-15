import { siteConfig } from "@/lib/data";

export type ReminderMethod = "none" | "email" | "whatsapp";

export const BUDGET_LABELS: Record<string, string> = {
  "50k-100k": "৳50,000 – ৳1,00,000",
  "100k-250k": "৳1,00,000 – ৳2,50,000",
  "250k-500k": "৳2,50,000 – ৳5,00,000",
  "500k-1m": "৳5,00,000 – ৳10,00,000",
  "1m-plus": "৳10,00,000+",
};

export interface ReminderDetails {
  name: string;
  email: string;
  phone?: string;
  serviceLabel?: string;
  budgetLabel?: string;
  message: string;
}

export function normalizePhoneForWhatsApp(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return null;

  if (digits.startsWith("880")) return digits;
  if (digits.startsWith("0")) return `880${digits.slice(1)}`;
  if (digits.length === 10) return `880${digits}`;

  return digits;
}

export function buildReminderText(details: ReminderDetails): string {
  const { phone, email, address } = siteConfig.contact;
  const lines = [
    `Thanks for reaching out, ${details.name}!`,
    "",
    "Your message to OMIX Solutions was received. We'll get back to you within 24 hours.",
    "",
    "Your submission:",
    `• Name: ${details.name}`,
    `• Email: ${details.email}`,
  ];

  if (details.phone) lines.push(`• Phone: ${details.phone}`);
  if (details.serviceLabel) lines.push(`• Service: ${details.serviceLabel}`);
  if (details.budgetLabel) lines.push(`• Budget: ${details.budgetLabel}`);
  lines.push(`• Details: ${details.message}`);

  lines.push(
    "",
    "OMIX contact details:",
    `• Phone: ${phone}`,
    `• Email: ${email}`,
    `• Office: ${address}`,
    "",
    "For urgent projects, call or WhatsApp us directly."
  );

  return lines.join("\n");
}

export function buildWhatsAppReminderUrl(
  userPhone: string,
  details: ReminderDetails
): string | null {
  const normalized = normalizePhoneForWhatsApp(userPhone);
  if (!normalized) return null;

  const text = encodeURIComponent(buildReminderText(details));
  return `https://wa.me/${normalized}?text=${text}`;
}
