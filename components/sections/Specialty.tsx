"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { SPECIALTIES } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const wordVariants = {
  enter: (dir: "down" | "up") => ({
    y: dir === "down" ? "20%" : "-20%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 1.03,
  }),
  center: { y: 0, opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: (dir: "down" | "up") => ({
    y: dir === "down" ? "-12%" : "12%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.97,
  }),
};

export function Specialty() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection]     = useState<"down" | "up">("down");
  const prevRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const panelOpacity  = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(Math.floor(v * SPECIALTIES.length), SPECIALTIES.length - 1);
    if (next !== prevRef.current) {
      setDirection(next > prevRef.current ? "down" : "up");
      prevRef.current = next;
      setActiveIndex(next);
    }
  });

  const spec = SPECIALTIES[activeIndex];

  return (
    <div ref={wrapperRef} id="especialidades" style={{ height: `${SPECIALTIES.length * 120}vh`, position: "relative" }}>
      <motion.div
        style={{ opacity: panelOpacity, position: "sticky", top: 0, height: "100vh" }}
        className="flex items-center justify-center bg-bg overflow-hidden"
      >
        {/* Sub-label */}
        <div className="absolute top-[clamp(2rem,5vh,4rem)] left-1/2 -translate-x-1/2 text-center">
          <span
            className="block eyebrow"
            style={{ letterSpacing: "0.65em", color: "rgba(240,235,224,0.28)", marginBottom: "clamp(0.5rem,1.5vh,1rem)" }}
          >
            Especialidades
          </span>
          <div className="flex items-center justify-center gap-3">
            <span style={{ height: 1, width: 70, background: "rgba(240,235,224,0.12)", display: "block" }} />
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(240,235,224,0.3)", display: "block" }} />
            <span style={{ height: 1, width: 70, background: "rgba(240,235,224,0.12)", display: "block" }} />
          </div>
        </div>

        {/* Main word */}
        <div className="text-center w-full px-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.h2
              key={activeIndex}
              custom={direction}
              variants={wordVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: EASE }}
              className="font-sans font-black text-cream"
              style={{
                fontSize: "clamp(3rem,min(11vw,22vh),14rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {spec.label}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Slide description — bottom center */}
        <div className="absolute bottom-[clamp(3rem,6vh,5rem)] left-1/2 -translate-x-1/2 text-center max-w-[40ch]">
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="font-light"
              style={{ fontSize: "clamp(0.7rem,1vw,0.9rem)", color: "rgba(240,235,224,0.35)", letterSpacing: "0.02em", lineHeight: 1.7 }}
            >
              {spec.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Slide number — bottom right */}
        <div
          className="absolute eyebrow"
          style={{ bottom: "clamp(1.5rem,3vh,2.2rem)", right: "clamp(1.5rem,3vw,2.2rem)", color: "rgba(240,235,224,0.2)" }}
        >
          {String(activeIndex + 1).padStart(2, "0")} — {String(SPECIALTIES.length).padStart(2, "0")}
        </div>

        {/* Copyright — bottom left */}
        <div
          className="absolute eyebrow"
          style={{ bottom: "clamp(1.5rem,3vh,2.2rem)", left: "clamp(1.5rem,3vw,2.2rem)", color: "rgba(240,235,224,0.2)" }}
        >
          MARTINS. ™
        </div>

        {/* Progress bar — bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 1, background: "rgba(240,235,224,0.06)" }}
        >
          <motion.div
            style={{ height: "100%", width: progressWidth, background: "rgba(240,235,224,0.35)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
