/** Five-star rating row. Always paired with a numeric/text label by callers. */
export function Stars({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) {
  const full = Math.round(rating);
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={i < full ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 18.9 6.1 21.3l1.3-6.6L2.5 9.5l6.6-.8L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

/** Soft pill label that floats near headings. */
export function Eyebrow({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "accent";
}) {
  const styles =
    tone === "accent"
      ? "bg-accent-soft text-accent-strong"
      : "bg-green-soft text-green-strong";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] ${styles}`}
    >
      {children}
    </span>
  );
}

/** Plain color image (rounded, object-cover by caller). */
export function Pic({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}
