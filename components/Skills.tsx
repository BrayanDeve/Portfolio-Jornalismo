"use client";

import { useState } from "react";
import { site } from "@/content/site";
import RevealSection from "./RevealSection";

export default function Skills() {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = pinned ?? hovered;

  return (
    <RevealSection id="skills" className="px-[8vw] py-24 max-w-[1080px] mx-auto">
      <h2 className="font-serif font-semibold text-3xl mb-2">habilidades</h2>
      <p className="text-muted mb-10">O que eu levo pra cada pauta.</p>

      {site.skills.length === 0 ? (
        <p className="text-muted">Em breve, habilidades por aqui.</p>
      ) : (
        <>
          {/* Mobile: cards com descrição sempre visível — sem popover flutuante */}
          <div className="flex flex-col gap-3 sm:hidden">
            {site.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[0_4px_14px_rgba(47,42,40,0.06)]"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-sm">{skill.name}</p>
                  <p className="mt-1 text-sm text-muted">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: badges interativos com tooltip */}
          <div className="hidden sm:flex flex-wrap gap-3">
            {site.skills.map((skill, i) => {
              const isActive = active === i;
              const tooltipId = `skill-tooltip-${i}`;

              return (
                <div
                  key={skill.name}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(i);
                    setPinned((current) => (current !== null && current !== i ? null : current));
                  }}
                  onMouseLeave={() => setHovered((current) => (current === i ? null : current))}
                >
                  <button
                    type="button"
                    aria-describedby={tooltipId}
                    aria-expanded={isActive}
                    onClick={() => {
                      setPinned((current) => {
                        if (current === i) {
                          setHovered((h) => (h === i ? null : h));
                          return null;
                        }
                        return i;
                      });
                    }}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered((current) => (current === i ? null : current))}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setPinned((current) => (current === i ? null : current));
                        e.currentTarget.blur();
                      }
                    }}
                    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-out ${
                      isActive
                        ? "-translate-y-0.5 bg-terracotta text-white shadow-[0_8px_20px_rgba(224,142,109,0.35)]"
                        : "bg-white shadow-[0_4px_14px_rgba(47,42,40,0.06)]"
                    }`}
                  >
                    {skill.name}
                  </button>

                  <div
                    id={tooltipId}
                    role="tooltip"
                    className={`pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-56 -translate-x-1/2 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm leading-relaxed text-ink/70 shadow-[0_12px_28px_rgba(47,42,40,0.12)] transition-all duration-700 ease-out ${
                      isActive ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                    }`}
                  >
                    {skill.description}
                    <span className="absolute left-1/2 bottom-full -mb-1.5 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l border-t border-ink/10 bg-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </RevealSection>
  );
}
