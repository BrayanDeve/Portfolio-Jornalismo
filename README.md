# Portfólio de Jornalismo

Site pessoal em Next.js (App Router) + TypeScript + Tailwind CSS.

## Rodando localmente

```
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Editando o conteúdo

Todo o conteúdo do site (nome, bio, matérias, skills, contato) está em:

```
content/site-data.json
```

É um arquivo de dados puro (JSON) — não precisa mexer em `content/site.ts` nem em nenhum componente. Guia campo a campo em [`content/COMO-EDITAR.md`](content/COMO-EDITAR.md).

## Build e deploy

```
npm run build      # testa o build local, sem publicar
vercel              # publica uma preview (URL separada, não afeta produção)
vercel --prod       # publica em produção (https://portfolio-jornalismo.vercel.app)
```

## Estrutura

```
app/                     layout e página principal
components/              um componente por seção (Hero, About, Articles, Skills, Contact, Nav, Footer)
content/site-data.json   todo o conteúdo editável do site (edite este)
content/COMO-EDITAR.md   guia de preenchimento campo a campo
content/site.ts          tipos + import do JSON (não precisa editar)
```
