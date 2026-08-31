"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { MateriaMeta } from "@/lib/materias";

export default function ArticlesFilter({ materias }: { materias: MateriaMeta[] }) {
  const tags = useMemo(() => Array.from(new Set(materias.map((m) => m.tag))), [materias]);
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? materias.filter((m) => m.tag === active) : materias;

  return (
    <div>
      {tags.length > 1 && (
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="group"
          aria-label="Filtrar matérias por categoria"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-pressed={active === null}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
              active === null
                ? "bg-terracotta text-white border-terracotta"
                : "border-ink/20 text-ink/70 hover:border-terracotta-dark hover:text-terracotta-dark"
            }`}
          >
            todas
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              aria-pressed={active === tag}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border capitalize transition-colors duration-300 ${
                active === tag
                  ? "bg-terracotta text-white border-terracotta"
                  : "border-ink/20 text-ink/70 hover:border-terracotta-dark hover:text-terracotta-dark"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-muted">Nenhuma matéria nessa categoria ainda.</p>
      ) : (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {filtered.map((materia) => (
            <Link
              key={materia.slug}
              href={`/materias/${materia.slug}`}
              className="flex flex-col gap-2.5 bg-white rounded-[20px] p-7 shadow-[0_8px_24px_rgba(47,42,40,0.06)] hover:shadow-[0_16px_32px_rgba(47,42,40,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className="self-start text-xs font-semibold uppercase tracking-wide text-terracotta-dark bg-terracotta/10 px-3 py-1 rounded-full">
                {materia.tag}
              </span>
              <h3 className="font-serif text-xl line-clamp-2">{materia.title}</h3>
              <p className="text-muted text-sm flex-grow line-clamp-3">{materia.description}</p>
              <span className="font-semibold text-sm text-terracotta-dark">ler matéria →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
