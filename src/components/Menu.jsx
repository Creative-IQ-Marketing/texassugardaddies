import React, { useState } from "react";
import { motion } from "framer-motion";
import menuData from "../data/menu.json";

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(
    menuData.categories[0].id
  );

  const currentItems =
    menuData.categories.find((cat) => cat.id === activeCategory)?.items || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {menuData.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {menuData.subtitle}
          </p>
        </div>

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

        {currentItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="space-y-6">
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="ml-4 px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="md:ml-8 flex-shrink-0">
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600 whitespace-nowrap">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No items available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
