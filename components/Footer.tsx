"use client";

import { motion } from "framer-motion";
import { PROFILE, NAV_LINKS } from "@/lib/data";
import { EDITORIAL_EASE, viewportLoose } from "@/lib/motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-cream pt-24 md:pt-32 pb-10 px-6 md:px-10 lg:px-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Top: nav + meta */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 md:pb-16 border-b border-cream/10">
          <div className="eyebrow text-cream/50">
            <span className="block text-bronze-200 mb-2">¶ Índice</span>
            <span>Atalhos editoriais</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.65rem] tracking-[0.42em] uppercase font-medium text-cream/55 hover:text-cream transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mid: contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportLoose}
            transition={{ duration: 1, ease: EDITORIAL_EASE }}
          >
            <span className="eyebrow text-bronze-200 block mb-4">
              Estúdio
            </span>
            <p className="font-display italic text-xl md:text-2xl leading-tight">
              {PROFILE.location.street}
            </p>
            <p className="text-sm text-cream/55 mt-2 leading-relaxed">
              {PROFILE.location.neighborhood}
              <br />
              {PROFILE.location.city} — {PROFILE.location.state}
              <br />
              CEP {PROFILE.location.zip}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportLoose}
            transition={{ duration: 1, delay: 0.1, ease: EDITORIAL_EASE }}
          >
            <span className="eyebrow text-bronze-200 block mb-4">Diretos</span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="block font-display italic text-xl md:text-2xl link-underline text-cream hover:text-bronze-200 transition-colors duration-500"
            >
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              className="block text-sm text-cream/55 mt-2 hover:text-cream transition-colors duration-500"
            >
              {PROFILE.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportLoose}
            transition={{ duration: 1, delay: 0.2, ease: EDITORIAL_EASE }}
          >
            <span className="eyebrow text-bronze-200 block mb-4">Social</span>
            <ul className="grid grid-cols-2 gap-y-2">
              {Object.entries(PROFILE.social).map(([key, url]) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display italic text-lg link-underline text-cream/85 hover:text-cream"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Giant ghost name */}
        <div className="relative my-8 md:my-12">
          <span
            className="block font-sans font-black text-cream/[0.04] tracking-tightest leading-[0.78] select-none pointer-events-none"
            style={{ fontSize: "clamp(8rem, 28vw, 32rem)" }}
          >
            martins.
          </span>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-10 border-t border-cream/10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.6rem] tracking-[0.42em] uppercase font-medium text-cream/40">
            <span>© {year} {PROFILE.brand}</span>
            <span aria-hidden>·</span>
            <span>Design de Tudo</span>
            <span aria-hidden>·</span>
            <span>Direção Criativa</span>
          </div>
          <div className="flex items-center gap-3 text-[0.6rem] tracking-[0.42em] uppercase font-medium text-cream/40">
            <span>Vol. I — MMXXVI</span>
            <span className="w-8 h-px bg-cream/20" />
            <span>Edição Editorial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
