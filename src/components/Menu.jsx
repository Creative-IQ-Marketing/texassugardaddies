import React, { useState } from "react";
import { motion } from "framer-motion";
import menuData from "../data/menu.json";
import { MenuCarousel } from "./ui/menu-carousel";

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(
    menuData.categories[0].id
  );

  const currentItems =
    menuData.categories.find((cat) => cat.id === activeCategory)?.items || [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {menuData.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {menuData.subtitle}
          </p>
        </div>

        {/* Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuData.categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-xl"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
