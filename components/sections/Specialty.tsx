"use client";

import { motion } from "framer-motion";
import { SPECIALTIES } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Specialty() {
  return (
    <section
      id="especialidades"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-14 border-t border-hairline bg-cream-light/40"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-3">
                ¶ Especialidades
              </span>
              <span className="eyebrow text-ink-mute">Pg. 003 · 05 práticas</span>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-9 md:pl-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1.1, ease: EDITORIAL_EASE }}
              className="font-display text-display-sm text-ink"
            >
              Especializado em{" "}
              <em className="text-bronze">design com intenção</em> — do conceito
              ao último detalhe.
            </motion.h2>
          </div>
        </div>

        {/* Specialties grid */}
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {SPECIALTIES.map((spec, i) => (
            <motion.li
              key={spec.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: EDITORIAL_EASE,
              }}
              className="group relative py-8 md:py-12 border-t border-hairline-strong first:border-t-0 md:[&:nth-child(2)]:border-t-0 transition-colors duration-700"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs tracking-[0.42em] text-bronze pt-2">
                  /{spec.index}
                </span>
                <div className="flex-1">
                  <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-ink tracking-tightest leading-[0.95] mb-3 md:mb-4 group-hover:text-bronze transition-colors duration-700">
                    {spec.label}
                  </h3>
                  <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-md font-light">
                    {spec.description}
                  </p>
                </div>
                <span
                  className="font-display italic text-bronze opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 text-xl md:text-2xl"
                  aria-hidden
                >
                  ↗
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
