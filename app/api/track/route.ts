import { NextRequest } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED = new Set([
  "pageview",
  "book_click",
  "call_click",
  "directions_click",
  "tiktok_click",
]);

function header(req: NextRequest, name: string) {
  const v = req.headers.get(name);
  return v ? v : null;
}

export async function POST(req: NextRequest) {
  // No DB configured → accept silently so the client never errors.
  if (!sql) return new Response(null, { status: 204 });

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return new Response(null, { status: 204 });
  }

  const event = String(body.event || "");
  if (!ALLOWED.has(event)) return new Response(null, { status: 204 });

  const ipRaw = header(req, "x-forwarded-for");
  const ip = ipRaw ? ipRaw.split(",")[0].trim() : null;
  const cityRaw = header(req, "x-vercel-ip-city");
  const city = cityRaw ? decodeURIComponent(cityRaw) : null;
  const region = header(req, "x-vercel-ip-country-region");
  const country = header(req, "x-vercel-ip-country");
  const ua = header(req, "user-agent");

  const str = (v: unknown, max = 512) =>
    v == null ? null : String(v).slice(0, max);

  try {
    await ensureSchema();
    await sql`
      INSERT INTO events
        (event, path, referrer, visitor_id, session_id, ip, city, region, country, ua, screen)
      VALUES
        (${event}, ${str(body.path)}, ${str(body.referrer)}, ${str(body.visitor_id, 64)},
         ${str(body.session_id, 64)}, ${ip}, ${city}, ${region}, ${country}, ${str(ua)}, ${str(body.screen, 32)})
    `;
  } catch {
    // Never let analytics break the page.
  }

  return new Response(null, { status: 204 });
}
