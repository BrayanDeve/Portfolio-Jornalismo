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
content/site.ts
```

Edite os valores desse arquivo — nenhum componente precisa ser tocado. Como o arquivo é tipado, um erro de digitação na estrutura quebra o build (é assim que você descobre o erro antes de publicar).

## Build e deploy

```
npm run build      # testa o build local, sem publicar
vercel              # publica uma preview (URL separada, não afeta produção)
vercel --prod       # publica em produção (https://portfolio-jornalismo.vercel.app)
```

## Estrutura

```
app/                 layout e página principal
components/          um componente por seção (Hero, About, Articles, Skills, Contact, Nav, Footer)
content/site.ts       todo o conteúdo editável do site
```
