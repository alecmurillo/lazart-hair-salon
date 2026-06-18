"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

/**
 * First-party analytics: records a pageview on every route, and any click on an
 * element carrying a data-track="event_name" attribute (delegated listener).
 */
export function Analytics() {
  const pathname = usePathname();

  // Pageview on mount and on client navigation.
  useEffect(() => {
    track("pageview");
  }, [pathname]);

  // Delegated click tracking for CTAs.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-track]");
      const name = el?.getAttribute("data-track");
      if (name) track(name);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
