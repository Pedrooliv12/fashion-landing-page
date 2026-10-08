/*
 * Comportamento da landing page Scorpion gytano.
 * Dados (número, mensagens, produtos) vêm de config.js, carregado antes deste arquivo.
 */
(function () {
  "use strict";

  const config = window.StoreConfig;

  // Ícone do WhatsApp (path estático, sem dados do usuário)
  const WHATSAPP_ICON =
    '<svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 shrink-0 fill-current"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>';

  /* ---------- WhatsApp (contracts/ui-contracts.md §7) ---------- */

  function buildWhatsAppLink(origin, productName) {
    const messages = config.messages;
    const text = origin === "product" ? messages.product(productName) : messages[origin];
    return `https://wa.me/${config.whatsappPhone}?text=${encodeURIComponent(text)}`;
  }

  function setExternalLink(anchor, href) {
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener";
  }

  function hydrateWhatsAppLinks(root) {
    root.querySelectorAll("[data-whatsapp]").forEach((anchor) => {
      setExternalLink(anchor, buildWhatsAppLink(anchor.dataset.whatsapp, anchor.dataset.productName));
    });
  }

  /* ---------- Menu mobile ---------- */

  function initMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    const iconOpen = toggle.querySelector("[data-icon='open']");
    const iconClose = toggle.querySelector("[data-icon='close']");

    function setOpen(open) {
      menu.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      iconOpen.classList.toggle("hidden", open);
      iconClose.classList.toggle("hidden", !open);
    }

    toggle.addEventListener("click", () => setOpen(menu.classList.contains("hidden")));

    menu.querySelectorAll("[data-nav-link]").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.classList.contains("hidden")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Vitrine (contracts/ui-contracts.md §6) ---------- */

  const FILTER_LABELS = { todos: "Todas as peças", lancamentos: "Lançamentos" };
  (window.CATEGORIES || []).forEach((category) => {
    FILTER_LABELS[category.id] = category.label;
  });

  const FILTER_ACTIVE = ["border-ink", "bg-ink", "text-white"];
  const FILTER_INACTIVE = ["border-line", "bg-white", "text-ink"];

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function createBuyButton(product, className) {
    const anchor = el("a", className);
    anchor.dataset.whatsapp = "product";
    anchor.dataset.productName = product.name;
    anchor.setAttribute("aria-label", `Garantir ${product.name} no WhatsApp`);
    setExternalLink(anchor, buildWhatsAppLink("product", product.name));
    anchor.insertAdjacentHTML("afterbegin", WHATSAPP_ICON);
    anchor.append(el("span", "", "Garantir no WhatsApp"));
    return anchor;
  }

  function createProductCard(product) {
    const card = el("article", "product-card group flex flex-col bg-white");
    card.dataset.category = product.category;

    const media = el("div", "relative aspect-[3/4] overflow-hidden bg-surface");
    if (product.badge) {
      media.append(
        el(
          "span",
          "absolute left-3 top-3 z-10 bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white",
          product.badge
        )
      );
    }

    const image = el(
      "img",
      "h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
    );
    image.src = product.image;
    image.alt = product.alt;
    image.width = 600;
    image.height = 800;
    image.loading = "lazy";
    image.decoding = "async";
    media.append(image);

    // Botão para mouse/trackpad: desliza sobre a imagem no hover ou no foco do teclado
    media.append(
      createBuyButton(
        product,
        "absolute inset-x-0 bottom-0 z-10 hidden min-h-11 translate-y-full items-center justify-center gap-2 bg-brand px-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-dark focus-visible:translate-y-0 group-hover:translate-y-0 group-focus-within:translate-y-0 motion-safe:transition-transform motion-safe:duration-300 pointer-fine:flex"
      )
    );

    const info = el("div", "flex flex-1 flex-col p-4 text-center");
    info.append(el("span", "text-[11px] uppercase tracking-widest text-muted", FILTER_LABELS[product.category]));
    info.append(el("h3", "mt-1 text-sm font-semibold text-ink sm:text-base", product.name));
    info.append(el("p", "mt-1 text-xs text-muted", product.material));
    if (product.price) {
      info.append(el("p", "mt-2 text-sm font-semibold text-ink", product.price));
    }

    // Botão para toque: sempre visível, pode quebrar em 2 linhas sem estourar o card
    const touchWrapper = el("div", "mt-auto pt-4 pointer-fine:hidden");
    touchWrapper.append(
      createBuyButton(
        product,
        "flex min-h-11 w-full items-center justify-center gap-2 bg-brand px-3 py-2 text-center text-xs font-semibold uppercase leading-tight tracking-wider text-white hover:bg-brand-dark"
      )
    );
    info.append(touchWrapper);

    card.append(media, info);
    return card;
  }

  function filterProducts(filter) {
    const products = window.PRODUCTS || [];
    if (filter === "todos") return products;
    if (filter === "lancamentos") return products.filter((product) => product.isNew === true);
    return products.filter((product) => product.category === filter);
  }

  function renderProducts(filter) {
    const grid = document.getElementById("products-grid");
    const empty = document.getElementById("products-empty");
    const status = document.getElementById("products-status");
    if (!grid) return;

    const products = filterProducts(filter);
    grid.replaceChildren(...products.map(createProductCard));
    empty.classList.toggle("hidden", products.length > 0);

    const count = products.length === 1 ? "1 peça" : `${products.length} peças`;
    status.textContent = `Mostrando ${count} · ${FILTER_LABELS[filter]}`;
  }

  function setActiveFilter(filter) {
    document.querySelectorAll("#product-filters [data-filter]").forEach((button) => {
      const active = button.dataset.filter === filter;
      button.setAttribute("aria-pressed", String(active));
      button.classList.remove(...(active ? FILTER_INACTIVE : FILTER_ACTIVE));
      button.classList.add(...(active ? FILTER_ACTIVE : FILTER_INACTIVE));
    });
    renderProducts(filter);
  }

  function initFilters() {
    document.querySelectorAll("#product-filters [data-filter]").forEach((button) => {
      button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
    });

    // Cards de categoria: a âncora rola até #colecoes e aqui aplicamos o filtro
    document.querySelectorAll("[data-filter-target]").forEach((link) => {
      link.addEventListener("click", () => setActiveFilter(link.dataset.filterTarget));
    });

    setActiveFilter("todos");
  }

  /* ---------- Inicialização ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    hydrateWhatsAppLinks(document);
    initMobileMenu();
    initFilters();
  });
})();
