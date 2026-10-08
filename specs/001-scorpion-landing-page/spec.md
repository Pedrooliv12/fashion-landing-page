# Feature Specification: Landing Page Scorpion gytano

**Feature Branch**: `001-scorpion-landing-page`

**Created**: 2026-10-07

**Updated**: 2026-10-08 (referência visual do cliente e tema claro)

**Status**: Ready for Planning

**Visual Reference**: [nodeckagency/clothing-store-landing-page](https://github.com/nodeckagency/clothing-store-landing-page), template aprovado pelo cliente (ver Constituição, seção "Referência Visual")

**Input**: User description:
> A landing page da loja "Scorpion gytano" deve ser visualmente impactante, moderna e focada em alta conversão para atendimento e vendas via WhatsApp. Estruturada em 7 seções: Cabeçalho com logo, links de rolagem suave e CTA; Hero Section de alto impacto com banner, headline, texto de apresentação corrido e botão vermelho; Seção de Coleções com vitrine categorizada, fotos com efeito hover, tags de destaque e botão individual "Garantir no WhatsApp"; Seção "Sobre a Marca" com história, curadoria e atendimento consultivo; Seção de Diferenciais com 4 cards (Envio Rápido, Atendimento VIP, Pagamento Facilitado, Peças Exclusivas); Seção de Prova Social e Comunidade com depoimentos e mosaico do Instagram; Rodapé completo e Botão Flutuante do WhatsApp com animação pulsante.

## Clarifications

### Session 2026-10-08

- Q: Qual referência visual a página deve seguir? → A: O template `nodeckagency/clothing-store-landing-page`, aprovado pelo cliente, reescrito em Tailwind (sem copiar código, pois o repositório não tem LICENSE). Carrinho, busca, favoritos e newsletter do template não entram.
- Q: Tema claro ou escuro? → A: Claro e editorial, como o template. A paleta oficial está na Constituição v1.1.0, Princípio II (fundo `#FFFFFF`, superfície `#F5F5F4`, tinta `#111111`, vermelho `#DC2626`).
- Q: Qual cor os botões de WhatsApp devem usar? → A: Verde oficial `#25D366` no botão flutuante e no botão do cabeçalho, com texto `#111111` e ícone branco. Os demais CTAs de WhatsApp (Hero, cards, rodapé) usam o vermelho da marca.
- Q: Qual a ordem das seções? → A: A do template: Faixa superior → Cabeçalho → Hero → Diferenciais → Categorias → Coleções → Sobre a Marca → Depoimentos & Instagram → Rodapé.
- Q: O que o botão principal da Hero faz? → A: Rola suavemente até a vitrine (`#colecoes`). O WhatsApp já está acessível pelo cabeçalho e pelo botão flutuante.
- Q: "Lançamentos" é uma categoria? → A: Não. É um filtro que mostra os produtos marcados como novidade, de qualquer categoria. As categorias são Masculino, Feminino e Acessórios.
- Q: Onde fica o logotipo no mobile? → A: Somente no cabeçalho fixo, logo acima da Hero. A Hero não repete o logo, então a ordem visual no mobile continua Logo → Headline → Texto → CTA.
- Q: Qual tipografia? → A: Apenas Montserrat (como no template), self-hosted em `.woff2`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Exploração da Vitrine de Produtos e Compra via WhatsApp (Priority: P1)

Como um cliente em potencial interessado em moda urbana sofisticada, quero navegar pelas coleções e categorias de produtos, analisar os detalhes visuais de cada peça e clicar em um botão dedicado para iniciar uma negociação direta no WhatsApp com a peça já selecionada.

**Why this priority**: É o núcleo do modelo de negócio e o principal ponto de conversão da loja. Se apenas a vitrine e a integração com WhatsApp existirem, a loja já é capaz de fechar pedidos e gerar receita.

**Independent Test**: Pode ser testado de ponta a ponta navegando pela grade de produtos, alternando entre os filtros (Todos, Masculino, Feminino, Acessórios, Lançamentos), clicando nos cards de categoria, interagindo com o efeito de hover nas imagens e clicando no botão "Garantir no WhatsApp", verificando a abertura do mensageiro com a mensagem contendo o nome do produto escolhido.

**Acceptance Scenarios**:

1. **Given** que o usuário está na seção de Coleções, **When** clica em um filtro, **Then** a grade exibe imediatamente apenas os produtos correspondentes com suas fotos, tags de destaque e detalhes de material.
2. **Given** que o usuário está na seção de Categorias, **When** clica no card "Masculino", "Feminino" ou "Acessórios", **Then** a página rola suavemente até a vitrine com o filtro correspondente já aplicado.
3. **Given** que o usuário visualiza o card de um produto (ex: "Jaqueta Couro Premium"), **When** clica no botão "Garantir no WhatsApp", **Then** o sistema abre o WhatsApp (aplicativo ou Web) com o número oficial da loja e a mensagem pré-formatada contendo o nome do item selecionado.
4. **Given** que o usuário passa o cursor sobre a foto de um produto em um dispositivo com mouse, **When** a ação ocorre, **Then** a imagem exibe um zoom suave e o botão "Garantir no WhatsApp" desliza para dentro da imagem.
5. **Given** que o usuário está em um dispositivo de toque, **When** visualiza um card de produto, **Then** o botão "Garantir no WhatsApp" já está visível sem exigir hover, e o primeiro toque nele abre o WhatsApp.

---

### User Story 2 - Primeiro Impacto na Hero Section e Atendimento Rápido (Priority: P1)

Como um visitante recém-chegado à landing page, quero ser impactado por uma apresentação visual imponente da marca com modelos reais, ler a proposta de valor em formato fluido e ter a opção imediata de conferir as coleções ou falar com um vendedor.

**Why this priority**: A primeira impressão define a taxa de rejeição (bounce rate). Visitantes provenientes de redes sociais tomam a decisão de continuar navegando nos primeiros 3 a 5 segundos.

**Independent Test**: Pode ser testado carregando a página inicial e verificando a faixa superior, o cabeçalho fixo com logo e botão de WhatsApp, o banner de ponta a ponta em alta definição, a headline, o texto corrido e o botão vermelho de Call to Action (CTA).

**Acceptance Scenarios**:

1. **Given** que o visitante acessa a página, **When** a tela inicial é carregada, **Then** a faixa superior, o cabeçalho e o banner principal são apresentados com a headline "Estilo, Atitude e Exclusividade em Cada Peça" e o texto corrido oficial da marca sem quebras de tópicos.
2. **Given** que o visitante lê a apresentação na dobra principal, **When** clica no botão vermelho "Ver Coleção & Falar com Vendedor", **Then** a página rola suavemente até a vitrine de produtos (`#colecoes`).
3. **Given** que o visitante quer atendimento imediato, **When** clica no botão verde "Atendimento no WhatsApp" do cabeçalho, **Then** o WhatsApp abre com a mensagem de atendimento geral.

---

### User Story 3 - Conhecimento da Marca e Percepção de Confiança (Priority: P2)

Como um comprador exigente que valoriza qualidade e segurança, quero conhecer a história e os critérios de produção da Scorpion gytano e conferir os diferenciais de serviço (envio, pagamento, suporte personalizado) para me sentir seguro antes de comprar.

**Why this priority**: Reduz a fricção e as objeções de compra, aumentando a percepção de valor dos produtos e a taxa de conversão final.

**Independent Test**: Pode ser testado verificando a faixa de Diferenciais logo abaixo da Hero e rolando até a seção "Sobre a Marca", conferindo a clareza do texto sobre a curadoria de tecidos e a exibição legível dos 4 benefícios.

**Acceptance Scenarios**:

1. **Given** que o visitante passa da Hero, **When** visualiza a faixa de diferenciais, **Then** identifica claramente os 4 pilares: Envio Rápido e Seguro, Atendimento VIP via WhatsApp, Pagamento Facilitado (Pix e Cartão de Crédito) e Peças Exclusivas & Qualidade Premium.
2. **Given** que o usuário navega até a seção "Sobre a Marca", **When** lê o conteúdo institucional, **Then** compreende o conceito da marca, a curadoria de tecidos, cortes e durabilidade, e o diferencial de consultoria de medidas com atendente humano.

---

### User Story 4 - Prova Social, Conexão com Comunidade e Acesso Flutuante Contínuo (Priority: P2)

Como um usuário navegando em qualquer ponto da página, quero ver avaliações de outros compradores satisfeitos, explorar fotos do Instagram da marca e ter acesso permanente a um botão flutuante do WhatsApp para tirar dúvidas a qualquer instante.

**Why this priority**: A prova social valida a reputação da loja e o botão flutuante captura leads que decidem entrar em contato após navegarem por múltiplas seções, sem exigir que voltem ao topo.

**Independent Test**: Pode ser testado rolando a página até os depoimentos de clientes e o mosaico do Instagram, e verificando que o botão flutuante permanece fixo, visível e funcional em qualquer nível de rolagem da página, sem cobrir conteúdo.

**Acceptance Scenarios**:

1. **Given** que o usuário chega à seção de Prova Social, **When** lê os depoimentos, **Then** encontra relatos de clientes comentando sobre a qualidade do vestuário, a rapidez de entrega e a atenção no atendimento.
2. **Given** que o usuário visualiza o mosaico do Instagram, **When** clica na chamada da comunidade ou em uma foto, **Then** é levado ao perfil oficial `@scorpion.gytano`.
3. **Given** que o usuário está em qualquer ponto da página (topo, meio ou rodapé), **When** observa o canto inferior direito, **Then** o botão flutuante verde do WhatsApp permanece fixo, visível, com pulsação suave e pronto para iniciar o chat.
4. **Given** que o usuário rola até o fim da página, **When** o rodapé está visível, **Then** o botão flutuante não cobre nenhum link, texto ou botão do rodapé.

---

### Edge Cases

- **Ausência do aplicativo WhatsApp no dispositivo**: O link de direcionamento deve utilizar a URL universal `https://wa.me/`, permitindo que usuários no desktop acessem o WhatsApp Web e usuários no celular sejam direcionados ao aplicativo ou à versão compatível.
- **Telas com largura compacta (320px a 375px)**: Nenhum card de produto, texto de headline ou botão deve transbordar horizontalmente a tela ou gerar barra de rolagem horizontal.
- **Imagens em conexão móvel reduzida**: Imagens devem possuir dimensões adequadas e formato comprimido (WebP) para evitar travamentos ou telas em branco durante a navegação em redes celulares.
- **Interações por toque (touch devices)**: Efeitos de hover só se aplicam a dispositivos com mouse (`@media (hover: hover)`); no toque, o botão "Garantir no WhatsApp" fica sempre visível e o primeiro toque o aciona.
- **Navegação por teclado**: O botão "Garantir no WhatsApp" que desliza no hover deve aparecer também quando o card recebe foco via teclado.
- **Preferência por movimento reduzido**: Com `prefers-reduced-motion: reduce`, a pulsação do botão flutuante, o zoom das imagens e a rolagem suave devem ser desativados.
- **Cabeçalho fixo cobrindo títulos**: Ao navegar por âncoras, o título da seção não pode ficar escondido sob o cabeçalho fixo.
- **Comprimento de mensagens pré-formatadas**: Textos codificados para o WhatsApp devem usar `encodeURIComponent`, preservando acentuação, espaços e emojis.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema DEVE disponibilizar um cabeçalho fixo (sticky) de fundo branco com o logotipo oficial da "Scorpion gytano" alinhado à esquerda.
- **FR-002**: O cabeçalho DEVE conter links de navegação com rolagem suave para as seções, na ordem da página: "Início", "Diferenciais", "Coleções", "Sobre a Marca" e "Depoimentos".
- **FR-003**: O cabeçalho DEVE incluir, no canto direito, o botão "Atendimento no WhatsApp" em verde oficial `#25D366` com texto `#111111` e o ícone oficial do aplicativo.
- **FR-004**: Em telas menores que 1024px, o cabeçalho DEVE oferecer um menu responsivo (hambúrguer) com área de toque mínima de 44x44px, que fecha automaticamente ao clicar em um link.
- **FR-005**: A Hero Section DEVE apresentar um banner de ponta a ponta com foto de modelos vestindo produtos da marca, sobreposição escura para legibilidade, conteúdo centralizado, um rótulo superior de destaque (ex: "Nova Coleção") e a headline "Estilo, Atitude e Exclusividade em Cada Peça".
- **FR-006**: A Hero Section DEVE exibir o texto institucional corrido sem uso de tópicos ou listas: *"Na Scorpion gytano, traduzimos atitude e autenticidade em peças de vestuário e acessórios com acabamento premium. Nossa missão é oferecer coleções exclusivas que alinham conforto, caimento impecável e as principais tendências da moda urbana e sofisticada. Escolha seu look e fale diretamente com nossa equipe para garantir o seu."*
- **FR-007**: A Hero Section DEVE conter um botão de CTA principal em vermelho `#DC2626` (hover `#B91C1C`) com o texto "Ver Coleção & Falar com Vendedor", que rola suavemente até `#colecoes`.
- **FR-008**: A página DEVE exibir uma seção de Categorias com 3 cards de imagem alta (Masculino, Feminino, Acessórios). Clicar em um card rola até a vitrine e aplica o filtro correspondente.
- **FR-009**: A seção de Coleções DEVE exibir uma grade responsiva de produtos com filtros: Todos (padrão), Masculino, Feminino, Acessórios e Lançamentos. O filtro "Lançamentos" exibe os produtos marcados como novidade, de qualquer categoria.
- **FR-010**: Cada card de produto DEVE conter: imagem de alta definição com zoom suave no hover, tag de destaque opcional ("Mais Vendido", "Lançamento", "Edição Limitada"), nome da peça, breve descrição do tecido/material, preço indicativo opcional e botão "Garantir no WhatsApp" em vermelho. Em dispositivos com mouse, o botão desliza para dentro da imagem no hover ou foco; em dispositivos de toque, fica sempre visível.
- **FR-011**: O acionamento do botão "Garantir no WhatsApp" DEVE abrir o canal oficial da loja com mensagem contextualizada citando o nome do produto selecionado.
- **FR-012**: A seção "Sobre a Marca" DEVE ser um banner de largura total com imagem de fundo e sobreposição escura, apresentando em texto corrido o conceito da Scorpion gytano, o rigor na curadoria de tecidos, costura e acabamento, e o compromisso com atendimento consultivo para dúvidas sobre tamanhos e medidas.
- **FR-013**: A faixa de Diferenciais, posicionada logo após a Hero, DEVE apresentar 4 itens com ícone SVG, título e descrição curta:
  1. Envio Rápido e Seguro — entrega rápida e rastreada;
  2. Atendimento VIP via WhatsApp — ajuda personalizada na escolha de tamanho e estilo;
  3. Pagamento Facilitado — Pix e Cartão de Crédito;
  4. Peças Exclusivas & Qualidade Premium — curadoria rigorosa de tecidos e acabamento.
- **FR-014**: A seção de Prova Social & Comunidade DEVE conter de 3 a 4 depoimentos de clientes (nome, nota e relato sobre qualidade, entrega e atendimento) e um mosaico de 6 fotos com convite para seguir e marcar o perfil `@scorpion.gytano`.
- **FR-015**: O rodapé DEVE ter fundo `#111111`, organizado em colunas: marca e redes sociais (Instagram e TikTok); atalhos de navegação para todas as seções; atendimento, com horário de funcionamento e botão "Falar no WhatsApp" em vermelho; e copyright.
- **FR-016**: O sistema DEVE manter um botão flutuante do WhatsApp no canto inferior direito, em verde `#25D366` com ícone branco e animação pulsante suave, com link direto para o atendimento. O botão não pode cobrir conteúdo, incluindo o rodapé.
- **FR-017**: Uma faixa superior fina (fundo `#111111`, texto branco) DEVE ficar acima do cabeçalho com uma mensagem curta de benefício (ex: "Atendimento VIP pelo WhatsApp · Pix e Cartão de Crédito").
- **FR-018**: A interface DEVE usar exclusivamente a paleta da Constituição v1.1.0 (Princípio II) e a tipografia Montserrat self-hosted. O vermelho fica restrito a ações e destaques, e o verde aos dois botões de WhatsApp definidos no FR-003 e no FR-016.
- **FR-019**: As seções DEVEM aparecer nesta ordem: Faixa superior → Cabeçalho → Hero → Diferenciais → Categorias → Coleções → Sobre a Marca → Depoimentos & Instagram → Rodapé.

### Key Entities *(include if feature involves data)*

- **Produto**: Representa uma peça de vestuário ou acessório comercializado pela loja.
  - *Atributos*: Identificador, nome, categoria (Masculino, Feminino ou Acessórios), indicador de novidade (aparece em "Lançamentos"), descrição de tecido/material, tag de destaque opcional, URL da imagem principal, preço indicativo (opcional) e mensagem padrão para WhatsApp.
- **Categoria**: Representa o agrupamento temático dos produtos e alimenta os cards de categoria e os filtros.
  - *Atributos*: Identificador, título legível, imagem do card e lista de produtos associados.
- **Diferencial Competitivo**: Representa os pilares de confiança e garantia oferecidos ao cliente.
  - *Atributos*: Ícone, título e texto explicativo do benefício.
- **Depoimento de Cliente**: Representa o relato de satisfação de um comprador.
  - *Atributos*: Nome do cliente, localidade (opcional), nota de 1 a 5, texto do relato e foto/avatar (opcional).
- **Parâmetros de Contato & Redes**: Configurações institucionais de atendimento, centralizadas em um único local.
  - *Atributos*: Número internacional de WhatsApp, mensagens padrão por origem de clique, perfil do Instagram (`@scorpion.gytano`), perfil do TikTok e horários de atendimento.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% dos botões de WhatsApp (cabeçalho, cards de produto, rodapé e botão flutuante) abrem o WhatsApp no número oficial com a mensagem pré-formatada da sua origem.
- **SC-002**: O tempo para um novo visitante localizar uma peça desejada e iniciar o contato no WhatsApp é inferior a 30 segundos em testes de usabilidade.
- **SC-003**: 0% de ocorrência de rolagem horizontal em todas as larguras suportadas, de 320px a 2560px.
- **SC-004**: Todos os botões e áreas de toque respeitam a dimensão mínima de 44x44 pixels em dispositivos de toque.
- **SC-005**: 100% dos links de navegação do cabeçalho rolam suavemente até a seção correspondente, com o título da seção totalmente visível abaixo do cabeçalho fixo.
- **SC-006**: A taxa de cliques para início de conversa no WhatsApp atinge pelo menos 10% a 15% dos visitantes engajados (métrica de negócio, medida após o lançamento).
- **SC-007**: A página atinge pontuação ≥ 90 no Google Lighthouse (mobile) em Performance, Acessibilidade, Boas Práticas e SEO.
- **SC-008**: Todos os pares de texto e fundo atendem WCAG AA (4,5:1 para texto normal).

## Assumptions

- **Modelo de Conversão Humano**: A loja adota intencionalmente o modelo de atendimento e fechamento de pedidos via WhatsApp (conversational commerce), dispensando carrinho e checkout automático.
- **Catálogo Curado**: O catálogo inicial tem de 8 a 12 peças distribuídas entre Masculino, Feminino e Acessórios, algumas marcadas como novidade, para manter o carregamento leve e a decisão ágil.
- **Conteúdo Pendente do Cliente**: O número oficial do WhatsApp, as fotos de produtos, a foto da Hero, as fotos do Instagram, o logotipo e os depoimentos ainda serão fornecidos pela Scorpion gytano. Até lá, o desenvolvimento usa conteúdo de exemplo claramente identificado, centralizado na configuração da loja, que DEVE ser substituído antes da publicação.
- **Publicação Fora do Escopo**: O deploy (ex: GitHub Pages) não faz parte desta feature e será feito pelo responsável do projeto depois da implementação. A URL canônica usada nas metatags é provisória.
- **Número de Atendimento e Redes**: O número do WhatsApp e os perfis sociais ficam parametrizados em um único local para facilitar atualizações futuras.
- **Público Mobile Predominante**: Mais de 80% dos acessos virão de dispositivos móveis por meio de links em redes sociais (Instagram/TikTok), exigindo foco primário em ergonomia de toque e carregamento ágil de imagens.
