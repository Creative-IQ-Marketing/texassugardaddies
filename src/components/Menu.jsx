import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Utensils, Plus, Phone } from "lucide-react";
import menuData from "../data/menu.json";
import SectionHeading from "./ui/SectionHeading";

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(
    menuData.categories[0].id,
  );

  const currentItems =
    menuData.categories.find((cat) => cat.id === activeCategory)?.items || [];

  return (
    <section className="py-20 bg-white" id="menu" data-section="menu">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={menuData.title}
          description={menuData.subtitle}
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuData.categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
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
            <div className="space-y-4">
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="ml-3 px-3 py-0.5 rounded-full bg-blue-100 text-black font-semibold text-xs whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="md:ml-6 shrink-0">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-black whitespace-nowrap">
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
            <p className="text-gray-500 text-lg">Coming soon.</p>
          </div>
        )}

        <div className="border-t border-gray-200 mt-16 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {menuData.tagline.items.map((item, index) => {
              const getIcon = (iconName) => {
                const iconProps = "w-8 h-8 text-blue-600 mb-2";
                switch (iconName) {
                  case "truck":
                    return <Truck className={iconProps} />;
                  case "utensils":
                    return <Utensils className={iconProps} />;
                  case "plus":
                    return <Plus className={iconProps} />;
                  case "phone":
                    return <Phone className={iconProps} />;
                  default:
                    return null;
                }
              };

              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <p className="text-gray-700 font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
