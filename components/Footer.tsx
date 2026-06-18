import { site } from "@/lib/site-config";
import { BookButton } from "./booking-client";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

const socials = [
  { href: site.social.google, label: "Google" },
  { href: site.social.yelp, label: "Yelp" },
  { href: site.social.tiktok, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-[#d8e3d2]">
      {/* Book strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-5 px-5 py-10 sm:flex-row sm:items-center lg:px-8">
          <h2 className="display-sm text-[#f6f0e4]">Ready for a fresh look?</h2>
          <BookButton size="lg" variant="accent">
            Book an appointment
          </BookButton>
        </div>
      </div>

      <div className="mx-auto max-w-[1140px] px-5 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-[#f6f0e4]">
              Laz<span className="text-[#9fce9f]">Art</span> Hair Salon
            </p>
            <p className="mt-3 max-w-[38ch] text-[14.5px] leading-[1.65] text-[#b9c7b2]">
              {site.tagline}. Cuts, color &amp; care for men, women &amp;
              children on the {site.contact.neighborhood}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#8aa183]">
              Explore
            </h2>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[15px] text-[#d8e3d2] transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#8aa183]">
              Visit
            </h2>
            <address className="mt-3 not-italic text-[14.5px] leading-[1.65] text-[#d8e3d2]">
              {site.contact.addressLine}
              <br />
              {site.contact.cityLine}
            </address>
            <a
              href={site.contact.phoneHref}
              data-track="call_click"
              className="mt-2 block text-[15px] font-bold text-[#f6f0e4] hover:text-white"
            >
              {site.contact.phone}
            </a>
            <div className="mt-4 flex gap-4 text-[14px]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track={s.label === "TikTok" ? "tiktok_click" : undefined}
                  className="text-[#d8e3d2] transition-colors hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-[12.5px] text-[#8aa183] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Hair · Color · Styling — walk-in &amp; by appointment.</p>
        </div>
        <p className="mt-4 max-w-[70ch] text-[12px] leading-[1.6] text-[#6f8569]">
          We use cookies and basic analytics — including approximate location
          from your IP address — to measure site traffic and improve your
          experience. We don&apos;t sell your data. Contact us at{" "}
          <a
            href={site.contact.phoneHref}
            className="underline underline-offset-2 hover:text-[#d8e3d2]"
          >
            {site.contact.phone}
          </a>{" "}
          with any privacy questions.
        </p>
      </div>
    </footer>
  );
}
