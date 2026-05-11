"use client";
import Link from "next/link";
import { projects } from "@/data/data";

export default function SelectedWork() {
  const picks = ["Eagle Pathway", "Commercial Bank of Ethiopia", "Taptosign"];

  const items = projects.pinProjects.filter((p) => picks.includes(p.title));
  const displayItems = items.length > 0 ? items : projects.pinProjects.slice(0, 3);

  return (
    <section className="mt-8 scroll-mt-14" id="selected-work">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
          Selected work
        </h2>
        <Link href="/projects" className="text-sm underline">
          See all projects
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {displayItems.map((item, idx) => (
          <article
            key={idx}
            className="p-4 border-2 border-base-content/10 rounded-xl hover:border-base-content/80 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <a
                href={item.link || item.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title}`}
                className="text-base-content/60 hover:text-base-content/90 text-lg leading-none"
              >
                &#8599;
              </a>
            </div>
            <p className="text-sm text-base-content/80 mt-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags?.map((t, i) => (
                <span
                  key={i}
                  className="text-xs border border-base-content/20 rounded-md px-3 py-1 text-base-content/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}