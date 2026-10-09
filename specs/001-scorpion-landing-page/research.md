# Research & Technical Decisions: Landing Page Scorpion gytano

**Feature**: `001-scorpion-landing-page`
**Date**: 2026-10-08 (revisão: tema claro baseado na referência visual do cliente)
**Status**: Completed

Este documento consolida as decisões técnicas e de design para a landing page da **Scorpion gytano**, de acordo com o `spec.md` (Clarifications, sessão 2026-10-08) e a Constituição v1.1.0.

> **Revisão 2026-10-08**: as decisões de tema escuro (`#0A0A0A`), fontes Outfit, imagens em JPG/PNG, logo com filtro `invert` e Hero com CTA ambíguo foram substituídas.

---

## 1. Referência Visual: Adaptação do Template

### Decisão
Usar o template [nodeckagency/clothing-store-landing-page](https://github.com/nodeckagency/clothing-store-landing-page) como **referência visual**, reescrevendo toda a marcação e os estilos em Tailwind CSS. Mapeamento:

| Template | Landing Scorpion gytano | Adaptação |
|---|---|---|
| `.top-bar` | Faixa superior (FR-017) | Texto de benefício em pt-BR |
| `header` branco sticky com busca/favoritos/carrinho | Cabeçalho (FR-001 a FR-004) | Ícones de e-commerce removidos; entra o botão verde de WhatsApp |
| `.hero` foto de ponta a ponta, texto centralizado, `.badge` | Hero (FR-005 a FR-007) | `<img>` em vez de `background-image` (ver §4); CTA vermelho rola até `#colecoes` |
| `.features` (4 ícones em linha) | Diferenciais (FR-013) | Ícones SVG inline no lugar do Font Awesome |
| `.categories` (3 cards altos com degradê) | Categorias (FR-008) | Cards viram atalhos que filtram a vitrine |
| `.products` com botão que desliza no hover | Coleções (FR-009, FR-010) | Botão "Garantir no WhatsApp"; sempre visível no toque |
| `.banner-promo` | Sobre a Marca (FR-012) | Mesmo visual, com texto institucional |
| `.newsletter` | — | Removida (Constituição, Referência Visual) |
| *(não existe)* | Depoimentos & Instagram (FR-014) | Criado no mesmo estilo (cantos retos, caixa alta espaçada) |
| `footer` escuro em 4 colunas | Rodapé (FR-015) | Coluna de atendimento com botão de WhatsApp e horário |
| *(não existe)* | Botão flutuante (FR-016) | Novo |

Características de estilo preservadas: cantos retos (`rounded-none`), títulos de seção com rótulo superior em caixa alta e `tracking-[0.2em]`, `max-w-[1200px]` com `px-5`, seções com `py-20`, botões em caixa alta com `tracking-wider`.

### Rationale
O cliente aprovou o visual. Reescrever em Tailwind cumpre o Princípio V e evita problemas de licença, já que o repositório não tem LICENSE.

### Alternativas Consideradas
- *Copiar o HTML/CSS do template e adaptar*: rejeitado por falta de licença e porque o CSS puro contraria o Princípio V.

---

## 2. Paleta e Contraste

### Decisão
Tokens do Princípio II registrados em `tailwind.config.js` em `theme.extend.colors`:

| Token Tailwind | Hex | Contraste verificado |
|---|---|---|
| `ink` | `#111111` | 18,9:1 sobre `#FFFFFF` |
| `surface` | `#F5F5F4` | — |
| `line` | `#E7E5E4` | — |
| `muted` | `#57534E` | 7,6:1 sobre `#FFFFFF`; ≈ 7,0:1 sobre `#F5F5F4` |
| `brand` | `#DC2626` | Texto branco sobre ele: 4,8:1 |
| `brand-dark` | `#B91C1C` | Texto branco sobre ele: 6,5:1; sobre branco: 6,5:1 |
| `brand-light` | `#EF4444` | 5,0:1 sobre `#111111` |
| `whatsapp` | `#25D366` | Texto `#111111` sobre ele: 9,5:1 (branco: 1,98:1, proibido) |

Texto claro no rodapé: token `line` (`#E7E5E4`) sobre `#111111` (≈ 15:1), sem cores fora da paleta.

**Texto sobre fotos** (Hero, Sobre, cards de categoria): o pior caso é uma área branca da foto sob a sobreposição. Contraste do texto branco nesse caso:

| Sobreposição `ink` | Fundo resultante (pior caso) | Branco | Decisão |
|---|---|---|---|
| `bg-ink/45` | ≈ `#949494` | 3,0:1 ✗ | Proibido |
| `bg-ink/55` | ≈ `#7C7C7C` | 4,2:1 ✗ | Proibido |
| `bg-ink/60` | ≈ `#707070` | 4,9:1 ✓ | **Mínimo obrigatório** |

- Hero e Sobre usam `bg-ink/60`. Cards de categoria usam degradê `from-ink/70`, com o texto posicionado na faixa mais escura.
- Sobre fotos, **todo texto é branco**. Vermelho sobre foto fica proibido, porque `#EF4444` cai para 1,1 a 2,6:1 sobre tons médios. O destaque vermelho do rótulo vira um traço decorativo (`h-0.5 w-10 bg-brand`), não texto.
- O selo da Hero usa `bg-ink/60` (não `bg-white/20`, que clarearia o fundo do próprio texto).

### Rationale
Todos os pares atendem WCAG AA (SC-008) e contribuem para Acessibilidade ≥ 90 no Lighthouse (SC-007).

---

## 3. Tailwind CSS: Versão e Build

> **Atualização 2026-10-09 (Constituição v2.0.0)**: a etapa de build foi removida a pedido do responsável do projeto. O CSS gerado pelo Tailwind foi congelado em `site/assets/css/styles.css`, em versão legível (não minificada), e passa a ser mantido à mão. `package.json`, `tailwind.config.js`, `src/input.css` e `node_modules` foram apagados do repositório. A decisão abaixo descreve como o arquivo foi gerado originalmente.

### Decisão
- **Tailwind CSS v3.4** (`tailwindcss@3.4.17`, versão exata em `devDependencies`), com `tailwind.config.js` na raiz, conforme a Constituição v1.1.0.
- `content: ["./site/**/*.{html,js}"]`, para que as classes usadas pelos cards gerados em `config.js`/`main.js` não sejam descartadas.
- Entrada em `src/input.css` (`@tailwind base/components/utilities`, `@font-face` e componentes `@layer`).
- Scripts npm:
  - `npm run dev` → `tailwindcss -i src/input.css -o site/assets/css/styles.css --watch`
  - `npm run build` → `tailwindcss -i src/input.css -o site/assets/css/styles.css --minify`
- O `styles.css` compilado é **commitado** em `site/assets/css/`, para que `site/` seja publicável em qualquer hospedagem estática sem build no servidor.
- Variante para hover real: `future: { hoverOnlyWhenSupported: true }`, que faz o `hover:` só valer em dispositivos com `@media (hover: hover)`, resolvendo o caso de toque (Edge Cases).

### Alternativas Consideradas
- *Tailwind via CDN (Play CDN)*: rejeitado por gerar CSS em tempo de execução, o que derruba a Performance do Lighthouse.
- *Tailwind v4 (config em CSS com `@theme`)*: viável, mas a Constituição v1.1.0 cita `tailwind.config.js`; a v3.4 também tem suporte mais amplo a navegadores antigos.

---

## 4. Hero e LCP

### Decisão
- A foto da Hero é um `<img>` real (não `background-image`), com `object-cover`, `fetchpriority="high"`, sem `loading="lazy"`, e `srcset` em 3 larguras: `hero-768.webp`, `hero-1280.webp` e `hero-1920.webp`.
- O contêiner usa **altura mínima, não fixa**: `min-h-[85svh] py-16`. Em 320×568, o conteúdo (selo, h1 em 4 linhas, cerca de 11 linhas de texto e o botão) mede cerca de 600px; com altura fixa e `overflow-hidden`, o botão principal seria cortado. A unidade `svh` evita saltos quando a barra do navegador móvel aparece ou some.
- `<link rel="preload" as="image" imagesrcset="…" imagesizes="100vw">` no `<head>`.
- Sobreposição `bg-ink/60` (mínimo calculado em §2).
- Em telas ultra-wide (> 1920px), `object-cover` com `object-position` centralizado; a imagem de 1920px é suficiente visualmente.
- O logotipo fica **somente no cabeçalho** (Clarifications); a Hero não usa filtro `invert`.

### Rationale
Imagens de fundo CSS são descobertas tarde pelo navegador e prejudicam o LCP (< 1,5s). `<img>` com preload e `fetchpriority` é o padrão recomendado.

---

## 5. Tipografia

### Decisão
- Apenas **Montserrat**, como no template, em **um arquivo variável** `montserrat-latin-variable.woff2` (pesos 300 a 700, subset latin com acentos pt-BR), em `site/assets/fonts/`.
- Origem: pacote `@fontsource-variable/montserrat` (licença SIL OFL 1.1), copiado para `site/assets/fonts/`.
- `@font-face` com `font-display: swap` em `src/input.css`; `<link rel="preload" as="font" type="font/woff2" crossorigin>` no `<head>`.

### Rationale
Um único arquivo variável substitui vários pesos estáticos, com menos requisições. O self-hosting cumpre o Princípio IV.

---

## 6. Ícones

### Decisão
SVG inline, sem Font Awesome:
- Ícones de interface (menu, fechar, caminhão, cartão, escudo, estrela, seta): **Lucide** (licença ISC).
- Marcas (WhatsApp, Instagram): **Simple Icons** (CC0).
- Ícones decorativos com `aria-hidden="true"`; botões só com ícone recebem `aria-label`.

### Rationale
O Font Awesome por CDN custa cerca de 100 KB de CSS e fontes para cerca de 12 ícones; SVG inline custa poucos KB e não faz requisições extras.

---

## 7. Integração WhatsApp

### Decisão
- URL universal: `https://wa.me/{whatsappPhone}?text={encodeURIComponent(mensagem)}` (sem barra antes do `?`).
- Todos os links de WhatsApp no HTML têm `data-whatsapp="{origem}"` e são preenchidos pelo `main.js` a partir de `StoreConfig`, no único lugar onde o número é definido (FR, Assumptions).
- Mensagens por origem (fonte oficial: [contracts/ui-contracts.md §7](contracts/ui-contracts.md)).
- `target="_blank" rel="noopener"`.
- O CTA da Hero **não** abre o WhatsApp: rola até `#colecoes` (Clarifications).

### Alternativas Consideradas
- *Número escrito diretamente em cada `href`*: rejeitado porque espalha o número em vários pontos do HTML.

---

## 8. Vitrine: Renderização, Filtros e Hover

### Decisão
- Produtos e categorias definidos em `site/assets/js/config.js`, junto com `StoreConfig`. É o único arquivo que a loja precisa editar.
- `main.js` renderiza os cards em `#products-grid` e aplica filtros:
  - `todos` → todos os produtos;
  - `masculino` / `feminino` / `acessorios` → `product.category`;
  - `lancamentos` → `product.isNew === true` (Clarifications).
- Botões de filtro com `aria-pressed`; uma linha de status `#products-status` com `aria-live="polite"` anuncia o resultado ("Mostrando 4 peças · Feminino"), em vez de colocar `aria-live` na grade inteira, o que faria o leitor de tela ler todos os cards; os cards de categoria têm `href="#colecoes"` e `data-filter-target="{categoria}"`, então funcionam como âncora mesmo sem JS.
- Card de produto: imagem `aspect-[3/4]` com `group-hover:scale-105`; o botão "Garantir no WhatsApp" fica abaixo das informações no mobile e, em dispositivos com hover, desliza sobre a imagem (`translate-y-full` → `group-hover:translate-y-0 group-focus-within:translate-y-0`).
- Imagens dos cards com `loading="lazy"`, `width` e `height` explícitos (CLS = 0).

### Rationale
Separar dados (`config.js`) de comportamento (`main.js`) facilita a manutenção do catálogo. A vitrine fica abaixo da primeira dobra, então a renderização via JS não afeta o LCP.

---

## 9. Navegação, Rolagem e Movimento

### Decisão
- Rolagem suave via CSS: `html { scroll-behavior: smooth }` dentro de `@media (prefers-reduced-motion: no-preference)`.
- Todas as seções-alvo com `scroll-mt-24`, maior que a altura do cabeçalho fixo, para cumprir o SC-005.
- Menu mobile: `#mobile-menu` com `hidden`; o botão alterna `aria-expanded`, fecha ao clicar em um link e com a tecla `Esc`.
- Pulso do botão flutuante e zoom das imagens com prefixo `motion-safe:`.
- Espaço extra no fim do rodapé (`pb-24` no mobile) para o botão flutuante não cobrir conteúdo (FR-016).

---

## 10. Imagens e Conteúdo de Exemplo

### Decisão
- Formato **WebP** para tudo o que é exibido. As imagens de exemplo foram convertidas com `sharp-cli`; desde a Constituição v2.0.0 (sem Node), imagens novas são convertidas fora do repositório, por exemplo com o Squoosh no navegador.
- **Logo**: `logo.svg` se a loja tiver o vetor; caso contrário, `logo.webp` com transparência.
- **Imagem de Open Graph**: `og-image.jpg` 1200×630. É exceção ao WebP porque não é exibida na página (o critério 4 da Constituição trata de "imagens exibidas") e o JPG tem o suporte mais amplo em prévias de links.
- **Conteúdo de exemplo**: até a loja enviar o material real, usar fotos livres do Unsplash (licença Unsplash) convertidas para WebP, número `5511999999999` e depoimentos de exemplo. Todos ficam marcados com o comentário `// EXEMPLO: substituir` em `config.js` ou `<!-- EXEMPLO -->` no HTML, e há uma tarefa de checagem antes da publicação.

---

## 11. SEO, Open Graph e Publicação

### Decisão
- `<html lang="pt-BR">`, `<title>`, `<meta name="description">`, `<link rel="canonical">`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`, `og:locale=pt_BR`, `twitter:card=summary_large_image`.
- Dados estruturados `ClothingStore` (JSON-LD) com nome, URL, telefone e Instagram.
- URL canônica provisória: `https://pedrooliv12.github.io/fashion-landing-page/`, marcada com `<!-- EXEMPLO: confirmar URL -->`.
- **A publicação (deploy) está fora do escopo desta feature**: será feita pelo responsável do projeto depois da implementação. Ao publicar, ajustar `canonical`, `og:url`, `og:image` e o `url` do JSON-LD para o endereço final.

---

## Conclusão da Fase 0

Não restam pontos `NEEDS CLARIFICATION`. As pendências de conteúdo (número real, fotos, logo e depoimentos) não bloqueiam o desenvolvimento e estão cobertas pela estratégia de conteúdo de exemplo (§10).
