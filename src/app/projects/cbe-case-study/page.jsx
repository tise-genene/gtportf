import Link from "next/link";
import { projects } from "@/data/data";

export const metadata = {
  title: "CBE Corporate Website — Case study | Genene",
  description:
    "Case study: Commercial Bank of Ethiopia corporate website — performance, accessibility and UX improvements delivered by Genene.",
};

export default function CBECaseStudy() {
  const project = projects.pinProjects.find(
    (p) => p.title === "CBE Corporate Website"
  );

  return (
    <main className="mt-6 p-4 max-w-3xl m-auto">
      <header>
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="text-sm text-base-content/70 mt-2">
          {project.description}
        </p>
        <div className="flex gap-2 mt-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md border border-base-content/20 hover:bg-base-200 text-sm"
            >
              View live
            </a>
          )}
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Problem</h2>
        <p className="text-base text-base-content/80 mt-2">
          The bank's public facing site needed improved performance,
          accessibility and a more maintainable modern front-end to better serve
          millions of visitors and reflect the brand.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">My role</h2>
        <p className="text-base text-base-content/80 mt-2">
          I worked as part of the front-end and UX team: auditing performance
          and accessibility, implementing front-end improvements in
          React/Next.js, and enabling faster CI deployments for the marketing
          site.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Approach & technical highlights</h2>
        <ul className="list-disc ml-5 mt-2 text-base-content/80">
          <li>
            Performance profiling and critical-path optimization
            (code-splitting, image optimization).
          </li>
          <li>
            Accessibility audits and fixes (semantic markup, keyboard
            navigation, ARIA labels).
          </li>
          <li>
            Migrated select components to React with SSR-friendly patterns and
            incremental hydration.
          </li>
          <li>
            Introduced a lightweight design token system and Tailwind utility
            layer for consistent styling.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Outcome</h2>
        <ul className="list-disc ml-5 mt-2 text-base-content/80">
          <li>
            Measured page load improvements: Time-to-interactive reduced by ~30%
            on key pages.
          </li>
          <li>
            Accessibility score improvements across main pages (WCAG compliance
            fixes).
          </li>
          <li>
            Faster release cadence via automated builds and a streamlined CI
            pipeline for front-end updates.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Tech stack</h2>
        <p className="text-base text-base-content/80 mt-2">
          React, Next.js, Tailwind CSS, automated CI
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-sm text-base-content/70">
          Interested in similar work?{" "}
          <Link href="/contact" className="underline">
            Contact me
          </Link>{" "}
          or download my CV.
        </p>
      </footer>
    </main>
  );
}
