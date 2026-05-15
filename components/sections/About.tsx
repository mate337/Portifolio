"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROFILE, SKILLS, STATS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative flex"
      style={{ minHeight: "100vh", background: "#0D0C0A" }}
    >
      {/* Left — bio */}
      <div
        className="flex flex-col justify-end"
        style={{
          flex: "0 0 55%",
          padding: "clamp(3rem,6vw,7rem) clamp(2rem,4vw,5rem)",
        }}
      >
        <motion.p
          {...fade(0)}
          className="eyebrow"
          style={{ marginBottom: "clamp(1.5rem,3vh,3rem)" }}
        >
          Sobre
        </motion.p>

        <motion.h2
          {...fade(0.1)}
          className="font-sans font-black"
          style={{
            fontSize: "clamp(2.8rem,6vw,8rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#F0EBE0",
            marginBottom: "clamp(0.5rem,1.5vh,1.5rem)",
          }}
        >
          {PROFILE.lastName.toUpperCase()}
        </motion.h2>

        <motion.p
          {...fade(0.2)}
          className="font-display italic font-light"
          style={{
            fontSize: "clamp(1.1rem,2vw,2rem)",
            color: "rgba(240,235,224,0.65)",
            marginBottom: "clamp(2rem,4vh,4rem)",
          }}
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          {...fade(0.3)}
          className="font-sans font-light leading-[1.75]"
          style={{
            fontSize: "clamp(0.8rem,1vw,1rem)",
            color: "rgba(240,235,224,0.55)",
            maxWidth: 520,
          }}
        >
          {PROFILE.shortBio}
        </motion.p>
      </div>

      {/* Right — skills + stats */}
      <div
        className="flex flex-col justify-end"
        style={{
          flex: 1,
          padding: "clamp(3rem,6vw,7rem) clamp(2rem,4vw,5rem)",
          borderLeft: "1px solid rgba(240,235,224,0.12)",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "clamp(1rem,2vh,2rem)" }}>
          Habilidades
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(0.6rem,1.2vh,1rem)", marginBottom: "clamp(2rem,4vh,5rem)" }}>
          {SKILLS.map(({ num, label }, i) => (
            <motion.div
              key={num}
              {...fade(0.2 + i * 0.07)}
              className="flex items-center"
              style={{
                gap: "1rem",
                paddingBottom: "clamp(0.6rem,1.2vh,1rem)",
                borderBottom: "1px solid rgba(240,235,224,0.1)",
              }}
            >
              <span style={{ fontSize: "0.7rem", color: "rgba(240,235,224,0.3)", minWidth: "1.5rem", letterSpacing: "0.2em" }}>
                {num}
              </span>
              <span style={{ fontSize: "clamp(0.85rem,1vw,1.05rem)", color: "#F0EBE0" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {STATS.slice(0, 2).map(({ value, label }, i) => (
            <motion.div key={label} {...fade(0.6 + i * 0.1)}>
              <span
                className="font-sans font-black block"
                style={{ fontSize: "clamp(3rem,5vw,6rem)", color: "#F0EBE0", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                {value}
              </span>
              <span
                className="font-sans font-light block"
                style={{ fontSize: "clamp(0.7rem,0.85vw,0.9rem)", color: "rgba(240,235,224,0.45)", marginTop: "0.35rem" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
