import Image from "next/image";
import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function About() {
  const hasPhoto = Boolean(site.about.photoUrl);

  return (
    <RevealSection id="sobre" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">sobre mim</h2>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 items-start mt-8">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden bg-gradient-to-br from-blush to-terracotta flex items-center justify-center shadow-[0_12px_30px_rgba(224,142,109,0.3)]">
            {hasPhoto ? (
              <Image
                src={site.about.photoUrl as string}
                alt={`Foto de ${site.name}`}
                fill
                className="object-cover"
              />
            ) : (
              <span className="font-serif text-5xl text-white/90">
                {site.name.charAt(0)}
              </span>
            )}
          </div>
          {!hasPhoto && <span className="text-sm text-muted">foto em breve</span>}
        </div>
        <div>
          {site.about.bio.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-col gap-2 mt-5 text-muted">
            {site.about.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
