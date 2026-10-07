# Quickstart & Validation Guide: Landing Page Scorpion gytano

**Feature**: `001-scorpion-landing-page`  
**Date**: 2026-10-07  
**Status**: Ready

Este guia descreve os pré-requisitos, instruções de execução local e o roteiro passo a passo de validação para a landing page da **Scorpion gytano**.

---

## 1. Pré-Requisitos

- Navegador web moderno (Chrome, Edge, Firefox ou Safari).
- Node.js (versão 18+) ou qualquer servidor estático local (opcional, para visualização de mídias e fontes locais).
- Terminal PowerShell ou Bash.

---

## 2. Inicialização e Execução Local

Como se trata de uma arquitetura estática leve (HTML5, Tailwind CSS e Vanilla JS em conformidade com o Princípio V da Constituição):

### Opção A: Execução via Servidor Local Rápido (Recomendado)
Execute na raiz do projeto:
```powershell
npx -y serve site -p 3000
```
Ou usando Python:
```powershell
python -m http.server 3000 --directory site
```
Acesse no navegador: `http://localhost:3000`

### Opção B: Abertura Direta do Arquivo
Abra o arquivo `site/index.html` diretamente em seu navegador preferido.

---

## 3. Roteiro de Validação Ponta a Ponta

Execute os testes manuais e funcionais a seguir para certificar a conformidade do entregável:

### Validação 1: Hero Section & Hierarquia Mobile-First
1. Abra a página redimensionando o navegador para 375px (modo de emulação mobile).
2. **Verificar**: A ordem visual exibida no topo é estritamente:
   1. Logotipo Scorpion gytano;
   2. Headline: *"Estilo, Atitude e Exclusividade em Cada Peça"*;
   3. Texto corrido de apresentação;
   4. Botão CTA vermelho: *"Ver Coleção & Falar com Vendedor"*.
3. **Verificar**: O fundo escuro (`#0A0A0A`) mescla harmoniosamente com a imagem de capa através de gradientes e o logotipo apresenta alto contraste e legibilidade.

### Validação 2: Vitrine e Filtragem de Produtos
1. Role a página até a seção **Coleções**.
2. Clique nos botões de filtro: *"Todos"*, *"Masculino"*, *"Feminino"*, *"Acessórios"*, *"Lançamentos"*.
3. **Verificar**: Apenas os produtos associados à categoria selecionada permanecem visíveis, com transição suave.
4. Passe o cursor sobre o card de um produto (em desktop) ou toque nele (em mobile).
5. **Verificar**: A imagem do produto realiza zoom suave (`scale-110`) sem distorções.
6. Clique no botão *"Garantir no WhatsApp"*.
7. **Verificar**: Uma nova aba é aberta direcionando para o WhatsApp com a mensagem contendo o nome exato do produto selecionado.

### Validação 3: Navegação do Cabeçalho e Smooth Scroll
1. No cabeçalho, clique nos links: *"Início"*, *"Coleções"*, *"Sobre a Marca"*, *"Diferenciais"*, *"Depoimentos"*.
2. **Verificar**: A página desliza suavemente até a seção correspondente sem saltos bruscos e mantendo o cabeçalho visível.
3. Em resolução mobile (< 768px), clique no ícone de menu hamburger.
4. **Verificar**: O menu se expande com áreas de clique amplas (mínimo 44x44px). Ao clicar em um link, o menu se fecha e a página rola para a seção.

### Validação 4: Botão Flutuante do WhatsApp
1. Role a página até o meio e até o rodapé.
2. **Verificar**: O botão do WhatsApp permanece fixo no canto inferior direito (`fixed bottom-5 right-5 z-50`).
3. **Verificar**: A animação de pulso suave está ativa e visível em segundo plano do botão.
4. Clique no botão.
5. **Verificar**: O chat do WhatsApp é aberto com a mensagem de atendimento geral.

### Validação 5: Responsividade e Ausência de Scroll Horizontal
1. No console do desenvolvedor (F12), ative o modo responsivo e teste as larguras:
   - `320px` (smartphones muito compactos)
   - `375px` / `390px` / `414px` (iPhones e Androids padrão)
   - `768px` (tablets verticais)
   - `1024px` e `1440px` (laptops e desktops)
2. **Verificar**: Não há barra de rolagem horizontal (`overflow-x` zero) em nenhuma das resoluções.
3. **Verificar**: Textos mantêm quebras limpas e botões mantêm touch targets confortáveis.

### Validação 6: Self-Hosting de Fontes & Performance
1. Na aba *Network* do DevTools, recarregue a página (F5).
2. Filtre por *Font*.
3. **Verificar**: As fontes ("Outfit" / "Montserrat") são carregadas a partir de `assets/fonts/` (sem requisições bloqueantes externas para servidores de terceiros).
