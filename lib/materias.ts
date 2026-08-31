import fs from "fs";
import path from "path";
import matter from "gray-matter";

const MATERIAS_DIR = path.join(process.cwd(), "content", "materias");

export type MateriaMeta = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  date: string;
};

export type MateriaBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string };

export type Materia = MateriaMeta & {
  blocks: MateriaBlock[];
};

function readMateriaFiles(): string[] {
  if (!fs.existsSync(MATERIAS_DIR)) return [];
  return fs
    .readdirSync(MATERIAS_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"));
}

function parseFrontmatter(raw: string, file: string) {
  try {
    return matter(raw);
  } catch (err) {
    throw new Error(
      `content/materias/${file}: erro ao ler o cabeçalho (entre as linhas ---). Confira se o título está entre aspas — isso é obrigatório quando o texto tem dois-pontos (:). Detalhe técnico: ${
        (err as Error).message
      }`
    );
  }
}

function parseBody(body: string): MateriaBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("## ")) {
        return { type: "heading", text: block.slice(3).trim() } as const;
      }
      if (block.startsWith(">")) {
        const text = block
          .split("\n")
          .map((line) => line.replace(/^>\s?/, ""))
          .join(" ")
          .trim();
        return { type: "quote", text } as const;
      }
      return { type: "paragraph", text: block.replace(/\n/g, " ").trim() } as const;
    });
}

function loadMateria(file: string): Materia {
  const slug = file.replace(/\.md$/, "");
  const fullPath = path.join(MATERIAS_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(raw, file);

  for (const field of ["title", "tag", "description"] as const) {
    if (!data[field]) {
      throw new Error(
        `content/materias/${file}: falta o campo "${field}" entre as linhas --- do início do arquivo.`
      );
    }
  }

  return {
    slug,
    title: data.title,
    tag: data.tag,
    description: data.description,
    date: typeof data.date === "string" ? data.date : "1970-01-01",
    blocks: parseBody(content),
  };
}

export function getAllMaterias(): MateriaMeta[] {
  return readMateriaFiles()
    .map(loadMateria)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map(({ blocks, ...meta }) => meta);
}

export function getMateriaBySlug(slug: string): Materia | null {
  const file = `${slug}.md`;
  if (!readMateriaFiles().includes(file)) return null;
  return loadMateria(file);
}
