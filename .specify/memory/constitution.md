<!--
SYNC IMPACT REPORT
==================
- Version change: Unversioned Scaffold -> 1.0.0
- Modified principles:
  * [PRINCIPLE_1_NAME] -> I. Mobile-First & Responsividade Absoluta (NON-NEGOTIABLE)
  * [PRINCIPLE_2_NAME] -> II. Estética Visual Limpa, Sofisticada e Paleta de Alto Contraste
  * [PRINCIPLE_3_NAME] -> III. Conversão Contínua e Integrada via WhatsApp
  * [PRINCIPLE_4_NAME] -> IV. Carregamento Ultra-Rápido e Otimização de Mídias
  * [PRINCIPLE_5_NAME] -> V. Arquitetura Leve e Semântica (HTML5 + Tailwind CSS + Vanilla JS)
  * [PRINCIPLE_6_NAME] -> VI. Localização pt-BR e Excelência em SEO/Open Graph
- Added sections:
  * Estrutura de Diretórios e Padrões Técnicos (substituindo [SECTION_2_NAME])
  * Diretrizes de Qualidade e Critérios de Aceite (substituindo [SECTION_3_NAME])
- Removed sections:
  * None
- Follow-up TODOs:
  * None
-->

# Scorpion gytano Constitution

## Core Principles

### I. Mobile-First & Responsividade Absoluta (NON-NEGOTIABLE)

A landing page DEVE ser concebida e desenvolvida com abordagem Mobile-First estrita, priorizando a experiência em dispositivos móveis (smartphones) e expandindo progressivamente para tablets e desktops.

- Todos os elementos visuais, grades de produtos, cabeçalho e navegação DEVEM ser concebidos e testados primariamente para telas móveis (largura mínima suportada: 320px).
- Nenhum componente ou elemento DEVE causar overflow horizontal (`scroll-x` indesejado) em qualquer resolução de tela.
- Elementos interativos e botões de toque DEVEM respeitar áreas mínimas de contato (mínimo de 44x44px) para ergonomia tátil ideal em smartphones.

**Rationale**: O público-alvo de vestuário e moda originado de redes sociais (Instagram, TikTok) e links diretos acessa massivamente via smartphones; qualquer falha na ergonomia móvel acarreta perda imediata de conversão.

### II. Estética Visual Limpa, Sofisticada e Paleta de Alto Contraste

O design visual DEVE manter uma apresentação moderna, elegante e focada na vitrine de produtos e coleções, evitando qualquer tipo de poluição visual.

- A paleta de cores DEVE adotar o vermelho marcante (#DC2626 / #B91C1C) como cor primária de destaque e chamada para ação (CTAs).
- As cores de suporte e fundo DEVEM ser compostas estritamente por tons neutros: preto (#000000 / #111111) para elegância e sobriedade, combinado com branco e cinza claro para alto contraste e legibilidade impecável dos textos.
- As imagens de vestuário e acessórios DEVEM apresentar alta definição e enquadramento padronizado, mantendo o protagonismo estético da interface.
- O layout DEVE empregar respiro visual generoso (espaçamento consistente e tipografia limpa), sem poluição por excesso de efeitos gráficos concorrentes.

**Rationale**: A percepção de sofisticação e valor de uma marca de moda está diretamente ligada à clareza visual e à elegância da vitrine; o vermelho direciona o olhar para a ação sem sobrecarregar a experiência.

### III. Conversão Contínua e Integrada via WhatsApp

O objetivo comercial primário da landing page é conduzir o visitante ao atendimento e fechamento de vendas diretamente via WhatsApp.

- Botões de Call to Action (CTA) expressivos — como "Falar com Vendedor" e "Comprar pelo WhatsApp" — DEVEM estar visíveis em seções estratégicas: dobra inicial (hero), vitrines de coleções, destaques de produtos e rodapé.
- Um botão flutuante oficial do WhatsApp DEVE permanecer fixo no canto inferior da tela, acessível durante toda a navegação e sem ocultar conteúdos vitais da página.
- Os links para o WhatsApp DEVEM ser inteligentes e pré-formatados, incluindo mensagem codificada que identifique o contexto ou produto clicado pelo usuário (ex: "Olá! Gostaria de saber mais sobre o produto X da Scorpion gytano").

**Rationale**: O funil de vendas é centrado no atendimento humanizado e na agilidade da negociação via mensageiro instantâneo, diminuindo atrito e maximizando o fechamento.

### IV. Carregamento Ultra-Rápido e Otimização de Mídias

A landing page DEVE ser otimizada para carregamento quase instantâneo, mesmo em conexões móveis com restrição de banda.

- Todas as imagens de produtos, banners e logotipo DEVEM ser disponibilizadas em formatos modernos e leves (prioritariamente WebP), devidamente comprimidas sem perda perceptível de qualidade.
- Imagens fora da primeira dobra de visualização DEVEM utilizar carregamento sob demanda (`loading="lazy"`).
- Scripts JavaScript DEVEM ser carregados no final do `<body>` ou com atributo `defer`, evitando bloqueio da renderização crítica do DOM.
- Recursos externos como fontes e CDN de estilos DEVEM ser pré-conectados (`dns-prefetch` / `preconnect`) e limitados ao estritamente necessário.

**Rationale**: Páginas lentas apresentam taxas de rejeição elevadas em campanhas de moda; a velocidade de renderização assegura a retenção de tráfego móvel.

### V. Arquitetura Leve e Semântica (HTML5 + Tailwind CSS + Vanilla JS)

A solução técnica DEVE adotar uma arquitetura de página única (Landing Page) pura, enxuta e manutenível, sem dependência de frameworks JavaScript pesados ou complexidade desnecessária.

- O documento DEVE ser estruturado em HTML5 estritamente semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- A estilização DEVE ser realizada com Tailwind CSS para consistência utilitária e desenvolvimento ágil, complementada por CSS personalizado quando necessário.
- A interatividade (menu mobile responsivo, filtros de coleções/categorias e geração de links de WhatsApp) DEVE ser construída em Vanilla JavaScript puro, sem dependências volumosas de terceiros.

**Rationale**: Manter a pilha técnica pura em HTML5, Tailwind CSS e Vanilla JS garante confiabilidade, manutenibilidade facilitada, custo zero de hidratação de scripts e performance máxima.

### VI. Localização pt-BR e Excelência em SEO/Open Graph

A página DEVE ser totalmente adaptada ao contexto brasileiro e configurada para excelente indexação e compartilhamento social.

- Todos os textos, títulos, microcópias, alertas e descrições de produtos DEVEM estar redigidos em português do Brasil (`lang="pt-BR"`).
- O cabeçalho HTML DEVE conter metatags de SEO completas: `<title>` descritivo, `<meta name="description">` persuasiva e otimizada para busca no Google, além de metatags canônicas e de viewport.
- Metatags de Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) e Twitter Cards DEVEM ser configuradas com imagens de pré-visualização adequadas para compartilhamentos ricos no WhatsApp e redes sociais.

**Rationale**: Metadados ricos aumentam drasticamente a taxa de cliques (CTR) quando links da loja são compartilhados em conversas de WhatsApp e grupos de moda, enquanto a indexação semântica atrai clientes orgânicos locais.

## Estrutura de Diretórios e Padrões Técnicos

O projeto DEVE respeitar rigorosamente a seguinte organização de arquivos:

```text
site/
├── index.html                  # Landing page única e ponto de entrada da aplicação
└── assets/
    ├── css/                    # Estilos personalizados e/ou compilação de Tailwind CSS
    ├── js/                     # Scripts Vanilla JS (menu mobile, filtros, links WhatsApp)
    └── img/                    # Imagens de coleções, produtos (WebP), logo e banners
```

- Nomes de arquivos DEVEM utilizar convenção `kebab-case` minúscula e sem caracteres especiais ou acentuação (ex: `hero-banner.webp`, `menu-mobile.js`).
- Não DEVEM ser criados arquivos fora dessa estrutura para o entregável do site estático.

## Diretrizes de Qualidade e Critérios de Aceite

Toda entrega ou alteração no projeto DEVE satisfazer os seguintes critérios de aceite antes de ser considerada concluída:

1. **Responsividade Multi-Dispositivo**: A interface DEVE ser validada em resoluções de smartphone (320px, 375px, 412px), tablets (768px) e desktops (1024px, 1440px), sem overflow horizontal.
2. **Funcionamento de CTAs e WhatsApp**: Todos os botões de ação e o botão flutuante DEVEM abrir o WhatsApp com o número correto e a mensagem de intenção pré-preenchida.
3. **Métricas de Performance e SEO**: O site DEVE atingir pontuações elevadas no Google Lighthouse (Performance >= 90, Acessibilidade >= 90, SEO >= 90).
4. **Verificação de Assets**: 100% das imagens exibidas DEVEM carregar com sucesso, possuir atributo `alt` acessível e estar em formato otimizado (WebP).
5. **Pré-visualização Social**: O compartilhamento do link da página DEVE exibir corretamente o título, descrição e imagem de destaque nas plataformas de mensagem.

## Governance

- Esta constituição é o documento regulatório supremo para o desenvolvimento, manutenção e evolução da landing page da loja Scorpion gytano.
- Todas as especificações técnicas (`spec.md`), planos (`plan.md`) e tarefas (`tasks.md`) DEVEM respeitar integralmente os princípios e restrições aqui fixados.
- **Processo de Emenda**: Qualquer alteração nesta constituição DEVE ser formalizada com justificativa clara, atualização do número de versão e registro no histórico de emendas.
- **Política de Versionamento**:
  - `MAJOR`: Quebra estrutural, substituição de stack tecnológica ou pivot do modelo comercial de conversão.
  - `MINOR`: Inclusão ou expansão substancial de princípios, seções ou diretrizes técnicas.
  - `PATCH`: Correções de texto, ajustes de estilo e esclarecimentos de termos sem alteração de escopo.
- **Auditoria de Conformidade**: Cada pull request ou incremento de código deve passar por verificação de conformidade com os princípios desta constituição antes da aprovação final.

**Version**: 1.0.0 | **Ratified**: 2026-10-06 | **Last Amended**: 2026-10-06
