import { experience, about, socials } from "../../data/data";

export default function Experience() {
  return (
    <>
      <div className="mt-10 scroll-mt-14" id="experience">
        <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
          Work Experience
        </h2>
        <div className="mt-6">
          <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
            {experience.map((item, index) => (
              <li
                key={index}
                className="relative -ms-1.5 flex items-start gap-4"
              >
                <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                <div className="-mt-2">
                  <time className="text-xs font-medium text-base-content/80">
                    {item.date}
                  </time>

                  <h3 className="text-lg font-semibold text-base-content">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-sm text-base-content/80">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          {/* Contact / resource button row */}
          <div className="mt-8 mb-8 p-4 border border-base-content/10 rounded-md bg-transparent flex flex-wrap items-center gap-3">
            {/* <a
              href="/contact"
              title="Schedule a meeting"
              aria-label="Schedule a meeting"
              className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span className="font-mono text-sm font-semibold">
                calendar.sh
              </span>
            </a> */}

            <a
              href={socials.github}
              title="GitHub"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.76-.24.76-.53 0-.26-.01-1.13-.02-2.05-3.13.68-3.79-1.51-3.79-1.51-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 . 1 1.67.74 2.07 1.01.06-.79.39-1.31.71-1.61-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.29-5.15 5.56.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.63.77.53C19.03 20.9 21.25 16.7 21.25 11.75 21.25 5.48 16.27.5 10 .5z" />
              </svg>
              <span className="font-mono text-sm font-semibold">github.md</span>
            </a>

            <a
              href={`mailto:${about.email}`}
              title="Email"
              aria-label="Email"
              className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" />
                <path d="M21 8.5L12 13 3 8.5" />
              </svg>
              <span className="font-mono text-sm font-semibold">mail.txt</span>
            </a>

            <a
              href={socials.twitter}
              title="X / Twitter"
              aria-label="X profile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.14 12.14 0 0 1 3.15 5.15a4.29 4.29 0 0 0 1.33 5.72c-.63-.02-1.22-.19-1.74-.48v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.05 3.01A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
              <span className="font-mono text-sm font-semibold">x.md</span>
            </a>

            <a
              href={socials.linkedin}
              title="LinkedIn"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.82v2.2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V24h-4v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-4z" />
              </svg>
              <span className="font-mono text-sm font-semibold">
                linkedin.md
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
