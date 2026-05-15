import type { Variants, Transition } from "framer-motion";

export const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;
export const CINEMATIC_EASE = [0.65, 0, 0.35, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EDITORIAL_EASE },
  },
};

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EDITORIAL_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const drawLine: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: EDITORIAL_EASE },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const letterReveal: Variants = {
  hidden: {
    y: "120%",
    opacity: 0,
    scaleY: 1.3,
    scaleX: 0.85,
    filter: "blur(12px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: EDITORIAL_EASE },
  },
};

export const wordSlide: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 1.1, ease: EDITORIAL_EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EDITORIAL_EASE },
  },
};

export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" };
export const viewportLoose = { once: true, margin: "-5% 0px -5% 0px" };

export const baseTransition: Transition = {
  duration: 0.9,
  ease: EDITORIAL_EASE,
};
