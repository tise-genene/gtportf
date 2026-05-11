import { about, socials } from "@/data/data";

export default function Footer() {
  return (
    <div className="mt-6 p-4 border-t border-base-content/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} {about.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-base-content/60 hover:text-base-content hover:underline"
          >
            GitHub
          </a>
          <a
            href={`mailto:${about.email}`}
            className="text-sm text-base-content/60 hover:text-base-content hover:underline"
          >
            Email
          </a>
          <a
            href={about.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-base-content/60 hover:text-base-content hover:underline"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
}