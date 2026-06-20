"use client";

import Link from "next/link";
import { motion } from "motion/react";
import HeroBeams from "@/components/ui/hero-beams";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";
import CTA from "@/components/sections/cta";
import CloudStartupCalculator from "@/components/sections/cloud-startup-calculator";

export default function ServicesContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0f1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <HeroBeams />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              Everything you need to
              <br />
              succeed digitally
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              12 specialized services. One team. End-to-end digital solutions
              tailored to drive your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren
            slow
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = getIcon(service.iconName);
              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex flex-col rounded-2xl border border-white/5 bg-[#151c2b] p-8 transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#1a2236] hover:-translate-y-1 h-full"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-cyan-500/10">
                        <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-xs font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0f1a] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
              Our proven process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Every project follows a structured approach to ensure quality,
              transparency, and results.
            </p>
          </AnimateOnScroll>

          <StaggerChildren className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We dive deep into your business, goals, audience, and challenges to build a solid foundation.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We craft a tailored plan with clear milestones, timelines, and measurable objectives.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Our team brings the plan to life with iterative development, regular reviews, and transparent updates.",
              },
              {
                step: "04",
                title: "Growth",
                description:
                  "We launch, measure, optimize, and provide ongoing support to ensure sustained growth.",
              },
            ].map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                className="relative rounded-2xl border border-white/5 bg-[#151c2b] p-8"
              >
                <span className="text-4xl font-bold text-white/5">
                  {phase.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CloudStartupCalculator />

      <CTA />
    </>
  );
}
