"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { EDITORIAL_EASE, letterReveal } from "@/lib/motion";

export function Hero() {
  const letters = PROFILE.brand.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-14 pt-24 pb-10 overflow-hidden"
    >
      {/* Decorative editorial frame numbers */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: EDITORIAL_EASE }}
        className="absolute top-28 md:top-32 left-6 md:left-10 lg:left-14 eyebrow"
      >
        <span className="block text-ink-mute mb-2">Vol. I · MMXXVI</span>
        <span className="block text-bronze/70">Edição Editorial</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7, ease: EDITORIAL_EASE }}
        className="absolute top-28 md:top-32 right-6 md:right-10 lg:right-14 text-right eyebrow"
      >
        <span className="block text-ink-mute mb-2">{PROFILE.location.city}</span>
        <span className="block text-bronze/70">{PROFILE.location.country}</span>
      </motion.div>

      {/* Center stack */}
      <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto">
        {/* Italic greeting */}
        <div className="overflow-hidden mb-3 md:mb-5">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EDITORIAL_EASE }}
            className="block font-display italic text-base md:text-xl lg:text-2xl text-ink-mute tracking-[0.42em]"
          >
            {PROFILE.greeting}
          </motion.span>
        </div>

        {/* Massive MARTINS */}
        <h1 className="font-sans font-black text-ink leading-[0.82] tracking-tightest text-display-xl flex justify-center items-end">
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial="hidden"
              animate="visible"
              variants={letterReveal}
              transition={{
                duration: 1.4,
                ease: EDITORIAL_EASE,
                delay: 0.4 + i * 0.08,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 2, y: "120%" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: EDITORIAL_EASE }}
            className="inline-block text-bronze ml-1"
          >
            .
          </motion.span>
        </h1>

        {/* Subline with rule */}
        <div className="mt-6 md:mt-10 flex items-center justify-center gap-4 md:gap-6">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: EDITORIAL_EASE }}
            className="block h-px w-12 md:w-20 bg-bronze/40 origin-center"
          />
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: EDITORIAL_EASE }}
              className="block eyebrow text-ink-mute"
            >
              {PROFILE.role}
            </motion.span>
          </div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: EDITORIAL_EASE }}
            className="block h-px w-12 md:w-20 bg-bronze/40 origin-center"
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.7, ease: EDITORIAL_EASE }}
          className="mt-4 md:mt-6 font-display italic text-2xl md:text-4xl lg:text-5xl text-bronze/90"
        >
          — {PROFILE.tagline.toLowerCase()}.
        </motion.p>
      </div>

      {/* Bottom — scroll hint + ghost watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-mute"
      >
        <span className="font-display italic text-xs tracking-[0.42em]">
          role
        </span>
        <div className="w-px h-9 bg-gradient-to-b from-transparent via-bronze to-transparent animate-pulse-hint" />
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.6 }}
        className="absolute bottom-6 md:bottom-8 right-6 md:right-10 lg:right-14 eyebrow text-ink-mute"
      >
        © {new Date().getFullYear()} {PROFILE.brand}
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.6 }}
        className="absolute bottom-6 md:bottom-8 left-6 md:left-10 lg:left-14 eyebrow text-ink-mute"
      >
        Portfolio · Direção
      </motion.span>
    </section>
  );
}
