export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  align = "center",
}) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center"
      : align === "left"
        ? "text-left"
        : "text-right";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
