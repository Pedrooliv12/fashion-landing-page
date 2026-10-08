# Quickstart & Validation Guide: Landing Page Scorpion gytano

**Feature**: `001-scorpion-landing-page`
**Date**: 2026-10-08 (revisão: tema claro, build do Tailwind, validações de qualidade)
**Status**: Ready

Como rodar a página localmente e o roteiro de validação ponta a ponta. Os detalhes dos componentes estão em [contracts/ui-contracts.md](contracts/ui-contracts.md).

---

## 1. Pré-Requisitos

- Node.js 18+ (usado só para compilar o Tailwind e converter imagens).
- Google Chrome (DevTools e Lighthouse).

## 2. Instalação e Build

Na raiz do repositório:

```powershell
npm install          # instala tailwindcss@3.4.17 e sharp-cli
npm run build        # gera site/assets/css/styles.css minificado
```

Durante o desenvolvimento, `npm run dev` recompila o CSS a cada alteração.

## 3. Servir Localmente

```powershell
npx serve site -p 3000
```

Acesse `http://localhost:3000`. **Não abra o `index.html` direto pelo arquivo** (`file://`): o preload de fontes e alguns recursos não funcionam nesse modo.

---

## 4. Roteiro de Validação

### V1. Estrutura e ordem (FR-019)
1. Em 375px, role a página de cima a baixo.
2. **Esperado**: Faixa superior → Cabeçalho → Hero → Diferenciais → Categorias → Coleções → Sobre a Marca → Depoimentos & Instagram → Rodapé.
3. **Esperado**: fundo predominantemente branco e cinza claro; vermelho só em botões e destaques; verde só no botão do cabeçalho e no flutuante.

### V2. Hero (US2)
1. Em 375px, confira a ordem: logo (no cabeçalho) → headline → texto corrido → botão vermelho, com o botão visível sem rolar.
2. Clique em "Ver Coleção & Falar com Vendedor". **Esperado**: rola suavemente até a vitrine.
3. Clique em "Atendimento no WhatsApp" no cabeçalho. **Esperado**: abre o WhatsApp com a mensagem `header` (contrato §7).

### V3. Vitrine e categorias (US1)
1. Clique em cada filtro. **Esperado**: só os produtos correspondentes aparecem; "Lançamentos" mostra produtos de categorias diferentes; o botão ativo tem `aria-pressed="true"`.
2. Volte para Categorias e clique em "Feminino". **Esperado**: rola até a vitrine com o filtro "Feminino" ativo.
3. No desktop, passe o mouse sobre um card. **Esperado**: zoom suave e botão deslizando sobre a imagem. Use `Tab` até o card: o botão também aparece.
4. No modo de toque do DevTools (iPhone), **esperado**: o botão "Garantir no WhatsApp" já está visível abaixo das informações, e um toque abre o WhatsApp.
5. **Esperado**: a mensagem contém o nome exato da peça, com acentos preservados.

### V4. Navegação (SC-005, FR-004)
1. Clique em cada link do cabeçalho. **Esperado**: o título da seção aparece inteiro, abaixo do cabeçalho fixo.
2. Em 375px e em 768px, abra o menu e clique em um link. **Esperado**: o menu fecha e a página rola. A tecla `Esc` também fecha o menu.

### V5. Botão flutuante e rodapé (US4)
1. Role até o rodapé. **Esperado**: o botão flutuante não cobre nenhum link ou texto do rodapé.
2. Clique nele e no botão do rodapé. **Esperado**: mensagens `floating` e `footer`.
3. No DevTools → Rendering → `prefers-reduced-motion: reduce`. **Esperado**: sem pulso, sem zoom e rolagem instantânea.

### V6. Responsividade (SC-003, SC-004)
1. Teste as larguras 320, 375, 414, 768, 1024, 1440 e **2560px**.
2. **Esperado**: nenhuma barra de rolagem horizontal. No console: `document.documentElement.scrollWidth <= window.innerWidth` deve retornar `true`.
3. **Esperado**: todos os alvos de toque com pelo menos 44×44px (Lighthouse → Accessibility → "Touch targets").

### V7. Lighthouse (SC-007)
1. DevTools → Lighthouse → modo **Mobile**, categorias Performance, Accessibility, Best Practices e SEO.
2. **Esperado**: ≥ 90 em todas. LCP < 1,5s e CLS = 0 em "Performance".

### V8. Contraste (SC-008)
1. Lighthouse → Accessibility: sem o alerta "Background and foreground colors do not have a sufficient contrast ratio".
2. O Lighthouse não mede texto sobre fotos. Confira no código que Hero e Sobre usam `bg-ink/60` e que nenhum texto vermelho fica sobre foto (research.md §2).
2. Confira com o seletor de cor do DevTools o texto do botão verde (`#111111` sobre `#25D366`, cerca de 9,5:1).

### V9. Assets, fontes e prévia social
1. DevTools → Network → filtro *Img*: todas as imagens exibidas são `.webp` (ou `.svg` no logo) e carregaram (status 200).
2. Filtro *Font*: apenas `montserrat-latin-variable.woff2`, servida de `assets/fonts/`; nenhuma requisição para domínios externos.
3. **Somente após a publicação (fora do escopo desta feature)**: cole a URL em `https://www.opengraph.xyz/` ou envie para si no WhatsApp. **Esperado**: título, descrição e `og-image.jpg` aparecem.

### V10. Checagem antes de publicar
1. Procure por `EXEMPLO` no projeto: `git grep -n "EXEMPLO" site/`.
2. **Esperado**: nenhum resultado. Número de WhatsApp, fotos e depoimentos já são os reais da loja.

---

## Resultado da validação (2026-10-08)

Feita localmente (`npx serve site`) com Chrome headless (screenshots em iframes de 320, 375, 768, 1440 e 2560px), Lighthouse 12 e testes manuais do responsável do projeto (menu, filtros, cards de categoria e botões "Garantir" no modo toque e com mouse).

| Item | Status | Observação |
|---|---|---|
| V1 Estrutura e ordem | ✅ | Ordem do FR-019; verde só no cabeçalho e no botão flutuante |
| V2 Hero | ✅ | Em 375×667 o botão aparece sem rolar, acima do botão flutuante; em 320×568 o conteúdo cresce sem cortes; LCP = `#hero-image` |
| V3 Vitrine e categorias | ✅ | Masculino 4, Feminino 3, Acessórios 3, Lançamentos 3 (uma de cada categoria); mensagem com o nome e os acentos da peça |
| V4 Navegação | ✅ | Títulos visíveis abaixo do cabeçalho; links com âncora abertos direto (ex: `/#sobre`) corrigidos depois da montagem da vitrine |
| V5 Botão flutuante e rodapé | ✅ | Mensagens `footer` e `floating` corretas; `pb-24` no rodapé; animações sob `motion-safe:` (verificado no código) |
| V6 Responsividade | ✅ | Sem rolagem horizontal visível de 320 a 2560px; alvos de toque ≥ 44px |
| V7 Lighthouse | ✅ / ⚠️ | Mobile: 100 / 100 / 100 / 100, CLS 0, FCP 0,8s, **LCP 1,7s** (meta do plano: 1,5s; ainda "bom" pelo Core Web Vitals, até 2,5s). Desktop: 100 / 100 / 100 / 100, LCP 0,5s |
| V8 Contraste | ✅ | Acessibilidade 100; Hero e Sobre com `bg-ink/60`; nenhum texto vermelho sobre foto |
| V9 Assets e fontes | ✅ / ⏳ | Imagens WebP (logo e favicon em SVG), fonte local, nenhuma requisição externa. Prévia social pendente até a publicação |
| V10 Checagem antes de publicar | ❌ esperado | Conteúdo `EXEMPLO` ainda presente: número, logo, fotos, depoimentos, texto do Sobre, TikTok, horário e URL. Pendência da loja (ver README) |

**Melhorias opcionais identificadas pelo Lighthouse** (não afetam a nota):
- Imagens de produtos e do Instagram são servidas em 600px mesmo quando exibidas menores no desktop (cerca de 500 KB evitáveis). Vale gerar versões de 300px com `srcset` ao trocar pelas fotos reais.
- Cache dos arquivos estáticos: é configuração da hospedagem, a definir na publicação.
- LCP no mobile: o CSS (13 KB) bloqueia a renderização por cerca de 110ms. Inserir o CSS crítico no `<head>` traria o LCP para perto de 1,5s, ao custo de uma etapa extra no build.
