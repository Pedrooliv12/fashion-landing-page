# Implementation Plan: Landing Page Scorpion gytano

**Branch**: `001-scorpion-landing-page` | **Date**: 2026-10-08 (revisão) | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-scorpion-landing-page/spec.md`

## Summary

Landing page de página única para a marca **Scorpion gytano**, com conversão por WhatsApp. O visual segue o template aprovado pelo cliente ([nodeckagency/clothing-store-landing-page](https://github.com/nodeckagency/clothing-store-landing-page)): tema **claro editorial**, cantos retos, títulos em caixa alta espaçada, faixa de benefícios, cards de categoria altos e rodapé escuro. A página é reescrita em HTML5 semântico, Tailwind CSS v3.4 (compilado) e Vanilla JS. O vermelho `#DC2626` marca as ações e os destaques, e o verde oficial `#25D366` fica restrito aos botões de WhatsApp do cabeçalho e flutuante. Fonte única Montserrat (variável, self-hosted), imagens WebP com preload da Hero para o LCP, ícones SVG inline, e todo o conteúdo dinâmico (número, mensagens, categorias, produtos) centralizado em `config.js`, com conteúdo de exemplo até a loja enviar o material real.

## Technical Context

**Language/Version**: HTML5, CSS (Tailwind CSS 3.4.17), JavaScript ES2020 (Vanilla, sem bundler).

**Primary Dependencies**: Tailwind CSS 3.4.17 (somente build, `devDependency`); `sharp-cli` (conversão de imagens para WebP, somente build). Nenhuma dependência em tempo de execução.

**Storage**: N/A. Dados estáticos em `site/assets/js/config.js` e no HTML.

**Testing**: Roteiro manual do [quickstart.md](quickstart.md) (V1 a V10): DevTools em 320 a 2560px, modo de toque, `prefers-reduced-motion`, Lighthouse mobile e verificação de links do WhatsApp.

**Target Platform**: Navegadores atuais (Chrome, Safari iOS 15+, Edge, Firefox, Samsung Internet), com foco em smartphones.

**Project Type**: Site estático de página única (landing page).

**Performance Goals**: LCP < 1,5s, FCP < 1,0s, CLS = 0; Lighthouse mobile ≥ 90 em Performance, Acessibilidade, Boas Práticas e SEO (SC-007).

**Constraints**:
- Sem rolagem horizontal de 320px a 2560px (SC-003); alvos de toque ≥ 44×44px (SC-004).
- Paleta exclusiva da Constituição v1.1.0, Princípio II, com contraste WCAG AA (SC-008).
- Fontes e ícones locais; nenhuma requisição a CDN em tempo de execução.
- Número de WhatsApp definido em um único lugar (`StoreConfig`).
- Template usado só como referência visual (sem LICENSE, sem cópia de código).

**Out of Scope**: Publicação/deploy (feita pelo responsável do projeto após a implementação); a URL canônica é provisória.

**Scale/Scope**: 1 página, 9 blocos (FR-019), 8 a 12 produtos em 3 categorias + filtro de lançamentos, 4 diferenciais, 3 a 4 depoimentos, 6 fotos de mosaico.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Princípio (v1.1.0) | Como o plano atende | Status |
|---|---|---|
| **I. Mobile-First** | Classes base para mobile e breakpoints `sm/md/lg/xl` só para ampliar; filtros com rolagem interna; alvos de 44px; checagem em 320px e 2560px (V6) | **PASS** |
| **II. Estética Editorial Clara e Paleta** | Tokens `ink/surface/line/muted/brand/brand-dark/brand-light/whatsapp` no `tailwind.config.js`; verde só em `data-whatsapp="header"` e `#floating-whatsapp`, com texto `#111111`; contrastes verificados em research §2 | **PASS** |
| **III. Conversão via WhatsApp** | CTAs de WhatsApp no cabeçalho, em todos os cards, no rodapé e no flutuante; mensagens por origem com o nome do produto; o botão flutuante não cobre conteúdo | **PASS** |
| **IV. Carregamento Ultra-Rápido** | WebP com `srcset`, preload e `fetchpriority` na Hero; `loading="lazy"` abaixo da primeira dobra; scripts com `defer`; fonte variável local com preload; sem CDNs | **PASS** |
| **V. Arquitetura Leve e Semântica** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`; Tailwind compilado; JS puro em 2 arquivos | **PASS** |
| **VI. pt-BR e SEO/OG** | `lang="pt-BR"`, title, description, canonical, Open Graph, Twitter Card, JSON-LD `ClothingStore`; textos do template convertidos de pt-PT | **PASS** |
| **Estrutura de Diretórios** | `site/assets/{css,js,fonts,img}`; arquivos de build do Tailwind na raiz; nomes em kebab-case | **PASS** |
| **Referência Visual** | Reescrita em Tailwind; sem carrinho, busca, favoritos nem newsletter; Font Awesome, Google Fonts e Unsplash substituídos | **PASS** |
| **Critérios de Aceite** | Validações V6 (responsividade), V2/V3/V5 (WhatsApp), V7 (Lighthouse), V9 (assets e prévia social) | **PASS** |

*Resultado*: **APROVADO**, inclusive na reavaliação após a Fase 1. A única exceção registrada (`og-image.jpg` em JPG) é permitida porque o critério 4 trata de imagens exibidas na página (ver Complexity Tracking).

## Project Structure

### Documentation (this feature)

```text
specs/001-scorpion-landing-page/
├── plan.md              # Este plano
├── research.md          # Decisões técnicas e de design (Fase 0)
├── data-model.md        # Entidades e regras de validação (Fase 1)
├── quickstart.md        # Execução local e roteiro de validação (Fase 1)
├── contracts/
│   └── ui-contracts.md  # Estrutura, IDs, atributos data-* e protocolo do WhatsApp
├── checklists/
│   └── requirements.md
└── tasks.md             # Gerado por /speckit-tasks
```

### Source Code (repository root)

```text
package.json                         # Scripts dev/build/images; devDependencies fixadas
tailwind.config.js                   # Tokens de cor, fonte, variante pointer-fine, content
src/
├── input.css                        # @tailwind, @font-face, componentes @layer
└── img-originais/                   # Originais em alta (ignorado pelo Git)
site/                                # Entregável publicado
├── index.html
└── assets/
    ├── css/
    │   └── styles.css               # Gerado por `npm run build` (commitado)
    ├── js/
    │   ├── config.js                # StoreConfig, categorias e produtos (único arquivo editado pela loja)
    │   └── main.js                  # Links do WhatsApp, menu, renderização e filtros da vitrine
    ├── fonts/
    │   └── montserrat-latin-variable.woff2
    └── img/
        ├── logo.svg                 # ou logo.webp, se não houver vetor
        ├── logo-light.svg           # versão clara para o rodapé
        ├── favicon.svg
        ├── og-image.jpg             # 1200×630, só para prévias de link
        ├── hero/hero-{768,1280,1920}.webp
        ├── sobre.webp
        ├── categorias/{masculino,feminino,acessorios}.webp
        ├── produtos/{id}.webp       # 600×800
        └── insta/look-{1..6}.webp   # 600×600
```

**Structure Decision**: Segue a árvore da Constituição v1.1.0 (`site/assets/{css,js,fonts,img}`), com os arquivos de build do Tailwind na raiz. `config.js` e `main.js` substituem o par `catalog.js`/`main.js` do plano anterior para separar dados (editados pela loja) de comportamento.

## Complexity Tracking

| Item | Por que é necessário | Alternativa mais simples rejeitada porque |
|---|---|---|
| Etapa de build (Node + Tailwind CLI) | O Princípio V exige Tailwind, e Performance ≥ 90 exige CSS compilado | O Tailwind via CDN gera CSS em tempo de execução e derruba a nota de Performance |
| `og-image.jpg` em JPG | Prévias de link no WhatsApp e nas redes têm suporte mais amplo a JPG | Em WebP, a prévia pode não aparecer em alguns apps; a imagem não é exibida na página |
| `logo.svg`, `logo-light.svg` e `favicon.svg` em SVG | Logos e ícones são vetoriais: o SVG é nítido em qualquer densidade de tela e menor que um WebP equivalente (o Princípio IV pede WebP "prioritariamente", não exclusivamente) | Em WebP, o logo perderia nitidez em telas de alta densidade ou exigiria várias resoluções |
| Dois botões "Garantir" por card (toque e mouse) | Permite deslizar o botão no desktop, como no template, sem esconder o CTA no toque | Um único botão animado ficaria escondido no toque ou perderia o efeito do template |
