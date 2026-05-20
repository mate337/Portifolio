"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SHOWCASE } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Showcase() {
  return (
    <section
      id="galeria"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-14 border-t border-hairline bg-cream-light/30"
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
              <span className="eyebrow text-bronze block mb-3">¶ Galeria</span>
              <span className="eyebrow text-ink-mute">
                Pg. 005 · Recortes visuais
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
              Fragmentos de{" "}
              <em className="text-bronze">campanhas, marcas e direção</em> —
              o trabalho falando por si.
            </motion.h2>
          </div>
        </div>

        {/* Showcase grid — editorial 2x2 with offset */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {SHOWCASE.map((item, i) => {
            const isOffset = i % 2 === 1;
            return (
              <motion.figure
                key={item.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportLoose}
                transition={{
                  duration: 1.1,
                  delay: i * 0.12,
                  ease: EDITORIAL_EASE,
                }}
                className={`col-span-12 md:col-span-6 ${
                  isOffset ? "md:mt-16 lg:mt-24" : ""
                }`}
              >
                <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-hairline-strong bg-ink shadow-xl">
                  <Image
                    src={item.image}
                    alt={`${item.client} — ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1600ms] ease-editorial group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-4 left-4 md:top-5 md:left-5 flex items-center gap-2">
                    <span className="text-[0.55rem] tracking-[0.42em] uppercase text-cream/85 font-medium bg-ink/55 backdrop-blur px-3 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 md:top-5 md:right-5">
                    <span className="text-[0.55rem] tracking-[0.42em] uppercase text-cream/85 font-medium bg-ink/55 backdrop-blur px-3 py-1.5 rounded-full">
                      {item.year}
                    </span>
                  </div>
                </div>

                <figcaption className="mt-5 md:mt-6 grid grid-cols-12 gap-4 items-start">
                  <span className="col-span-2 md:col-span-1 font-mono text-[0.62rem] tracking-[0.42em] text-bronze pt-1">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-11">
                    <span className="block eyebrow text-ink-mute mb-1.5">
                      {item.client}
                    </span>
                    <h3 className="font-display italic text-2xl md:text-3xl text-ink leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-ink-soft leading-relaxed font-light max-w-md">
                      {item.caption}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportLoose}
          transition={{ duration: 1.4, ease: EDITORIAL_EASE }}
          className="mt-20 md:mt-28 h-px bg-ink/15 origin-left"
        />
        <p className="mt-6 font-display italic text-base md:text-lg text-ink-mute max-w-2xl">
          Cada peça é um recorte — o sistema completo vive em livros de marca,
          campanhas e ambientes físicos.
        </p>
      </div>
    </section>
  );
}
