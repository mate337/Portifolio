"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { PROFILE } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const LETTERS = "MARTINS".split("");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 0.45], [0, -60]);
  const scale   = useTransform(scrollYProgress, [0, 0.45], [1, 0.97]);
  const blurPx  = useTransform(scrollYProgress, [0, 0.45], [0, 12]);
  const filter  = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, rgba(10,10,9,0.55) 100%)" }}
      />

      {/* Scroll parallax wrapper */}
      <motion.div
        style={{ opacity, y, scale, filter }}
        className="relative z-10 text-center w-full"
      >
        {/* Prazer, */}
        <div className="overflow-hidden" style={{ marginBottom: "clamp(0.4rem,1vh,0.8rem)" }}>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="block font-display italic font-light"
            style={{ fontSize: "clamp(0.9rem,1.8vw,1.5rem)", letterSpacing: "0.5em", color: "rgba(240,235,224,0.35)" }}
          >
            {PROFILE.greeting}
          </motion.span>
        </div>

        {/* MARTINS. */}
        <h1
          className="font-sans font-black flex justify-center items-end"
          style={{ fontSize: "clamp(5rem,20vw,26rem)", lineHeight: 0.82, letterSpacing: "-0.03em" }}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "120%", scaleY: 1.3, scaleX: 0.85, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.08, ease: EASE }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ y: "120%", scale: 2, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 1.1, ease: EASE }}
            className="inline-block ml-1"
            style={{ color: "rgba(240,235,224,0.4)" }}
          >
            .
          </motion.span>
        </h1>

        {/* DESIGN DE TUDO */}
        <div
          className="flex items-center justify-center"
          style={{ gap: "clamp(0.6rem,1.2vw,1rem)", marginTop: "clamp(0.5rem,1.2vh,1rem)" }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
            className="block h-px origin-center"
            style={{ width: "clamp(20px,3.5vw,45px)", background: "rgba(240,235,224,0.15)" }}
          />
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 1.5, ease: EASE }}
              className="block"
              style={{ fontSize: "clamp(0.55rem,0.95vw,0.78rem)", letterSpacing: "0.6em", color: "rgba(240,235,224,0.25)" }}
            >
              {PROFILE.tagline.toUpperCase()}
            </motion.span>
          </div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
            className="block h-px origin-center"
            style={{ width: "clamp(20px,3.5vw,45px)", background: "rgba(240,235,224,0.15)" }}
          />
        </div>
      </motion.div>

      {/* Corner: top-left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
        className="absolute eyebrow"
        style={{ top: "clamp(1.8rem,3.5vh,2.5rem)", left: "clamp(1.5rem,3vw,2.2rem)", color: "rgba(240,235,224,0.18)" }}
      >
        <span className="block" style={{ marginBottom: "0.35rem" }}>Vol. I · MMXXVI</span>
        <span className="block" style={{ color: "rgba(240,235,224,0.10)" }}>Edição Editorial</span>
      </motion.div>

      {/* Corner: top-right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
        className="absolute text-right eyebrow"
        style={{ top: "clamp(1.8rem,3.5vh,2.5rem)", right: "clamp(1.5rem,3vw,2.2rem)", color: "rgba(240,235,224,0.18)" }}
      >
        <span className="block" style={{ marginBottom: "0.35rem" }}>{PROFILE.location.city}</span>
        <span className="block" style={{ color: "rgba(240,235,224,0.10)" }}>{PROFILE.location.country}</span>
      </motion.div>

      {/* Bottom-left */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute eyebrow"
        style={{ bottom: "clamp(1.5rem,3vh,2.5rem)", left: "clamp(1.5rem,3vw,2.2rem)", color: "rgba(240,235,224,0.18)" }}
      >
        Portfolio · Direção
      </motion.span>

      {/* Bottom-right */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute eyebrow"
        style={{ bottom: "clamp(1.5rem,3vh,2.5rem)", right: "clamp(1.5rem,3vw,2.2rem)", color: "rgba(240,235,224,0.18)" }}
      >
        © {new Date().getFullYear()} {PROFILE.brand}
      </motion.span>

      {/* Scroll hint — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: "clamp(1.5rem,3vh,2.5rem)", gap: "0.4rem", color: "rgba(240,235,224,0.18)" }}
      >
        <span className="font-display italic" style={{ fontSize: "0.65rem", letterSpacing: "0.35em" }}>scroll</span>
        <div
          className="animate-pulse-hint"
          style={{ width: 1, height: 36, background: "linear-gradient(to bottom, transparent, rgba(240,235,224,0.4))" }}
        />
      </motion.div>
    </section>
  );
}
