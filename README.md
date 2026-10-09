<div align="center">

# Scorpion gytano · Landing Page

Landing page estática e mobile-first para uma loja de moda, com vendas pelo WhatsApp.

**Português** · [English](README.en.md)

</div>

---

## Sobre

Projeto acadêmico de desenvolvimento de uma landing page para a **Scorpion gytano**, empresa de moda urbana. A página apresenta as coleções da loja e leva o visitante a fechar a compra numa conversa direta pelo WhatsApp.

O projeto segue Spec-Driven Development com o [GitHub Spec Kit](https://github.com/github/spec-kit). A especificação, o plano e as tarefas estão em [`specs/`](specs/001-scorpion-landing-page/).

## Funcionalidades

- **Vitrine de produtos** com filtros por categoria e lançamentos
- **Compra pelo WhatsApp**: cada produto abre uma conversa com mensagem pronta citando a peça
- **Mobile-first**, testado de 320 px a 2560 px
- **Acessível**: contraste WCAG AA, navegação por teclado e suporte a movimento reduzido
- **Rápido**: nota 100 no Lighthouse em Performance, Acessibilidade, Boas Práticas e SEO na validação do projeto
- **Zero dependências**: sem frameworks, sem gerenciador de pacotes e sem build

## Tecnologias

HTML5 · CSS3 · JavaScript puro

## Como executar

### Pré-requisitos

Qualquer servidor de arquivos estáticos, como Python ou a extensão **Live Server** do VS Code.

### Rodando localmente

```bash
git clone https://github.com/Pedrooliv12/fashion-landing-page.git
cd fashion-landing-page
python -m http.server 3000 --directory site
```

Depois acesse `http://localhost:3000`.

> Sirva os arquivos por HTTP em vez de abrir o `index.html` direto: os navegadores bloqueiam as fontes locais em endereços `file://`.

## Estrutura

```text
site/
├── index.html            # Marcação da página e textos fixos
└── assets/
    ├── css/styles.css    # Estilos (paleta documentada no topo)
    ├── js/config.js      # Dados da loja: WhatsApp, produtos, redes
    ├── js/main.js        # Vitrine, filtros, menu e links do WhatsApp
    ├── fonts/            # Montserrat (self-hosted)
    └── img/              # Imagens em WebP e logotipo em SVG
specs/                    # Especificação, plano e tarefas (Spec Kit)
```

## Usando como template

1. **Faça um fork ou clone** deste repositório.
2. **Configure a loja** em `site/assets/js/config.js`: número do WhatsApp (só dígitos, com DDI e DDD), mensagens, Instagram, horário e a lista de produtos.
3. **Troque as imagens** em `site/assets/img/` por arquivos WebP. As fotos de produto têm 600×800 px. O [Squoosh](https://squoosh.app) converte imagens direto no navegador.
4. **Atualize a identidade**: os logotipos (`logo.svg`, `logo-light.svg`, `favicon.svg`) e os textos do `index.html`.
5. **Ajuste as cores** no `styles.css`, usando a paleta listada no topo do arquivo.
6. **Remova os placeholders** antes de publicar. Procure por `EXEMPLO` no código: esses trechos são conteúdo provisório e precisam ser trocados, inclusive os depoimentos, que são fictícios.

## Créditos

- Fotos de exemplo do [Unsplash](https://unsplash.com/license)
- Referência visual: [nodeckagency/clothing-store-landing-page](https://github.com/nodeckagency/clothing-store-landing-page)
- Fonte: [Montserrat](https://fonts.google.com/specimen/Montserrat) (SIL Open Font License)
