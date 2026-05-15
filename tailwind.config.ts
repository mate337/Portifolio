import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#0A0A09",
        surface: "#111110",
        cream:   "#F0EBE0",
        green:   "#8DC63F",
        blue:    "#1A3D8C",
        bronze:  "#D4A65A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans:    ["var(--font-sans)",    "Inter",              "system-ui","sans-serif"],
        mono:    ["var(--font-mono)",    "Instrument Sans",    "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight2:   "-0.03em",
        editorial:"0.42em",
        whisper:  "0.65em",
      },
      fontSize: {
        "display-2xs": ["clamp(2rem,5vw,3.5rem)",   { lineHeight: "0.95" }],
        "display-xs":  ["clamp(2.6rem,7vw,5rem)",   { lineHeight: "0.92" }],
        "display-sm":  ["clamp(3.4rem,9vw,7rem)",   { lineHeight: "0.90" }],
        "display-md":  ["clamp(4rem,12vw,10rem)",   { lineHeight: "0.88" }],
        "display-lg":  ["clamp(5rem,16vw,14rem)",   { lineHeight: "0.85" }],
        "display-xl":  ["clamp(5rem,20vw,26rem)",   { lineHeight: "0.82" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16,1,0.3,1)",
        cinematic: "cubic-bezier(0.65,0,0.35,1)",
      },
    },
  },
  plugins: [],
};

export default config;
