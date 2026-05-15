import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF6",
          100: "#F8F3E9",
          200: "#F2EBDB",
          300: "#E9DEC5",
          DEFAULT: "#F4EFE6",
        },
        ink: {
          50: "#7A716A",
          100: "#5C544D",
          200: "#3E3833",
          300: "#2A2521",
          DEFAULT: "#1C1A17",
          950: "#0F0E0C",
        },
        bronze: {
          50: "#E4CFB1",
          100: "#D4B894",
          200: "#C5A079",
          300: "#B8895A",
          400: "#A47645",
          DEFAULT: "#8B6F47",
          600: "#6E5836",
          700: "#5C4A2E",
          800: "#3F3220",
          900: "#241D13",
        },
        sepia: "#6B5F4F",
        hairline: "rgba(28, 26, 23, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        editorial: "0.42em",
        whisper: "0.65em",
      },
      fontSize: {
        "display-2xs": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "0.95" }],
        "display-xs": ["clamp(2.6rem, 7vw, 5rem)", { lineHeight: "0.92" }],
        "display-sm": ["clamp(3.4rem, 9vw, 7rem)", { lineHeight: "0.9" }],
        "display-md": ["clamp(4rem, 12vw, 10rem)", { lineHeight: "0.88" }],
        "display-lg": ["clamp(5rem, 16vw, 14rem)", { lineHeight: "0.85" }],
        "display-xl": ["clamp(5rem, 20vw, 22rem)", { lineHeight: "0.82" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        cinematic: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "grain-shift": "grain 0.4s steps(1) infinite",
        "pulse-hint": "pulse-hint 2.5s ease-in-out infinite",
        "draw-line": "draw-line 1.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%": { backgroundPosition: "0 0" },
          "25%": { backgroundPosition: "55% 28%" },
          "50%": { backgroundPosition: "28% 68%" },
          "75%": { backgroundPosition: "75% 8%" },
          "100%": { backgroundPosition: "12% 82%" },
        },
        "pulse-hint": {
          "0%, 100%": { opacity: "0.5", transform: "scaleY(1)" },
          "50%": { opacity: "0.15", transform: "scaleY(0.4)" },
        },
        "draw-line": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "editorial-rule":
          "linear-gradient(to right, transparent, rgba(28,26,23,0.2) 20%, rgba(28,26,23,0.2) 80%, transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
