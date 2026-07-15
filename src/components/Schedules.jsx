import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";
import { useScrollToElement } from "../hooks/useScrollToElement";
import SectionHeading from "./ui/SectionHeading";

const SCHEDULES = [
  {
    id: "lunch",
    title: "Lunch Schedule",
    days: "Tuesday - Wednesday - Thursday",
    time: "11:00 AM - 3:00 PM",
    noteParts: [
      { text: "Orders over ", bold: false },
      { text: "$10", bold: true },
      { text: " get ", bold: false },
      { text: "FREE delivery!", bold: true, color: "text-yellow-400" },
    ],
    variant: "active",
    link: "menu",
  },
  {
    id: "coming",
    title: "More Schedules",
    days: "",
    time: "Coming Soon",
    noteParts: [
      {
        text: "We're working on additional schedules — check back soon.",
        bold: false,
      },
    ],
    variant: "coming-soon",
  },
];

function ScheduleCard({ s, index = 0 }) {
  const { scrollToElement } = useScrollToElement();

  const handleOrderClick = (e) => {
    e.preventDefault();
    scrollToElement(s.link || "contact");
  };

  return (
    <motion.div
      key={s.id}
      className={`relative rounded-2xl shadow-lg p-4 md:p-6 max-w-full w-full border ${
        s.variant === "coming-soon"
          ? "bg-slate-700 border-slate-600 text-gray-100"
          : "bg-slate-800 border-slate-700 text-white"
      }`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{
        translateY: -8,
        boxShadow: "0 14px 40px rgba(2,6,23,0.24)",
        scale: 1.01,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 rounded-lg p-3 flex items-center justify-center ${
            s.variant === "coming-soon" ? "bg-slate-600" : "bg-slate-50/5"
          }`}
        >
          <FaUtensils
            className={
              s.variant === "coming-soon" ? "text-gray-200" : "text-gray-100"
            }
            size={18}
          />
        </div>

        <div className="flex-1">
          <h3
            className={`text-lg font-extrabold ${
              s.variant === "coming-soon" ? "text-gray-100" : "text-white"
            }`}
          >
            {s.title}
          </h3>
          <div
            className="mt-1 text-sm font-medium"
            style={{
              color: s.variant === "coming-soon" ? "#d1d5db" : "#e5e7eb",
            }}
          >
            {s.days}
          </div>
          <div
            className={`text-sm font-semibold mt-1 ${
              s.variant === "coming-soon" ? "text-gray-100" : "text-white"
            }`}
          >
            {s.time}
          </div>

          <div
            className="mt-3 text-sm"
            style={{
              color: s.variant === "coming-soon" ? "#cbd5e1" : undefined,
            }}
          >
            {s.noteParts.map((p, i) => (
              <span
                key={i}
                className={`${p.bold ? "font-semibold" : ""} ${p.color || ""}`}
              >
                {p.text}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4">
            {s.variant === "coming-soon" ? (
              <button
                disabled
                className="px-4 py-2 rounded-full border border-slate-500 text-sm text-slate-200 bg-transparent opacity-90"
              >
                Coming Soon
              </button>
            ) : (
              <motion.button
                onClick={handleOrderClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-sm hover:opacity-95 border-none cursor-pointer"
                style={{ backgroundColor: "var(--brand-blue)" }}
                whileTap={{ scale: 0.98 }}
              >
                Order Now
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Schedules() {
  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          eyebrow="Hours & availability"
          title="Ongoing Schedules"
          description="Current service schedules — additional schedules will appear here as they become available."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {SCHEDULES.map((s, i) => (
            <ScheduleCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
