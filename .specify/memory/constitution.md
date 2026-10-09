# Scorpion gytano Constitution

## Core Principles

### I. Mobile-First & Responsividade Absoluta (NON-NEGOTIABLE)

A landing page DEVE ser concebida e desenvolvida com abordagem Mobile-First estrita, priorizando a experiência em dispositivos móveis (smartphones) e expandindo progressivamente para tablets e desktops.

- Todos os elementos visuais, grades de produtos, cabeçalho e navegação DEVEM ser concebidos e testados primariamente para telas móveis (largura mínima suportada: 320px).
- Nenhum componente ou elemento DEVE causar overflow horizontal (`scroll-x` indesejado) em qualquer resolução de tela.
- Elementos interativos e botões de toque DEVEM respeitar áreas mínimas de contato (mínimo de 44x44px) para ergonomia tátil ideal em smartphones.

**Rationale**: O público-alvo de vestuário e moda originado de redes sociais (Instagram, TikTok) e links diretos acessa massivamente via smartphones; qualquer falha na ergonomia móvel acarreta perda imediata de conversão.

### II. Estética Editorial Clara, Sofisticada e Paleta de Alto Contraste

O design visual DEVE manter uma apresentação moderna, editorial e focada na vitrine de produtos e coleções, evitando qualquer tipo de poluição visual. O tema base é CLARO.

- A paleta DEVE se limitar aos seguintes tokens:

  | Papel | Cor | Uso |
  |-------|-----|-----|
  | Fundo | `#FFFFFF` | Fundo principal da página |
  | Superfície | `#F5F5F4` | Seções alternadas e fundos de vitrine |
  | Borda | `#E7E5E4` | Divisórias e contornos de cards |
  | Tinta | `#111111` | Títulos e texto principal; fundo da faixa superior e do rodapé |
  | Texto secundário | `#57534E` | Descrições, materiais, categorias |
  | Vermelho da marca | `#DC2626` | CTAs e destaques (badges, rótulos, sublinhados) |
  | Vermelho escuro | `#B91C1C` | Hover de CTAs e texto vermelho em tamanho pequeno |
  | Vermelho sobre escuro | `#EF4444` | Texto e destaques vermelhos sobre fundo `#111111` |

- O vermelho DEVE ser usado com moderação, restrito a ações e destaques, para preservar sua função de direcionar o olhar.
- **Exceção WhatsApp**: os botões que abrem o WhatsApp (atendimento do cabeçalho, "Garantir no WhatsApp" dos cards de produto, "Falar no WhatsApp" do rodapé e botão flutuante) PODEM usar o verde oficial `#25D366`. Todo texto sobre esse verde DEVE ser `#111111` (branco sobre `#25D366` tem apenas 1,98:1 de contraste). O ícone branco do WhatsApp é permitido por ser o logotipo oficial. Nenhum outro elemento DEVE usar o verde.
- Todo par de texto e fundo DEVE atender WCAG AA (contraste mínimo de 4,5:1 para texto normal e 3:1 para texto grande).
- As imagens de vestuário e acessórios DEVEM apresentar alta definição e enquadramento padronizado, mantendo o protagonismo estético da interface.
- O layout DEVE empregar respiro visual generoso (espaçamento consistente e tipografia limpa), sem poluição por excesso de efeitos gráficos concorrentes.

**Rationale**: A percepção de sofisticação e valor de uma marca de moda está diretamente ligada à clareza visual e à elegância da vitrine. O tema claro editorial foi aprovado pelo cliente; o vermelho direciona o olhar para a ação sem sobrecarregar a experiência, e o verde oficial torna o canal de WhatsApp reconhecível de imediato.

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

### V. Arquitetura Estática Pura (HTML5 + CSS + Vanilla JS, sem build)

A solução técnica DEVE adotar uma arquitetura de página única (Landing Page) 100% estática, enxuta e manutenível: o repositório contém apenas código-fonte que o navegador executa diretamente.

- O documento DEVE ser estruturado em HTML5 estritamente semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- A estilização DEVE ficar em CSS estático (`site/assets/css/styles.css`), organizado em classes utilitárias no padrão do Tailwind (o arquivo foi gerado uma vez com Tailwind CSS 3.4 e é mantido à mão). Classes novas DEVEM ser escritas diretamente nesse arquivo.
- A interatividade (menu mobile responsivo, filtros de coleções/categorias e geração de links de WhatsApp) DEVE ser construída em Vanilla JavaScript puro.
- O projeto NÃO DEVE depender de Node.js, gerenciadores de pacotes (npm, yarn), frameworks ou etapas de build. Nenhum `package.json`, `node_modules` ou arquivo de configuração de ferramenta de build DEVE existir no repositório.

**Rationale**: Um site sem build pode ser editado, testado e publicado em qualquer hospedagem estática sem instalar nada, o que simplifica a manutenção pela equipe e elimina dependências de terceiros e suas vulnerabilidades.

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
    ├── css/                    # styles.css estático (classes utilitárias, mantido à mão)
    ├── js/                     # Scripts Vanilla JS (menu mobile, filtros, links WhatsApp)
    ├── fonts/                  # Fontes self-hosted em formato .woff2
    └── img/                    # Imagens de coleções, produtos (WebP), logo e banners
```

- Nomes de arquivos DEVEM utilizar convenção `kebab-case` minúscula e sem caracteres especiais ou acentuação (ex: `hero-banner.webp`, `menu-mobile.js`).
- Não DEVEM ser criados arquivos fora dessa estrutura para o entregável do site estático.
- Fora de `site/`, o repositório contém apenas documentação (`README.md`, `specs/`, `.specify/`) e configuração do editor/agente (`.claude/`). Não há arquivos de build.
- Imagens novas DEVEM ser convertidas para WebP antes de entrar em `site/assets/img/` (com qualquer ferramenta externa, como o Squoosh no navegador), sem adicionar ferramentas ao repositório.

## Referência Visual

O layout DEVE seguir como referência visual o template aprovado pelo cliente: [nodeckagency/clothing-store-landing-page](https://github.com/nodeckagency/clothing-store-landing-page) (estilo editorial claro, cantos retos, títulos em caixa alta com espaçamento entre letras, faixa de benefícios com ícones, cards de categoria com imagem alta, rodapé escuro em colunas).

- O template é referência visual, não fonte de código: o repositório não possui LICENSE, portanto o código DEVE ser reescrito (HTML, CSS próprio e Vanilla JS), sem cópia literal.
- Os elementos de e-commerce do template (carrinho, contador de itens, busca, favoritos) e a newsletter NÃO DEVEM ser incluídos, pois a conversão ocorre exclusivamente via WhatsApp (Princípio III).
- Dependências externas do template (Font Awesome via CDN, Google Fonts via CDN, imagens do Unsplash) DEVEM ser substituídas por ícones SVG inline, fontes self-hosted e imagens próprias da marca (Princípio IV).

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

### Histórico de Emendas

| Versão | Data | Mudança |
|--------|------|---------|
| 1.0.0 | 2026-10-06 | Ratificação inicial |
| 1.1.0 | 2026-10-08 | Princípio II: tema claro editorial, tokens de cor, exceção do verde WhatsApp e contraste WCAG AA. Estrutura: `site/assets/fonts/` e arquivos de build do Tailwind na raiz. Nova seção "Referência Visual" (template aprovado pelo cliente). |
| 1.2.0 | 2026-10-08 | Princípio II: exceção do verde WhatsApp ampliada para todos os botões que abrem o WhatsApp (inclusive os cards de produto e o rodapé), a pedido do responsável do projeto: o verde identifica o canal de compra. |
| 2.0.0 | 2026-10-09 | **MAJOR**: Princípio V redefinido de "HTML5 + Tailwind CSS + Vanilla JS" para arquitetura estática pura, sem Node.js, npm, frameworks ou build. O CSS gerado pelo Tailwind passa a ser mantido à mão em `styles.css`. Removida a regra de arquivos de build na raiz. Pedido do responsável do projeto. |

**Version**: 2.0.0 | **Ratified**: 2026-10-06 | **Last Amended**: 2026-10-09
