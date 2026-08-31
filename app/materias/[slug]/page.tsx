import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMaterias, getMateriaBySlug } from "@/lib/materias";
import { site } from "@/content/site";

export function generateStaticParams() {
  return getAllMaterias().map((materia) => ({ slug: materia.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const materia = getMateriaBySlug(slug);
  if (!materia) return {};

  return {
    title: `${materia.title} — ${site.name}`,
    description: materia.description,
  };
}

export default async function MateriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const materia = getMateriaBySlug(slug);
  if (!materia) notFound();

  return (
    <main className="px-[8vw] py-16 max-w-[720px] mx-auto">
      <Link
        href="/#materias"
        className="text-sm font-medium text-terracotta-dark hover:underline underline-offset-4"
      >
        ← voltar pras matérias
      </Link>

      <span className="block w-fit mt-6 text-xs font-semibold uppercase tracking-wide text-terracotta-dark bg-terracotta/10 px-3 py-1 rounded-full">
        {materia.tag}
      </span>

      <h1 className="font-serif font-semibold text-3xl sm:text-4xl mt-4 mb-10 leading-tight">
        {materia.title}
      </h1>

      <div className="flex flex-col gap-5 text-lg leading-relaxed">
        {materia.blocks.map((block, i) => {
          if (block.type === "heading") {
            return (
              <h2 key={i} className="font-serif text-2xl mt-4">
                {block.text}
              </h2>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={i}
                className="border-l-4 border-terracotta pl-5 italic text-ink/80"
              >
                {block.text}
              </blockquote>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}
      </div>
    </main>
  );
}
