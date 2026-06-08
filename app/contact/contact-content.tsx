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
                      Available Sat–Thu, 9 AM – 6 PM BST
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-[#151c2b] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Follow Us
                    </h3>
                    <div className="mt-4 flex gap-3">
                      {Object.entries(siteConfig.social).map(
                        ([platform, url]) => {
                          const icons: Record<string, React.ReactNode> = {
                            facebook: (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            ),
                            linkedin: (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            ),
                            instagram: (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                              </svg>
                            ),
                            twitter: (
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                            ),
                          };
                          return (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:scale-110"
                              aria-label={`Follow us on ${platform}`}
                            >
                              {icons[platform] || (
                                <span className="text-xs font-bold uppercase">
                                  {platform.slice(0, 2)}
                                </span>
                              )}
                            </a>
                          );
                        }
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
