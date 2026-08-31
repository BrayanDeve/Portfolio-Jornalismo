export type Article = {
  title: string;
  tag: "reportagem" | "entrevista" | "opinião" | string;
  description: string;
  url: string;
};

export type SiteContent = {
  name: string;
  role: string;
  heroSubtitle: string;
  about: {
    bio: string[];
    facts: string[];
  };
  articles: Article[];
  skills: string[];
  contact: {
    email: string;
    linkedin?: string;
    instagram?: string;
  };
  year: number;
};

// Edite só os valores abaixo. Nenhum componente precisa mudar.
export const site: SiteContent = {
  name: "Nome dela",
  role: "Estudante de Jornalismo",
  heroSubtitle:
    "Estudante de Jornalismo apaixonada por [tema favorito — cultura, política, comportamento]. Curiosa, atenta aos detalhes, e sempre em busca da próxima boa história.",
  about: {
    bio: [
      "Espaço para uma bio curta: onde estuda, o que mais gosta de cobrir, um projeto ou matéria da qual se orgulha, um fato curioso ou pessoal.",
      "Acredito que boas histórias começam com boas perguntas — e é isso que eu busco em cada reportagem: ouvir com atenção antes de escrever qualquer linha.",
    ],
    facts: ["🎓 Universidade / semestre", "📍 Cidade", "💛 Um interesse ou hobby"],
  },
  articles: [
    {
      title: "Título da matéria 1",
      tag: "reportagem",
      description: "Breve descrição em uma linha sobre o que é a matéria.",
      url: "#",
    },
    {
      title: "Título da matéria 2",
      tag: "entrevista",
      description: "Breve descrição em uma linha sobre o que é a matéria.",
      url: "#",
    },
    {
      title: "Título da matéria 3",
      tag: "opinião",
      description: "Breve descrição em uma linha sobre o que é a matéria.",
      url: "#",
    },
  ],
  skills: ["Redação", "Apuração", "Entrevista", "Edição de texto", "Redes sociais"],
  contact: {
    email: "seuemail@exemplo.com",
    linkedin: "#",
    instagram: "#",
  },
  year: 2026,
};
