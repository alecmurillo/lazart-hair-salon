import { site } from "@/lib/site-config";
import { Eyebrow, Pic, Stars } from "./primitives";
import { BookButton } from "./booking-client";

const avatars = [11, 32, 26, 16];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-green-soft opacity-60 blur-3xl"
      />

      <div className="mx-auto max-w-[1140px] px-5 pb-10 pt-10 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy */}
          <div className="animate-rise">
            <Eyebrow>{site.contact.neighborhood} · {site.contact.addressLine}</Eyebrow>

            <h1 className="display mt-6">
              A warm chair and a{" "}
              <em className="font-normal italic text-green">great</em> cut,
              right on 1st Ave.
            </h1>

            <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.7] text-body">
              Cuts, color &amp; styling for men, women &amp; kids — done by
              stylists who actually listen. Walk in or book ahead.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <BookButton size="lg">Book an appointment</BookButton>
              <a
                href={site.contact.phoneHref}
                data-track="call_click"
                className="btn btn-ghost size-lg"
              >
                Call {site.contact.phone}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                {avatars.map((id, i) => (
                  <span
                    key={id}
                    className="-ml-3 first:ml-0"
                    style={{ zIndex: avatars.length - i }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.pravatar.cc/72?img=${id}`}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover ring-[3px] ring-[var(--bg)]"
                    />
                  </span>
                ))}
              </div>
              <div>
                <Stars rating={4.9} className="text-accent" />
                <p className="mt-0.5 text-[13px] text-body">
                  <span className="font-bold text-ink">
                    {site.rating.value}
                  </span>{" "}
                  from {site.rating.count} Google &amp; Yelp reviews
                </p>
              </div>
            </div>
          </div>

          {/* Real storefront photo */}
          <div className="animate-rise relative mx-auto w-full max-w-[440px] [animation-delay:0.12s]">
            <div className="overflow-hidden rounded-[26px] border border-line shadow-[var(--shadow-soft)]">
              <Pic
                src="/photos/storefront.png"
                alt={`Storefront of ${site.name} at ${site.contact.addressLine}, with its green awning`}
                className="aspect-[4/5] h-full w-full object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-[var(--shadow-soft)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-soft text-green">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="text-[13px] font-semibold leading-tight text-ink">
                Same-day
                <br />
                appointments
              </span>
            </div>
          </div>
        </div>

        {/* Quick info strip — visit + hours + book, all at the top */}
        <div
          id="visit"
          className="mt-12 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-[var(--r-card)] border border-line bg-surface shadow-[var(--shadow-card)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {/* Visit */}
          <div className="p-6">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
              Visit
            </h2>
            <address className="mt-2 not-italic text-[15px] leading-[1.55] text-ink">
              {site.contact.addressLine}
              <br />
              {site.contact.cityLine}
            </address>
            <a
              href={site.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="directions_click"
              className="mt-2 inline-block text-[14px] font-bold text-green underline-offset-4 hover:underline"
            >
              Get directions →
            </a>
          </div>

          {/* Hours */}
          <div className="p-6">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
              Hours
            </h2>
            <dl className="mt-2 space-y-1 text-[14px]">
              {site.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between gap-3"
                >
                  <dt className="text-body">{h.day}</dt>
                  <dd className="font-bold text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Book */}
          <div className="flex flex-col justify-center gap-3 bg-green-soft p-6">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.12em] text-green-strong">
              Book
            </h2>
            <BookButton size="base">Book an appointment</BookButton>
            <a
              href={site.contact.phoneHref}
              data-track="call_click"
              className="text-[14px] font-bold text-green-strong hover:underline"
            >
              or call {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
