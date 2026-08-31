"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const LINKS = [
  { href: "#sobre", label: "sobre" },
  { href: "#materias", label: "matérias" },
  { href: "#galeria", label: "fotos" },
  { href: "#skills", label: "habilidades" },
  { href: "#contato", label: "contato" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-cream/85 backdrop-blur-sm">
      <div className="flex items-center justify-between px-[8vw] py-5">
        <a href="#top" className="font-serif font-semibold text-xl text-terracotta-dark">
          {site.name.split(" ")[0].toLowerCase()}
        </a>

        <nav className="hidden md:flex gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`text-sm font-medium transition-colors duration-300 ${
                active === link.href
                  ? "text-terracotta-dark"
                  : "text-ink/75 hover:text-terracotta-dark"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "fechar menu" : "abrir menu"}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block w-6 h-[2px] bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="menu-mobile"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-[8vw] pb-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active === link.href ? "true" : undefined}
              className={`py-2.5 text-sm font-medium transition-colors duration-300 ${
                active === link.href ? "text-terracotta-dark" : "text-ink/75"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
