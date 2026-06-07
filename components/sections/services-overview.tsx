"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";

export default function ServicesOverview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="relative bg-[#111827] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services that drive results
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            From concept to launch and beyond — we provide end-to-end digital
            solutions tailored to your business goals.
          </p>
        </AnimateOnScroll>

        <StaggerChildren className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-white/5 bg-[#151c2b] p-8 transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#1a2236] hover:-translate-y-1"
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
                </Link>
              </motion.div>
            );
          })}
        </StaggerChildren>

        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-400"
          >
            Explore all 12 services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
