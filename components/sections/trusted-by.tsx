"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { clientBrands } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 bg-[#070b14]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-widest text-slate-500"
        >
          Trusted by leading brands
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20">
          {clientBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative h-12 w-28 grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-[10px] font-medium text-slate-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
