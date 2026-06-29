import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useScrollToElement } from "../hooks/useScrollToElement";
import OptimizedImage from "./ui/OptimizedImage";
import extras1 from "../assets/extras/cake.jpg";
import extras2 from "../assets/extras/imgi_4_68c0e4f744a6632cc3db5706.jpg";
import extras3 from "../assets/extras/imgi_6_68c0e4f6fc367038f91acf8a.jpg";

const IMAGES = [
  {
    src: extras1,
    alt: "Custom wedding cake by San Antonio bakery - Texas Sugar Daddies catering services",
    className: "row-span-2",
  },
  {
    src: extras2,
    alt: "Fresh baked cupcakes and desserts from San Antonio bakery",
    className: "",
  },
  {
    src: extras3,
    alt: "Professional catering setup for San Antonio events and weddings",
    className: "",
  },
];

const STATS = [
  { value: 500, label: "Clients served", suffix: "+" },
  { value: 8, label: "Years in business", suffix: "+" },
  { value: 5, label: "Average rating", suffix: "★", decimals: 1 },
];

export default function Hero() {
  const { scrollToElement } = useScrollToElement();
  const [bgReady, setBgReady] = useState(false);

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
      {/* Background — meat/catering photo anchored left; right side darkened */}
      <div className="absolute inset-0">
        {!bgReady && (
          <div className="absolute inset-0 image-skeleton" aria-hidden="true" />
        )}
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onLoad={() => setBgReady(true)}
          className={`hero-bg absolute inset-0 h-full w-full object-cover object-left transition-opacity duration-700 ${
            bgReady ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/55 to-slate-950/92" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[88rem] items-center px-6 pb-16 pt-28 lg:px-12 lg:pt-32">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7 lg:pr-2"
          >
            <div className="flex flex-col">
              <h2
                className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-white"
                style={{ order: 1 }}
              >
                San Antonio Catering &amp; Bakery Experts
              </h2>
              <h1
                className="mt-3 text-xl font-semibold leading-snug text-gray-100 lg:text-2xl"
                style={{ order: 2 }}
              >
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
              <motion.button
                onClick={(e) => handleScroll(e, "contact")}
                className="cursor-pointer rounded-full border-none bg-[var(--brand-blue)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Order Catering or Bakery
              </motion.button>
              <motion.button
                onClick={(e) => handleScroll(e, "intro")}
                className="cursor-pointer rounded-full border border-white/35 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more about our catering
              </motion.button>
            </div>

            <div className="grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                >
                  <div className="font-display text-3xl font-semibold text-white lg:text-4xl">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      decimals={stat.decimals || 0}
                    />
                    {stat.suffix}
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — gallery on dark panel (separated from savory bg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="grid h-[30rem] grid-cols-2 grid-rows-2 gap-3">
                {IMAGES.map((image, index) => (
                  <div
                    key={image.alt}
                    className={`relative min-h-0 overflow-hidden rounded-[1.25rem] ${image.className}`}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      eager={index === 0}
                      tone="dark"
                      wrapperClassName="absolute inset-0 h-full w-full overflow-hidden rounded-[1.25rem]"
                      className="h-full w-full rounded-[1.25rem]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
