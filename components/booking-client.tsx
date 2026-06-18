"use client";

import { useEffect } from "react";
import Script from "next/script";
import { site } from "@/lib/site-config";
import { track } from "@/lib/track";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

/** Loads the Calendly popup assets + records completed bookings as a funnel event. */
export function CalendlyLoader() {
  // Calendly posts a message when an appointment is actually booked.
  useEffect(() => {
    if (!site.calendlyUrl) return;
    const onMsg = (e: MessageEvent) => {
      const data = e.data as { event?: string } | null;
      if (
        data &&
        typeof data === "object" &&
        data.event === "calendly.event_scheduled"
      ) {
        track("booking_scheduled");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  if (!site.calendlyUrl) return null;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}

type Props = {
  children?: React.ReactNode;
  size?: "sm" | "base" | "lg";
  variant?: "primary" | "accent" | "ghost";
  className?: string;
  withArrow?: boolean;
};

/** Opens the Calendly scheduler in a popup; falls back to a new tab. */
export function BookButton({
  children = "Book now",
  size = "base",
  variant = "primary",
  className = "",
  withArrow = true,
}: Props) {
  const open = () => {
    track("calendly_opened");
    const url = site.calendlyUrl;
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={open}
      data-track="book_click"
      className={`btn btn-${variant} size-${size} ${className}`}
    >
      {children}
      {withArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </button>
  );
}
