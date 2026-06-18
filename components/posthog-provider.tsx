"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

let started = false;
function init() {
  if (started || !KEY || typeof window === "undefined") return;
  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: false, // we send $pageview manually on route change
    capture_pageleave: true,
    autocapture: true, // auto-tracks clicks, inputs, etc.
    person_profiles: "identified_only",
  });
  started = true;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    init();
    if (KEY) posthog.capture("$pageview");
  }, [pathname]);

  if (!KEY) return <>{children}</>;
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
