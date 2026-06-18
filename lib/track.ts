// Lightweight first-party event tracker → POST /api/track.
// Safe to import in client components; all calls no-op on the server.

function id(key: string, store: Storage): string {
  let v = store.getItem(key);
  if (!v) {
    v =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Date.now().toString(36);
    store.setItem(key, v);
  }
  return v;
}

export function track(event: string, extra: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    const payload = JSON.stringify({
      event,
      path: window.location.pathname,
      referrer: document.referrer || null,
      visitor_id: id("la_vid", window.localStorage),
      session_id: id("la_sid", window.sessionStorage),
      screen: `${window.screen.width}x${window.screen.height}`,
      ...extra,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/track",
        new Blob([payload], { type: "application/json" }),
      );
    } else {
      fetch("/api/track", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: payload,
        keepalive: true,
      });
    }
  } catch {
    /* analytics must never break the page */
  }
}
