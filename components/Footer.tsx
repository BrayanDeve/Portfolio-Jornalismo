import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-muted text-sm">
      <p>
        © {site.year} {site.name}
      </p>
      <p className="mt-1 text-xs">
        Conteúdo sob licença{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-terracotta-dark transition-colors duration-300"
        >
          CC BY-NC-ND 4.0
        </a>
      </p>
    </footer>
  );
}
