export const PROFILE = {
  firstName: "Matheus",
  lastName: "Martins",
  brand: "MARTINS",
  greeting: "Prazer,",
  role: "Diretor de Arte & Criação",
  tagline: "Design de Tudo",
  manifesto:
    "Crio marcas que respiram propósito e direção. Cada projeto é um sistema vivo — pensado, ilustrado, esculpido em forma, função e sentimento.",
  shortBio:
    "Mais de sete anos transformando marcas em experiências completas. Trabalho na intersecção entre estratégia, narrativa visual e estética editorial — onde o design deixa de ser ornamento e passa a ser linguagem.",
  longBio:
    "Diretor de arte com base em Blumenau, SC. Especializado em branding, editorial e direção criativa para marcas que buscam autenticidade e longevidade. Acredito que toda boa marca começa com uma boa história — e que o trabalho do designer é traduzir essa história em forma, ritmo e detalhe. Atendi de startups a franquias com centenas de unidades, sempre com a mesma obsessão: criar identidades que envelhecem com graça.",
  yearsOfExperience: "7+",
  projectsDelivered: "60+",
  clientsServed: "30+",
  location: {
    street: "Rua Pastor Stutzer, 220, Sala 1001",
    neighborhood: "Jardim Blumenau",
    city: "Blumenau",
    state: "SC",
    zip: "89010-390",
    country: "Brasil",
  },
  email: "ola@martins.studio",
  phone: "+55 47 99999-9999",
  social: {
    instagram: "https://instagram.com/matheusmartins",
    behance: "https://www.behance.net/matheusmartins10",
    linkedin: "https://linkedin.com/in/matheusmartins",
    youtube: "https://youtube.com/@matheusmartins",
  },
} as const;

export const SPECIALTIES = [
  {
    index: "01",
    label: "Direção de Arte",
    description:
      "Construção de sistemas visuais coerentes — do conceito ao detalhe final.",
  },
  {
    index: "02",
    label: "Editorial",
    description:
      "Revistas, livros e relatórios com hierarquia tipográfica madura.",
  },
  {
    index: "03",
    label: "Marcas",
    description:
      "Identidades verbais e visuais que carregam estratégia desde o primeiro traço.",
  },
  {
    index: "04",
    label: "Packaging",
    description:
      "Embalagens que vendem pelo silêncio antes de qualquer palavra ser dita.",
  },
  {
    index: "05",
    label: "Propósito",
    description:
      "Design com intenção — marcas que existem para mudar algo, não apenas para vender.",
  },
] as const;

export const SKILLS = [
  { num: "01", label: "Direção de Arte", years: 7 },
  { num: "02", label: "Branding & Identidade", years: 7 },
  { num: "03", label: "Editorial & Packaging", years: 6 },
  { num: "04", label: "Motion & Digital", years: 5 },
  { num: "05", label: "Design com Propósito", years: 4 },
] as const;

export const STATS = [
  { value: "7+", label: "Anos de experiência" },
  { value: "60+", label: "Projetos entregues" },
  { value: "30+", label: "Marcas atendidas" },
  { value: "12", label: "Indústrias atendidas" },
] as const;

export type WorkSlug =
  | "casa-pao-queijo"
  | "cotton-star"
  | "bal-harbour"
  | "collection-villas"
  | "formula-beagle"
  | "cosmos"
  | "escola-alunos"
  | "ao-vivo-jeans";

export type WorkItem = {
  slug: WorkSlug;
  index: string;
  client: string;
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  industry: string;
  description: string;
  scope: string[];
  metrics?: { label: string; value: string }[];
  href: string;
  accentColor: string;
  background: string;
};

export const WORKS: WorkItem[] = [
  {
    slug: "casa-pao-queijo",
    index: "01",
    client: "A Casa do Pão de Queijo",
    title: "A Casa do",
    subtitle: "Pão de Queijo",
    category: "Rebranding · Franquia",
    year: "2024",
    industry: "Food & Beverage",
    description:
      "Franquia sem perder as raízes. O desafio: manter a tradição mineira de 1979 enquanto a marca se reinventa para o futuro e mais de 500 unidades.",
    scope: ["Estratégia de marca", "Identidade visual", "Direção fotográfica", "Sistema de aplicação"],
    metrics: [
      { value: "1979", label: "Fundação" },
      { value: "+500", label: "Unidades" },
      { value: "1º", label: "Pão de Queijo do RS" },
    ],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#1A3D8C",
    background: "linear-gradient(135deg, #0B1E4A 0%, #1A3D8C 60%, #0B1E4A 100%)",
  },
  {
    slug: "cotton-star",
    index: "02",
    client: "Cotton Star",
    title: "Gestão",
    subtitle: "& Pessoas",
    category: "Branding · RH & Cultura",
    year: "2024",
    industry: "Indústria Têxtil",
    description:
      "Uma identidade visual para o programa interno de gestão e desenvolvimento humano da Cotton Star. Linguagem orgânica, paleta vibrante, ilustrações que humanizam processos.",
    scope: ["Naming", "Identidade visual", "Ilustração", "Sistema editorial"],
    metrics: [
      { value: "120+", label: "Aplicações" },
      { value: "6", label: "Cores-conceito" },
      { value: "∞", label: "Combinações" },
    ],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#8DC63F",
    background: "linear-gradient(135deg, #2E4A0F 0%, #5B8A1F 50%, #8DC63F 100%)",
  },
  {
    slug: "bal-harbour",
    index: "03",
    client: "Vetter",
    title: "Bal",
    subtitle: "Harbour",
    category: "Branding · Real Estate",
    year: "2024",
    industry: "Empreendimento de Alto Padrão",
    description:
      "Autoral. Moderno. Natural. Artístico. Empreendimento em Piçarras (SC) que traduz o morar contemporâneo em sua forma mais sofisticada — com vista permanente para o mar.",
    scope: ["Naming", "Identidade visual", "Direção fotográfica", "Livro de marca", "Materiais de venda"],
    metrics: [
      { value: "Piçarras", label: "Santa Catarina" },
      { value: "06", label: "Frentes criativas" },
      { value: "100%", label: "Vista para o mar" },
    ],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#2B1F16",
    background: "linear-gradient(135deg, #1A1208 0%, #2B1F16 60%, #1A1208 100%)",
  },
  {
    slug: "collection-villas",
    index: "04",
    client: "Vetter",
    title: "Collection",
    subtitle: "Villas",
    category: "Editorial · Imobiliário",
    year: "2024",
    industry: "Curadoria Imobiliária",
    description:
      "Uma curadoria exclusiva que une forma, função e estilo de vida. Unidades especiais para quem busca amplitude, personalização e exclusividade.",
    scope: ["Identidade visual", "Direção editorial", "Tipografia customizada"],
    metrics: [
      { value: "2300", label: "m² de lazer" },
      { value: "+30", label: "Ambientes" },
      { value: "Bal.", label: "Harbour" },
    ],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#D4A65A",
    background: "linear-gradient(135deg, #2B1F16 0%, #5C4A2E 50%, #D4A65A 100%)",
  },
  {
    slug: "formula-beagle",
    index: "05",
    client: "Formula Beagle",
    title: "Fórmula",
    subtitle: "Beagle",
    category: "Branding · Identidade Visual",
    year: "2023",
    industry: "Pet & Lifestyle",
    description:
      "Marca de produtos premium para cães da raça beagle. Tom afetivo, paleta quente, sistema icônico inspirado em fórmulas de farmácia clássica.",
    scope: ["Naming", "Identidade visual", "Packaging", "Direção fotográfica"],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#5C3200",
    background: "linear-gradient(135deg, #1A0E00 0%, #5C3200 40%, #2D1A00 100%)",
  },
  {
    slug: "cosmos",
    index: "06",
    client: "Cosmos Securitizadora",
    title: "Cosmos",
    subtitle: "Securitizadora",
    category: "Branding · Mercado Financeiro",
    year: "2023",
    industry: "Finanças",
    description:
      "Securitizadora de créditos com identidade que mistura precisão matemática e profundidade astronômica. Tipografia geométrica, paleta cósmica.",
    scope: ["Identidade visual", "Sistema de aplicação", "Brand book"],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#0A1F5C",
    background: "linear-gradient(135deg, #020818 0%, #0A1F5C 40%, #06102E 100%)",
  },
  {
    slug: "escola-alunos",
    index: "07",
    client: "Escola Construtiva",
    title: "Uma Escola",
    subtitle: "feita por Alunos",
    category: "Editorial · Educação",
    year: "2022",
    industry: "Educação",
    description:
      "Livro-projeto que documenta a construção de uma escola através do olhar dos próprios alunos. Editorial intimista, fotografias autorais, tipografia respirada.",
    scope: ["Direção editorial", "Diagramação", "Direção fotográfica", "Capa"],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#4A3018",
    background: "linear-gradient(135deg, #1A1008 0%, #4A3018 40%, #2A1C0C 100%)",
  },
  {
    slug: "ao-vivo-jeans",
    index: "08",
    client: "AO VIVO Jeans",
    title: "AO VIVO",
    subtitle: "Jeans",
    category: "Branding · Moda",
    year: "2022",
    industry: "Moda & Lifestyle",
    description:
      "Marca de jeanswear nascida do streetwear brasileiro. Tipografia condensada agressiva, linguagem de show ao vivo, paleta urbana noturna.",
    scope: ["Naming", "Identidade visual", "Etiquetas & hangtags", "Lookbook"],
    href: "https://www.behance.net/matheusmartins10",
    accentColor: "#1A1F40",
    background: "linear-gradient(135deg, #04060E 0%, #1A1F40 40%, #0C0F28 100%)",
  },
];

export const SERVICES = [
  {
    num: "S/01",
    title: "Direção Criativa",
    description:
      "Liderança visual de campanhas, marcas e produtos — do brief à entrega final, com curadoria de equipe quando necessário.",
    deliverables: ["Conceito", "Roteiro visual", "Direção de equipe", "Aprovação final"],
  },
  {
    num: "S/02",
    title: "Branding",
    description:
      "Construção de marca completa: naming, identidade visual, sistema, voz e aplicações estratégicas.",
    deliverables: ["Naming", "Manifesto", "Identidade", "Brand book"],
  },
  {
    num: "S/03",
    title: "Editorial",
    description:
      "Revistas, livros, relatórios e materiais impressos com hierarquia tipográfica refinada.",
    deliverables: ["Diagramação", "Grid editorial", "Tipografia", "Direção fotográfica"],
  },
  {
    num: "S/04",
    title: "Packaging",
    description:
      "Embalagens que comunicam categoria, posicionamento e sofisticação no ponto de venda.",
    deliverables: ["Estrutura", "Rótulo", "Sistema linha", "Acabamentos especiais"],
  },
] as const;

export const PRESS = [
  { outlet: "Behance Featured", date: "2024", tag: "Branding" },
  { outlet: "DesignRush Top 20", date: "2024", tag: "Identidade" },
  { outlet: "ABEDESIGN — Painel", date: "2023", tag: "Palestra" },
  { outlet: "AGM Magazine — Editorial", date: "2023", tag: "Capa" },
] as const;

export const NAV_LINKS = [
  { label: "Início", href: "#hero", index: "00" },
  { label: "Especialidades", href: "#especialidades", index: "01" },
  { label: "Sobre", href: "#sobre", index: "02" },
  { label: "Trabalhos", href: "#trabalhos", index: "03" },
  { label: "Serviços", href: "#servicos", index: "04" },
  { label: "Contato", href: "#contato", index: "05" },
] as const;

export const TICKER_ITEMS = [
  "Direção de Arte",
  "Branding",
  "Editorial",
  "Packaging",
  "Motion",
  "Naming",
  "Identidade Visual",
  "Brand Strategy",
  "Type Design",
] as const;
