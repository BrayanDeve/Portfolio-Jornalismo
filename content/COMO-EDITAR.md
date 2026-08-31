# Como editar o conteúdo do site

O conteúdo do site vem de dois lugares:

1. **`content/site-data.json`** — dados curtos (nome, bio, fotos de
   bastidor, habilidades, contato).
2. **`content/materias/`** — um arquivo por matéria (reportagem,
   entrevista, opinião — o que for).

Nenhum dos dois precisa de programação. Depois de editar, rode
`npm run build` localmente para confirmar que não há erro antes de
publicar (`vercel --prod`) — se algo estiver errado, o build avisa
antes de ir pro ar.

## Como adicionar uma matéria nova

1. Vá em `content/materias/`, copie o arquivo `_modelo.md` e cole com
   outro nome — **tire o "_" do início do nome**. Esse nome vira o
   endereço da página (ex: `entrevista-com-fulano.md` vira
   `seusite.com/materias/entrevista-com-fulano`). Use só letras
   minúsculas, sem espaço e sem acento, com hífen entre palavras.
2. No topo do arquivo, entre as duas linhas `---`, preencha:
   - `title` — o título da matéria.
   - `tag` — categoria: `"reportagem"`, `"entrevista"`, `"opinião"`
     ou outra palavra curta que fizer sentido.
   - `description` — uma linha resumindo do que se trata (aparece no
     card da home).
   - `date` — data no formato `"AAAA-MM-DD"`, usada para ordenar as
     matérias da mais recente pra mais antiga.
3. Abaixo da segunda linha `---`, escreva o texto normalmente:
   - Parágrafo separado por uma linha em branco vira um parágrafo.
   - Uma linha começando com `## ` vira um subtítulo.
   - Uma linha começando com `> ` vira uma citação de entrevistado.
4. Salve, rode `npm run build` e publique.

Pra tirar uma matéria do ar, apague o arquivo dela (ou renomeie
colocando um "_" na frente, igual o modelo).

## Campo por campo do `content/site-data.json`

- **`name`** — seu nome completo. Aparece no rodapé da navegação (só
  o primeiro nome, em minúsculas) e no título da aba do navegador.
- **`role`** — sua ocupação atual, ex: `"Estudante de Jornalismo"`.
- **`heroSubtitle`** — a frase de efeito logo abaixo do seu nome na
  primeira tela.
- **`about.photoUrl`** — caminho para sua foto de perfil. Deixe `""`
  (vazio) para mostrar um círculo com sua inicial no lugar da foto.
  Para usar uma foto real: coloque o arquivo em `public/` (ex:
  `public/foto.jpg`) e escreva aqui `"/foto.jpg"`.
- **`about.bio`** — lista de parágrafos da seção "sobre mim".
- **`about.facts`** — lista curta de fatos rápidos (universidade,
  cidade, um interesse).
- **`gallery`** — fotos de bastidor exibidas no carrossel estilo
  polaroid. Cada foto tem:
  - `src` — coloque o arquivo de imagem em `public/galeria/` (crie a
    pasta se ainda não existir) e escreva aqui o caminho, ex:
    `"/galeria/apuracao-01.jpg"`. Antes de subir a foto, comprima o
    arquivo (lado maior de ~1600px, formato JPEG ou WebP) — isso
    mantém o site rápido e o repositório leve.
  - `caption` — legenda visível embaixo da foto.
  - `alt` — descrição do que aparece na foto, para quem usa leitor
    de tela. Não repita a legenda ao pé da letra, descreva a cena.
  Para reordenar, mova o bloco `{ ... }` de posição na lista — a
  ordem de exibição é a ordem em que aparecem aqui. Para remover uma
  foto, apague o bloco inteiro (e o arquivo de imagem, se quiser).
- **`skills`** — lista de habilidades, uma palavra ou expressão curta
  por item.
- **`contact.email`** — seu e-mail de contato.
- **`contact.linkedin`** / **`contact.instagram`** — links completos
  dos seus perfis. Se não quiser mostrar um dos dois, apague a linha
  inteira (incluindo a vírgula da linha anterior, se for a última do
  bloco).
- **`year`** — ano exibido no rodapé.

Regras do formato JSON (`site-data.json`), sem exceção: todo texto
fica entre aspas duplas `"assim"`, e cada linha (exceto a última de
uma lista) termina em vírgula `,`. Isso não se aplica aos arquivos de
matéria (`content/materias/*.md`) — lá é texto livre, sem aspas nem
vírgula.
