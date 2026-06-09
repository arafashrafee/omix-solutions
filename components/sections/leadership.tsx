"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { AnimateOnScroll, StaggerChildren, fadeUp } from "@/components/ui/motion";

interface LeaderProfile {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
  featured?: boolean;
  quote?: string;
  social: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    email?: string;
  };
}

const leaders: LeaderProfile[] = [
  {
    name: "Al Araf Ashrafee",
    role: "Co-Founder & CEO",
    bio: "Visionary tech entrepreneur driving OMIX Solutions with a focus on innovation, scalable digital products, and client success across software, marketing, and design.",
    image: "/leaderships/araf.png",
    initials: "AA",
    social: {
      linkedin: "https://linkedin.com/in/alarafashrafee",
      facebook: "https://facebook.com/alarafashrafee",
      instagram: "https://instagram.com/alarafashrafee",
      twitter: "https://x.com/alarafashrafee",
      email: "araf.ashrafee@northsouth.edu",
    },
  },
  {
    name: "MD Taibur Rahaman",
    role: "Co-Founder, COO & CPO",
    bio: "Product strategist with a sharp eye for user experience and market fit. Leads product vision and roadmap, ensuring every solution delivers real value to clients and end users.",
    image: "/leaderships/taibur.png",
    initials: "TR",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Sazal Pramanik",
    role: "Co-Founder, CTO & CMO",
    bio: "Full-stack architect with deep expertise in system design, cloud infrastructure, and emerging technologies. Drives OMIX's engineering excellence and technical innovation.",
    image: "/leaderships/sazal.jpg",
    initials: "SP",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    linkedin: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    facebook: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    twitter: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    email: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  };
  return <>{icons[platform]}</>;
};

function FeaturedLeaderCard({ leader }: { leader: LeaderProfile }) {
  return (
    <AnimateOnScroll>
      <div className="relative rounded-3xl bg-gradient-to-br from-[#151c2b] to-[#111827] p-1 ring-1 ring-white/[0.08] overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/15" />

        <div className="relative rounded-[1.4rem] bg-gradient-to-br from-[#151c2b]/80 to-[#111827]/80 backdrop-blur-sm p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12 items-center">
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0">
              <div className="relative h-56 w-56 lg:h-64 lg:w-64 rounded-2xl overflow-hidden ring-2 ring-white/[0.08] group-hover:ring-cyan-500/20 transition-all duration-500">
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/20 via-[#1a2236] to-purple-500/20">
                    <span className="text-6xl font-bold text-white/30">{leader.initials}</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />
              </div>
              {/* Role badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-4 py-1.5 text-[11px] font-semibold text-cyan-400 ring-1 ring-cyan-500/20 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {leader.role}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading">
                {leader.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                {leader.bio}
              </p>

              {leader.quote && (
                <blockquote className="mt-6 relative pl-5 border-l-2 border-cyan-500/30">
                  <p className="text-sm italic leading-relaxed text-slate-300/80">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </blockquote>
              )}

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start">
                {Object.entries(leader.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={platform === "email" ? `mailto:${url}` : url}
                    target={platform === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-slate-500 ring-1 ring-white/[0.06] transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:ring-cyan-500/20 hover:scale-110"
                    aria-label={platform}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function LeaderCard({ leader, index }: { leader: LeaderProfile; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl bg-gradient-to-br from-[#151c2b] to-[#111827] p-1 ring-1 ring-white/[0.06] transition-all duration-500 hover:ring-cyan-500/20"
    >
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-purple-500/5" />

      <div className="relative rounded-[0.9rem] bg-[#151c2b]/80 p-6">
        {/* Avatar */}
        <div className="relative mx-auto h-40 w-40 rounded-xl overflow-hidden ring-1 ring-white/[0.06] group-hover:ring-cyan-500/15 transition-all duration-500">
          {leader.image ? (
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/10 via-[#1a2236] to-purple-500/10">
              <span className="text-4xl font-bold text-white/20">{leader.initials}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/50 via-transparent to-transparent" />

          {/* Social overlay on hover */}
          <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex gap-1.5">
              {Object.entries(leader.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={platform === "email" ? `mailto:${url}` : url}
                  target={platform === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0a0f1a]/80 text-slate-300 backdrop-blur-sm ring-1 ring-white/10 transition-colors hover:bg-cyan-500/20 hover:text-cyan-400"
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5 text-center">
          <h3 className="text-lg font-bold text-white">{leader.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
            {leader.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {leader.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section className="bg-[#0a0f1a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading">
            Meet Our Leadership
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            The visionaries driving innovation, growth, and success. Together, we combine
            technology expertise, creative thinking, and business acumen to deliver
            exceptional digital solutions.
          </p>
        </AnimateOnScroll>

        {/* Leadership Grid — 3 equal cards */}
        <StaggerChildren
          slow
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
