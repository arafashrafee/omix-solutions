import type { Metadata } from "next";
import ServicesContent from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of digital services — from software development and UI/UX design to digital marketing and IT consulting.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
