# Feature Specification: Landing Page Scorpion gytano

**Feature Branch**: `001-scorpion-landing-page`

**Created**: 2026-10-07

**Status**: Ready for Planning

**Input**: User description:
> A landing page da loja "Scorpion gytano" deve ser visualmente impactante, moderna e focada em alta conversão para atendimento e vendas via WhatsApp. Estruturada em 7 seções: Cabeçalho com logo, links de rolagem suave e CTA; Hero Section de alto impacto com banner, headline, texto de apresentação corrido e botão vermelho; Seção de Coleções com vitrine categorizada, fotos com efeito hover, tags de destaque e botão individual "Garantir no WhatsApp"; Seção "Sobre a Marca" com história, curadoria e atendimento consultivo; Seção de Diferenciais com 4 cards (Envio Rápido, Atendimento VIP, Pagamento Facilitado, Peças Exclusivas); Seção de Prova Social e Comunidade com depoimentos e mosaico do Instagram; Rodapé completo e Botão Flutuante do WhatsApp com animação pulsante.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Exploração da Vitrine de Produtos e Compra via WhatsApp (Priority: P1)

Como um cliente em potencial interessado em moda urbana sofisticada, quero navegar pelas coleções e categorias de produtos, analisar os detalhes visuais de cada peça e clicar em um botão dedicado para iniciar uma negociação direta no WhatsApp com a peça já selecionada.

**Why this priority**: É o núcleo do modelo de negócio e o principal ponto de conversão da loja. Se apenas a vitrine e a integração com WhatsApp existirem, a loja já é capaz de fechar pedidos e gerar receita.

**Independent Test**: Pode ser testado de ponta a ponta navegando pela grade de produtos, alternando entre categorias (Roupas Masculinas, Roupas Femininas, Acessórios, Lançamentos), interagindo com o efeito de foco/hover nas imagens e clicando no botão "Garantir no WhatsApp", verificando a abertura do mensageiro com a mensagem contendo o nome e o contexto do produto escolhido.

**Acceptance Scenarios**:

1. **Given** que o usuário está na seção de Coleções, **When** clica ou filtra por uma categoria de produtos, **Then** a grade exibe imediatamente os produtos correspondentes com suas fotos, tags de destaque e detalhes de material.
2. **Given** que o usuário visualiza o card de um produto (ex: "Jaqueta Couro Premium"), **When** clica no botão "Garantir no WhatsApp", **Then** o sistema redireciona para o aplicativo ou versão web do WhatsApp com o número oficial da loja e a mensagem pré-formatada contendo o nome do item selecionado.
3. **Given** que o usuário passa o cursor ou mantém o foco sobre a foto de um produto, **When** a ação ocorre, **Then** a imagem exibe uma transição visual suave (efeito de zoom ou visualização alternativa) destacando os acabamentos da peça.

---

### User Story 2 - Primeiro Impacto na Hero Section e Atendimento Rápido (Priority: P1)

Como um visitante recém-chegado à landing page, quero ser impactado por uma apresentação visual imponente da marca com modelos reais, ler a proposta de valor em formato fluido e ter a opção imediata de conferir as coleções ou falar com um vendedor.

**Why this priority**: A primeira impressão define a taxa de rejeição (bounce rate). Visitantes provenientes de redes sociais tomam a decisão de continuar navegando nos primeiros 3 a 5 segundos.

**Independent Test**: Pode ser testado carregando a página inicial e verificando a presença do banner em alta definição, a headline impactante, o texto corrido contínuo e acionando o botão principal de Call to Action (CTA) em vermelho marcante.

**Acceptance Scenarios**:

1. **Given** que o visitante acessa a página, **When** a tela inicial é carregada, **Then** o cabeçalho e o banner principal de alta definição são apresentados com a headline "Estilo, Atitude e Exclusividade em Cada Peça" e o texto corrido oficial da marca sem quebras de tópicos.
2. **Given** que o visitante lê a apresentação na dobra principal, **When** clica no botão vermelho "Ver Coleção & Falar com Vendedor", **Then** a tela realiza uma rolagem suave até a vitrine de produtos ou abre o atendimento no WhatsApp para suporte imediato.

---

### User Story 3 - Conhecimento da Marca e Percepção de Confiança (Priority: P2)

Como um comprador exigente que valoriza qualidade e segurança, quero conhecer a história e os critérios de produção da Scorpion gytano e conferir os diferenciais de serviço (envio, pagamento, suporte personalizado) para me sentir seguro antes de comprar.

**Why this priority**: Reduz a fricção e as objeções de compra, aumentando a percepção de valor dos produtos e a taxa de conversão final.

**Independent Test**: Pode ser testado rolando até as seções "Sobre a Marca" e "Diferenciais", verificando a clareza do texto sobre a curadoria de tecidos e a exibição legível dos 4 cards de benefícios.

**Acceptance Scenarios**:

1. **Given** que o usuário navega até a seção "Sobre a Marca", **When** lê o conteúdo institucional, **Then** compreende o conceito da marca, a curadoria de tecidos, cortes e durabilidade, e o diferencial de consultoria de medidas com atendente humano.
2. **Given** que o usuário visualiza a seção de diferenciais, **When** examina os cards informativos, **Then** identifica claramente os 4 pilares: Envio Rápido e Seguro, Atendimento VIP via WhatsApp, Pagamento Facilitado (Pix e Cartão) e Peças Exclusivas & Qualidade Premium.

---

### User Story 4 - Prova Social, Conexão com Comunidade e Acesso Flutuante Contínuo (Priority: P2)

Como um usuário navegando em qualquer ponto da página, quero ver avaliações de outros compradores satisfeitos, explorar fotos do Instagram da marca e ter acesso permanente a um botão flutuante do WhatsApp para tirar dúvidas a qualquer instante.

**Why this priority**: A prova social valida a reputação da loja e o botão flutuante captura leads que decidem entrar em contato após navegarem por múltiplas seções, sem exigir que voltem ao topo.

**Independent Test**: Pode ser testado rolando a página até os depoimentos de clientes e o mosaico do Instagram, e verificando que o botão flutuante permanece fixo, visível e funcional em qualquer nível de rolagem da página.

**Acceptance Scenarios**:

1. **Given** que o usuário chega à seção de Prova Social, **When** lê os depoimentos, **Then** encontra relatos de clientes reais comentando sobre a qualidade do vestuário, a rapidez de entrega e a atenção no atendimento.
2. **Given** que o usuário visualiza o mosaico do Instagram, **When** clica na chamada da comunidade, **Then** é incentivado a visitar ou marcar o perfil oficial `@scorpion.gytano`.
3. **Given** que o usuário está em qualquer ponto da página (topo, meio ou rodapé), **When** observa o canto inferior direito, **Then** o botão flutuante do WhatsApp permanece fixo, visível, com pulsação suave e pronto para iniciar o chat instantâneo.

---

### Edge Cases

- **Ausência do aplicativo WhatsApp no dispositivo**: O link de direcionamento deve utilizar a URL universal de mensagens web, permitindo que usuários no desktop acessem o WhatsApp Web e usuários no celular sejam direcionados à loja de aplicativos ou versão compatível.
- **Telas com largura compacta (320px a 375px)**: Nenhum card de produto, texto de headline ou botão deve transbordar horizontalmente a tela ou gerar barra de rolagem horizontal.
- **Imagens em conexão móvel reduzida**: Imagens devem possuir dimensões adequadas e formato comprimido para evitar travamentos ou telas em branco durante a navegação em redes celulares.
- **Interações por toque (touch devices)**: Efeitos de destaque e transição visual (hover) nos cards de produto não devem bloquear o primeiro toque no botão de contato via WhatsApp.
- **Comprimento de mensagens pré-formatadas**: Textos codificados para o WhatsApp devem conter caracteres compatíveis com padrões universais de codificação de URLs, preservando acentuação, espaços e emojis.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema DEVE disponibilizar um cabeçalho fixo ou persistente com o logotipo oficial da "Scorpion gytano" alinhado à esquerda.
- **FR-002**: O cabeçalho DEVE conter links de navegação com rolagem suave (Smooth Scroll) para as seções: "Início", "Coleções", "Sobre a Marca", "Diferenciais" e "Depoimentos".
- **FR-003**: O cabeçalho DEVE incluir um botão de destaque no canto direito intitulado "Atendimento no WhatsApp", acompanhado pelo ícone oficial do aplicativo.
- **FR-004**: Em telas móveis e tablets, o cabeçalho DEVE oferecer menu responsivo de fácil acionamento tátil (mínimo de 44x44px de área de toque) que não obstrua a usabilidade.
- **FR-005**: A seção inicial (Hero Section) DEVE apresentar banner de alto impacto visual com modelos vestindo produtos da marca e a headline "Estilo, Atitude e Exclusividade em Cada Peça".
- **FR-006**: A Hero Section DEVE exibir o texto institucional corrido sem uso de tópicos ou listas: *"Na Scorpion gytano, traduzimos atitude e autenticidade em peças de vestuário e acessórios com acabamento premium. Nossa missão é oferecer coleções exclusivas que alinham conforto, caimento impecável e as principais tendências da moda urbana e sofisticada. Escolha seu look e fale diretamente com nossa equipe para garantir o seu."*
- **FR-007**: A Hero Section DEVE conter um botão de Call to Action (CTA) principal com cor vermelha marcante (#DC2626 / #B91C1C) com o texto "Ver Coleção & Falar com Vendedor".
- **FR-008**: A seção de Coleções DEVE exibir uma grade responsiva de produtos dividida em categorias navegáveis (Roupas Masculinas, Roupas Femininas, Acessórios e Lançamentos).
- **FR-009**: Cada card de produto na vitrine DEVE conter: imagem de alta definição com efeito suave ao passar o mouse (hover/zoom), tag visual de destaque ("Mais Vendido", "Lançamento", "Edição Limitada"), nome da peça, breve descrição do tecido/material e botão "Garantir no WhatsApp".
- **FR-010**: O acionamento do botão "Garantir no WhatsApp" em qualquer card DEVE abrir o canal oficial da loja com mensagem contextualizada citando o nome do produto selecionado.
- **FR-011**: A seção "Sobre a Marca" DEVE apresentar em texto corrido imersivo o conceito da Scorpion gytano, o rigor na curadoria de tecidos, costura e acabamento, e o compromisso com atendimento consultivo para dúvidas sobre tamanhos e medidas.
- **FR-012**: A seção de Diferenciais DEVE apresentar uma grade com 4 cards objetivos:
  1. 🚀 Envio Rápido e Seguro (Entrega rápida e rastreada);
  2. 💬 Atendimento VIP via WhatsApp (Ajuda personalizada na escolha de tamanho e estilo);
  3. 💳 Pagamento Facilitado (Pix, Cartão de Crédito);
  4. 🔥 Peças Exclusivas & Qualidade Premium.
- **FR-013**: A seção de Prova Social & Comunidade DEVE conter depoimentos de clientes reais avaliando qualidade, pontualidade na entrega e atendimento, além de um mosaico visual do Instagram convidando o público a interagir com o perfil `@scorpion.gytano`.
- **FR-014**: O rodapé (Footer) DEVE exibir a marca Scorpion gytano, atalhos de navegação para todas as seções, links para redes sociais, horário de funcionamento/atendimento e informações de copyright.
- **FR-015**: O sistema DEVE manter um botão flutuante do WhatsApp posicionado no canto inferior direito de todas as telas, com animação pulsante suave e link direto para o canal de atendimento.
- **FR-016**: Toda a interface DEVE ser estruturada com paleta visual sofisticada de alto contraste, utilizando o vermelho marcante para botões de ação e tons neutros (preto, grafite, branco e cinza claro) para estrutura e textos.

### Key Entities *(include if feature involves data)*

- **Produto**: Representa uma peça de vestuário ou acessório comercializado pela loja.
  - *Atributos*: Identificador, nome do produto, categoria (Masculino, Feminino, Acessório, Lançamento), descrição de tecido/material, tag de destaque (ex: "Mais Vendido"), URL da imagem principal, preço indicativo (opcional) e mensagem padrão para WhatsApp.
- **Categoria de Coleção**: Representa o agrupamento temático dos produtos.
  - *Atributos*: Identificador, título legível da categoria e lista de produtos associados.
- **Diferencial Competitivo**: Representa os pilares de confiança e garantia oferecidos ao cliente.
  - *Atributos*: Ícone representativo, título e texto explicativo do benefício.
- **Depoimento de Cliente**: Representa o relato de satisfação de um comprador real.
  - *Atributos*: Nome do cliente, localidade (opcional), nota/avaliação, texto do relato e foto/avatar.
- **Parâmetros de Contato & Redes**: Configurações institucionais de atendimento.
  - *Atributos*: Número internacional de WhatsApp, mensagem padrão de atendimento geral, perfil do Instagram (`@scorpion.gytano`) e horários de atendimento.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos botões e links de ação ("Atendimento no WhatsApp", "Garantir no WhatsApp", "Falar com Vendedor" e botão flutuante) abrem o WhatsApp direcionando para o número oficial com a mensagem pré-formatada adequada.
- **SC-002**: O tempo para um novo visitante localizar uma peça desejada e iniciar o contato no WhatsApp é inferior a 30 segundos em testes de usabilidade.
- **SC-003**: 0% de ocorrência de rolagem horizontal (overflow-x) em todas as resoluções suportadas, desde 320px (smartphones compactos) até 2560px (monitores ultra-wide).
- **SC-004**: Todos os botões e áreas de clique/toque respeitam a dimensão ergonômica mínima de 44x44 pixels em dispositivos com tela sensível ao toque.
- **SC-005**: 100% dos links de navegação do cabeçalho realizam a rolagem suave com precisão de posicionamento até o título de cada seção correspondente.
- **SC-006**: A taxa de conversão esperada de cliques para início de conversa no WhatsApp atinge pelo menos 10% a 15% sobre o total de visitantes engajados na página.

## Assumptions

- **Modelo de Conversão Humano**: A loja adota intencionalmente o modelo de atendimento e fechamento de pedidos personalizado via WhatsApp (conversational commerce), dispensando carrinho e gateway de checkout automático na versão inicial da landing page.
- **Catálogo Curado**: O catálogo inicial consiste em uma seleção criteriosa de lançamentos e peças mais vendidas distribuídas nas 4 categorias principais para manter o carregamento leve e a tomada de decisão ágil.
- **Número de Atendimento e Redes**: O número do WhatsApp e os dados de perfil social serão parametrizados em local único e centralizado para facilitar atualizações futuras pela equipe da Scorpion gytano.
- **Público Mobile Predominante**: Assume-se que mais de 80% dos acessos serão originados de dispositivos móveis por meio de links em redes sociais (Instagram/TikTok), exigindo foco primário em ergonomia tátil e carregamento ágil de imagens.
