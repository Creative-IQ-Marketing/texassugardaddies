import React from "react";
import daddies from "../assets/daddies.jpg";
import { FaCheckCircle, FaUtensils, FaStar, FaClock } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-24 bg-white" id="intro" data-section="intro">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            From Cubicles to Kitchen Since 2017
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional catering services, custom bakery, and event venue in
            San Antonio, Texas
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Meet the two dads behind Texas Sugar Daddies! After years of
              working in corporate cubicles, we decided to follow our passion
              for food and create something truly special. What started as a
              dream has become a thriving business serving delicious meals and
              creating memorable experiences.
            </motion.p>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              We believe that great food brings people together, and we're
              committed to providing exceptional service whether you're grabbing
              lunch at our weekday cafe or hosting a special event with our
              catering services.
            </motion.p>

            <motion.div
              className="pt-6 space-y-5"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {[
                "Weekday lunch cafe - Tuesday to Thursday, 11am-3pm",
                "Custom cakes, cupcakes, cookies & desserts",
                "Full-service catering for weddings & corporate events",
                "Event venue rental",
              ].map((t) => (
                <motion.div
                  key={t}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 8 }}
                >
                  <div className="shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {t}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 transform rotate-3"></div>
              <img
                src={daddies}
                alt="Two founders of San Antonio catering company and bakery - Professional caterers and bakers"
                className="relative w-full rounded-3xl shadow-2xl object-cover"
                style={{ height: 480, maxWidth: 420 }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <FeatureCard
            icon={<FaUtensils />}
            title="Expert Team"
            text="Professional chefs and staff with decades of experience"
          />

          <FeatureCard
            icon={<FaStar />}
            title="Premium Quality"
            text="Only the finest ingredients and highest standards"
          />

          <FeatureCard
            icon={<FaClock />}
            title="Reliable Service"
            text="On-time delivery and flawless event execution"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      className="relative p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8, borderColor: "#2563eb" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-start">
        <div className="w-14 h-14 flex items-center justify-center mb-5 bg-blue-600 rounded-xl text-white text-2xl">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
