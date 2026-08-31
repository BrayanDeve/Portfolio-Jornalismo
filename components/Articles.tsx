import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function Articles() {
  return (
    <RevealSection id="materias" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">matérias &amp; clipagens</h2>
      <p className="text-muted mb-10">Uma seleção de textos e reportagens.</p>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {site.articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            className="flex flex-col gap-2.5 bg-white rounded-[20px] p-7 shadow-[0_8px_24px_rgba(47,42,40,0.06)] hover:shadow-[0_16px_32px_rgba(47,42,40,0.1)] hover:-translate-y-1.5 transition"
          >
            <span className="self-start text-xs font-semibold uppercase tracking-wide text-terracotta-dark bg-terracotta/10 px-3 py-1 rounded-full">
              {article.tag}
            </span>
            <h3 className="font-serif text-xl">{article.title}</h3>
            <p className="text-muted text-sm flex-grow">{article.description}</p>
            <span className="font-semibold text-sm text-terracotta-dark">ler matéria →</span>
          </a>
        ))}
      </div>
    </RevealSection>
  );
}
