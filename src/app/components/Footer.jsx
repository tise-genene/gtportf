import { about } from "@/data/data";

export default function Footer() {
  return (
    <>
      <div className="mt-20 p-4">
        <p className="text-sm">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-sm">
          {about.name} •{" "}
          <a href={`tel:${about.phone}`} className="hover:underline">
            {about.phone}
          </a>
        </p>
        <p className="text-xs mt-2">
          Curriculum Vitae:{" "}
          <a
            href={about.cv}
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:underline"
          >
            Download CV
          </a>
        </p>
        {/* Template attribution removed as requested */}
      </div>
    </>
  );
}
