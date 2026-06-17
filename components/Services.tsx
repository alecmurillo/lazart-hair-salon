import { serviceGroups, products } from "@/lib/site-config";
import { Eyebrow } from "./primitives";

export function Services() {
  return (
    <section id="services" className="bg-panel">
      <div className="mx-auto max-w-[1140px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-[52ch]">
          <Eyebrow>The menu</Eyebrow>
          <h2 className="display-sm mt-5">
            From a quick trim to a whole new look.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {serviceGroups.map((group, i) => (
            <div
              key={group.no}
              className="flex flex-col rounded-[var(--r-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[18px] font-semibold ${
                    i === 1
                      ? "bg-accent-soft text-accent-strong"
                      : "bg-green-soft text-green"
                  }`}
                >
                  {group.no}
                </span>
                <span className="rounded-full bg-surface-2 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
                  {group.forWho}
                </span>
              </div>

              <h3 className="mt-5 text-[22px] font-semibold text-ink">
                {group.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-body">
                {group.blurb}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.slice(0, 5).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface-2 px-3 py-1 text-[12.5px] font-semibold text-body"
                  >
                    {item}
                  </li>
                ))}
                <li className="px-1 py-1 text-[12.5px] font-bold text-green">
                  + more
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Product lines — simple warm chips */}
        <div className="mt-12 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
            Premium products we use
          </p>
          <ul className="mx-auto mt-5 flex max-w-[900px] flex-wrap justify-center gap-2.5">
            {products.map((brand) => (
              <li
                key={brand}
                className="rounded-full bg-surface px-4 py-2 text-[13.5px] font-semibold text-ink shadow-[var(--shadow-card)]"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
