"use client";
import { projects } from "@/data/data";
import Link from "next/link";

export default function ProjectsList() {
  return (
    <div className="mt-10 scroll-mt-14 flex flex-col gap-2" id="projects">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
          Projects
        </h2>
        <Link
          href="/projects"
          className="text-sm flex underline hover:text-base-content/80"
        >
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {projects.pinProjects.map((item, index) => (
          <div
            key={index}
            className="group p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
          >
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <a
                  href={item.link || item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open project"
                  className="text-base-content/60 hover:text-base-content/90"
                >
                  <svg
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-base-content/80 text-sm sm:text-base">
                {item.description}
              </p>
              <div className="flex items-center flex-wrap gap-2 mt-1">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons: GitHub, Live, Telegram */}
              <div className="flex items-center gap-2 mt-3">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open repository (GitHub)"
                    className="p-2 rounded-md hover:bg-base-200"
                  >
                    {/* GitHub icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.11 7.61 10.59.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .72 2.62.51 3.26.39.1-.31.39-.51.71-.63-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.15a10.77 10.77 0 012.84-.38c.96.01 1.92.13 2.84.38 2.17-1.46 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.72.78 1.16 1.77 1.16 2.99 0 4.29-2.61 5.23-5.09 5.51.4.35.76 1.05.76 2.12 0 1.54-.01 2.78-.01 3.16 0 .3.2.65.78.54 4.41-1.48 7.59-5.66 7.59-10.59C23.25 5.48 18.27.5 12 .5z" />
                    </svg>
                  </a>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live site"
                    className="p-2 rounded-md hover:bg-base-200"
                  >
                    {/* External link icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                )}

                {item.telegram && (
                  <a
                    href={item.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Telegram bot"
                    className="p-2 rounded-md hover:bg-base-200"
                  >
                    {/* Telegram icon */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 240 240"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm55.23 83.53l-19.3 90.93c-1.47 6.55-5.31 8.16-10.77 5.08l-29.79-21.97-14.36 13.83c-1.59 1.59-2.93 2.93-6.01 2.93l2.16-30.96 56.34-50.83c2.46-2.16-.54-3.36-3.82-1.2l-69.66 43.71-30.01-9.37c-6.51-1.95-6.64-6.51 1.34-9.63L151.3 70.3c6.44-2.63 12.08 1.6 9.93 13.23z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
