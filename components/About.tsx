import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function About() {
  return (
    <RevealSection id="sobre" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">sobre mim</h2>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 items-start mt-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blush to-terracotta flex items-center justify-center text-5xl shadow-[0_12px_30px_rgba(224,142,109,0.3)]">
            📷
          </div>
          <span className="text-sm text-muted">[foto aqui]</span>
        </div>
        <div>
          {site.about.bio.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-col gap-2 mt-5 text-muted">
            {site.about.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
