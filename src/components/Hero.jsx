import { lazy, Suspense } from "react";
import { useScrollToElement } from "../hooks/useScrollToElement";

const HeroGallery = lazy(() => import("./HeroGallery.jsx"));

const HERO_WEBP_SRCSET =
  "/hero/hero-640.webp 640w, /hero/hero-960.webp 960w, /hero/hero-1200.webp 1200w";

const STATS = [
  { value: "500+", label: "Clients served" },
  { value: "8+", label: "Years in business" },
  { value: "5★", label: "Average rating" },
];

export default function Hero() {
  const { scrollToElement } = useScrollToElement();

  const handleScroll = (e, section) => {
    e.preventDefault();
    scrollToElement(section);
  };

  return (
    <section
      className="relative min-h-[100dvh] w-full overflow-hidden"
      id="hero"
      data-section="hero"
    >
      <div className="absolute inset-0">
        <img
          src="/hero/hero-960.webp"
          srcSet={HERO_WEBP_SRCSET}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width="1200"
          height="800"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-bg absolute inset-0 h-full w-full object-cover object-left opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/55 to-slate-950/92" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[88rem] items-center px-6 pb-16 pt-28 lg:px-12 lg:pt-32">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-7 lg:pr-2">
            <div className="flex flex-col">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-white">
                San Antonio Catering &amp; Bakery Experts
              </h2>
              <h1 className="mt-3 text-xl font-semibold leading-snug text-gray-100 lg:text-2xl">
                Professional Wedding &amp; Corporate Catering | Custom Cakes
                <span className="sr-only">
                  {" "}
                  — Texas Sugar Daddies, San Antonio TX
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-gray-200">
              San Antonio&apos;s premier catering company and custom bakery since
              2017. From wedding catering to corporate events, custom cakes to
              weekday cafe lunches — we deliver exceptional food and service for
              every occasion.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={(e) => handleScroll(e, "contact")}
                className="cursor-pointer rounded-full border-none bg-[var(--brand-blue)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-600"
              >
                Order Catering or Bakery
              </button>
              <button
                type="button"
                onClick={(e) => handleScroll(e, "intro")}
                className="cursor-pointer rounded-full border border-white/35 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Learn more about our catering
              </button>
            </div>

            <div className="grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-white lg:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <Suspense fallback={null}>
              <HeroGallery />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
