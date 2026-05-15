"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero",           label: "Início" },
  { id: "especialidades", label: "Especialidades" },
  { id: "sobre",          label: "Sobre" },
  { id: "trabalhos",      label: "Trabalhos" },
  { id: "spotlight",      label: "Destaque" },
  { id: "servicos",       label: "Serviços" },
  { id: "press",          label: "Imprensa" },
  { id: "contato",        label: "Contato" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.7);
      const mid = y + window.innerHeight * 0.45;
      let cur = SECTIONS[0].id as string;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed z-[600] select-none pointer-events-none"
        style={{ top: "clamp(1.2rem,2.5vh,1.8rem)", left: "clamp(1.2rem,3vw,2.4rem)" }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.38em", color: "rgba(240,235,224,0.2)" }}>
          MARTINS
        </span>
      </motion.div>

      <motion.nav
        aria-label="Navegação por seções"
        className="fixed top-1/2 -translate-y-1/2 z-[600] flex flex-col"
        style={{ right: "clamp(0.9rem,2vw,1.8rem)", gap: 10 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Ir para ${label}`}
            style={{ width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.span
              className="block rounded-full"
              style={{ width: 5, height: 5 }}
              animate={
                active === id
                  ? { backgroundColor: "rgba(240,235,224,0.9)", scale: 2.2 }
                  : { backgroundColor: "rgba(240,235,224,0.18)", scale: 1 }
              }
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            />
          </button>
        ))}
      </motion.nav>
    </>
  );
}
