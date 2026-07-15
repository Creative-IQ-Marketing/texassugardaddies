import { Utensils, Star, Clock } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import daddies from "../assets/daddies.webp";
import OptimizedImage from "./ui/OptimizedImage";
import SectionHeading from "./ui/SectionHeading";

const HIGHLIGHTS = [
  {
    icon: Utensils,
    title: "Weekday Cafe",
    text: "Tuesday–Thursday, 11am–3pm",
  },
  {
    icon: Star,
    title: "Custom Bakery",
    text: "Cakes, cupcakes, cookies & more",
  },
  {
    icon: Clock,
    title: "Full Catering",
    text: "Weddings, corporate & private events",
  },
];

const OFFERINGS = [
  "Custom cakes, cupcakes, cookies & desserts",
  "Full-service catering for weddings & corporate events",
  "Event venue rental for up to 150 guests",
  "Weekday lunch cafe — grab-and-go or dine in",
];

export default function Intro() {
  return (
    <section
      className="relative bg-white py-24 md:py-28"
      id="intro"
      data-section="intro"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Story"
          title="From Cubicles to the Kitchen"
          description="Two dads traded corporate life for a passion project — and built one of San Antonio's most loved catering & bakery teams."
        />

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-[var(--brand-red)]/10" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10">
              <OptimizedImage
                src={daddies}
                alt="Two founders of San Antonio catering company and bakery - Professional caterers and bakers"
                aspectRatio="4 / 5"
                wrapperClassName="w-full"
                className="rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg md:-right-6">
              <p className="font-display text-3xl font-semibold text-slate-900">
                2017
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Year we opened
              </p>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            className="space-y-8 lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <blockquote className="border-l-4 border-[var(--brand-red)] pl-6">
              <p className="font-display text-2xl font-medium leading-snug text-slate-800 md:text-3xl">
                &ldquo;Great food brings people together — whether it&apos;s lunch
                on a Tuesday or the biggest day of your life.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Meet the two dads behind Texas Sugar Daddies. After years in
                corporate cubicles, we followed our love of food and built
                something we&apos;re genuinely proud of — a place where
                exceptional baking and full-service catering live under one roof.
              </p>
              <p>
                What started as a dream is now a thriving San Antonio business:
                weekday cafe lunches, show-stopping custom cakes, and catering
                that shows up on time, every time.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {OFFERINGS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 text-sm font-medium text-slate-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Highlights strip */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)] text-white">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
