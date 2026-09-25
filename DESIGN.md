---
name: "Chaiane Pasquali | Workshop Molde F1"
description: "Uma mesa de luz editorial onde precisão técnica se transforma em valor percebido."
colors:
  paper: "#f8f4ec"
  paper-bright: "#fffdf9"
  champagne: "#e9ddc9"
  nude: "#d7c0ac"
  aged-gold: "#a87d38"
  gold-light: "#d9bd84"
  gold-bright: "#f0d89e"
  ink: "#211d1a"
  ink-rich: "#15120f"
  muted: "#655e57"
  wine: "#542c34"
  wine-deep: "#341a21"
  rose-light: "#eed9da"
  warm-white: "#fffefa"
  hairline: "rgba(78, 59, 41, 0.17)"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.6rem, 6.4vw, 6rem)"
    fontSizeMobile: "clamp(2.75rem, 13vw, 4rem)"
    fontWeight: 560
    lineHeight: 1.04
    lineHeightMobile: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.2rem, 5.8vw, 6rem)"
    fontWeight: 560
    lineHeight: 1.04
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  subtle: "5px"
  framed: "8px"
  surface: "1.75rem"
  asymmetric: "28px 5px 28px 5px"
  pill: "999px"
  circle: "50%"
spacing:
  page-gutter: "24px"
  page-gutter-mobile: "16px"
  section-block: "clamp(5.5rem, 10vw, 9rem)"
  component: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.2rem 0 1.5rem"
    height: "58px"
  button-primary-hover:
    backgroundColor: "#332d28"
    textColor: "{colors.warm-white}"
  button-light:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.2rem 0 1.5rem"
    height: "58px"
  button-light-hover:
    backgroundColor: "#f3ecdf"
    textColor: "{colors.ink}"
  card-offer:
    backgroundColor: "#2b2622"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.asymmetric}"
    padding: "2rem"
  benefit-track-technical:
    backgroundColor: "rgba(255, 255, 255, 0.86)"
    textColor: "{colors.ink}"
    rounded: "5px 92px 5px 5px"
  benefit-track-presence:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.warm-white}"
    rounded: "5px 5px 5px 92px"
---

# Design System: Chaiane Pasquali | Workshop Molde F1

## Overview

**Creative North Star: "A Mesa de Luz Editorial"**

O sistema transforma o ambiente de precisão de uma Nail Designer em uma narrativa editorial contínua. Fundos de papel aquecido, linhas de registro, folhas técnicas, macroenquadramentos e superfícies translúcidas comunicam método; a hierarquia sans-only de Manrope e Albert Sans, o dourado envelhecido e o vinho profundo acrescentam feminilidade premium sem fragilidade.

A composição é ampla e respirada, mas nunca genérica. Escala tipográfica dramática, recortes assimétricos e campos escuros conduzem a atenção, enquanto detalhes técnicos e números tabulares tornam técnica, conteúdo e posicionamento partes do mesmo universo visual.

**Key Characteristics:**
- Editorial, preciso e acolhedor.
- Luminosidade quente com contraste concentrado em tinta e vinho.
- Linhas finas, marcas de registro e enquadramentos inspirados em folhas técnicas.
- Dourado raro e funcional, usado para ênfase e orientação.
- Cantos assimétricos e silhuetas arqueadas em vez de cartões uniformes.

## Colors

A paleta combina papéis marfim luminosos com tintas quentes, vinhos em dois níveis e três registros de dourado. Os novos extremos não ampliam a saturação geral: eles dão alcance aos gradientes premium, brilhos ópticos e campos escuros sem introduzir preto puro ou ouro estridente.

### Primary
- **Dourado Envelhecido:** reservado a palavras de ênfase, ícones, linhas de precisão, focos e pequenos marcadores que orientam a leitura.
- **Dourado Brilhante:** ponto de luz de maior intensidade para medalhões, progresso, varreduras e partículas luminosas; nunca é uma superfície extensa.
- **Vinho Atelier:** cria campos imersivos de transformação, selos de autoridade e o fechamento emocional da página.
- **Vinho Profundo:** ancora as bordas dos campos de transformação e do encerramento, produzindo profundidade sem recorrer ao preto.

### Secondary
- **Champagne Técnico:** sustenta faixas, divisores e superfícies editoriais com calor controlado.
- **Nude de Bancada:** suaviza ícones e detalhes auxiliares sem competir com a mensagem principal.
- **Luz Dourada:** ilumina elementos sobre fundos escuros e sinaliza momentos de destaque.
- **Rosa Luminoso:** acrescenta reflexo feminino muito diluído aos campos vinho e às transições atmosféricas.

### Neutral
- **Papel Quente:** fundo-base da experiência, confortável para sequências longas de leitura.
- **Papel Luminoso:** superfície clara de maior contraste para hero, conteúdo, prova e autoridade.
- **Tinta Quente:** texto principal, botões e fundos de máxima hierarquia.
- **Tinta Rica:** extremo escuro dos gradientes de topbar, CTA e oferta; deve permanecer combinada com tinta quente ou marrons intermediários.
- **Grafite Suave:** texto secundário legível e menos dominante.
- **Branco Quente:** texto e superfícies claras sobre campos escuros.
- **Fio de Registro:** borda translúcida para separar sem transformar a página em uma coleção de caixas.

### Named Rules

**The Golden Register Rule.** O dourado marca precisão, direção ou ênfase; ele nunca cobre grandes áreas nem substitui o contraste estrutural da tinta e do vinho.

**The Warm Contrast Rule.** Mesmo os extremos da paleta permanecem quentes: use tinta amarronzada e branco marfim, nunca preto puro e branco azulado.

**The Luminous Accent Rule.** Dourado brilhante e rosa luminoso existem como luz, reflexo ou transição. Não os transforme em grandes preenchimentos planos.

## Typography

**Display Font:** Manrope (com fallback sans-serif)
**Body Font:** Albert Sans (com fallback sans-serif)

**Character:** A hierarquia é inteiramente sans-serif. Manrope traz autoridade contemporânea e precisão geométrica para promessas, títulos e detalhes; Albert Sans mantém narrativa, oferta e orientação diretas e legíveis. O contraste nasce de escala, peso, espaçamento e cor, não da oposição entre serif e sans-serif.

### Hierarchy
- **Display** (Manrope 560, `clamp(3.6rem, 6.4vw, 6rem)`, 1.04, `-0.045em`): promessas do hero e chamadas culminantes. No mobile, o hero reduz para `clamp(2.75rem, 13vw, 4rem)` com entrelinha 1.02.
- **Headline** (Manrope 560, escala fluida editorial, 1.04, `-0.045em`): títulos de seção equilibrados em poucas linhas.
- **Title / Detail** (Manrope 520–650): benefícios, assinaturas, selos, números e frases editoriais curtas. O padrão recorrente usa 650 e tracking entre `-0.025em` e `-0.04em`; detalhes expressivos ajustam a entrelinha ao contexto, de 0.9 em numerais compactos a 1.42 em citações.
- **Body** (400, 1rem, 1.65): narrativa e explicação; blocos normalmente se limitam a cerca de 45–68 caracteres por linha.
- **Label** (700, 0.7rem, 0.14em, uppercase): datas, estados, legendas, índices e marcas de precisão.
- **Gold Emphasis** (Manrope 750): trechos enfatizados em displays e headlines usam dourado, sempre em estilo normal, nunca itálico.

### Named Rules

**The Sans Hierarchy Rule.** Manrope carrega transformação, autoridade e detalhes; Albert Sans carrega narrativa, instrução, prova e decisão. Mantenha a distinção por função e não introduza fontes serifadas.

**The Balanced Headline Rule.** Títulos são compactos, balanceados, próximos de uma entrelinha unitária e levemente fechados em `-0.045em`; escala e peso controlado criam hierarquia. No mobile, reduza especialmente o hero para evitar dominância excessiva.

**The Upright Gold Rule.** Ênfase dourada em displays e headlines usa peso 750 e `font-style: normal`; não use itálico para sinalizar destaque.

## Layout

O conteúdo vive em um contêiner central de até 1180px, com respiro lateral de 24px no desktop e 16px no mobile. Seções usam ritmo vertical amplo e fluido, enquanto o desktop alterna divisões assimétricas, duas colunas e composições editoriais sobrepostas. O grid serve à narrativa, não a um catálogo repetitivo.

Acima de 980px, cópia e imagem se equilibram em pares assimétricos e títulos de decisão podem permanecer fixos durante a leitura. Abaixo desse ponto, as composições passam a uma coluna, elementos fixos voltam ao fluxo e a cópia precede os visuais. Abaixo de 700px, ações ocupam a largura disponível, grades viram listas e ornamentos periféricos são reduzidos ou removidos para preservar clareza. Nesse breakpoint, movimentos atmosféricos caros são interrompidos, chips deixam de flutuar e a velocidade do marquee aumenta de 24s para 18s para reduzir o comprimento da camada animada.

O hero é uma exceção de art direction, não uma composição de retrato emoldurado. No desktop, `banner hero desktop.png` ocupa toda a área útil como imagem de fundo full-bleed, e a cópia permanece no campo livre à esquerda já previsto na arte. Em telas de até 700px, o hero assume uma composição vertical de `1100px`: `banner hero mobile.png` permanece absolutamente posicionado atrás da cópia, com enquadramento deslocado para `58%` no eixo horizontal. Um véu vertical de branco quente, quase opaco no topo e progressivamente transparente até a base, protege o contraste do texto e revela mais do retrato na parte inferior.

Na seção “Uma imersão. Dois movimentos.”, os seis benefícios não formam uma grade de cartões equivalentes. Eles se organizam em dois percursos de três etapas: **Domínio técnico** ocupa um painel luminoso à esquerda e **Presença percebida** um painel vinho profundo à direita, deslocado verticalmente em `5.5rem`. Uma ponte dourada vertical ocupa o intervalo entre os painéis. Em telas de até 700px, os percursos empilham na ordem técnica, ponte, presença; o deslocamento desaparece e a ponte passa a ser horizontal.

**The Continuous Story Rule.** Alterne campos, listas lineares, provas e composições sobrepostas; não converta a experiência em uma sequência homogênea de grades de cartões.

**The Mobile Restraint Rule.** Em telas de até 700px, preserve a narrativa e o feedback essencial, mas remova halos respirando, sweeps de fundos escuros, varredura da mesa de luz e flutuação de chips. Ornamento nunca compete com leitura, bateria ou fluidez.

**The Responsive Hero Art Direction Rule.** Use sempre os dois banners responsivos fornecidos: desktop full-bleed atrás da cópia no campo livre autorado; mobile vertical absolutamente posicionado atrás da cópia em uma composição de `1100px`, protegido por um véu de branco quente forte no topo e transparente na base. Preserve o enquadramento autorado e não substitua esse tratamento por retrato em moldura ou placeholder.

**The Two-Track Benefits Rule.** Benefícios pertencem a dois movimentos narrativos, não a seis unidades equivalentes. Preserve o contraste claro–vinho, a ordem interna `01`–`03`, o deslocamento vertical no desktop e a conexão explícita entre técnica e presença em todos os breakpoints.

## Elevation & Depth

O sistema é plano por padrão e usa profundidade apenas em objetos que parecem repousar sobre a mesa editorial: retratos emoldurados, mockup de celular, prova, selos e o bloco final da oferta. Camadas tonais, bordas finas, rotação leve e sobreposição fazem a maior parte do trabalho; sombras são amplas, quentes e difusas. Um grão fixo de baixíssima opacidade (`0.025`) cobre o corpo como fibra de papel, sem capturar interação.

Gradientes constroem profundidade material, não decoração arbitrária. Superfícies claras combinam radiais dourados diluídos com transições lineares de papel; campos escuros partem de tinta rica ou vinho profundo, atravessam o tom-base e retornam a um extremo quente. Reflexos lineares translúcidos podem atravessar essas superfícies como luz de bancada, mas permanecem raros, lentos e com contraste baixo.

### Shadow Vocabulary
- **Elevação de Moldura** (`0 24px 60px rgba(75, 55, 37, 0.12)`): fotografias, selos claros e provas apoiadas sobre papel.
- **Elevação de Ação** (`0 12px 32px rgba(33, 29, 26, 0.14)`): botão principal em repouso.
- **Elevação de Ação Ativa** (`0 18px 40px rgba(33, 29, 26, 0.2)`): botão principal elevado no hover.
- **Elevação de Dispositivo** (`0 35px 70px rgba(49, 35, 25, 0.27)`): mockup de celular, o objeto de maior profundidade da narrativa.

**The Object-Only Elevation Rule.** Sombras pertencem a objetos destacados e ações; seções e células editoriais permanecem definidas por tom e linha.

**The Gradient Depth Rule.** Gradientes devem explicar luz, material ou hierarquia: radiais localizam brilho; lineares dão volume a metal, papel, tinta e vinho. Não use gradiente como preenchimento genérico nem misture matizes fora da paleta quente.

**The Paper Grain Rule.** O grão corporal é global, fixo, quase imperceptível e não interativo. Ele adiciona matéria sem reduzir contraste ou competir com imagens e texto.

## Shapes

A forma mistura linhas retas de desenho técnico com curvas femininas e controladas. Botões são cápsulas; selos e marcadores são círculos; retratos usam topo arqueado; fotos, provas e blocos de autoridade recebem um único canto expressivo ou pares diagonais de curvas. Bordas de um pixel e molduras internas reforçam o gesto de precisão.

Nos painéis de benefícios, a geometria dos cantos funciona em par: o painel técnico abre um arco de `92px` no canto superior direito e o painel de presença responde com um arco de `92px` no canto inferior esquerdo. No mobile, esses arcos reduzem para `58px`, mantendo a direção complementar sem dominar a largura menor.

**The Asymmetric Frame Rule.** Use assimetria para imagens, selos e blocos de destaque; cartões utilitários repetidos permanecem mais retos para que a forma especial conserve significado.

## Components

### Buttons
- **Shape:** cápsula integral, altura mínima de 58px, com ícone de seta em medalhão dourado.
- **Primary:** gradiente de tinta rica para marrom quente e de volta à tinta rica, texto branco, peso forte e espaçamento horizontal assimétrico.
- **Hover / Focus:** sobe 4px e amplia a sombra em 300ms; uma faixa translúcida atravessa o botão em 700ms e a seta gira 45 graus. O foco visível usa contorno dourado de 3px com afastamento de 5px.
- **Light:** gradiente de branco quente para champagne claro sobre fundos escuros; no hover, assume um papel champagne muito claro e mantém o mesmo feedback de folha metálica.

**The Foil Feedback Rule.** O brilho do CTA é resposta à intenção, não animação ambiente: permanece fora da cápsula em repouso, atravessa uma vez no hover e desaparece no lado oposto.

### Chips
- **Style:** etiquetas de precisão em cápsula branca, borda dourada clara, texto dourado escuro, caixa alta e sombra baixa.
- **State:** podem flutuar lentamente ao redor do mockup; movimento é decorativo e respeita redução de movimento.

### Cards / Containers
- **Corner Style:** os dois painéis de benefícios usam arcos complementares e assimétricos; oferta, provas e imagens também podem usar cantos assimétricos ou arcos.
- **Background:** papéis quentes no conteúdo, tinta ou vinho em momentos de decisão e transformação.
- **Shadow Strategy:** os painéis de benefícios recebem elevação quente e difusa para separar seus materiais claro e vinho; grades e listas editoriais restantes permanecem planas.
- **Border:** fio quente translúcido de 1px, com dourado mais presente em superfícies de decisão.
- **Internal Padding:** 2rem é o ponto de partida recorrente para cartões e células.

### Two-Track Benefits

A seção “Uma imersão. Dois movimentos.” traduz a proposta central em dois painéis relacionados. **Movimento I — Domínio técnico** usa papel luminoso translúcido, texto em tinta e o numeral romano fantasma `I`. **Movimento II — Presença percebida** usa gradiente vinho profundo, texto branco quente, detalhes em luz dourada e o numeral fantasma `II`. Os numerais Manrope de grande escala ficam atrás do conteúdo, com opacidade muito baixa, como marcas editoriais e não como informação necessária.

Cada painel começa por marcador, título e descrição, seguido por uma lista ordenada de três linhas. As linhas preservam índice tabular `01`–`03`, título, descrição e check dourado; divisores contínuos dão sequência ao percurso. No desktop, o segundo painel começa `5.5rem` abaixo do primeiro e os dois respondem ao hover com elevação controlada; no mobile, ambos voltam ao mesmo eixo, perdem a elevação por hover e mantêm a ordem de leitura do DOM.

Entre os painéis, uma ponte vertical nomeia “Técnica” e “Presença”. Seu fio progride de luz dourada para dourado envelhecido e vinho, enquanto um medalhão claro com seta percorre o eixo em `4.5s ease-in-out`. Abaixo de 700px, a ponte ocupa uma faixa de 72px entre os painéis: rótulos e gradiente tornam-se horizontais, e o medalhão viaja da esquerda para a direita. A ponte é decorativa e permanece `aria-hidden`.

### Navigation
- **Style:** a navegação é narrativa e mínima: faixa superior em gradiente de tinta rica com data e horário, links textuais sublinhados e retorno discreto no rodapé. Estados de foco usam o mesmo contorno dourado dos CTAs.
- **Progress:** uma linha fixa de 2px acompanha a rolagem no topo. Seu gradiente vinho–dourado brilhante–dourado–vinho e o halo baixo funcionam como registro de avanço, usando `animation-timeline: scroll(root)`.

### Top Countdown

A faixa escura no topo do hero funciona como um cronômetro ao vivo para o início do workshop. Um indicador dourado pulsante acompanha “Começa em”, seguido por cápsulas translúcidas para dias, horas, minutos e segundos; os valores são recalculados a cada segundo, sempre com dois dígitos e numerais tabulares para que a largura não oscile. A data fixa “07 OUT • 19H” encerra a composição no desktop, separada por um fio vertical.

Em telas de até 700px, a faixa ganha 62px de altura, comprime as cápsulas e troca “dias”, “horas”, “min” e “seg” por “d”, “h”, “m” e “s”; a data fixa é ocultada para preservar a leitura em uma única linha. Quando o horário configurado (`2026-10-07T19:00:00-03:00`) chega ou passa, o título muda para “Workshop iniciado”, as cápsulas desaparecem e “Estamos ao vivo” assume o centro, mantendo a data fixa no desktop.

### Editorial Marquee

A faixa entre hero e narrativa repete Precisão, Agilidade, Posicionamento e Visibilidade em caixa alta, separados por pontos dourados. O trilho contínuo deriva linearmente em 24s no desktop e 18s no mobile; é decorativo, oculto de tecnologias assistivas e congela quando há preferência por movimento reduzido.

### Responsive Hero Banner

O hero usa art direction responsiva com assets reais na raiz do projeto. `banner hero desktop.png` é renderizado full-bleed por trás do conteúdo, com `object-fit: cover` e a cópia limitada ao campo livre à esquerda criado na própria arte. Em telas de até 700px, o `<picture>` seleciona `banner hero mobile.png`; o banner continua absoluto, entre a topbar e o marquee (`inset: 62px 0 46px`), atrás da camada de conteúdo. O hero cresce para `1100px`, a grade de conteúdo ocupa `992px` e começa pelo topo, e a imagem usa `object-position: 58% center`. Sobre ela, um gradiente vertical de branco quente parte de alta opacidade, ainda protege a leitura no centro e se dissolve até ficar transparente na base, permitindo que o retrato apareça progressivamente. Os assets são servidos pelo pipeline otimizado de imagens responsivas, com `sizes="100vw"`, prioridade de carregamento e `srcset` apropriado.

### Light Table & View Reveals

A mesa de luz do hero recebe uma varredura diagonal suave a cada 7.5s. Quando `animation-timeline: view()` está disponível, contêineres de seção resolvem opacidade, deslocamento e blur na entrada; composições de prova e autoridade combinam deslocamento, escala e abertura por `clip-path`. Sem suporte, todo o conteúdo permanece visível no estado final.

### Phone Mockup

O celular é o objeto de maior profundidade. Uma faixa luminosa percorre a tela conforme o objeto atravessa a viewport (`entry 10%` até `exit 75%`), tornando o gesto de escanear conteúdo parte da metáfora técnica. O vídeo usa apenas `muted`, `loop`, `playsInline` e `preload="metadata"`; um observador de `prefers-reduced-motion` pausa imediatamente e volta a reproduzir quando a preferência deixa de pedir redução.

### Final Orbit

Dois anéis dourados de baixa opacidade cercam o CTA final. Com view timelines, eles giram e expandem progressivamente enquanto a seção entra; o campo cônico de luz acompanha essa resolução. Os anéis nunca interferem na interação ou na legibilidade do conteúdo central.

### Motion Accessibility

Com `prefers-reduced-motion: reduce`, o scroll suave e a linha de progresso são removidos, todas as animações são desligadas, transições caem para `0.01ms` e elementos conduzidos por view timeline são forçados ao estado final visível, sem blur, recorte ou transformação. Isso também imobiliza o medalhão da ponte de benefícios em uma posição estática e mantém fio, rótulos e relação entre os percursos plenamente legíveis. O vídeo social é pausado via `matchMedia` e continua disponível como quadro estático.

### FAQ Disclosure

Linhas amplas substituem cartões individuais. Cada resumo tem altura generosa, peso 650 e chevron dourado; ao abrir, o ícone gira 180 graus e a resposta permanece alinhada à pergunta.

### Asset Frame

Imagens reais secundárias ocupam molduras editoriais com `object-fit` adequado ao contexto. Enquanto materiais de prova ou autoridade não chegam, o placeholder usa um gradiente de papéis, moldura interna, ícone de escaneamento e identificação explícita; nunca simula uma prova inexistente. O hero não usa este componente: seus dois banners responsivos são assets finais sem moldura.

## Do's and Don'ts

### Do:
- **Do** use o dourado para registrar, orientar e enfatizar detalhes específicos.
- **Do** combine campos claros extensos com momentos concentrados de tinta ou vinho.
- **Do** preserve linhas finas, índices, molduras e sobreposições que comuniquem precisão técnica.
- **Do** mantenha os benefícios divididos entre o percurso luminoso de domínio técnico e o percurso vinho de presença percebida, conectados pela ponte dourada responsiva.
- **Do** use gradientes para descrever luz e material, mantendo dourado brilhante, rosa e reflexos em baixa área visual.
- **Do** trate scroll progress, marquee, scan, reveals e órbitas como uma hierarquia coordenada, sempre com estado final legível sem animação.
- **Do** simplifique composições no mobile e mantenha CTAs com área de toque ampla.
- **Do** preserve a art direction do hero: banner desktop full-bleed no campo livre autorado e banner mobile absoluto atrás da cópia, dentro da composição de `1100px` e sob o véu vertical de branco quente.
- **Do** pause vídeos e remova movimento não essencial quando o sistema solicitar redução de movimento.
- **Do** mantenha placeholders honestos e claramente identificados para assets secundários ainda pendentes.

### Don't:
- **Don't** use preto puro, branco frio, neon ou dourado saturado como grandes superfícies.
- **Don't** transforme cada seção em uma grade de cartões bege arredondados.
- **Don't** reduza os seis benefícios a cartões equivalentes; a assimetria, a ordem e o contraste entre os dois movimentos carregam o significado da seção.
- **Don't** espalhe sombras por divisores, listas ou superfícies que devem permanecer editoriais e planas.
- **Don't** mantenha sweeps, halos ou flutuações dispendiosas no mobile quando eles não comunicam estado.
- **Don't** enquadre o hero como retrato, use placeholder nele ou sobreponha a cópia ao rosto em qualquer breakpoint.
- **Don't** esconda conteúdo atrás de uma animação dependente de scroll sem fallback e estado reduzido explícitos.
- **Don't** introduza fontes serifadas, use itálico na ênfase dourada ou troque as funções de Manrope e Albert Sans.
- **Don't** invente fotografias, depoimentos, resultados ou métricas para preencher molduras de prova.
