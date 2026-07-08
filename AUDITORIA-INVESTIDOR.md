# Auditoria Investidora — Ristorante Villa Bellini (teiú)

## Nota Geral: 2/10

---

## A Verdade Urgente

**O código-fonte não existe.** O diretório `src/` contém apenas 3 imagens (`hero.png`, `react.svg`, `vite.svg`). Não há `src/index.css`, `src/components/`, `src/hooks/`, `src/data/`, `src/types/`. Nenhum arquivo `.tsx`, `.ts` ou `.css` de origem foi encontrado. O projeto é uma casca vazia com um `dist/` que contém um bundle compilado de 395KB de JS + 21KB de CSS — produto de uma build anterior cujo código-fonte foi perdido ou deletado.

Esta auditoria foi reconstruída a partir do bundle minificado em `dist/assets/index-DfBxSLOo.js` e `dist/assets/index-9XwxGZj9.css`.

---

## Pontos Fortes (o que vende)

1. **Stack técnica de ponta.** React 19 + Framer Motion (via `motion` v12) + Tailwind CSS v4 + TypeScript 6 + Vite 8 + oxlint. É a stack mais moderna possível em meados de 2026. `package-lock.json` confirma as versões.

2. **Animações de classe mundial (no bundle).** O bundle revela uso extensivo de Framer Motion: `AnimatePresence` para transições de página, `useSpring` + `useTransform` para o hook `useMagneticHover` (parallax magnético em botões), `whileInView` para revelação sob scroll, `clipPath` para loading screen com efeito de revelação, easing curves customizadas (`[.25,1,.5,1]` e `[.34,1.56,.64,1]`). O loading screen (`Lp`) tem animação de entrada/saída com escala e opacidade.

3. **Design system com tokens.** O CSS revela um sistema de design via variáveis CSS: `--color-primary`, `--color-accent`, `--color-surface`, `--color-text`, `--font-display` (Italiana), `--font-sans` (Jost), easing custom `--ease-project`, `--ease-spring-soft`, `--ease-expo-out`. Tipografia com escala `text-eyebrow`, `text-h1`, `text-h2`, `tracking-eyebrow`, `tracking-h1`. Paleta: dourado `#c8a96e`, fundo escuro `#0d0d0d`, bege claro `#ebe3d5`.

4. **Responsivo e mobile-first.** O header (`Up`) tem menu hamburger em `md:hidden` com animação `AnimatePresence`. Navegação adaptável com dropdown de cidades (`São Paulo`, `Rio de Janeiro`). Botão "Reservar" com scroll suave âncora.

5. **Dados realistas e bem estruturados (no bundle).** O objeto `zp` contém: nome, slogan (`Cucina Italiana Contemporanea`), ano de fundação (1987), chef (`Matteo Conti` — bio "Nascido em Bolonha"), múltiplas localidades com endereço completo, cardápio com categorias (Entradas, Pastas, Risotos, Carnes, Sobremesas), galeria com tipos (`dish`, `event`, `interior`), redes sociais (Instagram, Facebook, WhatsApp).

6. **Componentes customizados.** `MagneticButton` (`Vp`) com efeito de hover magnético via `useSpring`. Plugin detector com seletor de guias (`Fotos` / `Prêmios`). Seção About com grid de chef + história + imagem.

---

## Pontos Fracos (o que trava uma venda)

1. **Código-fonte deletado — zero possibilidade de manutenção.** `src/` está vazio. Não há `package.json` raiz (só `package-lock.json`). Não há `tsconfig.json`, `vite.config.ts`, ou qualquer configuração do projeto. Isso não é um produto — é um lixo digital. Qualquer comprador precisaria reescrever do zero ou conseguir reverter engenharia de 395KB de JS minificado. **Isso sozinho já inviabiliza qualquer transação comercial.**

2. **Site estático sem backend.** O bundle não mostra chamadas a API, formulário funcional, ou integração com serviços reais. O botão "Reservar" só faz scroll para uma âncora `#reservation`. Não há envio de formulário, conexão com OpenTable, WhatsApp API, ou qualquer backend. É uma fachada — linda, mas sem cérebro.

3. **Navegação one-page com hash links.** O menu usa links `#menu`, `#about`, `#gallery`, `#reservation`. Zero roteamento real — apesar de React Router DOM v7 estar nas dependências, o bundle não mostra uso significativo de roteamento (`BrowserRouter`, `Route`, etc). Router incluso como dependência morta.

4. **Imagens placeholder quebradas.** A galeria e seções de chef usam imagens com `src: ""` (string vazia). A `hero.png` em `src/assets/` é o único asset real. O resto são CSS placeholders com `backgroundImage` radial-gradient ou quadrados pretos. Visualmente, o site não tem fotografia de verdade.

5. **Zero conteúdo de cardápio extraído.** O bundle tem a estrutura de dados do cardápio mas os nomes dos pratos estão truncados na string que consegui extrair. Os preços e descrições reais dos pratos podem ou não estar completos — impossível verificar sem o source.

6. **Licenciamento obscuro.** Sem `LICENSE`, sem README, sem instruções de deploy, sem documentação. O git aponta para um repositório remoto do `sabor-web` de outro autor (`JulioCesarAntonyFraga`), não do teiú. Não há `.gitignore` próprio.

7. **Tailwind CSS v4 sem PostCSS ou config.** O CSS bundled usa `@layer` e `@supports` do Tailwind v4, que requer `@tailwindcss/vite`. A configuração do Vite não existe nos arquivos do projeto.

---

## Análise de Mercado

### Quem compraria?

| Perfil | Probabilidade | Por quê |
|---|---|---|
| Dono de restaurante italiano premium | Média | Precisa de site, mas não sabe o que é React. Quer WordPress. |
| Boutique hotel | Baixa | Precisa de integração com PMS, reservas online reais |
| Chef famoso abrindo próprio restaurante | Média-Baixa | Quer algo único, mas contrata agência, não template raw |
| Agência digital | Média | Poderia revender como base, mas sem source é inviável |
| Desenvolvedor freelancer | Alta | Único comprador real: usaria como starter kit |

### Preço Realista

- **Como template ThemeForest:** US$ 17-29 (comparável aos templates HTML de restaurante no mercado, que vendem por US$ 7-89 com suporte, docs, e múltiplas páginas)
- **Como projeto custom para um restaurante:** R$ 3.000-8.000 (mas precisaria de 2-4 semanas de trabalho para finalizar)
- **Como está hoje (sem source):** R$ 0 — não é comercializável

### Concorrência

| Concorrente | Preço | Stack | Vantagem |
|---|---|---|---|
| ThemeForest Grand Restaurant (WordPress) | US$ 64 | PHP/WP | 13K vendas, 469 reviews, suporte incluso |
| ThemeForest PatioTime | US$ 64 | WP/Elementor | 3.3K vendas, builder visual |
| BentoBox (SaaS) | US$ 49/mês + taxas | Plataforma própria | Site + delivery + reservas + CRM integrados |
| GloriaFood (SaaS) | Grátis + taxas | Widget | Zero custo inicial, pedidos online |
| OpenTable Sites | US$ 0-250/mês | Integrado OT | Reservas reais, SEO, rede de descoberta |
| Templates HTML simples (ThemeForest) | US$ 7-24 | HTML/CSS/JS | 1.077 items, $17 média, suporte incluso |

### Diferencial Real

- **Único** na amostra com React 19 + Framer Motion + Tailwind v4 + TypeScript 6
- **Animações** qualitativamente superiores a qualquer template WordPress ou HTML
- **Design system** com tokens limpos, fáceis de rebrandear
- **Ausência de WordPress** = sem vulnerabilidades de plugins, sem manutenção de PHP

---

## Recomendações para Chegar a 10/10

### 1. CRIAR O PROJETO DO ZERO (prioridade máxima)
**Esforço:** 4-8 horas  
Recriar a estrutura completa do Vite + React + TypeScript com `npm create vite@latest`. Reimplementar todos os componentes a partir do bundle de referência. Sem isso, o projeto não existe.

### 2. Implementar formulário de reserva funcional
**Esforço:** 4-6 horas  
Integrar com WhatsApp API (já tem `wa.me` nas redes sociais), ou OpenTable API, ou pelo menos um formulário com `mailto:` / EmailJS. Sem CTA funcional, é enfeite.

### 3. Adicionar imagens reais via CMS / CDN
**Esforço:** 2-4 horas  
Substituir `src: ""` com imagens Unsplash, Pexels, ou upload real. O `hero.png` em `src/assets/` é o único asset — precisa de fotografia de comida, ambiente, chef.

### 4. Documentação + deploy automatizado
**Esforço:** 2 horas  
Criar `README.md` com instruções de setup, `VITE_` env vars, script de deploy (Vercel/Netlify). Adicionar LICENSE (MIT ou GPL).

### 5. SEO + performance
**Esforço:** 3-5 horas  
Adicionar `<Helmet>` para meta tags, Open Graph, JSON-LD para restaurant schema (tipo `Restaurant` com menu, horários, localização). Otimizar fontes (Google Fonts tem impacto de LCP). Adicionar lazy loading para seções abaixo da dobra.

---

## Veredito Final

**Não, não compraria. Este esqueleto NÃO tem valor comercial real HOJE.**

O projeto teiú é uma contradição: tecnicamente avançado (React 19 + Framer Motion + Tailwind v4 + TypeScript 6) mas comercialmente morto porque o código-fonte foi deletado. O que resta é um bundle minificado no `dist/` — uma foto Polaroid de um prato que já foi servido.

Para ter valor, o projeto precisa:
1. Ter o código-fonte restaurado
2. Ter funcionalidade de reserva real
3. Ter imagens de verdade
4. Ter documentação

Com essas 4 entregas, o teiú poderia ser um **starter kit de altíssima qualidade** para agências digitais construírem sites de restaurante premium, vendido na faixa de **R$ 5.000-8.000** por implementação. A stack técnica é, genuinamente, superior a 99% dos concorrentes de mercado.

Mas como starter kit vendável? Sim, se refeito e completado. Como está? É um achado arqueológico — bonito de ver no museu, inútil na prática.

---

## Nota sobre Padrão do Mercado

**ThemeForest (Restaurant):** 3.379 templates listados. Preço médio US$ 29-64. Top sellers (Grand Restaurant, PatioTime, Fidalgo) são WordPress + Elementor, com suporte incluso, documentação, múltiplas demos, e atualizações vitalícias. Nenhum usa React. Nenhum usa Framer Motion. A qualidade de animação é inferior, mas **eles vendem porque funcionam**. O comprador médio não quer código bonito — quer um site que o restaurante consiga atualizar.

**BentoBox (SaaS):** US$ 49/mês + US$ 0.99/pedido + 3% de taxa. Recentemente adquirido pelo Clover/Fiserv. Oferece site + delivery + e-commerce + CRM + POS integration. O teiú não compete — não tem delivery, pagamentos, ou backoffice.

**GloriaFood:** Grátis + taxa por pedido. Widget que qualquer restaurante instala em minutos. O teiú não compete — não tem pedidos online.

**Conclusão de mercado:** O teiú é uma Ferrari sem motor. Linda, tecnologicamente impressionante, mas não leva ninguém a lugar nenhum.
