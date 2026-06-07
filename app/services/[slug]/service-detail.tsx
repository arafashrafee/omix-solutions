"use client";

import Link from "next/link";
import { motion } from "motion/react";
import HeroBeams from "@/components/ui/hero-beams";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/data";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";
import CTA from "@/components/sections/cta";

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = getIcon(service.iconName);
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

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
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              All Services
            </Link>

            <div className="mt-8 flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <h2 className="text-2xl font-bold text-white font-heading">
                  Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  {service.longDescription}
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll className="mt-12">
                <h2 className="text-2xl font-bold text-white font-heading">
                  What&apos;s Included
                </h2>
                <StaggerChildren className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      variants={fadeUp}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#151c2b] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <span className="text-sm font-medium text-slate-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </StaggerChildren>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-2">
              <AnimateOnScroll delay={0.1}>
                <div className="sticky top-28 rounded-2xl border border-white/5 bg-[#151c2b] p-8">
                  <h3 className="text-lg font-semibold text-white">
                    Ready to get started?
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Let&apos;s discuss how our {service.title.toLowerCase()}{" "}
                    service can help your business grow.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <div className="mt-8 space-y-4 border-t border-white/5 pt-6">
                    {[
                      "Quick turnaround times",
                      "Dedicated project manager",
                      "100% secure & confidential",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <svg
                          className="h-4 w-4 text-cyan-400"
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
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-4 border-t border-white/5 pt-10 sm:grid-cols-2">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-white/5 p-4 transition-all hover:border-cyan-500/20 hover:bg-[#151c2b]"
              >
                <ArrowLeft className="h-4 w-4 text-slate-600 transition-transform group-hover:-translate-x-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Previous</p>
                  <p className="text-sm font-medium text-slate-300">
                    {prevService.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService && (
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-center justify-end gap-3 rounded-xl border border-white/5 p-4 text-right transition-all hover:border-cyan-500/20 hover:bg-[#151c2b]"
              >
                <div>
                  <p className="text-xs text-slate-500">Next</p>
                  <p className="text-sm font-medium text-slate-300">
                    {nextService.title}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
