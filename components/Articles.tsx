import Link from "next/link";
import { getAllMaterias } from "@/lib/materias";
import RevealSection from "./RevealSection";

export default function Articles() {
  const materias = getAllMaterias();

  return (
    <RevealSection id="materias" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">matérias &amp; clipagens</h2>
      <p className="text-muted mb-10">Uma seleção de textos e reportagens.</p>
      {materias.length === 0 ? (
        <p className="text-muted">Em breve, as primeiras matérias por aqui.</p>
      ) : (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {materias.map((materia) => (
            <Link
              key={materia.slug}
              href={`/materias/${materia.slug}`}
              className="flex flex-col gap-2.5 bg-white rounded-[20px] p-7 shadow-[0_8px_24px_rgba(47,42,40,0.06)] hover:shadow-[0_16px_32px_rgba(47,42,40,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className="self-start text-xs font-semibold uppercase tracking-wide text-terracotta-dark bg-terracotta/10 px-3 py-1 rounded-full">
                {materia.tag}
              </span>
              <h3 className="font-serif text-xl line-clamp-2">{materia.title}</h3>
              <p className="text-muted text-sm flex-grow line-clamp-3">{materia.description}</p>
              <span className="font-semibold text-sm text-terracotta-dark">ler matéria →</span>
            </Link>
          ))}
        </div>
      )}
    </RevealSection>
  );
}
