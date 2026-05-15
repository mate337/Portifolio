"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORKS } from "@/lib/data";

const EASE     = [0.16, 1, 0.3, 1] as const;
const INTERVAL = 5000;

const slideVar = {
  enter: (dir: "up" | "down") => ({ y: dir === "up" ? "8%" : "-8%", opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit:  (dir: "up" | "down") => ({ y: dir === "up" ? "-8%" : "8%", opacity: 0 }),
};

export function Works() {
  const [current,  setCurrent]  = useState(0);
  const [dir,      setDir]      = useState<"up" | "down">("up");
  const [paused,   setPaused]   = useState(false);

  const goTo = useCallback((i: number) => {
    setDir(i > current ? "up" : "down");
    setCurrent(i);
  }, [current]);

  const next = useCallback(() => {
    setDir("up");
    setCurrent(c => (c + 1) % WORKS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next, paused]);

  const work = WORKS[current];

  return (
    <section
      id="trabalhos"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", background: "#080807" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Project background glow */}
      <AnimatePresence>
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0 pointer-events-none"
          style={{ background: work.background, zIndex: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div
        className="relative z-10 flex flex-col"
        style={{
          height: "100vh",
          padding: "clamp(3rem,6vh,5rem) clamp(2rem,6vw,6rem)",
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between" style={{ marginBottom: "auto" }}>
          <span className="eyebrow">Trabalhos Selecionados</span>
          <span className="eyebrow">
            {String(current + 1).padStart(2, "0")} / {String(WORKS.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main slide */}
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={slideVar}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: EASE }}
              style={{ width: "100%" }}
            >
              <span
                className="eyebrow block"
                style={{ marginBottom: "clamp(1rem,2vh,1.5rem)", color: "rgba(240,235,224,0.4)" }}
              >
                {work.category} · {work.year}
              </span>

              <h2
                className="font-sans font-black"
                style={{
                  fontSize: "clamp(3.5rem,10vw,13rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  color: "#F0EBE0",
                  marginBottom: "clamp(1.5rem,3vh,2.5rem)",
                }}
              >
                {work.title}
                {work.subtitle && (
                  <span
                    className="block font-display italic font-light"
                    style={{ color: "rgba(240,235,224,0.45)" }}
                  >
                    {work.subtitle}
                  </span>
                )}
              </h2>

              <div className="flex items-center" style={{ gap: "clamp(1.5rem,3vw,2.5rem)" }}>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{
                    fontSize: "clamp(0.7rem,1vw,0.88rem)",
                    letterSpacing: "0.2em",
                    color: "rgba(240,235,224,0.6)",
                    textDecoration: "none",
                  }}
                >
                  Ver Projeto →
                </a>
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.4em", color: "rgba(240,235,224,0.25)" }}>
                  {work.industry}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom row: bullets + scope */}
        <div className="flex items-center justify-between" style={{ paddingTop: "clamp(1.5rem,3vh,2rem)" }}>
          <div className="flex items-center" style={{ gap: "0.75rem" }}>
            {WORKS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Projeto ${i + 1}`}
              >
                <motion.span
                  className="block h-px"
                  style={{ background: "rgba(240,235,224,0.4)", display: "block" }}
                  animate={{ width: i === current ? 32 : 14, opacity: i === current ? 1 : 0.3 }}
                  transition={{ duration: 0.3, ease: EASE }}
                />
              </button>
            ))}
          </div>

          <div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
            {work.scope.slice(0, 3).map(s => (
              <span
                key={s}
                className="eyebrow"
                style={{ color: "rgba(240,235,224,0.2)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
