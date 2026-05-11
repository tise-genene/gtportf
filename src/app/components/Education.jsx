import { education } from "../../data/data";

export default function Education() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Education
      </h2>
      <div className="mt-6">
        <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
          {education.map((item, index) => (
            <li
              key={index}
              className="relative -ms-1.5 flex items-start gap-4"
            >
              <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

              <div className="-mt-2">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="text-lg font-semibold text-base-content">
                    {item.degree}
                  </h3>
                  <time className="text-xs font-medium text-base-content/80 shrink-0">
                    {item.year}
                  </time>
                </div>
                <p className="text-sm text-base-content/80 mt-0.5">
                  {item.institution}
                </p>
                {item.grade && (
                  <p className="text-xs text-base-content/60 mt-0.5">
                    {item.grade}
                  </p>
                )}
                {item.note && (
                  <p className="text-sm text-base-content/60 mt-1 italic">
                    {item.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}