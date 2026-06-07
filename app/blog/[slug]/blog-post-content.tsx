"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import HeroBeams from "@/components/ui/hero-beams";
import type { BlogPost } from "@/lib/data";

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0f1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <HeroBeams />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to Blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading leading-[1.15]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white prose-a:text-cyan-400"
          >
            <p>
              This is a demo blog post for the OMIX Solutions website. In a
              production environment, this content would be managed through a
              CMS like Sanity, Contentful, or MDX files.
            </p>

            <h2>Why This Matters</h2>
            <p>
              The digital landscape is constantly evolving, and businesses that
              adapt quickly gain a significant competitive advantage. This post
              explores how strategic thinking combined with technical excellence
              can transform your digital presence.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Understanding your audience is the foundation of every
                successful digital strategy
              </li>
              <li>
                Technology choices should be driven by business goals, not trends
              </li>
              <li>
                Measuring and iterating is more valuable than perfecting before
                launch
              </li>
              <li>
                The right partner can accelerate your timeline by months
              </li>
            </ul>

            <h2>Looking Ahead</h2>
            <p>
              As we move into 2026, the businesses that will thrive are those
              investing in scalable, user-centered digital experiences. Whether
              it&apos;s through custom software, strategic marketing, or
              innovative design — the time to act is now.
            </p>

            <p>
              <strong>
                Ready to take the next step? Contact OMIX Solutions to discuss
                how we can help you achieve your digital goals.
              </strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 border-t border-white/5 pt-8"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to all posts
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
