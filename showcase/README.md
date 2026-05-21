# /showcase — Imagens da Galeria e Logos

Esta pasta é servida diretamente em produção pelo Vercel. **Tudo que você colocar aqui aparece em `https://seu-dominio.vercel.app/showcase/<nome-do-arquivo>`.**

Não precisa de build, não precisa rodar nada — basta dar `git add` no arquivo, commitar e push. O Vercel publica em ~1 min.

---

## Convenção de nomes — IMPORTANTE

Sempre use **kebab-case** (minúsculas, hífens em vez de espaços, sem acento):

- ✅ `uma-escola-feita-por-alunos.png`
- ❌ `Uma escola feita por alunos.png` (espaços e maiúsculas podem dar 404 em CDNs)

---

## Arquivos atuais (Galeria + Works carousel)

O `index.html` está esperando exatamente estes 4 arquivos. Quando você dropar eles aqui, a galeria e o background dos slides preenchem automaticamente.

| Arquivo                              | Projeto                            |
| ------------------------------------ | ---------------------------------- |
| `jeans.webp`                         | AO VIVO Jeans · Campanha Beagle    |
| `pima.png`                           | Pima · Logotipo autoral            |
| `uma-escola-feita-por-alunos.png`    | Escola Construtiva                 |
| `formula-beagle.png`                 | Fórmula Beagle                     |

### Trocar uma imagem

Substitui o arquivo pelo novo (mesmo nome). Commit + push. Pronto.

### Trocar o nome ou a extensão

Mesma regra: renomeia o arquivo no GitHub e edita a linha correspondente no `index.html`. Os 8 paths estão em duas seções:

- 4× em `<!-- ══ WORKS PANEL ══ -->` (linhas próximas a `wk-bg`)
- 4× em `<!-- ════════ GALERIA ════════ -->` (procure `gl-frame`)

---

## Logos

| Arquivo                  | Onde aparece                                       |
| ------------------------ | -------------------------------------------------- |
| `bal-harbour-logo.svg`   | No card do Bal Harbour (em branco) e no título grande (em cream) |

Mantenha o SVG monocromático (uma cor só) — o site aplica os filtros de cor automaticamente.

---

## Otimização (opcional, recomendado)

Antes de subir, reduza o peso das imagens:

- **Tamanho máx:** 1600px na maior dimensão
- **Qualidade JPG:** 80–85% (não precisa mais que isso pra web)
- **Ferramentas grátis:** [squoosh.app](https://squoosh.app) ou [tinypng.com](https://tinypng.com)

Imagem de 4MB → 200KB. Site carrega muito mais rápido e o usuário não percebe diferença.
