# MARTINS — Portfolio Editorial

Portfolio editorial de **Matheus Martins**, Diretor de Arte & Criação. Construído como um magazine: tipografia serifada de luxo, paleta creme + bronze, animações cinemáticas, e arquitetura modular pronta para edição contínua.

## Stack

- **Next.js 14** (App Router) — performance, SEO, SSR
- **TypeScript** — type-safety em todos os componentes e dados
- **Tailwind CSS** — design system custom (creme/bronze)
- **Framer Motion** — animações editoriais com easing cinemático
- **next/font** — Inter + Cormorant Garamond + Instrument Sans com subsetting

## Filosofia de design

Inspirado em revistas como Vogue, AD Magazine e Apartamento. O site é navegado como uma edição: cada seção tem seu número, sua headline, sua paginação. A paleta segue o padrão de uma capa editorial — papel creme, tinta carvão, acentos em bronze.

- **Tipografia:** Inter (display & sans-serif) + Cormorant Garamond (italic editorial)
- **Paleta:** cream `#F4EFE6` · ink `#1C1A17` · bronze `#8B6F47`
- **Grid:** 12 colunas, gutter generoso, hairlines `rgba(28,26,23,0.08)`
- **Motion:** easing `cubic-bezier(0.16, 1, 0.3, 1)` — entrada lenta, repouso preciso

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

```bash
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # ESLint
npm run type-check # TypeScript sem emit
```

## Estrutura

```
app/
  layout.tsx           # fontes, metadata, schema.org
  page.tsx             # orquestra as seções
  globals.css          # tokens CSS, grain, cursor, helpers
  opengraph-image.tsx  # OG dinâmico
components/
  Cursor.tsx           # cursor custom (desktop)
  Navigation.tsx       # nav top + dots + mobile menu
  Footer.tsx           # rodapé editorial
  sections/
    Hero.tsx           # MARTINS gigante + greeting
    Manifesto.tsx      # parágrafo manifesto + marquee
    Specialty.tsx      # 5 especialidades em grade
    About.tsx          # bio + skills + stats
    Works.tsx          # índice de trabalhos
    Spotlight.tsx      # 4 cases em destaque alternados
    Services.tsx       # 4 frentes de serviço (fundo escuro)
    Press.tsx          # imprensa & destaques
    Contact.tsx        # CTA + endereço + social
lib/
  data.ts              # dados estruturados (profile, works, skills, etc.)
  motion.ts            # variants Framer Motion reutilizáveis
public/
  favicon.svg          # ícone tipográfico M.
reference/
  original.html        # versão monolítica original (referência)
```

## Personalização

Edite **`lib/data.ts`** para atualizar:

- Dados pessoais (`PROFILE`)
- Especialidades (`SPECIALTIES`)
- Habilidades (`SKILLS`)
- Estatísticas (`STATS`)
- Trabalhos (`WORKS`)
- Serviços (`SERVICES`)
- Imprensa (`PRESS`)
- Navegação (`NAV_LINKS`)
- Ticker (`TICKER_ITEMS`)

A página principal lê tudo desse arquivo, então nenhum componente precisa ser tocado para atualizar o conteúdo.

## Performance & SEO

- Fontes carregadas via `next/font` (zero CLS, subset latin)
- Imagens via `next/image` (AVIF/WebP)
- Metadata completa: OpenGraph, Twitter Card, schema.org Person
- Reduced-motion respeitado (`@media (prefers-reduced-motion: reduce)`)
- Estrutura semântica: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Foco visível com outline bronze

## Roadmap sugerido

- [ ] Fotografia real do estúdio + retrato (substituir o portrait tipográfico)
- [ ] Imagens reais nos cards de Spotlight
- [ ] Páginas individuais de case study (`/case/[slug]`)
- [ ] Formulário de contato com server action
- [ ] Blog/diário editorial (`/diario`)
- [ ] Internacionalização EN/ES

---

© 2026 MARTINS — Design de Tudo
