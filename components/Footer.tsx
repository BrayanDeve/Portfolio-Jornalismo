import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-muted text-sm">
      <p>feito com carinho ✿ {site.year}</p>
    </footer>
  );
}
