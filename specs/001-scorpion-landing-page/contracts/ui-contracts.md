# Interface & Component Contracts: Landing Page Scorpion gytano

**Feature**: `001-scorpion-landing-page`  
**Date**: 2026-10-07  
**Status**: Validated

Este documento especifica os contratos de interface do usuário, estrutura de componentes semânticos, atributos do DOM, identificadores (`id`s) e contratos de protocolo de redirecionamento para o WhatsApp.

---

## 1. Contrato da Navbar / Cabeçalho (`<header id="header">`)

| Elemento | Seletor / ID | Papel / Comportamento |
|----------|--------------|-----------------------|
| Contêiner Header | `#navbar` | Fixo no topo (`sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-neutral-800`). |
| Logotipo | `#brand-logo` | Link para `#hero` contendo a imagem da marca com `alt="Scorpion gytano"`. |
| Links de Navegação | `[data-nav-link]` | Âncoras com rolagem suave para: `#hero`, `#colecoes`, `#sobre`, `#diferenciais`, `#depoimentos`. |
| Botão WhatsApp Header | `#btn-whatsapp-header` | Link com destaque vermelho/verde para atendimento imediato: `https://wa.me/{phone}?text={encodedText}`. |
| Botão Menu Mobile | `#btn-mobile-menu` | Botão com área de toque mínima de 44x44px que alterna o estado do menu móvel (`aria-expanded="false|true"`). |
| Menu Mobile Drawer | `#mobile-drawer` | Menu deslizante/recolhível para telas < 768px (`md:hidden`). |

---

## 2. Contrato da Hero Section (`<section id="hero">`)

### Hierarquia Mobile-First Obrigatória
Em telas móveis (`< 768px`), os elementos devem seguir rigorosamente a ordem:
1. `#hero-logo`: Logotipo da marca com tratamento de alto contraste sobre o fundo escuro.
2. `#hero-headline`: Título principal `<h1>`: *"Estilo, Atitude e Exclusividade em Cada Peça"*.
3. `#hero-description`: Texto corrido sem tópicos descrevendo a proposta de valor e curadoria da Scorpion gytano.
4. `#hero-cta-btn`: Botão CTA principal em vermelho marcante (`#DC2626` / `#B91C1C`): *"Ver Coleção & Falar com Vendedor"*.

### Camadas Visuais e Gradientes
```text
[Camada 0 - Base]: bg-[#0A0A0A]
[Camada 1 - Mídia]: ./assets/img/capa.jpg com object-cover
[Camada 2 - Gradiente]: Overlay linear-to-b (rgba(10,10,10,0.5) até #0A0A0A) + vinheta lateral
[Camada 3 - Conteúdo]: flex flex-col items-center text-center z-10
```

---

## 3. Contrato da Vitrine de Produtos (`<section id="colecoes">`)

### Filtros de Categoria (`#product-filters`)
- Cada botão de filtro deve conter o atributo `data-filter="[categoria]"`:
  - `data-filter="todos"` (ativo por padrão)
  - `data-filter="masculino"`
  - `data-filter="feminino"`
  - `data-filter="acessorios"`
  - `data-filter="lancamentos"`
- O botão ativo deve possuir classe de destaque visual (fundo vermelho ou borda ativa) e atributo `aria-pressed="true"`.

### Card de Produto (`.product-card`)
Cada card dentro do grid (`#products-grid`) deve seguir a seguinte estrutura semântica:
```html
<article class="product-card group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-red-600/50 hover:shadow-red-950/20" data-category="{categoria}">
  <div class="relative overflow-hidden aspect-[3/4] bg-neutral-950">
    <span class="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-red-600 text-white shadow-md">
      {badge} <!-- ex: Mais Vendido, Lançamento -->
    </span>
    <img src="{image}" alt="{nome}" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" loading="lazy">
  </div>
  <div class="p-5 flex flex-col justify-between flex-1">
    <div>
      <span class="text-xs uppercase tracking-widest text-neutral-400 font-medium">{categoria}</span>
      <h3 class="text-lg font-bold text-white mt-1 group-hover:text-red-500 transition-colors">{nome}</h3>
      <p class="text-xs text-neutral-400 mt-1 line-clamp-2">{tecido_material}</p>
    </div>
    <div class="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
      <span class="text-sm font-bold text-neutral-200">{preco_opcional}</span>
      <a href="{link_whatsapp}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-card inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-red-600/30">
        Garantir no WhatsApp
      </a>
    </div>
  </div>
</article>
```

---

## 4. Contrato dos Diferenciais (`<section id="diferenciais">`)

Grid de 4 colunas em desktop e 1 a 2 colunas em mobile:
- **Card 1**: `🚀 Envio Rápido e Seguro` - Entrega rápida e rastreada para todo o Brasil.
- **Card 2**: `💬 Atendimento VIP via WhatsApp` - Ajuda personalizada na escolha de tamanho e caimento.
- **Card 3**: `💳 Pagamento Facilitado` - Pix com desconto e Cartão de Crédito em até 12x.
- **Card 4**: `🔥 Peças Exclusivas & Qualidade Premium` - Curadoria rigorosa de tecidos e costura reforçada.

---

## 5. Contrato do Botão Flutuante do WhatsApp (`#floating-whatsapp`)

```html
<aside id="floating-whatsapp" class="fixed bottom-5 right-5 z-50">
  <a href="{whatsappLinkGeral}" target="_blank" rel="noopener noreferrer" aria-label="Falar com a Scorpion gytano no WhatsApp" class="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95">
    <!-- Efeito de pulso suave -->
    <span class="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 group-hover:opacity-50"></span>
    <!-- Ícone oficial do WhatsApp em SVG -->
    <svg class="w-8 h-8 sm:w-9 sm:h-9 text-white relative z-10 fill-current" viewBox="0 0 24 24">...</svg>
    <!-- Tooltip desktop no hover -->
    <span class="hidden md:group-hover:flex absolute right-full mr-3 px-3 py-1.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap border border-neutral-700">
      Atendimento WhatsApp
    </span>
  </a>
</aside>
```

---

## 6. Contrato de Protocolo de Redirecionamento WhatsApp

### Formato Padrão da URL
```text
https://wa.me/{numero_telefone}/?text={mensagem_codificada}
```

### Regras de Codificação
1. `{numero_telefone}`: Apenas dígitos, incluindo DDI do Brasil (`55`), DDD e número (ex: `5511999999999`).
2. `{mensagem_codificada}`: String processada por `encodeURIComponent(mensagem)`.

### Esquema de Mensagens por Origem
| Origem do Clique | Template de Mensagem |
|------------------|----------------------|
| **Header CTA** | `"Olá! Gostaria de um atendimento personalizado na Scorpion gytano."` |
| **Hero Principal** | `"Olá! Vi a apresentação da Scorpion gytano e quero falar com um vendedor para conhecer as peças exclusivas."` |
| **Card de Produto** | `"Olá! Gostaria de garantir a peça *{nome_do_produto}* da Scorpion gytano. Poderiam me passar mais informações de tamanhos e envio?"` |
| **Botão Flutuante** | `"Olá! Estou no site da Scorpion gytano e gostaria de tirar algumas dúvidas sobre as coleções."` |
| **Footer** | `"Olá! Gostaria de falar com o time de suporte da Scorpion gytano."` |
