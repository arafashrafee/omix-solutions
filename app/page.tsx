import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import ServicesOverview from "@/components/sections/services-overview";
import Stats from "@/components/sections/stats";
import PortfolioPreview from "@/components/sections/portfolio-preview";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <Stats />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
