"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.rx}px, ${pos.current.ry}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = () => ringRef.current?.classList.add("is-hover");
    const onLeave = () => ringRef.current?.classList.remove("is-hover");

    document.addEventListener("mousemove", onMove, { passive: true });
    const interactiveSelectors = "a, button, [data-cursor='hover']";
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
