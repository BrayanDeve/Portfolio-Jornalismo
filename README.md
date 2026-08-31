# Portfólio de Jornalismo

Site pessoal em Next.js (App Router) + TypeScript + Tailwind CSS.

## Rodando localmente

```
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Editando o conteúdo

- **Perfil, galeria de fotos, skills e contato** — `content/site-data.json`, um arquivo de dados puro (JSON).
- **Matérias** (reportagem, entrevista, opinião) — um arquivo por matéria em `content/materias/*.md`, cada uma com sua própria página (`/materias/[slug]`).

Nenhum dos dois precisa mexer em `content/site.ts`, `lib/materias.ts` nem em componente algum. Guia campo a campo em [`content/COMO-EDITAR.md`](content/COMO-EDITAR.md).

## Build e deploy

```
npm run build      # testa o build local, sem publicar
vercel              # publica uma preview (URL separada, não afeta produção)
vercel --prod       # publica em produção (https://portfolio-jornalismo.vercel.app)
```

## Estrutura

```
app/                     layout, página principal e app/materias/[slug] (página de cada matéria)
components/              um componente por seção (Hero, About, Articles, Gallery, Skills, Contact, Nav, Footer)
content/site-data.json   perfil, galeria, skills e contato (edite este)
content/materias/*.md    uma matéria por arquivo (edite estes — copie content/materias/_modelo.md)
content/COMO-EDITAR.md   guia de preenchimento campo a campo
content/site.ts          tipos + import do JSON (não precisa editar)
lib/materias.ts          lê e valida os arquivos de content/materias/ (não precisa editar)
```
