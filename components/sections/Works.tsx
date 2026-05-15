"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORKS } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Works() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="trabalhos"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-14 border-t border-hairline bg-cream-light/40"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-3">
                ¶ Trabalhos selecionados
              </span>
              <span className="eyebrow text-ink-mute">
                Pg. 005 · {WORKS.length} estudos
              </span>
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
              Um portfólio de{" "}
              <em className="text-bronze">marcas que respiram</em> propósito e
              direção.
            </motion.h2>
          </div>
        </div>

        {/* Works list — editorial style */}
        <div
          className="relative border-t border-hairline-strong"
          onMouseLeave={() => setHovered(null)}
        >
          {WORKS.map((work, i) => {
            const isActive = hovered === i;
            return (
              <motion.a
                key={work.slug}
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportLoose}
                transition={{
                  duration: 0.8,
                  delay: i * 0.06,
                  ease: EDITORIAL_EASE,
                }}
                onMouseEnter={() => setHovered(i)}
                className="group relative block border-b border-hairline-strong"
                data-cursor="hover"
              >
                <div className="grid grid-cols-12 gap-6 items-baseline py-6 md:py-8 lg:py-10 transition-colors duration-700">
                  <span className="col-span-2 md:col-span-1 font-mono text-xs tracking-[0.4em] text-bronze pt-2">
                    /{work.index}
                  </span>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-ink tracking-tightest leading-[0.95] group-hover:text-bronze transition-colors duration-700">
                      {work.title}
                      {work.subtitle && (
                        <span className="block font-display italic font-light text-bronze/80">
                          {work.subtitle}
                        </span>
                      )}
                    </h3>
                  </div>
                  <span className="hidden md:block col-span-3 eyebrow text-ink-mute">
                    {work.category}
                  </span>
                  <span className="hidden md:block col-span-2 eyebrow text-ink-mute">
                    {work.industry}
                  </span>
                  <span className="hidden md:flex col-span-1 justify-end font-display italic text-ink-mute group-hover:text-bronze transition-colors duration-700 text-lg">
                    {work.year}
                  </span>
                </div>

                {/* Hover preview — fixed, follows hover */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
                      className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[280px] h-[200px] rounded-sm overflow-hidden pointer-events-none shadow-2xl z-20"
                      style={{ background: work.background }}
                    >
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <span className="text-[0.55rem] tracking-[0.42em] uppercase text-cream/70 font-medium">
                          {work.client}
                        </span>
                        <div>
                          <span
                            className="block font-display italic text-cream text-3xl leading-none"
                          >
                            {work.title}
                          </span>
                          {work.subtitle && (
                            <span className="block font-sans font-black text-cream text-xl tracking-tight mt-1">
                              {work.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLoose}
          transition={{ duration: 1, ease: EDITORIAL_EASE }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="font-display italic text-xl md:text-2xl text-ink-mute max-w-md">
            Um índice curto do portfólio. Cada projeto carrega processo, estratégia
            e milhares de decisões.
          </p>
          <a
            href="https://www.behance.net/matheusmartins10"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.32em] uppercase font-medium text-ink border-b border-bronze pb-2 hover:text-bronze transition-colors duration-500"
          >
            Ver portfólio completo
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
