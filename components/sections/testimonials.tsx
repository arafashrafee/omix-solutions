"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeUp,
} from "@/components/ui/motion";

export default function Testimonials() {
  return (
    <section className="bg-[#0a0f1a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our clients say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
            We measure our success by the success of our clients. Here&apos;s what they
            have to say about working with us.
          </p>
        </AnimateOnScroll>

        <StaggerChildren
          slow
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              className="relative flex flex-col rounded-2xl border border-white/5 bg-[#151c2b] p-8 transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#1a2236]"
            >
              <Quote className="h-8 w-8 text-cyan-500/20" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-300">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
