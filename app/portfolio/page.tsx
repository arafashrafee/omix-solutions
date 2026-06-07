import type { Metadata } from "next";
import PortfolioContent from "./portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful projects — from custom software and e-commerce platforms to branding and digital marketing campaigns.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
