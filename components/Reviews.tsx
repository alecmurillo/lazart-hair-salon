import { reviews, site } from "@/lib/site-config";
import { Eyebrow, Stars } from "./primitives";

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-[var(--r-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)] sm:w-[360px]">
      <Stars rating={review.rating} className="text-accent" />
      <blockquote className="mt-4 text-[15px] leading-[1.6] text-body">
        {review.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-2 text-[13px]">
        <span className="font-bold text-ink">{review.name}</span>
        <span className="text-muted">·</span>
        <span className="text-muted">{review.detail}</span>
        <span className="ml-auto text-[11px] font-bold uppercase tracking-wide text-green">
          {review.source}
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-bg">
      <div className="mx-auto max-w-[1140px] px-5 pt-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Heading + TikTok link */}
          <div>
            <Eyebrow tone="accent">Loved locally</Eyebrow>
            <h2 className="display-sm mt-5">Loved by the neighborhood.</h2>
            <div className="mt-4 flex items-center gap-2 text-[14px] text-body">
              <Stars rating={4.9} className="text-accent" />
              <span>
                <span className="font-bold text-ink">{site.rating.value}</span>{" "}
                · {site.rating.count} reviews on Google &amp; Yelp
              </span>
            </div>
            <a
              href={site.media.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="tiktok_click"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-green hover:text-green-strong"
            >
              See us on TikTok
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          {/* Vertical TikTok player with full transport controls (play/pause, seek, replay) */}
          <div className="mx-auto w-full max-w-[325px]">
            <div className="aspect-[9/16] overflow-hidden rounded-[var(--r-card)] border border-line bg-black shadow-[var(--shadow-card)]">
              <iframe
                title={`${site.name} on TikTok`}
                src={`https://www.tiktok.com/player/v1/${site.media.tiktokVideoId}?controls=1&progress_bar=1&play_button=1&volume_control=1&fullscreen_button=1&timestamp=1&rel=0&description=0&t=15`}
                loading="lazy"
                allow="encrypted-media; fullscreen; picture-in-picture"
                className="block h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Review marquee */}
      <div className="relative mt-10 pb-16 lg:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent sm:w-24"
        />
        <div
          className="marquee-host flex overflow-hidden"
          role="region"
          aria-label="Guest reviews"
          tabIndex={0}
        >
          {[0, 1].map((track) => (
            <ul
              key={track}
              data-clone={track === 1 ? "true" : undefined}
              aria-hidden={track === 1}
              className="marquee-track flex shrink-0 items-stretch gap-5 pl-5"
            >
              {reviews.map((r) => (
                <li key={`${track}-${r.name}`} className="flex">
                  <ReviewCard review={r} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
