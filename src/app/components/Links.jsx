import { about, socials } from "@/data/data";

export default function Links() {
  return (
    <div className="mt-8 mb-8 p-4 border border-base-content/10 rounded-md bg-transparent flex flex-wrap items-center gap-3">
      <a
        href={socials.upwork}
        title="Upwork"
        aria-label="Upwork"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.34 9.47a2.08 2.08 0 0 0-1.66-.84H9.13v9.54h4.55c1.02 0 1.76-.3 2.24-.9.48-.6.72-1.4.72-2.4 0-1.02-.31-1.76-.88-2.24zM7.39 5.18c-.6 0-1.08.2-1.46.6-.38.4-.56.96-.56 1.68 0 .72.18 1.28.56 1.68.38.4.86.6 1.46.6h7.55V5.18zM9.13 4h7.55a2.6 2.6 0 0 1 1.84.7c.54.48.82 1.16.82 2.04 0 .88-.28 1.6-.82 2.14-.54.54-1.16.82-1.84.82H9.13zM6.66 5.18a2.08 2.08 0 0 0-1.66-.84H3V9.68h2c.72 0 1.26-.22 1.66-.72.4-.5.58-1.2.58-2.1 0-1.02-.26-1.68-.58-1.68z" />
        </svg>
        <span className="font-mono text-sm font-semibold">upwork.md</span>
      </a>

      <a
        href={socials.github}
        title="GitHub"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.76-.24.76-.53 0-.26-.01-1.13-.02-2.05-3.13.68-3.79-1.51-3.79-1.51-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 . 1 1.67.74 2.07 1.01.06-.79.39-1.31.71-1.61-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.29-5.15 5.56.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.63.77.53C19.03 20.9 21.25 16.7 21.25 11.75 21.25 5.48 16.27.5 12 .5z" />
        </svg>
        <span className="font-mono text-sm font-semibold">github.md</span>
      </a>

      <a
        href={`mailto:${about.email}`}
        title="Email"
        aria-label="Email"
        className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.14 12.14 0 0 1 3.15 5.15a4.29 4.29 0 0 0 1.33 5.72c-.63-.02-1.22-.19-1.74-.48v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.05 3.01A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22.46 6z" />
        </svg>
        <span className="font-mono text-sm font-semibold">x.md</span>
      </a>

      <a
        href={socials.linkedin}
        title="LinkedIn"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 border border-base-content/10 rounded-md text-sm hover:bg-base-content/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.82v2.2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V24h-4v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-4z" />
        </svg>
        <span className="font-mono text-sm font-semibold">linkedin.md</span>
      </a>
    </div>
  );
}