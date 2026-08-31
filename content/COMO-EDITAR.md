# Como editar o conteúdo do site

Todo texto do site vem de um único arquivo: `content/site-data.json`.
Você não precisa entender programação para editar — é só abrir esse
arquivo em qualquer editor de texto, trocar o que está escrito entre
aspas `"assim"` e salvar.

Duas regras do formato (JSON), sem exceção:

- Todo texto fica entre aspas duplas: `"Meu texto aqui"`.
- Cada linha (exceto a última de uma lista) termina em vírgula `,`.

Se esquecer uma aspas ou uma vírgula, o site não builda — não tem como
"salvar errado" silenciosamente.

## Campo por campo

- **`name`** — seu nome completo. Aparece no rodapé da navegação (só o
  primeiro nome, em minúsculas) e no título da aba do navegador.
- **`role`** — sua ocupação atual, ex: `"Estudante de Jornalismo"`.
- **`heroSubtitle`** — a frase de efeito logo abaixo do seu nome na
  primeira tela. Uma ou duas frases sobre quem você é e o que cobre.
- **`about.photoUrl`** — caminho para sua foto de perfil. Deixe `""`
  (vazio) para mostrar um círculo com sua inicial no lugar da foto.
  Para usar uma foto real: coloque o arquivo de imagem na pasta
  `public/` (ex: `public/foto.jpg`) e escreva aqui `"/foto.jpg"`.
- **`about.bio`** — lista de parágrafos da seção "sobre mim". Cada
  parágrafo é um item entre aspas, separado por vírgula. Pode ter
  1, 2 ou mais parágrafos.
- **`about.facts`** — lista curta de fatos rápidos (universidade,
  cidade, um interesse), exibida abaixo da bio. Não precisa de emoji
  na frente, o site já estiliza isso.
- **`articles`** — suas matérias/reportagens. Cada uma tem:
  - `title` — título da matéria.
  - `tag` — categoria: `"reportagem"`, `"entrevista"`, `"opinião"` ou
    qualquer outra palavra curta que fizer sentido.
  - `description` — uma linha resumindo do que se trata.
  - `url` — o link para a matéria publicada. Se ainda não tiver o
    link, deixe `"#"`.
  Para adicionar ou remover uma matéria, copie ou apague um bloco
  `{ ... }` inteiro da lista (repare na vírgula entre blocos).
- **`skills`** — lista de habilidades, uma palavra ou expressão curta
  por item.
- **`contact.email`** — seu e-mail de contato.
- **`contact.linkedin`** / **`contact.instagram`** — links completos
  dos seus perfis (ex: `"https://linkedin.com/in/seu-usuario"`). Se
  não quiser mostrar um dos dois, apague a linha inteira (incluindo a
  vírgula da linha anterior, se for a última do bloco).
- **`year`** — ano exibido no rodapé.

## Depois de editar

Rode `npm run build` localmente para confirmar que não há erro de
formatação antes de publicar (`vercel --prod`).
