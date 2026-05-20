"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WORKS } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

// Featured cases — sticky, cinematic
const FEATURED = WORKS.slice(0, 4);

export function Spotlight() {
  return (
    <section
      id="destaques"
      className="relative border-t border-hairline"
    >
      {/* Section header */}
      <div className="px-6 md:px-10 lg:px-14 py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportLoose}
                transition={{ duration: 1, ease: EDITORIAL_EASE }}
              >
                <span className="eyebrow text-bronze block mb-3">
                  ¶ Estudos em destaque
                </span>
                <span className="eyebrow text-ink-mute">
                  Pg. 006 · Cases selecionados
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
                Quatro casos. Quatro <em className="text-bronze">universos</em>{" "}
                distintos — mesma obsessão por detalhe.
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      {/* Featured cases — alternating layout */}
      {FEATURED.map((work, i) => {
        const isReversed = i % 2 === 1;
        return (
          <article
            key={work.slug}
            className="relative px-6 md:px-10 lg:px-14 py-20 md:py-32 border-t border-hairline overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto">
              <div
                className={`grid grid-cols-12 gap-6 md:gap-12 items-center ${
                  isReversed ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportLoose}
                  transition={{ duration: 1.4, ease: EDITORIAL_EASE }}
                  className="col-span-12 md:col-span-6 [direction:ltr]"
                >
                  <div
                    className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
                    style={{ background: work.background }}
                  >
                    {/* Editorial decoration */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                      <div className="flex items-start justify-between">
                        <span className="text-[0.6rem] tracking-[0.42em] uppercase text-cream/70 font-medium">
                          Case · {work.index}
                        </span>
                        <span className="text-[0.6rem] tracking-[0.42em] uppercase text-cream/70 font-medium">
                          {work.year}
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="block font-display italic text-cream/60 text-xs md:text-sm tracking-[0.42em] mb-3 md:mb-5">
                          {work.client.toUpperCase()}
                        </span>
                        {work.logo ? (
                          <div className="relative w-full max-w-[480px] mx-auto aspect-[5/2]">
                            <Image
                              src={work.logo}
                              alt={`Logotipo ${work.title} ${work.subtitle ?? ""}`.trim()}
                              fill
                              sizes="(max-width: 768px) 80vw, 480px"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <>
                            <span className="block font-sans font-black text-cream text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[0.9]">
                              {work.title}
                            </span>
                            {work.subtitle && (
                              <span className="block font-display italic font-light text-cream/80 text-3xl md:text-5xl lg:text-6xl mt-2">
                                {work.subtitle}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      <div className="flex items-end justify-between">
                        <span
                          className="font-display italic text-cream/40 text-xl md:text-2xl"
                          style={{ color: "rgba(244,239,230,0.4)" }}
                        >
                          {work.industry}
                        </span>
                        <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-cream/50">
                          {String(i + 1).padStart(2, "0")} / {FEATURED.length}
                        </span>
                      </div>
                    </div>

                    {/* Decorative grid lines */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="col-span-12 md:col-span-6 [direction:ltr]">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportLoose}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: EDITORIAL_EASE,
                    }}
                  >
                    <span className="eyebrow text-bronze block mb-4">
                      Case · {work.index} / {String(FEATURED.length).padStart(2, "0")}
                    </span>

                    {work.logo ? (
                      <div className="mb-2 md:mb-4 max-w-[420px]">
                        <div className="relative w-full aspect-[5/2]">
                          <Image
                            src={work.logo}
                            alt={`Logotipo ${work.title} ${work.subtitle ?? ""}`.trim()}
                            fill
                            sizes="420px"
                            className="object-contain object-left invert"
                            style={{ filter: "invert(1) sepia(1) saturate(0.4) hue-rotate(-15deg) brightness(0.55)" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <h3 className="font-sans font-black text-display-xs text-ink tracking-tightest leading-[0.9] mb-2 md:mb-4">
                        {work.client}
                      </h3>
                    )}
                    <p className="font-display italic text-2xl md:text-3xl text-bronze mb-6 md:mb-8">
                      — {work.category}
                    </p>

                    <p className="text-base md:text-lg text-ink-soft leading-[1.8] font-light mb-6 md:mb-8 max-w-xl">
                      {work.description}
                    </p>

                    {/* Highlight — desdobramento */}
                    {work.highlight && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportLoose}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: EDITORIAL_EASE,
                        }}
                        className="relative mb-10 md:mb-12 max-w-xl"
                      >
                        <div className="relative pl-6 md:pl-7 py-2 border-l-2 border-bronze">
                          <span className="absolute -top-3 left-6 md:left-7 bg-cream px-2 eyebrow text-bronze">
                            ¶ Desdobramento
                          </span>
                          <p className="font-display italic text-xl md:text-2xl lg:text-[1.65rem] text-ink leading-[1.45] first-letter:font-display first-letter:text-4xl first-letter:text-bronze first-letter:mr-1">
                            {work.highlight}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Scope */}
                    <div className="mb-8 md:mb-10">
                      <span className="eyebrow text-ink-mute block mb-4">
                        ¶ Escopo
                      </span>
                      <ul className="flex flex-wrap gap-2">
                        {work.scope.map((item) => (
                          <li
                            key={item}
                            className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 border border-hairline-strong rounded-full text-ink-soft hover:border-bronze hover:text-bronze transition-colors duration-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    {work.metrics && (
                      <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-hairline">
                        {work.metrics.map((m) => (
                          <div key={m.label}>
                            <span className="block font-display italic text-3xl md:text-4xl text-bronze">
                              {m.value}
                            </span>
                            <span className="block eyebrow text-ink-mute mt-1">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
