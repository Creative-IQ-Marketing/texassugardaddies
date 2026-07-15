// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function MenuCarousel({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="h-full p-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {item.badge && (
                <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold text-sm">
                  {item.badge}
                </span>
              )}
              <div className="text-3xl font-bold text-blue-600">
                {item.price}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
