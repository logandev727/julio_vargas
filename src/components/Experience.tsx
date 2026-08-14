import { education, experience } from "@/data/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-zinc-800/80"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="experience-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Full-stack product engineering across insurance, healthcare, fintech,
          and enterprise platforms.
        </p>

        <ol className="mt-10 space-y-8">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-400">
                    {job.company}
                  </p>
                </div>
                <p className="text-sm text-zinc-500">
                  {job.period}
                  <span className="mx-2 text-zinc-700">·</span>
                  {job.location}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-zinc-500">
          Education: {education.degree}, {education.school} ({education.period})
        </p>
      </div>
    </section>
  );
}
