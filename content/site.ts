import data from "./site-data.json";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type Skill = {
  name: string;
  description: string;
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
  gallery: GalleryPhoto[];
  skills: Skill[];
  contact: {
    email: string;
    linkedin?: string;
    instagram?: string;
  };
  year: number;
};

// Não edite este arquivo para trocar textos do site.
// Perfil, galeria de fotos e contato vêm de content/site-data.json.
// Matérias vêm de content/materias/*.md — veja content/COMO-EDITAR.md.
export const site: SiteContent = data;
