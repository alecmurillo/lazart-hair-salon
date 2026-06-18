import { NextRequest, NextResponse } from "next/server";

export const config = { matcher: ["/admin", "/admin/:path*"] };

/** HTTP Basic Auth gate for the analytics dashboard. */
export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER || "admin";
  const pass = process.env.ADMIN_PASSWORD;

  // If no password is configured, keep the dashboard locked rather than open.
  if (pass) {
    const auth = req.headers.get("authorization");
    if (auth?.startsWith("Basic ")) {
      const decoded = atob(auth.slice(6));
      const idx = decoded.indexOf(":");
      const u = decoded.slice(0, idx);
      const p = decoded.slice(idx + 1);
      if (u === user && p === pass) return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="LazArt Admin"' },
  });
}
