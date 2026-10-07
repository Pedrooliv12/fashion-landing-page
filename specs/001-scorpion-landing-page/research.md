# Research & Technical Decisions: Landing Page Scorpion gytano

**Feature**: `001-scorpion-landing-page`  
**Date**: 2026-10-07  
**Status**: Completed

Este documento consolida as pesquisas técnicas, arquiteturais e de design para a implementação da landing page da **Scorpion gytano**, atendendo aos requisitos da especificação e às diretrizes da constituição do projeto.

---

## 1. Hero Section: Composição Visual, Imagem de Capa e Gradientes

### Contexto
A Hero Section precisa causar impacto imediato em dispositivos móveis e desktops, combinando a imagem de fundo (`./assets/img/capa.jpg`), a logo da marca (`./assets/img/logo.png`), a headline de alto impacto, o texto institucional corrido e o CTA em vermelho marcante. Em resoluções ultra-wide ou telas maiores que a proporção da imagem, é necessário evitar cortes abruptos ou faixas em branco.

### Decisão
- Utilizar fundo escuro base (`#0A0A0A` / `#111111`) como cor do contêiner da Hero Section.
- Aplicar a imagem de capa através de um elemento de mídia com `object-fit: cover` ou via background CSS com sobreposição de camada gradiente escura (radial/linear com paradas de opacidade entre 60% e 90% de preto).
- Para transição suave em resoluções ultra-wide (onde a imagem possa atingir seu limite ou requerer enquadramento controlado), aplicar máscara de degradê/gradiente linear horizontal e vertical (`linear-gradient(to bottom, rgba(10,10,10,0.4), #0A0A0A)` e `linear-gradient(to right, #0A0A0A, transparent 20%, transparent 80%, #0A0A0A)`) com sutis reflexos no tom vermelho bordô (`#B91C1C`) nos pontos focais de iluminação.
- Sobre a logo (`./assets/img/logo.png`), garantir contraste adicionando classe de tratamento visual (filtro `brightness(0) invert(1)` ou `drop-shadow` suave) para assegurar legibilidade absoluta sobre a textura escura da capa.

### Rationale
- Garante imersão cinematográfica e sofisticada, alinhada a grandes marcas de moda urbana premium.
- Elimina qualquer risco de quebra de layout ou bordas duras em telas ultra-wide (2560px+).
- Mantém o foco na modelo e nas peças de vestuário sem prejudicar a leitura do texto principal.

### Alternativas Consideradas
- *Vídeo em loop na Hero*: Rejeitado para v1 para evitar consumo excessivo de dados móveis e tempo de carregamento em redes 4G/3G (conforme Princípio IV da Constituição).
- *Background estritamente vermelho*: Rejeitado por cansar a vista e conflitar com o Princípio II (o vermelho deve ser reservado para destaque e CTAs).

---

## 2. Tipografia e Self-Hosting de Fontes ("Outfit" & "Montserrat")

### Contexto
O usuário solicitou a tipografia "Outfit" ou "Montserrat" com self-hosting em `/assets/fonts/` (ou `/assets/src/fonts/`) para otimizar velocidade de carregamento, eliminar dependência de CDNs externas em tempo de execução e melhorar métricas de Core Web Vitals (eliminação de layout shift - CLS).

### Decisão
- **Tipografia Principal**: Família **Outfit** para títulos (`font-heading`, display moderno e marcante com pesos 600, 700 e 800) e **Montserrat** ou **Outfit** regular (pesos 400 e 500) para textos corridos e microcópias.
- **Localização dos Arquivos**: `site/assets/fonts/` no formato moderno `.woff2` (altamente compactado, suporte em 98%+ dos navegadores modernos).
- **Declaração CSS**: Uso de `@font-face` em `assets/css/styles.css` com propriedade `font-display: swap` para garantir que o texto seja renderizado instantaneamente sem bloquear o carregamento da página.
- **Carregamento Otimizado**: Declarar `<link rel="preload" href="assets/fonts/outfit-bold.woff2" as="font" type="font/woff2" crossorigin>` no `<head>` do `index.html` para os pesos críticos da Hero Section.

### Rationale
- O self-hosting elimina roundtrips DNS adicionais ao Google Fonts e protege a privacidade dos usuários.
- O formato WOFF2 oferece economia de até 50% em relação a TTF/OTF.
- `font-display: swap` assegura nota máxima em First Contentful Paint (FCP) no Google Lighthouse.

### Alternativas Consideradas
- *Carregamento via Google Fonts CDN (`fonts.googleapis.com`)*: Rejeitado pelo usuário para priorizar performance máxima, self-hosting e independência de conexão externa.
- *Fontes do sistema (system-ui / Arial)*: Rejeitadas pois descaracterizariam a identidade de moda sofisticada e streetwear premium da Scorpion gytano.

---

## 3. Arquitetura Tailwind CSS e Estilização

### Contexto
A Constituição (Princípio V) determina arquitetura leve em HTML5 + Tailwind CSS + Vanilla JS, mantendo o entregável estático no diretório `site/`. É preciso definir como o Tailwind CSS será disponibilizado para o site sem requerer processos pesados de build para consumo final.

### Decisão
- Utilizar Tailwind CSS para a camada utilitária de design tokens (cores customizadas `scorpion-red: #DC2626`, `scorpion-darkred: #B91C1C`, `scorpion-black: #0A0A0A`, `scorpion-card: #141414`, `scorpion-gray: #737373`).
- Fornecer os estilos através de um arquivo compilado otimizado em `site/assets/css/styles.css` contendo os utilitários Tailwind necessários e os estilos específicos de animação (pulso suave do botão do WhatsApp, zoom no hover dos cards e degradês da Hero).
- Para desenvolvimento e visualização rápida, permitir o uso de Tailwind CLI standalone (`npx tailwindcss -o site/assets/css/styles.css --minify`) ou script de compilação, mantendo zero runtime overhead para o usuário final.

### Rationale
- O CSS final é entregue como arquivo estático leve e altamente performático em `site/assets/css/styles.css`.
- Garante total conformidade com a estrutura de diretórios prevista na Constituição (`site/assets/css/`).
- Facilita a manutenção rápida tanto por desenvolvedores quanto em ambientes de hospedagem estática (GitHub Pages, Vercel, Netlify).

### Alternativas Consideradas
- *Framework frontend completo (React/Next.js/Vite)*: Rejeitado pela Constituição do projeto, que define landing page estática única em HTML5/Tailwind/Vanilla JS para simplicidade, manutenibilidade e carregamento instantâneo.
- *CSS puro sem Tailwind*: Rejeitado pela Constituição (Princípio V) que exige Tailwind CSS para consistência utilitária.

---

## 4. Reordenação Mobile-First & Hierarquia Visual

### Contexto
O usuário especificou a seguinte ordem visual obrigatória em telas pequenas (smartphones):
1. Logo da Scorpion gytano
2. Título principal com slogan de alto impacto ("Estilo, Atitude e Exclusividade em Cada Peça")
3. Descrição curta e objetiva (texto corrido da apresentação)
4. Botão principal de CTA ("Falar com Vendedor no WhatsApp")
Além disso, elementos visuais secundários devem ser ocultados ou posicionados abaixo no mobile para evitar rolagem antes do primeiro botão de ação.

### Decisão
- Estruturar o contêiner da Hero Section com Flexbox vertical (`flex flex-col items-center text-center`) com espaçamento controlado (`gap-4 md:gap-6`).
- No mobile, a imagem de capa atua estritamente como background ou camada subjacente, sem competir com a área de leitura e sem empurrar o conteúdo para baixo.
- O botão CTA fica localizado imediatamente após a descrição curta, garantindo visibilidade dentro da primeira dobra de visualização em smartphones a partir de 320px e 375px de largura.
- Elementos secundários (como selos decorativos, badges extensas ou mosaicos da hero) recebem classes `hidden md:flex` ou `order-last`.

### Rationale
- Reduz o tempo até o primeiro ponto de conversão para menos de 3 segundos em acessos móveis.
- Maximiza a taxa de clique de visitantes originados de anúncios no Instagram e TikTok.
- Cumpre os requisitos de ergonomia móvel (área de toque mínima de 44x44px).

### Alternativas Consideradas
- *Disposição lado a lado em mobile (texto à esquerda, imagem à direita)*: Rejeitada porque comprime os textos em telas de 320px/375px e causa quebras indesejadas.

---

## 5. Integração WhatsApp e Botão Flutuante

### Contexto
O canal oficial de conversão é o WhatsApp. O link precisa funcionar em smartphones (abrindo o app) e em computadores (abrindo o WhatsApp Web), com mensagens personalizadas dependendo do botão clicado (ex: botão geral vs. botão de produto específico).

### Decisão
- Utilizar a URL universal `https://wa.me/55DD9XXXXXXXX?text=...` com codificação correta via `encodeURIComponent` em JavaScript.
- Mensagens parametrizadas:
  - **Hero CTA**: `"Olá! Estava navegando na loja Scorpion gytano e gostaria de falar com um vendedor para conhecer as peças exclusivas."`
  - **Header CTA / Botão Flutuante**: `"Olá! Gostaria de um atendimento personalizado na Scorpion gytano."`
  - **Card de Produto**: `"Olá! Tenho interesse na peça *[Nome do Produto]* da Scorpion gytano. Gostaria de saber sobre tamanhos disponíveis e entrega!"`
- **Botão Flutuante**: Elemento com classe fixa `fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl hover:scale-110 transition-transform` acompanhado de camada de pulso suave (`animate-ping opacity-25 bg-green-400 absolute inset-0 rounded-full`).

### Rationale
- Padrão universal recomendado pela Meta/WhatsApp, compatível com 100% dos navegadores e sistemas operacionais sem necessidade de SDKs pesados.
- A mensagem contextualizada informa imediatamente ao vendedor qual o interesse do lead, agilizando o fechamento da venda.

### Alternativas Consideradas
- *Formulário de captura de lead antes do WhatsApp*: Rejeitado por introduzir atrito desnecessário em landing pages de moda e reduzir a conversão.

---

## 6. Vitrine de Produtos: Filtragem por Categorias e Efeito Hover

### Contexto
A vitrine deve apresentar produtos divididos por categorias (Masculino, Feminino, Acessórios, Lançamentos) com grid responsivo e efeitos de transição visual suave (zoom ou visualização alternativa).

### Decisão
- Utilizar um Grid CSS responsivo do Tailwind: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`.
- Implementar filtros de categoria usando Vanilla JS leve acoplado a atributos `data-category="masculino"`, `data-category="feminino"`, etc. A transição de exibição/ocultação usará classes de opacidade e transição suave (`transition-all duration-300`).
- No card do produto:
  - Contêiner de imagem com `overflow-hidden relative rounded-xl`.
  - Imagem do produto com `transition-transform duration-500 ease-out group-hover:scale-110`.
  - Badge visual de destaque (`Mais Vendido`, `Lançamento`, `Edição Limitada`) posicionada no canto superior esquerdo com fundo vermelho ou escuro translúcido.
  - Botão individual "Garantir no WhatsApp" com ícone e link dinâmico gerado com o nome do produto.

### Rationale
- Proporciona sensação premium e dinâmica sem requerer React ou Vue.
- Efeito de hover suave atrai o olhar e destaca os detalhes da textura das roupas.
- Funciona perfeitamente em dispositivos de toque (ao tocar no card, a imagem foca e o botão responde sem atraso).

---

## Conclusão da Fase 0
Todas as indefinições técnicas foram mapeadas e resolvidas com decisões concretas, respeitando integralmente a Constituição do projeto e as instruções fornecidas pelo usuário.
