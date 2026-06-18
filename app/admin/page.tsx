import { sql, dbConfigured } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const metadata = { title: "Analytics", robots: { index: false } };

type Row = Record<string, unknown>;
const n = (v: unknown) => Number(v ?? 0);

async function getData() {
  if (!sql) return null;
  const [totals, pages, countries, ctas, recent] = await Promise.all([
    sql`SELECT
          count(*)                                            AS events,
          count(*) FILTER (WHERE event = 'pageview')          AS pageviews,
          count(DISTINCT visitor_id)                          AS visitors,
          count(*) FILTER (WHERE created_at > now() - interval '7 days') AS last7
        FROM events`,
    sql`SELECT path, count(*) AS c FROM events
        WHERE event = 'pageview' GROUP BY path ORDER BY c DESC LIMIT 8`,
    sql`SELECT coalesce(country, '—') AS country, count(DISTINCT visitor_id) AS c
        FROM events GROUP BY country ORDER BY c DESC LIMIT 8`,
    sql`SELECT event, count(*) AS c FROM events
        WHERE event <> 'pageview' GROUP BY event ORDER BY c DESC`,
    sql`SELECT created_at, event, path, city, country, ip, ua
        FROM events ORDER BY created_at DESC LIMIT 50`,
  ]);
  return {
    totals: (totals as Row[])[0],
    pages: pages as Row[],
    countries: countries as Row[],
    ctas: ctas as Row[],
    recent: recent as Row[],
  };
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
      <p className="mt-1 font-[family-name:var(--font-display)] text-[34px] font-semibold text-ink">
        {value}
      </p>
    </div>
  );
}

export default async function AdminPage() {
  if (!dbConfigured) {
    return (
      <main className="mx-auto max-w-[680px] px-6 py-20">
        <h1 className="display-sm">Analytics</h1>
        <p className="mt-4 text-body">
          Database not configured yet. Set <code>DATABASE_URL</code> (provision
          Neon Postgres on Vercel) and reload — events will start flowing in.
        </p>
      </main>
    );
  }

  const data = await getData();
  const t = data!.totals;
  const ctaLabel: Record<string, string> = {
    book_click: "Book clicks",
    call_click: "Call clicks",
    directions_click: "Directions",
    tiktok_click: "TikTok clicks",
  };

  return (
    <main className="mx-auto max-w-[1100px] px-6 py-12 lg:py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-green">
            LazArt · Analytics
          </p>
          <h1 className="display-sm mt-2">Traffic &amp; events</h1>
        </div>
        <p className="text-[13px] text-muted">First-party · live</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Unique visitors" value={n(t.visitors).toLocaleString()} />
        <Stat label="Pageviews" value={n(t.pageviews).toLocaleString()} />
        <Stat label="Events (7d)" value={n(t.last7).toLocaleString()} />
        <Stat label="All events" value={n(t.events).toLocaleString()} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel title="CTA clicks">
          {data!.ctas.length === 0 ? (
            <Empty />
          ) : (
            data!.ctas.map((r) => (
              <Line
                key={String(r.event)}
                label={ctaLabel[String(r.event)] || String(r.event)}
                value={n(r.c)}
              />
            ))
          )}
        </Panel>
        <Panel title="Top pages">
          {data!.pages.map((r) => (
            <Line key={String(r.path)} label={String(r.path)} value={n(r.c)} />
          ))}
        </Panel>
        <Panel title="Visitors by country">
          {data!.countries.map((r) => (
            <Line
              key={String(r.country)}
              label={String(r.country)}
              value={n(r.c)}
            />
          ))}
        </Panel>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)]">
        <div className="border-b border-line px-5 py-3">
          <h2 className="text-[14px] font-bold text-ink">Recent activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="text-muted">
              <tr className="border-b border-line">
                <th className="px-4 py-2 font-semibold">Time</th>
                <th className="px-4 py-2 font-semibold">Event</th>
                <th className="px-4 py-2 font-semibold">Page</th>
                <th className="px-4 py-2 font-semibold">Location</th>
                <th className="px-4 py-2 font-semibold">IP</th>
              </tr>
            </thead>
            <tbody>
              {data!.recent.map((r, i) => (
                <tr key={i} className="border-b border-line/60 last:border-0">
                  <td className="whitespace-nowrap px-4 py-2 text-muted">
                    {new Date(String(r.created_at)).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-4 py-2 font-semibold text-ink">
                    {String(r.event)}
                  </td>
                  <td className="px-4 py-2 text-body">{String(r.path ?? "—")}</td>
                  <td className="px-4 py-2 text-body">
                    {[r.city, r.country].filter(Boolean).join(", ") || "—"}
                  </td>
                  <td className="px-4 py-2 font-mono text-[12px] text-muted">
                    {String(r.ip ?? "—")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
      <h2 className="text-[14px] font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-1.5">{children}</div>
    </div>
  );
}

function Line({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[13.5px]">
      <span className="truncate text-body">{label}</span>
      <span className="font-bold text-ink">{value.toLocaleString()}</span>
    </div>
  );
}

function Empty() {
  return <p className="text-[13.5px] text-muted">No events yet.</p>;
}
