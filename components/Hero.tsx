import { site } from "@/content/site";

export default function Hero() {
  const firstName = site.name.split(" ")[0];

  return (
    <section id="top" className="min-h-[82vh] flex flex-col justify-center px-[8vw] max-w-[780px] scroll-mt-24">
      <p className="animate-fade-up text-terracotta-dark font-semibold tracking-wide mb-3">
        portfólio de jornalismo
      </p>
      <h1
        className="animate-fade-up font-serif font-semibold mb-5 leading-tight"
        style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", animationDelay: "0.1s" }}
      >
        Oi, eu sou <span className="italic text-terracotta-dark">{firstName}</span>.
      </h1>
      <p
        className="animate-fade-up text-lg text-muted max-w-[560px] mb-8"
        style={{ animationDelay: "0.2s" }}
      >
        {site.heroSubtitle}
      </p>
      <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
        <a
          href="#materias"
          className="px-6 py-3 rounded-full font-semibold text-sm bg-terracotta text-white shadow-[0_8px_20px_rgba(224,142,109,0.35)] hover:shadow-[0_12px_24px_rgba(224,142,109,0.45)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
        >
          ver matérias
        </a>
        <a
          href="#contato"
          className="px-6 py-3 rounded-full font-semibold text-sm border border-ink/20 hover:border-terracotta-dark hover:text-terracotta-dark hover:-translate-y-0.5 transition-all duration-300 ease-out"
        >
          falar comigo
        </a>
      </div>
    </section>
  );
}
