import { about } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-zinc-800/80"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          About
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
