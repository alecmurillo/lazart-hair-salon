import Link from "next/link";
import { site } from "@/lib/site-config";
import { BookButton } from "./booking-client";

const links = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[64px] max-w-[1140px] items-center justify-between px-5 lg:px-8"
      >
        <Link
          href="#main"
          aria-label={`${site.name} — home`}
          className="whitespace-nowrap font-[family-name:var(--font-display)] text-[20px] font-semibold tracking-tight text-ink"
        >
          Laz<span className="text-green">Art</span>{" "}
          <span className="hidden font-normal text-body sm:inline">
            Hair Salon
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-semibold text-body transition-colors hover:text-green"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.contact.phoneHref}
            data-track="call_click"
            className="hidden text-[14px] font-bold text-green transition-colors hover:text-green-strong sm:inline"
          >
            {site.contact.phone}
          </a>
          <BookButton size="sm" withArrow={false}>
            Book
          </BookButton>
        </div>
      </nav>
    </header>
  );
}
