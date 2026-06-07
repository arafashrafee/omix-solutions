"use client";

import { motion } from "motion/react";
import HeroBeams from "@/components/ui/hero-beams";
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Rocket,
  Clock,
} from "lucide-react";
import { stats, siteConfig } from "@/lib/data";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";
import CTA from "@/components/sections/cta";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver solutions that are modern, efficient, and future-proof.",
  },
  {
    icon: Shield,
    title: "Quality Obsessed",
    description:
      "Every line of code, every pixel, every strategy is crafted with meticulous attention to quality.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We build deep partnerships and treat your goals as our own.",
  },
  {
    icon: Rocket,
    title: "Results Driven",
    description:
      "We measure everything. If it doesn't drive measurable impact for your business, we rethink our approach.",
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description:
      "We genuinely love what we do. That passion translates into exceptional work and dedication to every project.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "Deadlines matter. We plan meticulously and communicate proactively to deliver on schedule, every time.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
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
              About Us
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              We build digital
              <br />
              experiences that matter
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {siteConfig.name} is a full-service digital agency based in Dhaka,
              Bangladesh. We combine technical expertise with creative vision to
              help businesses transform, grow, and lead in the digital
              landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimateOnScroll>
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Target className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-heading">
                    Our Mission
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-400">
                    To empower businesses of all sizes with world-class digital
                    solutions that drive real, measurable growth. We believe
                    every brand deserves access to premium technology and
                    creative talent, regardless of where they are in their
                    journey.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
                  <Eye className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-heading">
                    Our Vision
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-400">
                    To become the most trusted digital partner in South Asia —
                    known for delivering innovative solutions that consistently
                    exceed expectations and create lasting impact for the
                    businesses and communities we serve.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a0f1a] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <p className="text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
              What drives us every day
            </h2>
          </AnimateOnScroll>

          <StaggerChildren
            slow
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-white/5 bg-[#151c2b] p-8 transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#1a2236]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0a0f1a] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimateOnScroll>
              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Why OMIX
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Your growth partner, not just a vendor
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                We don&apos;t just deliver projects — we build partnerships. When
                you work with OMIX, you get a dedicated team that understands
                your business, anticipates your needs, and is invested in your
                long-term success.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Dedicated project manager for every engagement",
                  "Transparent communication and weekly progress updates",
                  "Post-launch support and maintenance packages",
                  "Scalable solutions that grow with your business",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#151c2b] to-[#111827] p-10 shadow-2xl shadow-black/40 ring-1 ring-white/5">
                <div className="flex h-full flex-col justify-between text-white">
                  <div>
                    <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                      Our Approach
                    </p>
                    <p className="mt-4 text-2xl font-bold leading-snug">
                      Understand.
                      <br />
                      Design.
                      <br />
                      Build.
                      <br />
                      <span className="text-cyan-400">Grow.</span>
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Every project follows our proven four-phase methodology —
                    ensuring clarity, quality, and measurable results at every
                    step.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
