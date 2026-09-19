import Link from "next/link";
import { projects } from "@/data/data";

export const metadata = {
  title: "Eagle Pathway: From a Tutor's Frustration to a Platform With 1,000+ Users | Genene",
  description:
    "Case study: Founded and built Eagle Pathway end to end: Next.js admin dashboard, Expo/React Native mobile app on Google Play, and Supabase backend with Chapa payment integration.",
};

export default function EaglePathwayCaseStudy() {
  const project = projects.pinProjects.find(
    (p) => p.title === "Eagle Pathway"
  );

  return (
    <main className="mt-6 p-4 max-w-3xl m-auto">
      <header>
        <div className="mb-3">
          <Link href="/#projects" className="text-sm text-base-content/60 hover:text-base-content underline">
            &larr; Back to projects
          </Link>
        </div>
        <h1 className="text-2xl font-bold">
          Eagle Pathway: From a Tutor's Frustration to a Platform With 1,000+ Users
        </h1>
        <p className="text-sm text-base-content/70 mt-2">
          Full monorepo platform (web admin + mobile app) for scholarship guidance and tutor matching. Live on Google Play with 1,000+ installs and 1,000+ registered users, grown with $0 paid marketing. Supabase backend with PostgreSQL, Auth, Storage, and Realtime. Chapa payment integration. 315+ commits.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.eaglepathway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md bg-base-content text-base-100 hover:opacity-90 text-sm font-medium inline-flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.609 1.814L13.793 12 3.61 22.186a2.203 2.203 0 0 1-.61-.908c-.144-.45-.22-.924-.22-1.408V4.13c0-.484.076-.958.22-1.408a2.2 2.2 0 0 1 .609-.908zm11.24 11.243l2.424 2.424-11.89 6.842 9.466-9.266zm2.424-2.424l-2.424 2.424-9.466-9.266 11.89 6.842zm1.057 1.057l3.654 2.102c.805.463.805 1.22 0 1.684l-3.654 2.102-2.112-2.112 2.112-2.112z" />
            </svg>
            Download on Google Play
          </a>
          <a
            href="https://eaglespathway.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md border border-base-content/20 hover:bg-base-200 text-sm font-medium inline-flex items-center gap-1.5"
          >
            Visit eaglespathway.com
          </a>
          <a
            href="https://github.com/Eagle-Pathway/eagle-pathway"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md border border-base-content/20 hover:bg-base-200 text-sm font-medium inline-flex items-center gap-1.5"
          >
            GitHub Repository
          </a>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">The problem</h2>
        <p className="text-base text-base-content/80 mt-2">
          While I was a university student, I worked as a tutor for a few different tutoring companies in Addis Ababa. Every company ran the same model: a parent calls in, and the company sends whichever tutor happened to apply first. No matching on subject, level, or learning style. Just speed.
        </p>
        <p className="text-base text-base-content/80 mt-3">
          I saw the mismatch this caused from the inside. Tutors placed with students they weren't suited for. Students not making progress because the tutor assigned to them wasn't the right fit. It wasn't a technology problem yet, it was a process problem, but I was convinced technology could fix it.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">The constraint</h2>
        <p className="text-base text-base-content/80 mt-2">
          I had no budget, no team, and no infrastructure. So I started matching students and tutors myself, manually, based on subject and fit rather than who called first. That worked, but it didn't scale past a handful of people. I built a Telegram bot to help automate the matching logic, which let the operation grow to hundreds of students and tutors without me manually tracking every pairing.
        </p>
        <p className="text-base text-base-content/80 mt-3">
          The bot worked, until it didn't. Past a few hundred users, chat threads couldn't hold what the business needed: a real record of who was paired with whom, visibility into payment status, and a way to handle bookings without manually checking messages.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">The decision</h2>
        <p className="text-base text-base-content/80 mt-2">
          Rebuilding meant real architectural choices, not just a redesign. Two decisions mattered most:
        </p>
        <div className="mt-3 space-y-3">
          <p className="text-base text-base-content/80">
            <strong className="font-semibold text-base-content">Payments.</strong> Our original manual process relied on students uploading a screenshot of a bank transfer as proof of payment, which was slow and fraud-prone since a screenshot is trivial to fake or reuse. I integrated Chapa as a payment gateway instead, with webhook-based HMAC signature verification to confirm payments actually came from Chapa, and idempotency keys to make sure a webhook retry couldn't accidentally credit a payment twice. This moved payment verification from a manual, trust-based process to an automated, cryptographically verified one.
          </p>
          <p className="text-base text-base-content/80">
            <strong className="font-semibold text-base-content">Data model and platform split.</strong> I split the system into a Next.js admin dashboard for operations (managing tutors, applications, and scholarships) and an Expo/React Native mobile app for the actual students and tutors, both backed by a single Supabase instance handling auth, storage, and realtime updates. This meant the operations side and the user-facing side could evolve independently without duplicating business logic across two codebases.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">The result</h2>
        <p className="text-base text-base-content/80 mt-2">
          Eagle Pathway is now live on the web and on Google Play, with 1,000+ registered users and 1,000+ app installs, grown with $0 spent on paid marketing, including 500+ sign-ups in the first 24 hours after launch alone. The platform now runs a real-time tutor booking system and a scholarship application pipeline, and we are currently incorporating Eagle Pathway as a registered company alongside two co-founders.
        </p>
        <p className="text-base text-base-content/80 mt-3">
          The problem I set out to solve is still the one we're solving: the right tutor matters more than the first available one. The difference now is that the system, not a person manually checking chat threads, is what makes sure that happens.
        </p>
      </section>

      <footer className="mt-10 pt-6 border-t border-base-content/10">
        <p className="text-sm text-base-content/70">
          Interested in discussing this project or exploring collaborations?{" "}
          <Link href="/contact" className="underline font-semibold">
            Contact me
          </Link>{" "}
          or download my CV.
        </p>
      </footer>
    </main>
  );
}
