import { site } from "@/content/site";
import RevealSection from "./RevealSection";
import CopyEmailButton from "./CopyEmailButton";

export default function Contact() {
  return (
    <RevealSection id="contato" className="px-[8vw] py-24 max-w-[1080px] mx-auto text-center">
      <h2 className="font-serif font-semibold text-3xl mb-2">vamos conversar?</h2>
      <p className="text-muted max-w-[480px] mx-auto mb-8">
        Aberta a estágios, freelas e boas ideias de reportagem.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href={`mailto:${site.contact.email}`}
          className="px-6 py-3 rounded-full font-semibold text-sm bg-terracotta text-white shadow-[0_8px_20px_rgba(224,142,109,0.35)] hover:shadow-[0_12px_24px_rgba(224,142,109,0.45)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
        >
          enviar e-mail
        </a>
        {site.contact.linkedin && (
          <a
            href={site.contact.linkedin}
            className="px-6 py-3 rounded-full font-semibold text-sm border border-ink/20 hover:border-terracotta-dark hover:text-terracotta-dark hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            LinkedIn
          </a>
        )}
        {site.contact.instagram && (
          <a
            href={site.contact.instagram}
            className="px-6 py-3 rounded-full font-semibold text-sm border border-ink/20 hover:border-terracotta-dark hover:text-terracotta-dark hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            Instagram
          </a>
        )}
      </div>
      <div className="mt-4">
        <CopyEmailButton email={site.contact.email} />
      </div>
    </RevealSection>
  );
}
