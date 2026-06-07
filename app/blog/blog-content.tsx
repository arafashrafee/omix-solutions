"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Clock, ArrowUpRight } from "lucide-react";
import HeroBeams from "@/components/ui/hero-beams";
import { blogPosts } from "@/lib/data";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";

export default function BlogContent() {
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
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              Insights & ideas
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Thoughts on technology, design, and digital growth from our team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren
            slow
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-[#151c2b] ring-1 ring-white/5 transition-all duration-300 hover:ring-cyan-500/20 hover:-translate-y-1"
                >
                  <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-[#1a2236] to-[#111827]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-400">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      <time className="text-xs text-slate-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
