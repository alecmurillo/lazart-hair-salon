import { neon } from "@neondatabase/serverless";

/**
 * Neon Postgres client. Null when DATABASE_URL is not configured, so the app
 * (and the /api/track route) degrade gracefully instead of crashing.
 */
export const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : null;

export const dbConfigured = Boolean(sql);

let schemaReady = false;

/** Create the events table once per cold start (cheap, idempotent). */
export async function ensureSchema() {
  if (!sql || schemaReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS events (
      id          BIGSERIAL PRIMARY KEY,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      event       TEXT NOT NULL,
      path        TEXT,
      referrer    TEXT,
      visitor_id  TEXT,
      session_id  TEXT,
      ip          TEXT,
      city        TEXT,
      region      TEXT,
      country     TEXT,
      ua          TEXT,
      screen      TEXT
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS events_created_at_idx ON events (created_at DESC)`;
  await sql`CREATE INDEX IF NOT EXISTS events_event_idx ON events (event)`;
  schemaReady = true;
}
