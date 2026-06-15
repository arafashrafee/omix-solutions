import { NextResponse } from "next/server";
import { services } from "@/lib/data";
import type { ReminderMethod } from "@/lib/contact-reminder";
import { BUDGET_LABELS } from "@/lib/contact-reminder";
import { sendContactEmails, type ContactFormData } from "@/lib/email";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const budget = String(body.budget ?? "").trim();
    const message = String(body.message ?? "").trim();
    const reminderMethod = String(body.reminderMethod ?? "none") as ReminderMethod;
    const validReminderMethods: ReminderMethod[] = ["none", "email", "whatsapp"];

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!validReminderMethods.includes(reminderMethod)) {
      return NextResponse.json(
        { error: "Invalid reminder option selected." },
        { status: 400 }
      );
    }

    if (reminderMethod === "whatsapp" && !phone) {
      return NextResponse.json(
        { error: "Phone number is required for WhatsApp reminders." },
        { status: 400 }
      );
    }

    const serviceEntry = services.find((item) => item.slug === service);
    const payload: ContactFormData = {
      name,
      email,
      phone: phone || undefined,
      service: service || undefined,
      serviceLabel: serviceEntry?.title,
      budget: budget || undefined,
      budgetLabel: budget ? BUDGET_LABELS[budget] : undefined,
      message,
      reminderMethod,
    };

    await sendContactEmails(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error && error.message === "Email service is not configured"
        ? "Contact form is temporarily unavailable. Please email us directly."
        : "Something went wrong. Please try again or contact us directly.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
