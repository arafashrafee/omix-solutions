"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0a0f1a]">
      {/* Shader Background */}
      <ShaderBackground />

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

          {/* Right Visual — Realistic Dashboard */}
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
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#111827] to-[#0c1525] p-6 shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
                {/* Browser Chrome */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-4 h-6 rounded-md bg-white/[0.04] flex items-center px-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/40 mr-2" />
                    <p className="text-[9px] text-slate-500 font-mono">dashboard.omixsolutions.com</p>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Revenue", value: "$48.2K", change: "+12.5%", color: "cyan" },
                    { label: "Users", value: "2,847", change: "+8.3%", color: "emerald" },
                    { label: "Conversion", value: "4.6%", change: "+2.1%", color: "violet" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/[0.06]"
                    >
                      <p className="text-[9px] text-slate-500 font-medium">{stat.label}</p>
                      <p className="text-sm font-bold text-white mt-0.5">{stat.value}</p>
                      <p className={`text-[9px] font-semibold mt-1 ${
                        stat.color === "cyan" ? "text-cyan-400" :
                        stat.color === "emerald" ? "text-emerald-400" : "text-violet-400"
                      }`}>
                        ↑ {stat.change}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="rounded-xl bg-white/[0.02] p-4 ring-1 ring-white/[0.05] mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-semibold text-slate-300">Performance Overview</p>
                    <div className="flex gap-3">
                      {["Revenue", "Users"].map((label, i) => (
                        <div key={label} className="flex items-center gap-1">
                          <div className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-cyan-400" : "bg-violet-400"}`} />
                          <span className="text-[8px] text-slate-500">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* SVG Chart */}
                  <svg viewBox="0 0 280 80" className="w-full h-auto" fill="none">
                    <defs>
                      <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {[20, 40, 60].map((y) => (
                      <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    ))}
                    {/* Area fill */}
                    <motion.path
                      d="M0,65 C20,60 40,45 70,42 C100,39 120,50 140,35 C160,20 180,25 200,18 C220,12 250,15 280,8 L280,80 L0,80 Z"
                      fill="url(#chartGrad1)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                    {/* Primary line */}
                    <motion.path
                      d="M0,65 C20,60 40,45 70,42 C100,39 120,50 140,35 C160,20 180,25 200,18 C220,12 250,15 280,8"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                    />
                    {/* Secondary line */}
                    <motion.path
                      d="M0,55 C30,52 50,58 80,50 C110,42 130,48 160,40 C190,32 220,36 250,28 C265,24 275,22 280,20"
                      stroke="#8b5cf6"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeDasharray="3 3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                    />
                    {/* Data point */}
                    <motion.circle
                      cx="200" cy="18" r="3"
                      fill="#22d3ee"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8, duration: 0.3 }}
                    />
                    <motion.circle
                      cx="200" cy="18" r="6"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8, duration: 0.3 }}
                    />
                  </svg>
                </div>

                {/* Bottom Row — Recent Activity */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/[0.05]">
                    <p className="text-[9px] text-slate-500 font-medium mb-2">Active Projects</p>
                    <div className="space-y-2">
                      {[
                        { name: "E-commerce App", progress: 85 },
                        { name: "Brand Redesign", progress: 62 },
                        { name: "SEO Campaign", progress: 94 },
                      ].map((project) => (
                        <div key={project.name}>
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[8px] text-slate-400">{project.name}</span>
                            <span className="text-[8px] text-slate-500">{project.progress}%</span>
                          </div>
                          <div className="h-1 w-full rounded-full bg-white/[0.06]">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${project.progress}%` }}
                              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/[0.05]">
                    <p className="text-[9px] text-slate-500 font-medium mb-2">Client Satisfaction</p>
                    <div className="flex items-center gap-2">
                      <div className="relative h-14 w-14">
                        <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                          <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                          <motion.circle
                            cx="18" cy="18" r="15.5" fill="none"
                            stroke="#22d3ee"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="97.4"
                            initial={{ strokeDashoffset: 97.4 }}
                            animate={{ strokeDashoffset: 97.4 * 0.04 }}
                            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">96%</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span className="text-[8px] text-slate-400">Satisfied</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                          <span className="text-[8px] text-slate-500">Neutral</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card — Traffic */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-8 rounded-xl bg-[#151c2b]/95 backdrop-blur-sm px-4 py-3 shadow-xl shadow-black/40 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">+280%</p>
                    <p className="text-[9px] text-slate-500">Traffic Growth</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card — Projects */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-12 rounded-xl bg-[#151c2b]/95 backdrop-blur-sm px-4 py-3 shadow-xl shadow-black/40 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">50+ Projects</p>
                    <p className="text-[9px] text-slate-500">Completed</p>
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
