import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OMIX Solutions. Let's discuss your project and explore how we can help your business grow.",
};

export default function ContactPage() {
  return <ContactContent />;
}
