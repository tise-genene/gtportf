import { about } from "@/data/data";

export default function Footer() {
  return (
    <>
      <div className="mt-2 p-4">
        <p className="text-sm">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        {/* Removed name/phone and CV links per request; only copyright shown */}
      </div>
    </>
  );
}
