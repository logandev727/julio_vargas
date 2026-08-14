import Image from "next/image";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 border-b border-zinc-800/80"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Portfolio
          </p>
          <div className="max-w-3xl space-y-5">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              {site.name}
            </h1>
            <p className="text-xl text-zinc-300 sm:text-2xl">{site.role}</p>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {site.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-emerald-500/40 shadow-[0_0_0_8px_rgba(16,185,129,0.08)] sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <Image
              src={site.image.src}
              alt={site.image.alt}
              width={site.image.width}
              height={site.image.height}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
