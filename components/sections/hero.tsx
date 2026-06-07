"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import HeroBeams from "@/components/ui/hero-beams";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0a0f1a]">
      {/* PulseBeams Background */}
      <HeroBeams />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 ring-1 ring-cyan-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Full-Service Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Elevating Brands
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                in the Digital World
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400"
            >
              We craft exceptional digital experiences through software
              development, design, and marketing — helping businesses transform,
              grow, and lead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 text-sm text-slate-500"
            >
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Trusted by 35+ businesses
              </span>
              <span className="h-4 w-px bg-slate-700" />
              <span>50+ projects delivered</span>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0c1525] p-8 shadow-2xl shadow-black/40 ring-1 ring-white/5">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/40" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
                      <div className="h-3 w-3 rounded-full bg-green-500/40" />
                    </div>
                    <div className="mt-8 space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-white/5" />
                      <div className="h-3 w-1/2 rounded-full bg-white/5" />
                      <div className="h-3 w-2/3 rounded-full bg-white/5" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="space-y-2">
                      <div className="h-8 w-20 rounded-lg bg-cyan-500/15" />
                      <div className="h-2 w-16 rounded-full bg-white/5" />
                    </div>
                    <div className="flex gap-1">
                      {[40, 60, 35, 80, 55, 70].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{
                            duration: 0.8,
                            delay: 0.8 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="w-4 rounded-t-sm bg-gradient-to-t from-cyan-500/30 to-cyan-400/60"
                          style={{ maxHeight: `${h}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-16 rounded-2xl bg-[#151c2b] p-4 shadow-xl shadow-black/30 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <svg
                      className="h-5 w-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">+280%</p>
                    <p className="text-[10px] text-slate-500">Traffic Growth</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 bottom-24 rounded-2xl bg-[#151c2b] p-4 shadow-xl shadow-black/30 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <svg
                      className="h-5 w-5 text-violet-400"
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
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      50+ Projects
                    </p>
                    <p className="text-[10px] text-slate-500">Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
