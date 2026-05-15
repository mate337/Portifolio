"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-14 border-t border-hairline overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-3">¶ Contato</span>
              <span className="eyebrow text-ink-mute">Pg. 009 · Início</span>
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

        {/* Big invite */}
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-32">
          <div className="hidden md:block md:col-span-3" />
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1.2, ease: EDITORIAL_EASE }}
              className="font-display text-display-md text-ink leading-[0.92]"
            >
              Vamos construir
              <br />
              <em className="text-bronze">algo memorável</em>
              <span className="text-bronze">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: EDITORIAL_EASE,
              }}
              className="mt-8 md:mt-10 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl font-light"
            >
              Estou aceitando novos projetos para o próximo ciclo. Marcas que
              buscam <em className="font-display text-bronze">propósito</em>,
              direção e estética editorial — me escreva.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: EDITORIAL_EASE,
              }}
              href={`mailto:${PROFILE.email}?subject=Novo%20projeto%20—%20${PROFILE.brand}`}
              className="group inline-flex items-baseline gap-4 md:gap-6 mt-10 md:mt-14 font-display italic text-3xl md:text-5xl lg:text-6xl text-ink hover:text-bronze transition-colors duration-700 border-b-2 border-ink hover:border-bronze pb-2 md:pb-3"
            >
              {PROFILE.email}
              <span
                className="text-bronze text-2xl md:text-3xl transition-transform duration-700 group-hover:translate-x-2"
                aria-hidden
              >
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* Contact details grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLoose}
          transition={{ duration: 1, ease: EDITORIAL_EASE }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline-strong border border-hairline-strong rounded-sm overflow-hidden"
        >
          <div className="bg-cream p-8 md:p-10 min-h-[200px] flex flex-col justify-between">
            <span className="eyebrow text-bronze">¶ Estúdio</span>
            <div className="mt-6">
              <p className="font-display italic text-xl md:text-2xl text-ink leading-tight">
                {PROFILE.location.street}
              </p>
              <p className="text-sm text-ink-mute mt-2">
                {PROFILE.location.neighborhood} — {PROFILE.location.city},{" "}
                {PROFILE.location.state}
              </p>
              <p className="text-sm text-ink-mute">
                CEP {PROFILE.location.zip}
              </p>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-10 min-h-[200px] flex flex-col justify-between">
            <span className="eyebrow text-bronze">¶ Diretos</span>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="block font-display italic text-xl md:text-2xl text-ink hover:text-bronze transition-colors duration-500 link-underline"
              >
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                className="block text-sm text-ink-mute hover:text-ink transition-colors duration-500"
              >
                {PROFILE.phone}
              </a>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-10 min-h-[200px] flex flex-col justify-between">
            <span className="eyebrow text-bronze">¶ Social</span>
            <div className="mt-6 grid grid-cols-2 gap-y-2 gap-x-4">
              {Object.entries(PROFILE.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display italic text-lg md:text-xl text-ink hover:text-bronze transition-colors duration-500 link-underline"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
