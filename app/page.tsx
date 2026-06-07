import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/services-overview";
import Stats from "@/components/sections/stats";
import PortfolioPreview from "@/components/sections/portfolio-preview";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
