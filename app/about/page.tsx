import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OMIX Solutions — a full-service digital agency elevating brands in the digital world from Dhaka, Bangladesh.",
};

export default function AboutPage() {
  return <AboutContent />;
}
