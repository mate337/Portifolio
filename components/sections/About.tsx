"use client";

import { motion } from "framer-motion";
import { PROFILE, SKILLS, STATS } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-14 border-t border-hairline"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-3">¶ Sobre</span>
              <span className="eyebrow text-ink-mute">Pg. 004 · Retrato</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportLoose}
            transition={{ duration: 1.4, ease: EDITORIAL_EASE }}
            className="col-span-12 md:col-span-9 h-px bg-ink/15 self-center origin-left"
          />
        </div>

        {/* Main grid: name + bio + portrait composite */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-24 md:mb-32">
          {/* Name */}
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1.1, ease: EDITORIAL_EASE }}
              className="font-sans font-black text-display-md text-ink tracking-tightest leading-[0.88]"
            >
              {PROFILE.firstName}
              <br />
              <span className="text-bronze italic font-display font-light tracking-tight">
                {PROFILE.lastName}.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: EDITORIAL_EASE,
              }}
              className="mt-6 md:mt-10 font-display italic text-2xl md:text-3xl text-ink-soft"
            >
              {PROFILE.role}
            </motion.p>
          </div>

          {/* Composite "portrait" placeholder — typographic */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportLoose}
              transition={{ duration: 1.2, ease: EDITORIAL_EASE }}
              className="relative aspect-[3/4] bg-gradient-to-br from-cream-deep via-cream-light to-bronze-50 border border-hairline rounded-sm overflow-hidden"
            >
              {/* Typographic portrait */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <span className="eyebrow text-bronze">M/M</span>
                  <span className="eyebrow text-ink-mute">
                    F/{new Date().getFullYear()}
                  </span>
                </div>

                <div className="text-center">
                  <span className="block font-display italic text-bronze/60 text-sm md:text-base">
                    "design é o
                  </span>
                  <span className="block font-sans font-black text-ink text-5xl md:text-7xl my-2">
                    PENSAR
                  </span>
                  <span className="block font-display italic text-bronze/60 text-sm md:text-base">
                    antes do fazer."
                  </span>
                </div>

                <div className="flex justify-between items-end">
                  <span className="eyebrow text-ink-mute">PORTRAIT №01</span>
                  <span className="font-display italic text-bronze text-xl md:text-2xl">
                    {PROFILE.brand[0]}.
                  </span>
                </div>
              </div>

              {/* Decorative grid */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bio + Skills */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-24 md:mb-32">
          {/* Bio long */}
          <div className="col-span-12 md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-6">
                ¶ Biografia
              </span>
              <p className="font-sans text-base md:text-lg lg:text-xl text-ink-soft leading-[1.8] font-light first-letter:font-display first-letter:italic first-letter:text-7xl first-letter:font-light first-letter:text-bronze first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85]">
                {PROFILE.longBio}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="w-8 h-px bg-bronze" />
                <span className="font-display italic text-bronze">
                  {PROFILE.location.city}, {PROFILE.location.state}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Skills list */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, delay: 0.2, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-6">
                ¶ Práticas
              </span>
              <ul className="flex flex-col">
                {SKILLS.map((skill, i) => (
                  <motion.li
                    key={skill.num}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportLoose}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.08,
                      ease: EDITORIAL_EASE,
                    }}
                    className="group flex items-center justify-between py-4 md:py-5 border-b border-hairline last:border-b-0"
                  >
                    <span className="flex items-baseline gap-4 md:gap-6">
                      <span className="font-mono text-[0.62rem] tracking-[0.4em] text-bronze">
                        {skill.num}
                      </span>
                      <span className="text-base md:text-lg text-ink group-hover:text-bronze transition-colors duration-500">
                        {skill.label}
                      </span>
                    </span>
                    <span className="font-display italic text-bronze/60 text-sm">
                      {skill.years} anos
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLoose}
          transition={{ duration: 1, ease: EDITORIAL_EASE }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline-strong border border-hairline-strong rounded-sm overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-cream p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[180px]"
            >
              <span className="eyebrow text-ink-mute">{stat.label}</span>
              <span className="font-display italic font-light text-6xl md:text-7xl lg:text-8xl text-ink mt-4">
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
