import { site } from "@/content/site";

const LINKS = [
  { href: "#sobre", label: "sobre" },
  { href: "#materias", label: "matérias" },
  { href: "#skills", label: "habilidades" },
  { href: "#contato", label: "contato" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-[8vw] py-5 bg-cream/85 backdrop-blur-sm">
      <a href="#top" className="font-serif font-semibold text-xl text-terracotta-dark">
        {site.name.split(" ")[0].toLowerCase()}
      </a>
      <nav className="flex gap-7">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-ink/75 hover:text-terracotta-dark hover:opacity-100 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
