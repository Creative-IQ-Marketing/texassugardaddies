import React from "react";
import daddies from "../assets/daddies.jpg";
import { FaCheckCircle, FaUtensils, FaStar, FaClock } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          From Cubicles to Kitchen Since 2017
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy + checklist */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <p className="text-gray-700 mb-4 leading-relaxed">
              Meet the two dads behind Texas Sugar Daddies! After years of
              working in corporate cubicles, we decided to follow our passion
              for food and create something truly special. What started as a
              dream has become a thriving business serving delicious meals and
              creating memorable experiences.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that great food brings people together, and we're
              committed to providing exceptional service whether you're grabbing
              lunch at our weekday cafe or hosting a special event with our
              catering services.
            </p>

            <motion.ul
              className="space-y-4 mb-8"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {[
                "Weekday cafe with daily specials & salad bar",
                "Custom sweet treats and desserts",
                "Event venue and full catering services",
              ].map((t, i) => (
                <motion.li
                  key={t}
                  className="flex items-start gap-3 text-gray-800"
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <span className="mt-1 text-gray-400">
                    <FaCheckCircle />
                  </span>
                  <span className="font-medium">{t}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.img
              src={daddies}
              alt="Texas Sugar Daddies"
              className="w-full max-w-lg rounded-2xl shadow-2xl object-cover transform will-change-transform"
              style={{ height: 360 }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Cards row */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FaUtensils />}
              title="Expert Team"
              text="Professional chefs and staff with decades of experience"
              color="white"
            />

            <FeatureCard
              icon={<FaStar />}
              title="Premium Quality"
              text="Only the finest ingredients and highest standards"
              color="white"
            />

            <FeatureCard
              icon={<FaClock />}
              title="Reliable Service"
              text="On-time delivery and flawless event execution"
              color="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text, color }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        translateY: -6,
        boxShadow: "0 12px 30px rgba(16,24,40,0.08)",
      }}
      transition={{ duration: 0.45 }}
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-[#dc3545]">
        <div style={{ color }} className="text-xl">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{text}</p>
    </motion.div>
  );
}
