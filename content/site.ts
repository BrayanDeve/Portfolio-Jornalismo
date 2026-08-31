import data from "./site-data.json";

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
    photoUrl?: string;
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

// Não edite este arquivo para trocar textos do site.
// Todo o conteúdo vem de content/site-data.json — veja content/COMO-EDITAR.md.
export const site: SiteContent = data;
