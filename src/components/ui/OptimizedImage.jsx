import { useState } from "react";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  eager = false,
  priority,
  aspectRatio,
  width,
  height,
  objectFit = "cover",
  tone = "light",
}) {
  const [loaded, setLoaded] = useState(false);
  const skeletonBg =
    tone === "dark" ? "bg-slate-800/80" : "bg-slate-200/70";
  const fetchPriority = priority ?? (eager ? "high" : "low");

  return (
    <div
      className={`relative overflow-hidden ${skeletonBg} ${wrapperClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!loaded && (
        <div
          className="absolute inset-0 image-skeleton"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      />
    </div>
  );
}
