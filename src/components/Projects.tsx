import { projects } from "@/data/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-zinc-800/80"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Selected live products and platforms I have worked on.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700"
            >
              <h3 className="text-lg font-semibold text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-4 text-sm">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-400 transition hover:text-emerald-300"
                  >
                    Visit site
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-300 transition hover:text-zinc-50"
                  >
                    Source
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
