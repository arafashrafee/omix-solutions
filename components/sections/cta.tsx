"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to elevate your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              digital presence?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Let&apos;s discuss your project and explore how we can help you achieve
            your business goals. No obligations — just a conversation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/5 hover:text-white hover:ring-white/20"
            >
              Browse Services
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
