import { volunteering } from "../../data/data";

export default function Volunteering() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Volunteering
      </h2>
      <div className="mt-6">
        <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
          {volunteering.map((item, index) => (
            <li
              key={index}
              className="relative -ms-1.5 flex items-start gap-4"
            >
              <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

              <div className="-mt-2">
                <h3 className="text-lg font-semibold text-base-content">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-base-content/80 mt-0.5">
                  {item.location}
                </p>
                <ul className="mt-3 space-y-1">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-base-content/80 flex gap-2"
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-base-content/60"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
