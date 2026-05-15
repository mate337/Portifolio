"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TICKER_ITEMS } from "@/lib/data";

const EASE    = [0.16, 1, 0.3, 1] as const;
const PHRASES = [
  "A marca que Fala.",
  "A marca que Comunica.",
  "A marca que Simplifica.",
  "Aproximação & Diversidade.",
];

export function Spotlight() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, margin: "-20%" });
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setPhraseIdx(i => (i + 1) % PHRASES.length), 2600);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="spotlight"
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: "100vh", background: "#8DC63F" }}
    >
      {/* Top-left label */}
      <div
        className="absolute"
        style={{ top: "clamp(2rem,4vh,3.5rem)", left: "clamp(2rem,5vw,5.5rem)", zIndex: 4 }}
      >
        <span
          className="block font-mono"
          style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(1,69,40,0.55)" }}
        >
          Cotton Star
        </span>
        <span
          className="block font-mono"
          style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(1,69,40,0.35)", marginTop: "0.3rem" }}
        >
          Gestão & Pessoas
        </span>
      </div>

      {/* Top-right label */}
      <div
        className="absolute text-right"
        style={{ top: "clamp(2rem,4vh,3.5rem)", right: "clamp(2rem,5vw,5.5rem)", zIndex: 4 }}
      >
        <span
          className="block font-mono"
          style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(1,69,40,0.55)" }}
        >
          Branding · RH
        </span>
        <span
          className="block font-mono"
          style={{ fontSize: "clamp(0.55rem,0.75vw,0.65rem)", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(1,69,40,0.35)", marginTop: "0.3rem" }}
        >
          2024
        </span>
      </div>

      {/* Center phrase */}
      <div className="flex-1 flex items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={phraseIdx}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="font-display italic font-light text-center"
            style={{
              fontSize: "clamp(1.8rem,4vw,4.5rem)",
              color: "#014528",
              letterSpacing: "0.02em",
              textShadow: "0 2px 20px rgba(141,198,63,0.4)",
              maxWidth: "20ch",
            }}
          >
            {PHRASES[phraseIdx]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex"
        style={{ bottom: "clamp(4rem,7vh,6rem)", gap: "0.5rem" }}
      >
        {PHRASES.map((_, i) => (
          <motion.span
            key={i}
            className="block rounded-full"
            animate={{ opacity: i === phraseIdx ? 0.7 : 0.2, scale: i === phraseIdx ? 1.4 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: 4, height: 4, background: "#014528" }}
          />
        ))}
      </div>

      {/* Ticker */}
      <div
        className="overflow-hidden"
        style={{
          height: "clamp(1.8rem,3vh,2.4rem)",
          background: "rgba(1,69,40,0.14)",
          backdropFilter: "blur(5px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="marquee-inner" style={{ paddingLeft: "1rem" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}>
              <span
                className="font-mono"
                style={{ fontSize: "clamp(0.48rem,0.62vw,0.55rem)", fontWeight: 800, letterSpacing: "0.42em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}
              >
                {item}
              </span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.4rem" }}>×</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
