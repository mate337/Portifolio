"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PRESS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Press() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="press"
      className="relative bg-bg"
      style={{ padding: "clamp(5rem,10vh,9rem) clamp(2rem,6vw,6rem)" }}
    >
      {/* Header */}
      <div
        className="flex items-end justify-between flex-wrap"
        style={{
          gap: "1.5rem",
          borderBottom: "1px solid rgba(240,235,224,0.08)",
          paddingBottom: "clamp(2rem,4vh,3rem)",
          marginBottom: "clamp(3rem,6vh,5rem)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-display italic font-light"
          style={{ fontSize: "clamp(2rem,5vw,5rem)", color: "#F0EBE0", lineHeight: 0.95 }}
        >
          Reconhecimento
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="eyebrow"
          style={{ color: "rgba(240,235,224,0.25)" }}
        >
          Imprensa & destaques
        </motion.p>
      </div>

      {/* Press list */}
      <ul style={{ borderTop: "1px solid rgba(240,235,224,0.08)" }}>
        {PRESS.map((item, i) => (
          <motion.li
            key={item.outlet}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE }}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto auto",
              alignItems: "baseline",
              gap: "clamp(1rem,3vw,3rem)",
              padding: "clamp(1.2rem,2.5vh,2rem) 0",
              borderBottom: "1px solid rgba(240,235,224,0.08)",
            }}
          >
            <span
              className="font-mono"
              style={{ fontSize: "0.62rem", letterSpacing: "0.4em", color: "rgba(212,166,90,0.7)" }}
            >
              /{String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="font-display italic"
              style={{ fontSize: "clamp(1.2rem,2.5vw,2.2rem)", color: "#F0EBE0" }}
            >
              {item.outlet}
            </span>
            <span
              className="eyebrow hidden md:block"
              style={{ color: "rgba(240,235,224,0.25)" }}
            >
              {item.tag}
            </span>
            <span
              className="font-display italic"
              style={{ fontSize: "clamp(1rem,1.8vw,1.6rem)", color: "rgba(240,235,224,0.3)", textAlign: "right" }}
            >
              {item.date}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className="font-display italic font-light"
        style={{
          marginTop: "clamp(3rem,6vh,5rem)",
          fontSize: "clamp(1.2rem,2.2vw,2rem)",
          color: "rgba(240,235,224,0.3)",
          maxWidth: "52ch",
          lineHeight: 1.5,
        }}
      >
        "Citado em vitrines, palcos e capas editoriais — o trabalho fala antes das palavras."
      </motion.p>
    </section>
  );
}
