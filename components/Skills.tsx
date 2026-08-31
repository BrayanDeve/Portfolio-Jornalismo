import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function Skills() {
  return (
    <RevealSection id="skills" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-6">habilidades</h2>
      <div className="flex flex-wrap gap-3">
        {site.skills.map((skill) => (
          <span
            key={skill}
            className="bg-white px-5 py-2.5 rounded-full font-medium text-sm shadow-[0_4px_14px_rgba(47,42,40,0.06)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(224,142,109,0.18)] transition-all duration-300 ease-out cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </RevealSection>
  );
}
