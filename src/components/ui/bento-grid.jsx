import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto auto-rows-[20rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  price,
  badge,
  badgeColor,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 shadow-xl bg-white border border-transparent dark:bg-black dark:border-white/[0.2] overflow-hidden flex flex-col justify-between",
        className
      )}
    >
      <div className="p-8 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-8">
          {badge && (
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${badgeColor}`}
            >
              {badge}
            </span>
          )}
          <div className="text-3xl font-extrabold text-blue-600">{price}</div>
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};
