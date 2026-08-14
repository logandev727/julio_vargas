import { site, socialLinks } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-zinc-500">
          © {year} {site.name}. Built with Next.js.
        </p>
        <ul className="flex flex-wrap gap-4">
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
                className="text-sm text-zinc-400 transition hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
