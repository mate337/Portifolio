"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const PHASES = ["Imersão", "Conceito", "Refinamento", "Entrega"] as const;

export function Services() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="servicos"
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
          Serviços
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="eyebrow text-right"
          style={{ maxWidth: "28ch" }}
        >
          {SERVICES.length} frentes · um único standard de entrega
        </motion.p>
      </div>

      {/* Grid */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 1, background: "rgba(240,235,224,0.06)" }}
      >
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: EASE }}
            className="bg-bg flex flex-col justify-between"
            style={{
              padding: "clamp(2rem,4vw,3.5rem)",
              minHeight: "clamp(300px,40vh,420px)",
            }}
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <span className="eyebrow">{svc.num}</span>
              <span
                className="font-display italic"
                style={{ fontSize: "clamp(1.5rem,2.5vw,2.5rem)", color: "rgba(240,235,224,0.12)", transition: "color 0.5s" }}
                aria-hidden
              >
                ↗
              </span>
            </div>

            {/* Mid */}
            <div>
              <h3
                className="font-sans font-black"
                style={{
                  fontSize: "clamp(1.4rem,2.8vw,3rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.95,
                  color: "#F0EBE0",
                  marginBottom: "clamp(0.75rem,1.5vh,1.2rem)",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{ fontSize: "clamp(0.75rem,1vw,0.9rem)", color: "rgba(240,235,224,0.5)", maxWidth: "38ch" }}
              >
                {svc.description}
              </p>
            </div>

            {/* Deliverables */}
            <div style={{ paddingTop: "clamp(1.2rem,2.5vh,2rem)", borderTop: "1px solid rgba(240,235,224,0.08)" }}>
              <span className="eyebrow block" style={{ marginBottom: "0.6rem" }}>Entregas</span>
              <div className="flex flex-wrap" style={{ gap: "0.25rem 0.75rem" }}>
                {svc.deliverables.map((d, j) => (
                  <span key={d} style={{ fontSize: "0.75rem", color: "rgba(240,235,224,0.6)", fontWeight: 300 }}>
                    {d}{j < svc.deliverables.length - 1 && <span style={{ color: "rgba(212,166,90,0.5)", marginLeft: "0.5rem" }}>/</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process phases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        style={{
          marginTop: "clamp(3rem,6vh,5rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: 0,
        }}
      >
        {PHASES.map((phase, i) => (
          <div
            key={phase}
            className="flex items-start"
            style={{
              gap: "1rem",
              paddingTop: "clamp(1.2rem,2.5vh,2rem)",
              borderTop: "1px solid rgba(240,235,224,0.1)",
              paddingRight: i < PHASES.length - 1 ? "clamp(1rem,2vw,2rem)" : 0,
            }}
          >
            <span className="eyebrow" style={{ flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <span className="block font-display italic" style={{ fontSize: "clamp(1.2rem,2vw,2rem)", color: "#F0EBE0", marginBottom: "0.2rem" }}>
                {phase}
              </span>
              <span className="eyebrow" style={{ color: "rgba(240,235,224,0.25)" }}>Fase {i + 1} de 4</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
