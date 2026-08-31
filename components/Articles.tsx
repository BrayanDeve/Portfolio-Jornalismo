import { getAllMaterias } from "@/lib/materias";
import RevealSection from "./RevealSection";
import ArticlesFilter from "./ArticlesFilter";

export default function Articles() {
  const materias = getAllMaterias();

  return (
    <RevealSection id="materias" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">matérias &amp; clipagens</h2>
      <p className="text-muted mb-10">Uma seleção de textos e reportagens.</p>
      {materias.length === 0 ? (
        <p className="text-muted">Em breve, as primeiras matérias por aqui.</p>
      ) : (
        <ArticlesFilter materias={materias} />
      )}
    </RevealSection>
  );
}
