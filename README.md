# Scorpion gytano — Landing Page

Landing page de página única da loja **Scorpion gytano**, com vendas pelo WhatsApp. Feita em HTML5, Tailwind CSS e JavaScript puro. O site publicado é a pasta `site/`.

A especificação completa está em [`specs/001-scorpion-landing-page/`](specs/001-scorpion-landing-page/), e as regras do projeto na [constituição](.specify/memory/constitution.md).

## Requisitos

- Node.js 18 ou superior (usado só para compilar o CSS e converter imagens)

## Como rodar

```bash
npm install        # instala Tailwind, sharp-cli e a fonte Montserrat
npm run dev        # recompila o CSS a cada alteração (deixe rodando)
npx serve site     # em outro terminal: abre o site em http://localhost:3000
```

Antes de publicar, gere o CSS final minificado:

```bash
npm run build      # gera site/assets/css/styles.css
```

> Não abra o `index.html` direto pelo arquivo (`file://`): a fonte e alguns recursos não carregam nesse modo. Use sempre um servidor, como o `npx serve site`.

## Como editar o conteúdo da loja

Quase tudo que muda com frequência está em **um único arquivo**: [`site/assets/js/config.js`](site/assets/js/config.js).

| O que mudar | Onde |
|---|---|
| Número do WhatsApp | `whatsappPhone`: só dígitos, com 55 + DDD + número (ex: `5511912345678`) |
| Mensagens que chegam no WhatsApp | `messages` (uma por botão: cabeçalho, rodapé, botão flutuante e produto) |
| Instagram, TikTok e horário | `instagramUrl`, `tiktokUrl`, `openingHours` |
| Produtos | lista `window.PRODUCTS` |

### Adicionar um produto

1. Prepare a foto em **WebP, 600×800 px** (proporção 3:4) e salve em `site/assets/img/produtos/{id}.webp`. Para converter uma foto JPG ou PNG:

   ```bash
   npx sharp-cli -i foto-original.jpg -o site/assets/img/produtos/minha-peca.webp --format webp --quality 78 resize 600 800
   ```

   O `resize 600 800` recorta a foto no centro para o formato 3:4.

2. Adicione um item em `window.PRODUCTS` no `config.js`:

   ```js
   {
     id: "minha-peca",                  // igual ao nome do arquivo da foto
     name: "Nome da Peça",              // entre 3 e 80 caracteres
     category: "feminino",              // "masculino", "feminino" ou "acessorios"
     isNew: true,                       // opcional: aparece em "Lançamentos"
     material: "Tecido e acabamento",
     badge: "Lançamento",               // opcional: "Mais Vendido", "Lançamento" ou "Edição Limitada"
     price: "R$ 199,90",                // opcional
     image: "assets/img/produtos/minha-peca.webp",
     alt: "Descrição da foto para leitores de tela",
   },
   ```

3. Se você usou classes novas do Tailwind, rode `npm run build` de novo.

Os textos fixos (Hero, Diferenciais, Sobre a Marca, Depoimentos e rodapé) ficam em [`site/index.html`](site/index.html).

## Conteúdo de exemplo a substituir antes de publicar

O site está com conteúdo provisório, marcado com `EXEMPLO` no código. Para listar tudo que falta trocar:

```bash
grep -rn "EXEMPLO" site/
```

- [ ] Número oficial do WhatsApp (`config.js`)
- [ ] Perfil do TikTok e horário de atendimento (`config.js`)
- [ ] Catálogo real: produtos, preços e fotos (`config.js` e `site/assets/img/produtos/`)
- [ ] Logotipo oficial (`site/assets/img/logo.svg`, `logo-light.svg`, `favicon.svg`)
- [ ] Fotos da Hero, das categorias e do Sobre (hoje são fotos livres do Unsplash)
- [ ] Depoimentos reais de clientes (`index.html`). **Não publique os depoimentos de exemplo.**
- [ ] Texto institucional do "Sobre a Marca" revisado pela loja (`index.html`)
- [ ] URL final do site no `canonical`, `og:url`, `og:image` e JSON-LD (`index.html`)

## Estrutura

```text
site/                    # o que é publicado
├── index.html
└── assets/
    ├── css/styles.css   # gerado pelo `npm run build`
    ├── js/config.js     # dados da loja (edite aqui)
    ├── js/main.js       # comportamento: WhatsApp, menu, vitrine e filtros
    ├── fonts/           # Montserrat (self-hosted)
    └── img/             # imagens WebP, logo e favicon
src/input.css            # entrada do Tailwind
tailwind.config.js       # paleta de cores e configuração
```
