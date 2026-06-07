"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { siteConfig, services } from "@/lib/data";
import { AnimateOnScroll } from "@/components/ui/motion";
import HeroBeams from "@/components/ui/hero-beams";

export default function ContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                remarkable together
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Have a project in mind? We&apos;d love to hear about it. Drop us a
              message and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      Message sent!
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Thanks for reaching out. We&apos;ll get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-300"
                        >
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-300"
                        >
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none appearance-none"
                      >
                        <option value="" className="bg-[#111827]">Select a service</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug} className="bg-[#111827]">
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none appearance-none"
                      >
                        <option value="" className="bg-[#111827]">Select a range</option>
                        <option value="under-5k" className="bg-[#111827]">Under $5,000</option>
                        <option value="5k-10k" className="bg-[#111827]">$5,000 – $10,000</option>
                        <option value="10k-25k" className="bg-[#111827]">$10,000 – $25,000</option>
                        <option value="25k-50k" className="bg-[#111827]">$25,000 – $50,000</option>
                        <option value="50k-plus" className="bg-[#111827]">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Project Details{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:outline-none resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                      <p className="mt-1.5 text-xs text-slate-500">
                        The more details you share, the better we can prepare
                        for our conversation.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>
                )}
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-2">
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-8">
                  <div className="rounded-2xl border border-white/5 bg-[#151c2b] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Reach Out
                    </h3>
                    <ul className="mt-4 space-y-5">
                      <li>
                        <a
                          href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 transition-colors group-hover:bg-cyan-500/20">
                            <Phone className="h-4 w-4 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-slate-500">
                              Phone
                            </p>
                            <p className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
                              {siteConfig.contact.phone}
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 transition-colors group-hover:bg-purple-500/20">
                            <Mail className="h-4 w-4 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-slate-500">
                              Email
                            </p>
                            <p className="text-sm font-medium text-slate-300 group-hover:text-purple-400 transition-colors">
                              {siteConfig.contact.email}
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                          <MapPin className="h-4 w-4 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500">
                            Office
                          </p>
                          <p className="text-sm font-medium text-slate-300">
                            {siteConfig.contact.address}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-[#151c2b] to-[#111827] p-6 ring-1 ring-white/5">
                    <h3 className="text-base font-semibold text-white">
                      Quick response guarantee
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      We respond to every inquiry within 24 hours. For urgent
                      projects, call us directly and we&apos;ll set up a
                      consultation the same day.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available Mon–Sat, 10 AM – 7 PM BST
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-[#151c2b] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Follow Us
                    </h3>
                    <div className="mt-4 flex gap-3">
                      {Object.entries(siteConfig.social).map(
                        ([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-500 transition-all hover:bg-cyan-500/10 hover:text-cyan-400"
                            aria-label={`Follow us on ${platform}`}
                          >
                            <span className="text-xs font-bold uppercase">
                              {platform.slice(0, 2)}
                            </span>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
