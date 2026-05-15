"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-14 border-t border-hairline bg-ink text-cream"
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
              <span className="eyebrow text-bronze-200 block mb-3">
                ¶ Serviços
              </span>
              <span className="eyebrow text-cream/40">
                Pg. 007 · {SERVICES.length} frentes
              </span>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-9 md:pl-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1.1, ease: EDITORIAL_EASE }}
              className="font-display text-display-sm text-cream"
            >
              Quatro frentes de trabalho{" "}
              <em className="text-bronze-200">— um único standard</em> de
              entrega.
            </motion.h2>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 border border-cream/10 rounded-sm overflow-hidden">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: EDITORIAL_EASE,
              }}
              className="group relative bg-ink p-8 md:p-12 lg:p-14 hover:bg-bronze-900/20 transition-colors duration-700 min-h-[340px] md:min-h-[420px] flex flex-col justify-between"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.62rem] tracking-[0.42em] text-bronze-200">
                  {service.num}
                </span>
                <span
                  className="font-display italic text-cream/30 group-hover:text-bronze-200 transition-colors duration-700 text-2xl md:text-3xl"
                  aria-hidden
                >
                  ↗
                </span>
              </div>

              {/* Mid */}
              <div>
                <h3 className="font-sans font-black text-3xl md:text-5xl text-cream tracking-tightest leading-[0.95] mb-4 md:mb-6">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-cream/60 leading-relaxed font-light max-w-md">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-6 md:pt-8 border-t border-cream/10">
                <span className="eyebrow text-cream/40 block mb-3">
                  Entregas
                </span>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {service.deliverables.map((d, j) => (
                    <li key={d} className="text-xs md:text-sm text-cream/80 font-light">
                      {d}
                      {j < service.deliverables.length - 1 && (
                        <span className="text-bronze-200 ml-3">/</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLoose}
          transition={{ duration: 1, ease: EDITORIAL_EASE }}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10"
        >
          {["Imersão", "Conceito", "Refinamento", "Entrega"].map((phase, i) => (
            <div
              key={phase}
              className="flex items-start gap-4 pt-6 border-t border-cream/15"
            >
              <span className="font-mono text-[0.62rem] tracking-[0.42em] text-bronze-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="block font-display italic text-cream text-2xl md:text-3xl mb-1">
                  {phase}
                </span>
                <span className="block eyebrow text-cream/40">
                  Fase · {i + 1} de 4
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
