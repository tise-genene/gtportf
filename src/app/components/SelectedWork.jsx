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
              <div className="flex items-center gap-2">
                {item.playstore && (
                  <a
                    href={item.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${item.title} on Google Play`}
                    title="Download on Google Play"
                    className="text-base-content/60 hover:text-base-content"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.203 2.203 0 0 1-.61-.908c-.144-.45-.22-.924-.22-1.408V4.13c0-.484.076-.958.22-1.408a2.2 2.2 0 0 1 .609-.908zm11.24 11.243l2.424 2.424-11.89 6.842 9.466-9.266zm2.424-2.424l-2.424 2.424-9.466-9.266 11.89 6.842zm1.057 1.057l3.654 2.102c.805.463.805 1.22 0 1.684l-3.654 2.102-2.112-2.112 2.112-2.112z" />
                    </svg>
                  </a>
                )}
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