"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 lg:py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <p className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
