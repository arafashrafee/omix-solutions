"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/lib/data";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";
import { motion } from "motion/react";

export default function PortfolioPreview() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="bg-[#111827] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Work
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects we&apos;re proud of
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Real solutions for real businesses. Here&apos;s a glimpse of what we&apos;ve built.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-400 shrink-0"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </AnimateOnScroll>

        <StaggerChildren className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link
                href={`/portfolio#${project.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#151c2b] ring-1 ring-white/5 transition-all duration-300 hover:ring-cyan-500/20 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a2236] to-[#111827]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                      <p className="mt-3 text-xs font-medium text-slate-500">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
