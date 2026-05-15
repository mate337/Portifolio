"use client";

import { motion } from "framer-motion";
import { PROFILE, TICKER_ITEMS } from "@/lib/data";
import { EDITORIAL_EASE, viewportOnce } from "@/lib/motion";

export function Manifesto() {
  const words = PROFILE.manifesto.split(" ");

  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-44 lg:py-52 px-6 md:px-10 lg:px-14 border-t border-hairline"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-3 flex items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
              className="eyebrow"
            >
              <span className="block text-bronze mb-2">¶ Manifesto</span>
              <span className="block text-ink-mute">Pg. 002</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: EDITORIAL_EASE }}
            className="col-span-12 md:col-span-9 h-px bg-ink/15 self-center origin-left"
          />
        </div>

        {/* Manifesto text — large editorial paragraph */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-3" />
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-ink tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.04,
                    ease: EDITORIAL_EASE,
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.8, duration: 1, ease: EDITORIAL_EASE }}
              className="mt-10 md:mt-14 font-display italic text-xl md:text-2xl text-bronze max-w-2xl"
            >
              "— {PROFILE.shortBio}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 1.1, duration: 1 }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="w-12 h-px bg-bronze" />
              <span className="eyebrow text-ink-mute">
                {PROFILE.firstName} {PROFILE.lastName}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-32 md:mt-44 -mx-6 md:-mx-10 lg:-mx-14 border-y border-hairline py-6 md:py-8 overflow-hidden bg-cream-light/60">
        <div className="marquee">
          <div className="marquee-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map(
              (item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 md:gap-12 text-2xl md:text-4xl font-display italic text-ink whitespace-nowrap"
                >
                  {item}
                  <span className="text-bronze text-base">✦</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
