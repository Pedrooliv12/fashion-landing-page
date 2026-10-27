/*
 * Configuração da loja Scorpion gytano.
 * Este é o ÚNICO arquivo que a loja precisa editar para trocar número, mensagens,
 * categorias e produtos (data-model.md). Itens marcados com EXEMPLO devem ser
 * substituídos pelo conteúdo real antes de publicar.
 */

window.StoreConfig = {
  brandName: "Scorpion gytano",

  // Apenas dígitos: DDI 55 + DDD + número (12 ou 13 dígitos)
  whatsappPhone: "5511999999999", // EXEMPLO: substituir pelo número oficial

  // Mensagens pré-preenchidas por origem do clique (contracts/ui-contracts.md §7)
  messages: {
    header: "Olá! Gostaria de um atendimento personalizado na Scorpion gytano.",
    footer: "Olá! Vim pelo site da Scorpion gytano e gostaria de falar com a equipe.",
    floating: "Olá! Estou no site da Scorpion gytano e gostaria de tirar algumas dúvidas sobre as coleções.",
    product: (name) =>
      `Olá! Tenho interesse na peça *${name}* da Scorpion gytano. Poderiam me passar os tamanhos disponíveis?`,
  },

  instagramHandle: "@scorpion.gytano",
  instagramUrl: "https://www.instagram.com/scorpion.gytano/",
  openingHours: "Seg a Sáb, 9h às 20h", // EXEMPLO: confirmar horário
};

window.CATEGORIES = [
  { id: "feminino", label: "Feminino", image: "assets/img/categorias/feminino.webp" },
  { id: "infantil", label: "Infantil", image: "assets/img/categorias/infantil.webp" },
  { id: "acessorios", label: "Acessórios", image: "assets/img/categorias/acessorios.webp" },
];

/*
 * Produtos. As fotos são da loja; nomes e descrições foram escritos a partir das
 * fotos e devem ser confirmados com a loja (EXEMPLO), assim como os preços.
 * - name: entre 3 e 80 caracteres
 * - category: "feminino" | "infantil" | "acessorios"
 * - isNew: true faz a peça aparecer no filtro "Lançamentos"
 * - badge (opcional): "Mais Vendido" | "Lançamento" | "Edição Limitada"
 * - price (opcional): texto livre, ex: "R$ 349,90"
 * - image: assets/img/produtos/{id}.webp, 600x800 (proporção 3:4)
 * - alt: descrição da peça para leitores de tela
 */
window.PRODUCTS = [
  {
    id: "vestido-longo-faixa-vermelho",
    name: "Vestido Longo Vermelho com Faixa",
    category: "feminino",
    isNew: true,
    material: "Malha fluida com recorte central em bege",
    badge: "Lançamento",
    image: "assets/img/produtos/vestido-longo-faixa-vermelho.webp",
    alt: "Mulher na calçada usando vestido longo vermelho com faixa vertical bege e decote em V",
  },
  {
    id: "vestido-longo-rosa-amarracao",
    name: "Vestido Longo Rosa com Amarração",
    category: "feminino",
    material: "Tecido leve com amarração no decote e saia em camadas",
    badge: "Mais Vendido",
    image: "assets/img/produtos/vestido-longo-rosa-amarracao.webp",
    alt: "Mulher sorrindo em calçada de pedras usando vestido longo rosa com laço no decote",
  },
  {
    id: "vestido-vinho-ombro-unico",
    name: "Vestido Vinho Ombro Único",
    category: "feminino",
    material: "Manga longa, fenda lateral e argola dourada na cintura",
    badge: "Edição Limitada",
    image: "assets/img/produtos/vestido-vinho-ombro-unico.webp",
    alt: "Mulher caminhando na rua com vestido vinho de um ombro só e fenda lateral",
  },
  {
    id: "regata-estampa-tropical",
    name: "Regata Estampa Tropical",
    category: "feminino",
    isNew: true,
    material: "Fundo preto com folhagens e laço no ombro",
    image: "assets/img/produtos/regata-estampa-tropical.webp",
    alt: "Mulher em um jardim usando regata preta com estampa de folhas e short jeans",
  },
  {
    id: "vestido-infantil-pink-laco",
    name: "Vestido Infantil Pink com Laço",
    category: "infantil",
    isNew: true,
    material: "Mangas em renda branca e laço com pérola",
    badge: "Lançamento",
    image: "assets/img/produtos/vestido-infantil-pink-laco.webp",
    alt: "Menina sorrindo no jardim usando vestido pink rodado com mangas de renda branca",
  },
  {
    id: "vestido-bebe-vermelho-babados",
    name: "Vestido Bebê Vermelho com Babados",
    category: "infantil",
    material: "Mangas em laise branca e laço na cintura",
    badge: "Mais Vendido",
    image: "assets/img/produtos/vestido-bebe-vermelho-babados.webp",
    alt: "Bebê na grama usando vestido vermelho com babado na barra e laço branco",
  },
  {
    id: "camisetas-infantis-estampadas",
    name: "Conjuntos Infantis Camiseta e Bermuda",
    category: "infantil",
    material: "Camisetas estampadas com bermudas leves",
    image: "assets/img/produtos/camisetas-infantis-estampadas.webp",
    alt: "Dois meninos sorrindo no jardim, um de camiseta verde com bicicletas e outro de regata vermelha",
  },
  {
    id: "clutch-bronze-texturizada",
    name: "Clutch Bronze Texturizada",
    category: "acessorios",
    material: "Tecido texturizado com fecho de pressão dourado",
    image: "assets/img/produtos/clutch-bronze-texturizada.webp",
    alt: "Bolsa clutch alongada em tom bronze com fecho dourado sobre bancada de granito",
  },
  {
    id: "bolsas-de-mao-prateadas",
    name: "Bolsa de Mão Prateada",
    category: "acessorios",
    isNew: true,
    material: "Versões com strass ou glitter, alça trançada e corrente",
    badge: "Lançamento",
    image: "assets/img/produtos/bolsas-de-mao-prateadas.webp",
    alt: "Duas bolsas de mão prateadas, uma com strass e outra com glitter, sobre granito",
  },
  {
    id: "bolsa-oval-rose-strass",
    name: "Bolsa Oval Rosé com Strass",
    category: "acessorios",
    material: "Frente em strass, verso acetinado dourado e corrente",
    badge: "Edição Limitada",
    image: "assets/img/produtos/bolsa-oval-rose-strass.webp",
    alt: "Bolsa oval rosé mostrada de frente, com strass, e de costas, em dourado liso",
  },
];
