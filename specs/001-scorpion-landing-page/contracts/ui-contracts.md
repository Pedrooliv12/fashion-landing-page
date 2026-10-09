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
| 3 | Hero | `<section id="inicio">` | Foto + `bg-ink/60` |
| 4 | Diferenciais | `<section id="diferenciais">` | `bg-white`, borda inferior `border-line` |
| 5 | Categorias | `<section id="categorias">` | `bg-white` |
| 6 | Coleções | `<section id="colecoes">` | `bg-surface` |
| 7 | Sobre a Marca | `<section id="sobre">` | Foto + `bg-ink/60` |
| 8 | Depoimentos & Instagram | `<section id="depoimentos">` | `bg-white` |
| 9 | Rodapé | `<footer id="rodape">` | `bg-ink` |
| — | Botão flutuante | `#floating-whatsapp` | `bg-whatsapp` |

Todas as `<section>` com `scroll-mt-24`. Elementos `<main>` envolvem as seções 3 a 8.

**Texto sobre fotos** (Hero, Sobre, Categorias): sempre branco, com sobreposição mínima `bg-ink/60` (ou degradê `from-ink/70` sob o texto). Vermelho em texto sobre foto é proibido (ver [research.md §2](../research.md)).

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
| Navegação desktop | `nav[aria-label="Principal"]` | `hidden lg:flex` (a partir de 1024px, porque em 768px os 5 links, o logo e o botão somam cerca de 980px); links `[data-nav-link]` na ordem do FR-002: `#inicio`, `#diferenciais`, `#colecoes`, `#sobre`, `#depoimentos` |
| Botão WhatsApp | `a[data-whatsapp="header"]` | `bg-whatsapp text-ink`, ícone SVG sempre visível; texto "Atendimento no WhatsApp" só a partir de `xl` (`hidden xl:inline`). Abaixo disso, só o ícone, com `aria-label="Atendimento no WhatsApp"`; mínimo 44×44px |
| Botão menu | `#menu-toggle` | `lg:hidden`, mínimo 44×44px, `aria-controls="mobile-menu"`, `aria-expanded="false|true"`, `aria-label="Abrir menu"` / `"Fechar menu"` |
| Menu mobile | `#mobile-menu` | `hidden` por padrão (e sempre oculto a partir de `lg`); mesmos links `[data-nav-link]`, cada um com altura ≥ 44px |

---

## 3. Hero (`#inicio`)

Ordem visual (o logo do cabeçalho fica imediatamente acima):
1. `#hero-badge`: "Nova Coleção", com `bg-ink/60` e caixa alta.
2. `<h1 id="hero-headline">`: "Estilo, Atitude e Exclusividade em Cada Peça".
3. `#hero-description`: texto corrido do FR-006.
4. `a#hero-cta[href="#colecoes"]`: `bg-brand hover:bg-brand-dark text-white`, caixa alta, mínimo 44px de altura, texto "Ver Coleção & Falar com Vendedor".

Contêiner: `relative min-h-[85svh] py-16` (altura **mínima**, nunca fixa, para o conteúdo crescer em 320px sem cortar o botão).

Imagem: `<img id="hero-image" fetchpriority="high" srcset="…768w, …1280w, …1920w" sizes="100vw">` em `absolute inset-0 object-cover`, sem `loading="lazy"`, com sobreposição `bg-ink/60`.

---

## 4. Diferenciais (`#diferenciais`)

Grade `grid-cols-1 md:grid-cols-3` (3 itens; sem "Envio", a loja não entrega); cada item é um `<article>` com ícone SVG `text-brand` (`aria-hidden`), `<h3>` e `<p class="text-muted">`. Os textos seguem exatamente o FR-013.

---

## 5. Categorias (`#categorias`)

3 cards `a.category-card[href="#colecoes"][data-filter-target="{masculino|feminino|acessorios}"]`:
- Altura `h-96`, imagem `object-cover` com `motion-safe:group-hover:scale-105` e degradê `bg-gradient-to-t from-ink/70 via-ink/20 to-transparent`; o texto fica na base, sobre a faixa mais escura.
- `<h3>` branco e o texto "Ver peças" sublinhado em `border-brand`.
- Ao clicar: rola até `#colecoes` (via âncora) e o JS aplica o filtro correspondente.

---

## 6. Coleções (`#colecoes`)

### Filtros (`#product-filters`, `role="group"`, `aria-label="Filtrar produtos"`)
`<button data-filter="todos|masculino|feminino|acessorios|lancamentos" aria-pressed="true|false">`; o ativo fica com `bg-ink text-white`, os demais com `border-line`. Altura mínima de 44px; no mobile, rolagem horizontal **dentro** do grupo (`overflow-x-auto`), sem rolagem da página.

### Grade (`#products-grid`)
`grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`. Com 2 colunas a partir de 480px, cada card tem pelo menos cerca de 208px, o suficiente para o botão de toque. Linha de status `#products-status` (`aria-live="polite"`, `text-sm text-muted`) acima da grade, com o texto "Mostrando {n} peças · {filtro}". Mensagem `#products-empty` quando o filtro não tem produtos.

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
                           pointer-fine:hidden, largura total, mínimo 44px de altura,
                           px-3 text-xs leading-tight text-center (quebra em 2 linhas se preciso)
```
Ambos os botões: `bg-whatsapp hover:opacity-90 text-ink uppercase` (verde oficial, Constituição v1.2.0), texto "Garantir no WhatsApp" + ícone. A variante `pointer-fine` é `@media (hover: hover) and (pointer: fine)`, definida em `styles.css`.

---

## 7. Protocolo de Links do WhatsApp

**URL**: `https://wa.me/{StoreConfig.whatsappPhone}?text={encodeURIComponent(mensagem)}`
**Atributos**: `target="_blank" rel="noopener"`.
**Preenchimento**: no `DOMContentLoaded`, o `main.js` define o `href` de todo `[data-whatsapp]`; os cards recebem o `href` já na renderização.

| `data-whatsapp` | Onde | Mensagem (`StoreConfig.messages`) |
|---|---|---|
| `header` | Cabeçalho | "Olá! Gostaria de um atendimento personalizado na Scorpion gytano." |
| `product` | Cards | "Olá! Tenho interesse na peça *{nome}* da Scorpion gytano. Poderiam me passar os tamanhos disponíveis?" |
| `footer` | Rodapé | "Olá! Vim pelo site da Scorpion gytano e gostaria de falar com a equipe." |
| `floating` | Botão flutuante | "Olá! Estou no site da Scorpion gytano e gostaria de tirar algumas dúvidas sobre as coleções." |

---

## 8. Sobre a Marca (`#sobre`)

Banner de largura total no padrão `.banner-promo` do template: imagem `sobre.webp` (`loading="lazy"`) + `bg-ink/60`, `py-24`, conteúdo centralizado com largura máxima `max-w-2xl`: rótulo **branco** em caixa alta com um traço decorativo vermelho acima (`h-0.5 w-10 bg-brand mx-auto`), `<h2>` e 2 parágrafos corridos (FR-012), tudo em branco.

---

## 9. Depoimentos & Instagram (`#depoimentos`)

- **Depoimentos**: grade `md:grid-cols-3`; cada `<figure>` tem estrelas SVG `text-brand` com `aria-label="Nota 5 de 5"`, `<blockquote>` e `<figcaption>` (nome + localidade em `text-muted`). Borda `border-line`, sem sombra.
- **Instagram**: rótulo "Comunidade", título "Siga @scorpion.gytano", convite em `text-muted` e botão `a[data-social="instagram"]` "Seguir no Instagram" com contorno `border-ink`. Sem mosaico de fotos (removido no ajuste pós-implementação).

---

## 10. Rodapé (`#rodape`)

`bg-ink`, texto `text-line` (`#E7E5E4`), títulos brancos, grade `sm:grid-cols-2 lg:grid-cols-4`:
1. Logo (versão clara) + frase da marca + ícone do Instagram (`aria-label`, 44×44px). A loja só tem Instagram.
2. "Navegação": links para todas as seções.
3. "Atendimento": `openingHours` + `a[data-whatsapp="footer"]` com `.btn-whatsapp` (`bg-whatsapp text-ink`, Constituição v1.2.0).
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
