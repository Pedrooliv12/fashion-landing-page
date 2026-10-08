# Interface & Component Contracts: Landing Page Scorpion gytano

**Feature**: `001-scorpion-landing-page`
**Date**: 2026-10-08 (revisão: tema claro, referência visual do template)
**Status**: Validated

Contratos da interface: ordem das seções, IDs, atributos `data-*` usados pelo JS, estados de acessibilidade e o protocolo de links do WhatsApp. As cores usam os tokens do Tailwind definidos em [research.md §2](../research.md).

---

## 1. Estrutura da Página (FR-019)

| # | Elemento | ID / seletor | Fundo |
|---|---|---|---|
| 1 | Faixa superior | `#top-bar` | `bg-ink`, texto branco |
| 2 | Cabeçalho | `<header id="site-header">` | `bg-white`, borda inferior `border-line`, `sticky top-0 z-40` |
| 3 | Hero | `<section id="inicio">` | Foto + `bg-ink/45` |
| 4 | Diferenciais | `<section id="diferenciais">` | `bg-white`, borda inferior `border-line` |
| 5 | Categorias | `<section id="categorias">` | `bg-white` |
| 6 | Coleções | `<section id="colecoes">` | `bg-surface` |
| 7 | Sobre a Marca | `<section id="sobre">` | Foto + `bg-ink/55` |
| 8 | Depoimentos & Instagram | `<section id="depoimentos">` | `bg-white` |
| 9 | Rodapé | `<footer id="rodape">` | `bg-ink` |
| — | Botão flutuante | `#floating-whatsapp` | `bg-whatsapp` |

Todas as `<section>` com `scroll-mt-24`. Elementos `<main>` envolvem as seções 3 a 8.

### Padrão de título de seção (do template)
```text
<p>  rótulo:  text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark
<h2> título:  text-3xl md:text-4xl font-semibold text-ink mt-2
     bloco centralizado, mb-12
```

---

## 2. Cabeçalho (`#site-header`)

| Elemento | Seletor | Contrato |
|---|---|---|
| Logo | `#brand-logo` | Link para `#inicio`; `<img>` com `alt="Scorpion gytano"`, `width`/`height` explícitos |
| Navegação desktop | `nav[aria-label="Principal"]` | `hidden md:flex`; links `[data-nav-link]` na ordem do FR-002: `#inicio`, `#diferenciais`, `#colecoes`, `#sobre`, `#depoimentos` |
| Botão WhatsApp | `a[data-whatsapp="header"]` | `bg-whatsapp text-ink`, ícone SVG + texto "Atendimento no WhatsApp" (no mobile, só o ícone com `aria-label`) |
| Botão menu | `#menu-toggle` | `md:hidden`, mínimo 44×44px, `aria-controls="mobile-menu"`, `aria-expanded="false|true"`, `aria-label="Abrir menu"` / `"Fechar menu"` |
| Menu mobile | `#mobile-menu` | `hidden` por padrão; mesmos links `[data-nav-link]`, cada um com altura ≥ 44px |

---

## 3. Hero (`#inicio`)

Ordem visual (o logo do cabeçalho fica imediatamente acima):
1. `#hero-badge`: "Nova Coleção", com `bg-white/20 backdrop-blur` e caixa alta.
2. `<h1 id="hero-headline">`: "Estilo, Atitude e Exclusividade em Cada Peça".
3. `#hero-description`: texto corrido do FR-006.
4. `a#hero-cta[href="#colecoes"]`: `bg-brand hover:bg-brand-dark text-white`, caixa alta, mínimo 44px de altura, texto "Ver Coleção & Falar com Vendedor".

Imagem: `<img id="hero-image" fetchpriority="high" srcset="…768w, …1280w, …1920w" sizes="100vw">` em `absolute inset-0 object-cover`, sem `loading="lazy"`.

---

## 4. Diferenciais (`#diferenciais`)

Grade `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`; cada item é um `<article>` com ícone SVG `text-brand` (`aria-hidden`), `<h3>` e `<p class="text-muted">`. Os textos seguem exatamente o FR-013.

---

## 5. Categorias (`#categorias`)

3 cards `a.category-card[href="#colecoes"][data-filter-target="{masculino|feminino|acessorios}"]`:
- Altura `h-96`, imagem `object-cover` com `motion-safe:group-hover:scale-105` e degradê `from-ink/60` para baixo.
- `<h3>` branco e o texto "Ver peças" sublinhado em `border-brand`.
- Ao clicar: rola até `#colecoes` (via âncora) e o JS aplica o filtro correspondente.

---

## 6. Coleções (`#colecoes`)

### Filtros (`#product-filters`, `role="group"`, `aria-label="Filtrar produtos"`)
`<button data-filter="todos|masculino|feminino|acessorios|lancamentos" aria-pressed="true|false">`; o ativo fica com `bg-ink text-white`, os demais com `border-line`. Altura mínima de 44px; no mobile, rolagem horizontal **dentro** do grupo (`overflow-x-auto`), sem rolagem da página.

### Grade (`#products-grid`)
`grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`, com `aria-live="polite"`. Mensagem `#products-empty` quando o filtro não tem produtos.

### Card (`article.product-card`, gerado pelo `main.js`)
```text
article.group (bg-white)
├── div.relative.overflow-hidden.aspect-[3/4]
│   ├── span.badge?        absolute top-3 left-3, bg-brand text-white text-xs uppercase   (se product.badge)
│   ├── img                object-cover, loading="lazy", width=600 height=800, alt=product.alt,
│   │                      motion-safe:group-hover:scale-105
│   └── a[data-whatsapp="product"][data-product-name]  ← versão desktop
│                          hidden pointer-fine:flex absolute inset-x-0 bottom-0,
│                          translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0
└── div.p-4.text-center
    ├── span  categoria  (text-xs uppercase text-muted)
    ├── h3    product.name
    ├── p     product.material (text-sm text-muted)
    ├── p     product.price? (font-semibold)
    └── a[data-whatsapp="product"][data-product-name]  ← versão toque
                           pointer-fine:hidden, largura total, mínimo 44px de altura
```
Ambos os botões: `bg-brand hover:bg-brand-dark text-white uppercase`, texto "Garantir no WhatsApp" + ícone. A variante `pointer-fine` é `@media (hover: hover) and (pointer: fine)`, registrada como variante no `tailwind.config.js`.

---

## 7. Protocolo de Links do WhatsApp

**URL**: `https://wa.me/{StoreConfig.whatsappPhone}?text={encodeURIComponent(mensagem)}`
**Atributos**: `target="_blank" rel="noopener"`.
**Preenchimento**: no `DOMContentLoaded`, o `main.js` define o `href` de todo `[data-whatsapp]`; os cards recebem o `href` já na renderização.

| `data-whatsapp` | Onde | Mensagem (`StoreConfig.messages`) |
|---|---|---|
| `header` | Cabeçalho | "Olá! Gostaria de um atendimento personalizado na Scorpion gytano." |
| `product` | Cards | "Olá! Tenho interesse na peça *{nome}* da Scorpion gytano. Poderiam me passar os tamanhos disponíveis e as opções de entrega?" |
| `footer` | Rodapé | "Olá! Vim pelo site da Scorpion gytano e gostaria de falar com a equipe." |
| `floating` | Botão flutuante | "Olá! Estou no site da Scorpion gytano e gostaria de tirar algumas dúvidas sobre as coleções." |

---

## 8. Sobre a Marca (`#sobre`)

Banner de largura total no padrão `.banner-promo` do template: imagem `sobre.webp` (`loading="lazy"`) + `bg-ink/55`, `py-24`, conteúdo centralizado com largura máxima `max-w-2xl`, rótulo, `<h2>` e 2 parágrafos corridos (FR-012) em branco.

---

## 9. Depoimentos & Instagram (`#depoimentos`)

- **Depoimentos**: grade `md:grid-cols-3`; cada `<figure>` tem estrelas SVG `text-brand` com `aria-label="Nota 5 de 5"`, `<blockquote>` e `<figcaption>` (nome + localidade em `text-muted`). Borda `border-line`, sem sombra.
- **Instagram**: título "Siga @scorpion.gytano" + mosaico `grid-cols-3 md:grid-cols-6` de imagens quadradas, cada uma um link para `instagramUrl` com `aria-label`. Botão "Seguir no Instagram" com contorno `border-ink`.

---

## 10. Rodapé (`#rodape`)

`bg-ink`, texto `text-line` (`#E7E5E4`), títulos brancos, grade `sm:grid-cols-2 lg:grid-cols-4`:
1. Logo (versão clara) + frase da marca + ícones Instagram/TikTok (`aria-label`, 44×44px).
2. "Navegação": links para todas as seções.
3. "Atendimento": `openingHours` + `a[data-whatsapp="footer"]` em `bg-brand text-white`.
4. "Pagamento": "Pix e Cartão de Crédito".

Linha de copyright: "© 2026 Scorpion gytano. Todos os direitos reservados." O contêiner tem `pb-24 md:pb-8` para o botão flutuante não cobrir o conteúdo.

---

## 11. Botão Flutuante (`#floating-whatsapp`)

```text
a#floating-whatsapp[data-whatsapp="floating"][aria-label="Falar com a Scorpion gytano no WhatsApp"]
  fixed bottom-5 right-5 z-50, w-14 h-14 rounded-full bg-whatsapp shadow-lg
  ├── span  motion-safe:animate-ping absolute inset-0 rounded-full bg-whatsapp opacity-40 (aria-hidden)
  └── svg   logo do WhatsApp, branco, w-7 h-7 (aria-hidden)
```
É a única exceção a `rounded-none` no projeto: o formato circular é o padrão reconhecível do WhatsApp.
