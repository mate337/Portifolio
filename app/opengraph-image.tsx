import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matheus Martins — Diretor de Arte & Criação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4EFE6",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#6B5F4F",
          }}
        >
          <span style={{ fontWeight: 800, color: "#1C1A17" }}>MARTINS.</span>
          <span>Vol. I · MMXXVI</span>
        </div>

        {/* Center */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontStyle: "italic",
              fontSize: 36,
              color: "#8B6F47",
              marginBottom: 16,
            }}
          >
            Prazer,
          </span>
          <span
            style={{
              fontSize: 220,
              fontWeight: 900,
              color: "#1C1A17",
              lineHeight: 0.85,
              letterSpacing: -8,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            MARTINS<span style={{ color: "#8B6F47" }}>.</span>
          </span>
          <span
            style={{
              fontStyle: "italic",
              fontSize: 44,
              color: "#5C544D",
              marginTop: 24,
            }}
          >
            — diretor de arte & criação
          </span>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 16,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#6B5F4F",
          }}
        >
          <span>Blumenau · SC · Brasil</span>
          <span>Branding · Editorial · Packaging</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
