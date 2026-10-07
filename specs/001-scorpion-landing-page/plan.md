# Implementation Plan: Landing Page Scorpion gytano

**Branch**: `001-scorpion-landing-page` | **Date**: 2026-10-07 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-scorpion-landing-page/spec.md`

## Summary

Desenvolver a landing page moderna e de alta conversão para a marca de moda **Scorpion gytano**, estruturada em 7 seções estratégicas orientadas a vendas humanizadas via WhatsApp. A solução adota arquitetura estática leve (HTML5 semântico, Tailwind CSS utilitário e Vanilla JavaScript puro), layout com fundo predominantemente escuro (`#0A0A0A` / `#111111`) mesclado com a imagem de capa (`./assets/img/capa.jpg`), gradientes nas extremidades para telas ultra-wide, tipografia moderna self-hosted ("Outfit" para títulos e "Montserrat" para corpo) armazenada em `assets/fonts/`, logotipo com alto contraste, filtros dinâmicos de produtos por categoria, efeito de zoom suave nos cards, e botão flutuante pulsante de WhatsApp fixo em todas as telas.

## Technical Context

**Language/Version**: HTML5 semântico, CSS3 / Tailwind CSS, Vanilla JavaScript (ES6+).

**Primary Dependencies**: Tailwind CSS para classes utilitárias e design tokens; Google Fonts ("Outfit" e "Montserrat") baixadas e servidas localmente em formato `.woff2` (self-hosting).

**Storage**: N/A (Estrutura estática com dados do catálogo e depoimentos organizados de forma declarativa e modular).

**Testing**: Validação visual responsiva em emuladores móveis (320px, 375px, 412px), tablets (768px) e monitores (1024px a 2560px); verificação de ausência de rolagem horizontal (`overflow-x`); auditoria de Core Web Vitals / Lighthouse (Performance >= 90, SEO >= 90, Acessibilidade >= 90); testes de redirecionamento de links de WhatsApp com mensagens contextualizadas.

**Target Platform**: Navegadores modernos (Google Chrome, Safari, Microsoft Edge, Mozilla Firefox) em smartphones (iOS e Android) e computadores desktop.

**Project Type**: Single-page static web application (Landing Page comercial).

**Performance Goals**: First Contentful Paint (FCP) < 1,0s; Largest Contentful Paint (LCP) < 1,5s; Cumulative Layout Shift (CLS) = 0; Pontuação Lighthouse >= 90 em todas as categorias.

**Constraints**:
- Zero rolagem horizontal em qualquer largura a partir de 320px.
- Áreas mínimas de toque de 44x44px para botões e links em dispositivos móveis.
- Conformidade estrita com a paleta de cores: preto (`#0A0A0A`/`#111111`), vermelho de ação (`#DC2626`/`#B91C1C`), tons de cinza neutros e branco.
- Self-hosting obrigatório de fontes em `site/assets/fonts/`.
- Fundo escuro com gradientes de transição para cobrir resoluções ultra-wide sem bordas duras.

**Scale/Scope**: 1 página única contendo 7 seções bem delimitadas, catálogo inicial com ~8-12 produtos distribuídos em 4 categorias, 4 diferenciais de serviço, 3-4 depoimentos de clientes e 6 fotos de mosaico do Instagram.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Princípio Constitucional | Requisito do Projeto | Status | Justificativa / Conformidade |
|--------------------------|----------------------|--------|------------------------------|
| **I. Mobile-First & Responsividade Absoluta** | Largura mínima 320px, sem overflow-x, toque >= 44px | **PASS** | Layout e CSS concebidos para mobile com touch targets ergonômicos e flex/grid responsivo. |
| **II. Estética Limpa, Sofisticada & Paleta** | Vermelho (#DC2626/#B91C1C) para CTAs, fundo escuro (#0A0A0A), contraste alto | **PASS** | Hero section com sobreposição suave de gradientes, logo em alto contraste e foco no vestuário. |
| **III. Conversão Contínua via WhatsApp** | CTAs estratégicos, botão flutuante com pulso, links inteligentes | **PASS** | Mensagens pré-formatadas contextualizadas por produto e botão flutuante fixo no canto inferior direito. |
| **IV. Carregamento Ultra-Rápido** | Imagens WebP, lazy loading, fontes self-hosted, script defer | **PASS** | Fontes locais WOFF2 com `font-display: swap`, scripts no fim do body e imagens comprimidas. |
| **V. Arquitetura Leve & Semântica** | HTML5 + Tailwind CSS + Vanilla JS em `site/` | **PASS** | Estrutura pura e manutenível sem frameworks pesados de frontend. |
| **VI. Localização pt-BR & SEO/OG** | Português brasileiro, metatags de SEO e Open Graph ricas | **PASS** | Metadados completos para compartilhamento no WhatsApp e textos 100% em pt-BR. |

*Resultado da Avaliação do Gate*: **APROVADO (6/6 Princípios Satisfeitos)**.

## Project Structure

### Documentation (this feature)

```text
specs/001-scorpion-landing-page/
├── plan.md              # Este plano de implementação
├── research.md          # Pesquisa técnica e decisões de arquitetura e design
├── data-model.md        # Modelo de entidades, produtos e configurações
├── quickstart.md        # Roteiro de inicialização e testes ponta a ponta
├── contracts/           # Contratos de componentes, interface e URLs
│   └── ui-contracts.md  # Estrutura do DOM, atributos e esquema de links do WhatsApp
└── checklists/          # Checklists de qualidade
    └── requirements.md  # Checklist de validação da especificação
```

### Source Code (repository root)

```text
site/
├── index.html                      # Landing page única e ponto de entrada da aplicação
└── assets/
    ├── css/
    │   └── styles.css              # Estilos personalizados, animações e utilitários Tailwind
    ├── js/
    │   ├── main.js                 # Smooth scroll, menu mobile, botão flutuante e helpers
    │   └── catalog.js              # Estrutura declarativa de produtos e lógica de filtros
    ├── fonts/
    │   ├── outfit-bold.woff2       # Tipografia para títulos principais da Hero e seções
    │   ├── outfit-semibold.woff2   # Tipografia para subtítulos e badges
    │   └── montserrat-regular.woff2# Tipografia para corpo de texto institucional
    └── img/
        ├── logo.png                # Logotipo Scorpion gytano com transparência
        ├── capa.jpg                # Imagem de fundo/banner da Hero Section
        ├── produtos/               # Imagens otimizadas das peças de vestuário e acessórios
        └── insta/                  # Imagens de lookbook e estilo para o mosaico do Instagram
```

**Structure Decision**: A estrutura segue rigorosamente o padrão fixado na Constituição do projeto (`site/` como raiz pública com subpastas `assets/css/`, `assets/js/`, `assets/img/` e adicionando `assets/fonts/` para o self-hosting de fontes solicitado).

## Complexity Tracking

> **Nenhuma violação ou desvio dos princípios constitucionais foi necessária.**

| Verificação | Status | Observação |
|-------------|--------|------------|
| Dependências externas pesadas | Nenhuma | Uso exclusivo de Vanilla JS, Tailwind CSS e fontes locais. |
| Complexidade de build | Mínima | Arquivos prontos para execução em qualquer servidor estático ou CDN. |
| Escalabilidade do catálogo | Alta | O catálogo em `catalog.js` permite fácil inclusão/remoção de peças. |
