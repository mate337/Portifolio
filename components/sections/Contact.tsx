"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROFILE } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contato"
      className="relative bg-bg overflow-hidden"
      style={{ padding: "clamp(5rem,10vh,9rem) clamp(2rem,6vw,6rem)" }}
    >
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="eyebrow"
        style={{ marginBottom: "clamp(2rem,4vh,3.5rem)" }}
      >
        Contato
      </motion.p>

      {/* Big invite */}
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease: EASE }}
        className="font-display italic font-light"
        style={{
          fontSize: "clamp(2.5rem,7vw,8rem)",
          lineHeight: 0.92,
          color: "#F0EBE0",
          marginBottom: "clamp(1.5rem,3vh,2.5rem)",
          maxWidth: "18ch",
        }}
      >
        Vamos construir algo{" "}
        <em style={{ color: "rgba(212,166,90,0.9)" }}>memorável</em>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="font-light leading-relaxed"
        style={{
          fontSize: "clamp(0.85rem,1.2vw,1.1rem)",
          color: "rgba(240,235,224,0.5)",
          maxWidth: "44ch",
          marginBottom: "clamp(2.5rem,5vh,4rem)",
        }}
      >
        Estou aceitando novos projetos. Marcas que buscam propósito,
        direção e estética editorial — me escreva.
      </motion.p>

      {/* Email CTA */}
      <motion.a
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        href={`mailto:${PROFILE.email}?subject=Novo%20projeto%20—%20${PROFILE.brand}`}
        className="link-underline inline-flex items-baseline"
        style={{
          gap: "clamp(0.75rem,2vw,1.5rem)",
          fontSize: "clamp(1.5rem,4vw,5rem)",
          fontFamily: "var(--font-display), serif",
          fontStyle: "italic",
          fontWeight: 300,
          color: "#F0EBE0",
          textDecoration: "none",
          transition: "color 0.5s",
          marginBottom: "clamp(3rem,7vh,6rem)",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "rgba(212,166,90,0.9)")}
        onMouseLeave={e => (e.currentTarget.style.color = "#F0EBE0")}
      >
        {PROFILE.email}
        <span aria-hidden style={{ color: "rgba(212,166,90,0.7)", fontSize: "0.6em", transition: "transform 0.5s" }}>→</span>
      </motion.a>

      {/* Info grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: 1,
          background: "rgba(240,235,224,0.06)",
          borderTop: "1px solid rgba(240,235,224,0.08)",
          paddingTop: "clamp(2rem,4vh,3.5rem)",
        }}
      >
        {/* Studio */}
        <div className="bg-bg" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
          <span className="eyebrow block" style={{ marginBottom: "1rem", color: "rgba(212,166,90,0.6)" }}>
            Estúdio
          </span>
          <p className="font-display italic" style={{ fontSize: "clamp(1rem,1.8vw,1.5rem)", color: "#F0EBE0", lineHeight: 1.3 }}>
            {PROFILE.location.street}
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(240,235,224,0.35)", marginTop: "0.5rem", lineHeight: 1.8 }}>
            {PROFILE.location.neighborhood}<br />
            {PROFILE.location.city} — {PROFILE.location.state}
          </p>
        </div>

        {/* Diretos */}
        <div className="bg-bg" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
          <span className="eyebrow block" style={{ marginBottom: "1rem", color: "rgba(212,166,90,0.6)" }}>
            Diretos
          </span>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline block font-display italic"
            style={{ fontSize: "clamp(1rem,1.8vw,1.5rem)", color: "#F0EBE0", textDecoration: "none", transition: "color 0.4s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(212,166,90,0.9)")}
            onMouseLeave={e => (e.currentTarget.style.color = "#F0EBE0")}
          >
            {PROFILE.email}
          </a>
          <a
            href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            style={{ display: "block", fontSize: "0.78rem", color: "rgba(240,235,224,0.35)", marginTop: "0.5rem", textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,235,224,0.7)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,235,224,0.35)")}
          >
            {PROFILE.phone}
          </a>
        </div>

        {/* Social */}
        <div className="bg-bg" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
          <span className="eyebrow block" style={{ marginBottom: "1rem", color: "rgba(212,166,90,0.6)" }}>
            Social
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1rem" }}>
            {Object.entries(PROFILE.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-display italic"
                style={{ fontSize: "clamp(0.9rem,1.5vw,1.3rem)", color: "rgba(240,235,224,0.7)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F0EBE0")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,235,224,0.7)")}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
