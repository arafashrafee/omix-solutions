"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { clientBrands } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 bg-[#111726]">
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

        <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex w-max items-center gap-x-16 sm:gap-x-20 lg:gap-x-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          >
            {[...clientBrands, ...clientBrands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="brand group/item relative flex shrink-0 flex-col items-center"
              >
                <div className="relative h-20 w-40 grayscale opacity-80 transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:opacity-100">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 text-xs font-medium text-slate-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
