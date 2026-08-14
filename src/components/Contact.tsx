import { site, socialLinks } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-zinc-800/80"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Interested in working together? Reach out by email or connect on
          social.
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-zinc-300">
            <span className="text-zinc-500">Email: </span>
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              {site.email}
            </a>
          </p>
          <p className="text-zinc-300">
            <span className="text-zinc-500">Phone: </span>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="font-medium text-zinc-200 transition hover:text-zinc-50"
            >
              {site.phone}
            </a>
          </p>
          <p className="text-sm text-zinc-500">{site.location}</p>
          <ul className="flex flex-wrap gap-4 pt-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-sm font-medium text-zinc-300 transition hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
