"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PROFILE } from "@/lib/data";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar — smoke / minimalist */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 backdrop-blur-xl border-b ${
          scrolled
            ? "bg-ink/55 border-cream/10 shadow-[0_2px_30px_-12px_rgba(0,0,0,0.4)]"
            : "bg-ink/30 border-cream/5"
        }`}
      >
        <div className="px-6 md:px-10 lg:px-14 py-4 md:py-5 flex items-center justify-between">
          <a
            href="#hero"
            className="font-sans font-black tracking-[0.42em] text-xs text-cream hover:text-bronze-200 transition-colors duration-500"
          >
            {PROFILE.brand}.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.slice(1).map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative flex items-center gap-2 text-[0.62rem] font-medium tracking-[0.32em] uppercase"
                >
                  <span className="font-mono text-bronze-200/60">
                    {link.index}
                  </span>
                  <span
                    className={`transition-colors duration-500 ${
                      isActive
                        ? "text-cream"
                        : "text-cream/55 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-[1.7rem] right-0 h-px origin-left bg-bronze-200 transition-transform duration-700 ease-editorial ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 text-[0.62rem] font-medium tracking-[0.32em] uppercase border border-cream/25 text-cream hover:border-cream hover:bg-cream hover:text-ink px-5 py-2 rounded-full transition-all duration-500"
          >
            <span>Iniciar Conversa</span>
            <span aria-hidden>→</span>
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[0.65rem] tracking-[0.42em] uppercase font-medium text-cream"
            aria-label="Abrir menu"
          >
            Menu
          </button>
        </div>
      </motion.header>

      {/* Side dot nav */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className="group flex items-center gap-3"
            >
              <span
                className={`text-[0.55rem] font-mono tracking-[0.3em] uppercase transition-all duration-500 ${
                  isActive
                    ? "opacity-100 text-bronze translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                }`}
              >
                {link.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-2 h-2 bg-ink"
                    : "w-1.5 h-1.5 bg-ink/25 group-hover:bg-ink/60"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-cream-light md:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-12">
                <span className="font-sans font-black tracking-[0.42em] text-xs text-ink">
                  {PROFILE.brand}.
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-xs tracking-[0.42em] uppercase font-medium text-ink"
                  aria-label="Fechar menu"
                >
                  Fechar
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-5 border-b border-hairline"
                  >
                    <span className="text-xs font-mono text-bronze">
                      {link.index}
                    </span>
                    <span className="font-display italic text-4xl text-ink leading-none">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <div className="mt-12 pt-8 border-t border-hairline text-[0.6rem] tracking-[0.42em] uppercase text-ink-mute">
                {PROFILE.location.city} · {PROFILE.location.state}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
