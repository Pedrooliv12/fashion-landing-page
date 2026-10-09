# Scorpion gytano — Landing Page

Landing page de página única da loja **Scorpion gytano**, com vendas pelo WhatsApp. É um site **100% estático**: HTML5, CSS e JavaScript puro, sem Node.js, npm, frameworks ou etapa de build. O site publicado é a pasta `site/`.

A especificação completa está em [`specs/001-scorpion-landing-page/`](specs/001-scorpion-landing-page/), e as regras do projeto na [constituição](.specify/memory/constitution.md).

## Como rodar

Não precisa instalar nada. Sirva a pasta `site/` com qualquer servidor estático. Duas opções:

- **VS Code:** instale a extensão *Live Server*, abra `site/index.html` e clique em **Go Live**.
- **Python** (já vem no Windows com o Python instalado):

  ```bash
  python -m http.server 3000 --directory site
  ```

  e acesse `http://localhost:3000`.

> Evite abrir o `index.html` direto pelo arquivo (`file://`): no Chrome a fonte Montserrat não carrega nesse modo. Use um dos servidores acima.

## Como editar o conteúdo da loja

Quase tudo que muda com frequência está em **um único arquivo**: [`site/assets/js/config.js`](site/assets/js/config.js).

| O que mudar | Onde |
|---|---|
| Número do WhatsApp | `whatsappPhone`: só dígitos, com 55 + DDD + número (ex: `5511912345678`) |
| Mensagens que chegam no WhatsApp | `messages` (uma por botão: cabeçalho, rodapé, botão flutuante e produto) |
| Instagram e horário | `instagramUrl`, `openingHours` |
| Produtos | lista `window.PRODUCTS` |

### Adicionar um produto

1. Prepare a foto em **WebP, 600×800 px** (proporção 3:4) e salve em `site/assets/img/produtos/{id}.webp`. Para converter uma foto JPG ou PNG sem instalar nada, use o [Squoosh](https://squoosh.app) no navegador: redimensione para 600×800, escolha o formato **WebP** com qualidade em torno de 78 e baixe o arquivo.

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

Os textos fixos (Hero, Diferenciais, Sobre a Marca, Depoimentos e rodapé) ficam em [`site/index.html`](site/index.html).

### Sobre o CSS

O [`styles.css`](site/assets/css/styles.css) foi gerado uma vez com Tailwind CSS e agora é **mantido à mão**. Ele contém só as classes usadas no `index.html` e no `main.js` (ex: `bg-brand`, `text-muted`, `min-h-11`). Se você usar no HTML uma classe que ainda não existe no arquivo, ela não terá efeito: escreva a regra dela no `styles.css`. As cores da marca estão listadas no comentário do topo do arquivo.

## Conteúdo de exemplo a substituir antes de publicar

O site está com conteúdo provisório, marcado com `EXEMPLO` no código. Para listar tudo que falta trocar:

```bash
git grep -n "EXEMPLO" site/
```

- [ ] Número oficial do WhatsApp (`config.js`)
- [ ] Horário de atendimento (`config.js`)
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
    ├── css/styles.css   # estilos estáticos (mantidos à mão)
    ├── js/config.js     # dados da loja (edite aqui)
    ├── js/main.js       # comportamento: WhatsApp, menu, vitrine e filtros
    ├── fonts/           # Montserrat (self-hosted)
    └── img/             # imagens WebP, logo e favicon
specs/                   # especificação, plano e tarefas (Spec Kit)
.specify/                # constituição e templates do Spec Kit
```
