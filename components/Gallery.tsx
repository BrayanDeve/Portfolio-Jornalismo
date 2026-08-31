"use client";

import { useRef } from "react";
import Image from "next/image";
import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const photos = site.gallery;

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-polaroid]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <RevealSection id="galeria" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">bastidores</h2>
      <p className="text-muted mb-10">Flagras e registros de apuração e cobertura.</p>

      {photos.length === 0 ? (
        <p className="text-muted">Em breve, fotos de bastidor por aqui.</p>
      ) : (
        <div className="relative">
          <div
            ref={scrollerRef}
            role="region"
            aria-label="Galeria de fotos de bastidor"
            tabIndex={0}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((photo, i) => (
              <figure
                key={photo.src}
                data-polaroid
                role="group"
                aria-label={`Foto ${i + 1} de ${photos.length}`}
                className={`snap-center shrink-0 w-[240px] bg-white p-3 pb-5 rounded-sm shadow-[0_10px_24px_rgba(47,42,40,0.14)] ${
                  i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                }`}
              >
                <div className="relative w-full aspect-square bg-cream">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-serif italic text-sm text-center mt-3 text-ink/80">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="foto anterior"
              className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center hover:border-terracotta-dark hover:text-terracotta-dark transition-colors duration-300"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="próxima foto"
              className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center hover:border-terracotta-dark hover:text-terracotta-dark transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>
      )}
    </RevealSection>
  );
}
