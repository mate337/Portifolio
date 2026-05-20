# /showcase — Imagens da Galeria e Logos

Esta pasta é servida diretamente em produção pelo Vercel. **Tudo que você colocar aqui aparece em `https://seu-dominio.vercel.app/showcase/<nome-do-arquivo>`.**

Não precisa de build, não precisa rodar nada — basta dar `git add` no arquivo, commitar e push. O Vercel publica em ~1 min.

---

## Galeria (seção após "Sobre o Criativo")

O `index.html` está esperando exatamente estes 4 arquivos. Quando você dropar eles aqui, a galeria preenche automaticamente.

| Nome esperado          | Projeto                      | Formato aceito      | Proporção sugerida |
| ---------------------- | ---------------------------- | ------------------- | ------------------ |
| `beagle-ao-vivo.jpg`   | AO VIVO Jeans · Beagle       | `.jpg` ou `.png`    | 16:10 (1400×900)   |
| `pima.jpg`             | Pima · Logotipo autoral      | `.jpg` ou `.png`    | 16:10 (1400×900)   |
| `acesso-educacao.jpg`  | Acesso Educação · Learning Book | `.jpg` ou `.png` | 16:10 (1400×900)   |
| `formula-beagle.jpg`   | Fórmula Beagle               | `.jpg` ou `.png`    | 16:10 (1400×900)   |

### Quer usar PNG em vez de JPG?

Coloque o arquivo como `beagle-ao-vivo.png` e edite uma linha no `index.html` (procure por `/showcase/beagle-ao-vivo.jpg` e troque a extensão). Mesma coisa pros outros 3.

### Quer trocar o nome do arquivo?

Mesma regra: edita a linha correspondente no `index.html`. Os 4 paths estão em ordem na seção `<!-- ══ GALERIA PANEL ══ -->`.

---

## Logos

| Arquivo                  | Onde aparece                                       |
| ------------------------ | -------------------------------------------------- |
| `bal-harbour-logo.svg`   | No card do Bal Harbour (em branco) e no título grande (em cream) |

Se quiser trocar o logo do Bal Harbour, sobrescreve esse arquivo. Mantenha o SVG monocromático (uma cor só) — o site aplica os filtros de cor automaticamente.

---

## Otimização (opcional, recomendado)

Antes de subir, reduza o peso das imagens:

- **Tamanho máx:** 1600px na maior dimensão
- **Qualidade JPG:** 80–85% (não precisa mais que isso pra web)
- **Ferramentas grátis:** [squoosh.app](https://squoosh.app) ou [tinypng.com](https://tinypng.com)

Imagem de 4MB → 200KB. Site carrega muito mais rápido e o usuário não percebe diferença.
