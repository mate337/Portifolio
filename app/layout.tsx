import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import { PROFILE } from "@/lib/data";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  variable: "--font-display",
  display: "swap",
});

const mono = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://martins.studio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.firstName} ${PROFILE.lastName} — ${PROFILE.role}`,
    template: `%s · ${PROFILE.brand}`,
  },
  description:
    "Portfolio editorial de Matheus Martins — Diretor de Arte & Criação especializado em branding, identidade visual, editorial e packaging. Mais de 7 anos construindo marcas com propósito.",
  keywords: [
    "diretor de arte",
    "branding",
    "identidade visual",
    "editorial design",
    "packaging",
    "portfolio",
    "blumenau",
    "santa catarina",
    "matheus martins",
  ],
  authors: [{ name: `${PROFILE.firstName} ${PROFILE.lastName}` }],
  creator: `${PROFILE.firstName} ${PROFILE.lastName}`,
  openGraph: {
    title: `${PROFILE.firstName} ${PROFILE.lastName} — ${PROFILE.role}`,
    description:
      "Branding, editorial e direção criativa para marcas que respiram propósito.",
    url: SITE_URL,
    siteName: PROFILE.brand,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.brand} — ${PROFILE.role}`,
    description: "Design de tudo. Propósito em cada projeto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${PROFILE.firstName} ${PROFILE.lastName}`,
  jobTitle: PROFILE.role,
  url: SITE_URL,
  sameAs: [
    PROFILE.social.instagram,
    PROFILE.social.behance,
    PROFILE.social.linkedin,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: PROFILE.location.street,
    addressLocality: PROFILE.location.city,
    addressRegion: PROFILE.location.state,
    postalCode: PROFILE.location.zip,
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />
        {children}
      </body>
    </html>
  );
}
