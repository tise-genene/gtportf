import { skillCategories } from "../../data/data";

export default function SkillCategories() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Skills
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-2">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs border border-gray-400 font-medium text-base-content/70 border rounded-md px-4 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
