# Melodia

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=05070D)
![Responsivo](https://img.shields.io/badge/Layout-Responsivo-38BDF8?style=for-the-badge)

Landing page responsiva de uma plataforma musical fictícia chamada **Melodia**. O projeto apresenta uma experiência moderna para descobrir músicas, organizar playlists e conhecer novos artistas, combinando uma identidade visual escura com diferentes tons de azul.

O site foi desenvolvido como um projeto acadêmico de Front-end e funciona diretamente no navegador, sem instalação de dependências ou processo de compilação.

## Objetivo da aplicação

O Melodia simula a página de apresentação de um serviço de streaming musical. A landing page foi criada para:

- apresentar a proposta da plataforma;
- destacar benefícios e funcionalidades;
- reproduzir uma música real por meio de um player personalizado;
- demonstrar uma biblioteca musical visual;
- exibir depoimentos de usuários;
- coletar dados de contato e preferência musical;
- oferecer uma experiência responsiva em computadores, tablets e celulares.

## Principais funcionalidades

### Header responsivo

O cabeçalho permanece fixo no topo da página e contém a identidade visual do Melodia e links para as seções principais.

No computador, os links são exibidos horizontalmente. Em telas menores, eles são substituídos por um botão que abre e fecha o menu mobile.

### Seção principal

A primeira seção apresenta:

- vídeo decorativo reproduzido continuamente ao fundo;
- título principal com a fonte Playfair Display;
- descrição e botões de chamada para ação;
- player de música funcional;
- card de perfil musical adaptado de um template externo.

### Player de música

O player reproduz localmente a faixa **Blip Stream**, de Kevin MacLeod. Ele permite:

- reproduzir e pausar a música;
- avançar ou voltar 10 segundos;
- acompanhar o tempo atual e a duração total;
- alterar a posição da música pela barra de progresso;
- ativar ou desativar o som;
- ativar a repetição da faixa.

O botão **Ouvir Agora**, localizado ao lado do título principal, também controla a reprodução.

### Benefícios

A seção apresenta quatro benefícios de forma editorial e assimétrica:

1. Cada detalhe importa;
2. Uma trilha para cada momento;
3. Descobertas além do óbvio;
4. Menos cliques, mais música.

### Funcionalidades

Essa seção explica como o usuário pode criar playlists, explorar novos sons e salvar músicas favoritas. Ao lado do texto há uma lista musical animada, adaptada para a identidade do Melodia.

### Depoimentos

Os depoimentos são organizados em um painel dividido em três partes. Cada usuário é representado por um ícone do Font Awesome, mantendo o visual consistente sem depender de fotografias externas.

### Formulário de contato

O formulário solicita:

- nome;
- telefone;
- e-mail;
- gênero musical favorito.

Atualmente, o formulário representa apenas a interface visual. Não existe integração com banco de dados ou serviço de envio.

### Footer

O rodapé reúne a logo, descrição do projeto, navegação horizontal, redes sociais, contato por e-mail e informações de direitos autorais.

## Tecnologias utilizadas

### HTML5

O HTML é responsável pela estrutura e pelo conteúdo da aplicação. Foram utilizados elementos semânticos como `header`, `main`, `section`, `article`, `nav`, `form` e `footer` para organizar melhor a página.

Também foram adicionados atributos de acessibilidade, como:

- `aria-label` para descrever botões e links;
- `aria-expanded` no menu mobile;
- `aria-pressed` nos controles de áudio;
- textos alternativos nas imagens;
- labels associados aos campos do formulário;
- conteúdo auxiliar com a classe `sr-only`.

### Tailwind CSS

A maior parte da estilização foi construída com **Tailwind CSS**, importado por CDN na versão para navegador. Dessa forma, o projeto pode ser executado sem Node.js, `npm` ou instalação de pacotes.

O Tailwind foi utilizado para:

- criar grids e layouts flexíveis;
- controlar cores, bordas, sombras e espaçamentos;
- construir os diferentes estados de hover e foco;
- criar fundos translúcidos e efeitos de `backdrop-blur`;
- adaptar a página aos breakpoints `sm`, `md`, `lg` e `xl`;
- manter uma abordagem mobile-first;
- estilizar o player, cards, formulário, header e footer.

### CSS personalizado

O arquivo `styles/global.css` complementa o Tailwind nos casos em que regras próprias são mais adequadas. Ele contém:

- aplicação da fonte especial do título;
- estados das animações de entrada;
- transições controladas pelos atributos `data-reveal`;
- estilos do template musical utilizado na seção de funcionalidades;
- animação do equalizador;
- pulsação do indicador “Ao vivo”;
- ajustes específicos para telas pequenas;
- tratamento para usuários que preferem movimentos reduzidos.

### JavaScript puro

O projeto utiliza JavaScript nativo, sem frameworks. O código foi dividido em três arquivos para separar responsabilidades e facilitar a manutenção.

#### `scripts/menuMobile.js`

Responsável pelo menu em telas menores:

- abre e fecha a navegação mobile;
- adiciona ou remove a classe `hidden`;
- troca o ícone de barras pelo ícone de fechar;
- atualiza `aria-expanded` e `aria-label`;
- fecha o menu quando um link é selecionado.

#### `scripts/animacao.js`

Controla as animações de entrada e rolagem:

- encontra os elementos marcados com `data-reveal`;
- utiliza `data-delay` para criar entradas sequenciais;
- usa `IntersectionObserver` para detectar quando um elemento entra na tela;
- adiciona a classe `is-visible` somente no momento necessário;
- remove cada elemento do observador depois da primeira animação;
- usa `requestAnimationFrame` para evitar que a animação seja concluída antes do primeiro desenho da página;
- respeita `prefers-reduced-motion` e mantém o conteúdo acessível quando animações estão desativadas;
- possui fallback para navegadores sem suporte ao `IntersectionObserver`.

O pequeno script presente no `<head>`:

```html
<script>document.documentElement.classList.add("js");</script>
```

adiciona a classe `js` ao elemento `<html>`. Com isso, o CSS somente esconde os elementos animados quando o JavaScript está disponível. Caso ele falhe ou esteja desativado, o conteúdo permanece visível.

#### `scripts/musica.js`

Controla o player e seus elementos visuais:

- alterna entre reprodução e pausa;
- troca o ícone de play pelo de pause;
- sincroniza a barra de progresso;
- formata o tempo no padrão `minutos:segundos`;
- permite navegar pela faixa;
- avança e retrocede 10 segundos;
- controla o estado de áudio mudo;
- ativa e desativa a repetição;
- atualiza textos e atributos de acessibilidade.

## Bibliotecas e recursos importados

### Tailwind CSS via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Essa versão interpreta as classes Tailwind diretamente no navegador e dispensa configuração local.

### Font Awesome

Os ícones são fornecidos pelo **Font Awesome Free**, importado por CDN. Ele é utilizado em elementos como:

- menu mobile;
- controles do player;
- benefícios e funcionalidades;
- campos do formulário;
- avatares dos depoimentos;
- redes sociais do footer.

Os ícones são adicionados por classes como `fa-solid`, `fa-brands`, `fa-play`, `fa-user` e `fa-headphones`.

### Google Fonts

A fonte **Playfair Display**, no peso `500`, é importada pelo Google Fonts e aplicada exclusivamente ao H1 principal. O restante da aplicação continua utilizando a fonte padrão sem serifa do navegador.

Foram utilizados `preconnect` para reduzir o tempo necessário para estabelecer conexão com os servidores de fontes.

### Templates do Uiverse.io

Dois componentes tiveram como ponto de partida templates do [Uiverse.io](https://uiverse.io/):

- card de perfil musical da seção inicial, baseado em um modelo de **Itskrish01**;
- lista “Tocando agora” da seção de funcionalidades, baseada em um modelo de **Praashoo7**.

Os templates foram adaptados para o projeto. As alterações incluem:

- remoção da identidade visual do Spotify;
- substituição pela logo do Melodia;
- troca do verde pelos tons de azul do site;
- tradução e reescrita dos textos;
- ajustes de tamanho e responsividade;
- simplificação de alguns efeitos;
- integração com o restante do layout;
- criação de classes específicas para evitar conflitos com o Tailwind.

Os blocos importados estão identificados por comentários no HTML e no CSS.

### Música

A faixa utilizada no player é **“Blip Stream”**, de Kevin MacLeod, disponibilizada sob a licença [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). O crédito também aparece diretamente abaixo do player.

## Identidade visual

A interface utiliza uma paleta escura com azul como cor de destaque:

| Uso | Cor |
| --- | --- |
| Fundo principal | `#05070D` |
| Superfícies e cards | `#07111F` |
| Azul principal | `#38BDF8` |
| Azul de hover | `#60A5FA` |
| Bordas escuras | `#12304A` |
| Texto principal | `#F8FAFC` |
| Texto secundário | `#94A3B8` |

Além das cores, o projeto utiliza transparências, gradientes discretos e desfoque de fundo para manter o conteúdo legível sobre o vídeo.

## Estrutura de arquivos

```text
Melodia-landingPage/
├── assets/
│   ├── audios/
│   │   └── blip-stream.mp3
│   ├── 20ce6e6f-...-removebg-preview.png
│   ├── 39430a89-...-removebg-preview.png
│   └── Music_website_hero_animation_1080p_20260924220140.mp4.mp4
├── scripts/
│   ├── animacao.js
│   ├── menuMobile.js
│   └── musica.js
├── styles/
│   └── global.css
├── index.html
└── README.md
```

## Como executar

1. Baixe ou copie a pasta completa do projeto.
2. Não altere a posição das pastas `assets`, `scripts` e `styles`.
3. Abra o arquivo `index.html` em um navegador moderno.


> O computador precisa estar conectado à internet para carregar Tailwind CSS, Font Awesome e Playfair Display. O vídeo, as imagens e a música estão armazenados localmente.

## Responsividade

O projeto segue a abordagem mobile-first. O conteúdo começa preparado para telas pequenas e recebe adaptações progressivas para telas maiores.

Entre os principais ajustes responsivos estão:

- menu mobile com botão hambúrguer;
- colunas que se transformam em blocos empilhados;
- links do footer com quebra automática;
- player e cards com largura limitada;
- formulário reorganizado conforme o espaço disponível;
- lista musical adaptada para telas estreitas;
- tamanhos de título ajustados por breakpoint.

## Acessibilidade e movimento reduzido

O site consulta a preferência `prefers-reduced-motion`. Quando o sistema operacional está configurado para reduzir movimentos, as animações de entrada, o equalizador e o indicador pulsante são desativados.

Essa decisão mantém a página confortável para pessoas sensíveis a movimento sem esconder informações ou impedir o uso da aplicação.

## Integrantes do grupo

| Nome completo | Matrícula/RM | Turma |
| --- | --- | --- |
| Rafael Taboada Sobral | 569527 | 1ESPV |
| Guilherme Mazzini Nunes Canno  | 573183 | 1ESPV |
| Fabricio Denig De Avila | 570980 | 1ESPV |


---

