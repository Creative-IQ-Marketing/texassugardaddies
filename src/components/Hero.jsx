import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useScrollToElement } from "../hooks/useScrollToElement";
import heroBg from "../assets/hero.jpg";
import extras1 from "../assets/extras/cake.jpg";
import extras2 from "../assets/extras/imgi_4_68c0e4f744a6632cc3db5706.jpg";
import extras3 from "../assets/extras/imgi_6_68c0e4f6fc367038f91acf8a.jpg";

const IMAGES = [extras1, extras2, extras3];

export default function Hero() {
  const { scrollToElement } = useScrollToElement();

  const handleScroll = (e, section) => {
    e.preventDefault();
    scrollToElement(section);
  };

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      data-section="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={{
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:pr-12"
          >
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Two Dads, One Mission: Epic Bites for All
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
              From renegade foodies to your Sugar Daddies! We've ditched the
              cubicles to bring you incredible food at our weekday cafe, special
              events, and custom catering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={(e) => handleScroll(e, "contact")}
                className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl border-none cursor-pointer bg-red-500"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(220, 38, 127, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(220, 38, 127, 0.2)",
                    "0 15px 35px rgba(220, 38, 127, 0.3)",
                    "0 10px 30px rgba(220, 38, 127, 0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Place an Order
              </motion.button>
              <motion.button
                onClick={(e) => handleScroll(e, "intro")}
                className="px-8 py-4 rounded-full border-2 border-gray-300 font-semibold text-lg text-white bg-white/20 backdrop-blur-sm transition-all cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderColor: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 grid grid-cols-3 gap-8"
            >
              {[
                {
                  value: 500,
                  label: "Clients served",
                  suffix: "+",
                },
                {
                  value: 8,
                  label: "Years in business",
                  suffix: "+",
                },
                {
                  value: 5,
                  label: "Average rating",
                  suffix: "★",
                  decimals: 1,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className={`text-4xl lg:text-5xl font-bold bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent`}
                  >
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      decimals={stat.decimals || 0}
                    />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-300 mt-2 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6 h-full">
              {IMAGES.map((img, index) => (
                <motion.div
                  key={index}
                  className={`
                    rounded-3xl overflow-hidden shadow-2xl relative bg-white p-2
                    ${index === 0 ? "row-span-2" : "h-72"}
                  `}
                  initial={{ scale: 0, rotate: index * 10 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    y: index === 0 ? 0 : [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    y: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src={img}
                    alt={`tile-${index}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <motion.div
                    className="absolute inset-2 rounded-2xl bg-linear-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Floating decorative elements around images */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-linear-to-br from-pink-400 to-red-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
