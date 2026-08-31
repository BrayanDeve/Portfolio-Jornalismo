"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const photos = site.gallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-polaroid]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  function openPhotoAt(i: number) {
    lastActiveElementRef.current = document.activeElement as HTMLElement;
    setOpenIndex(i);
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function showPhoto(i: number) {
    setOpenIndex(i);
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function closeLightbox() {
    setOpenIndex(null);
  }

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((current) => (current === null ? current : (current + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpenIndex((current) => (current === null ? current : (current - 1 + photos.length) % photos.length));
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      lastActiveElementRef.current?.focus();
    };
  }, [openIndex, photos.length]);

  const openPhoto = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
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
                key={photo.src + i}
                data-polaroid
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`group snap-center shrink-0 w-[240px] bg-white p-3 pb-5 rounded-sm shadow-[0_10px_24px_rgba(47,42,40,0.14)] ${
                  i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => openPhotoAt(i)}
                  aria-label={`Ampliar foto ${i + 1} de ${photos.length}`}
                  className="relative block w-full aspect-square overflow-hidden bg-cream cursor-zoom-in"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </button>
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

      {openPhoto && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openPhoto.caption}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-md p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[520px] max-h-[85vh]"
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="fechar"
              className="absolute -right-3 -top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-white shadow-[0_4px_14px_rgba(47,42,40,0.3)] transition-colors duration-300 hover:bg-terracotta-dark"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex max-h-[85vh] w-full flex-col overflow-y-auto rounded-sm bg-white p-4 pb-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <div className="relative mx-auto aspect-square w-full max-h-[380px] bg-cream">
                <Image
                  src={openPhoto.src}
                  alt={openPhoto.alt}
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-center font-serif italic text-sm text-ink/80">
                {openPhoto.caption}
              </p>

              {photos.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => showPhoto((openIndex - 1 + photos.length) % photos.length)}
                    aria-label="foto anterior"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 hover:border-terracotta-dark hover:text-terracotta-dark"
                  >
                    ←
                  </button>
                  <span className="text-xs text-muted">
                    {openIndex + 1} de {photos.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => showPhoto((openIndex + 1) % photos.length)}
                    aria-label="próxima foto"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 hover:border-terracotta-dark hover:text-terracotta-dark"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
