"use client";

import { motion } from "framer-motion";
import { PRESS } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Press() {
  return (
    <section
      id="reconhecimento"
      className="relative py-32 md:py-44 px-6 md:px-10 lg:px-14 border-t border-hairline"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
            >
              <span className="eyebrow text-bronze block mb-3">
                ¶ Reconhecimento
              </span>
              <span className="eyebrow text-ink-mute">
                Pg. 008 · Imprensa & destaques
              </span>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-9 md:pl-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 1.1, ease: EDITORIAL_EASE }}
              className="font-display text-display-sm text-ink"
            >
              <em className="text-bronze">Citado</em> em vitrines, palcos e
              capas editoriais.
            </motion.h2>
          </div>
        </div>

        <ul className="border-t border-hairline-strong">
          {PRESS.map((item, i) => (
            <motion.li
              key={item.outlet}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: EDITORIAL_EASE,
              }}
              className="grid grid-cols-12 gap-6 items-baseline py-6 md:py-8 border-b border-hairline-strong"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs tracking-[0.4em] text-bronze">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-7 md:col-span-7 font-display italic text-2xl md:text-3xl text-ink">
                {item.outlet}
              </span>
              <span className="hidden md:block col-span-2 eyebrow text-ink-mute">
                {item.tag}
              </span>
              <span className="col-span-3 md:col-span-2 text-right font-display italic text-ink-mute text-xl md:text-2xl">
                {item.date}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
