"use client";

import { PROFILE, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-bg overflow-hidden"
      style={{ padding: "clamp(4rem,8vh,7rem) clamp(2rem,6vw,6rem) clamp(2rem,4vh,3rem)" }}
    >
      {/* Top row */}
      <div
        className="flex justify-between items-center flex-wrap"
        style={{
          gap: "1.5rem",
          borderBottom: "1px solid rgba(240,235,224,0.07)",
          paddingBottom: "clamp(1.5rem,3vh,2.5rem)",
          marginBottom: "clamp(2rem,4vh,3.5rem)",
        }}
      >
        <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.4em", color: "rgba(240,235,224,0.5)" }}>
          {PROFILE.brand}
        </span>
        <nav className="flex flex-wrap" style={{ gap: "clamp(1.2rem,3vw,3.5rem)" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="link-underline"
              style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,235,224,0.3)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,235,224,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,235,224,0.3)")}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mid row */}
      <div
        className="flex justify-between items-start flex-wrap"
        style={{ gap: "2rem", marginBottom: "clamp(3rem,8vh,6rem)" }}
      >
        <address
          className="not-italic font-light leading-[1.9]"
          style={{ fontSize: "0.7rem", color: "rgba(240,235,224,0.25)", maxWidth: "30ch" }}
        >
          {PROFILE.location.street}<br />
          {PROFILE.location.neighborhood}<br />
          {PROFILE.location.city}, {PROFILE.location.state}
          <br />
          <a
            href={`mailto:${PROFILE.email}`}
            style={{ transition: "color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,235,224,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.color = "")}
          >
            {PROFILE.email}
          </a>
        </address>

        <nav className="flex flex-wrap" style={{ gap: "clamp(1.2rem,3vw,3rem)" }} aria-label="Redes sociais">
          {Object.entries(PROFILE.social).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(240,235,224,0.3)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,235,224,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,235,224,0.3)")}
            >
              {key}
            </a>
          ))}
        </nav>
      </div>

      {/* Giant ghost name */}
      <div
        aria-hidden
        className="ghost-text font-sans font-black overflow-hidden whitespace-nowrap"
        style={{
          fontSize: "clamp(8rem,26vw,32rem)",
          lineHeight: 0.78,
          letterSpacing: "-0.04em",
          color: "rgba(240,235,224,0.03)",
          marginTop: "clamp(1rem,2vh,2rem)",
        }}
      >
        martins.
      </div>

      <p
        className="text-right"
        style={{
          fontSize: "0.5rem",
          fontWeight: 300,
          letterSpacing: "0.35em",
          color: "rgba(240,235,224,0.12)",
          marginTop: "clamp(1.5rem,3vh,2.5rem)",
        }}
      >
        © {new Date().getFullYear()} {PROFILE.brand} — DESIGN DE TUDO
      </p>
    </footer>
  );
}
