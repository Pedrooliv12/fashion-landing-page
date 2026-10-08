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
  tiktokUrl: "https://www.tiktok.com/@scorpion.gytano", // EXEMPLO: confirmar perfil
  openingHours: "Seg a Sáb, 9h às 20h", // EXEMPLO: confirmar horário
};

window.CATEGORIES = [
  { id: "masculino", label: "Masculino", image: "assets/img/categorias/masculino.webp" },
  { id: "feminino", label: "Feminino", image: "assets/img/categorias/feminino.webp" },
  { id: "acessorios", label: "Acessórios", image: "assets/img/categorias/acessorios.webp" },
];

/*
 * Produtos (EXEMPLO: substituir pelo catálogo real).
 * - name: entre 3 e 80 caracteres
 * - category: "masculino" | "feminino" | "acessorios"
 * - isNew: true faz a peça aparecer no filtro "Lançamentos"
 * - badge (opcional): "Mais Vendido" | "Lançamento" | "Edição Limitada"
 * - price (opcional): texto livre, ex: "R$ 349,90"
 * - image: assets/img/produtos/{id}.webp, 600x800 (proporção 3:4)
 * - alt: descrição da peça para leitores de tela
 */
window.PRODUCTS = [
  {
    id: "jaqueta-couro-premium",
    name: "Jaqueta de Couro Premium",
    category: "masculino",
    material: "Couro legítimo com forro em viscose",
    badge: "Mais Vendido",
    price: "R$ 489,90",
    image: "assets/img/produtos/jaqueta-couro-premium.webp",
    alt: "Jaqueta de couro preta estilo motociclista sobre lençol branco",
  },
  {
    id: "jaqueta-bomber-caramelo",
    name: "Jaqueta Bomber Caramelo",
    category: "masculino",
    isNew: true,
    material: "Nylon acetinado com punhos canelados",
    badge: "Lançamento",
    price: "R$ 259,90",
    image: "assets/img/produtos/jaqueta-bomber-caramelo.webp",
    alt: "Jaqueta bomber cor caramelo pendurada em um cabide",
  },
  {
    id: "camiseta-algodao-pima",
    name: "Camiseta Básica Algodão Pima",
    category: "masculino",
    material: "Algodão pima 100%, toque macio",
    price: "R$ 89,90",
    image: "assets/img/produtos/camiseta-algodao-pima.webp",
    alt: "Camisetas básicas dobradas em várias cores sobre madeira escura",
  },
  {
    id: "moletom-canguru-mescla",
    name: "Moletom Canguru Mescla",
    category: "masculino",
    material: "Moletom flanelado com capuz forrado",
    image: "assets/img/produtos/moletom-canguru-mescla.webp",
    alt: "Pessoa de costas vestindo moletom cinza mescla com capuz",
  },
  {
    id: "vestido-longo-vermelho",
    name: "Vestido Longo Vermelho",
    category: "feminino",
    isNew: true,
    material: "Crepe fluido com saia evasê",
    badge: "Edição Limitada",
    price: "R$ 399,90",
    image: "assets/img/produtos/vestido-longo-vermelho.webp",
    alt: "Mulher girando com vestido longo vermelho de saia rodada",
  },
  {
    id: "poncho-trico-off-white",
    name: "Poncho de Tricô Off-White",
    category: "feminino",
    material: "Tricô de algodão com franjas",
    price: "R$ 179,90",
    image: "assets/img/produtos/poncho-trico-off-white.webp",
    alt: "Poncho de tricô off-white com franjas pendurado em um cabide",
  },
  {
    id: "calca-jeans-skinny-clara",
    name: "Calça Jeans Skinny Clara",
    category: "feminino",
    material: "Denim com elastano e lavagem clara",
    badge: "Mais Vendido",
    price: "R$ 199,90",
    image: "assets/img/produtos/calca-jeans-skinny-clara.webp",
    alt: "Pernas de modelo vestindo calça jeans skinny em lavagem clara",
  },
  {
    id: "bolsa-couro-vermelha",
    name: "Bolsa Estruturada Vermelha",
    category: "acessorios",
    isNew: true,
    material: "Couro com fecho metálico",
    badge: "Lançamento",
    price: "R$ 349,90",
    image: "assets/img/produtos/bolsa-couro-vermelha.webp",
    alt: "Bolsa estruturada de couro vermelho com alça de mão",
  },
  {
    id: "relogio-minimalista-couro",
    name: "Relógio Minimalista",
    category: "acessorios",
    material: "Caixa em aço e pulseira de couro",
    image: "assets/img/produtos/relogio-minimalista-couro.webp",
    alt: "Relógio de mostrador branco e pulseira de couro bege segurado na mão",
  },
  {
    id: "oculos-sol-redondo-dourado",
    name: "Óculos de Sol Redondo",
    category: "acessorios",
    material: "Armação metálica dourada com lentes verdes",
    price: "R$ 229,90",
    image: "assets/img/produtos/oculos-sol-redondo-dourado.webp",
    alt: "Óculos de sol redondo com armação dourada sobre superfície branca",
  },
];
