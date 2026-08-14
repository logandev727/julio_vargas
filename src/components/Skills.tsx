import { skills } from "@/data/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-zinc-800/80"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          Skills
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          A snapshot of languages, frameworks, and tools I use regularly.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
