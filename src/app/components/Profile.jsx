import { socials } from "@/data/data";
import { about } from "@/data/data";

export default function Profile() {
  return (
    <div className="flex gap-4 items-start">
      <img
        src="/images/gt.jpeg"
        className="w-[56px] h-[56px] rounded-full object-cover object-center shrink-0"
        alt={`${about.name}'s profile`}
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-[5px] items-center">
          <h1 className="text-2xl font-semibold">{about.name}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
          </svg>
        </div>
        <p className="text-base text-base-content/60">{about.role}</p>
        <div className="flex gap-2 mt-3">
          <a
            href="#selected-work"
            className="px-3 py-2 rounded-md border border-base-content/20 hover:bg-base-200 text-sm"
            aria-label="See selected work"
          >
            See selected work
          </a>
          <a
            href={about.cv}
            className="px-3 py-2 rounded-md border border-base-content/20 hover:bg-base-200 text-sm"
            aria-label="Download resume PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className="flex items-center mt-3 gap-3">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-base-content/60 hover:text-base-content transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.82v2.2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V24h-4v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-4z" />
            </svg>
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-base-content/60 hover:text-base-content transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.14 12.14 0 0 1 3.15 5.15a4.29 4.29 0 0 0 1.33 5.72c-.63-.02-1.22-.19-1.74-.48v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.05 3.01A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-base-content/60 hover:text-base-content transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.76-.24.76-.53 0-.26-.01-1.13-.02-2.05-3.13.68-3.79-1.51-3.79-1.51-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 . 1 1.67.74 2.07 1.01.06-.79.39-1.31.71-1.61-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.02 0 0 .95-.31 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.29-5.15 5.56.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.63.77.53C19.03 20.9 21.25 16.7 21.25 11.75 21.25 5.48 16.27.5 10 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}