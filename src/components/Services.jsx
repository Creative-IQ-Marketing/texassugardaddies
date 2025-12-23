import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import cakeImg from "../assets/extras/cake.jpg";
import cookiesImg from "../assets/extras/imgi_4_68c0e4f744a6632cc3db5706.jpg";
import cateringImg from "../assets/extras/imgi_5_68c0e4f632f3399471194aff.jpg";
import venueImg from "../assets/extras/imgi_6_68c0e4f6fc367038f91acf8a.jpg";

const SERVICES = [
  {
    title: "The Bakery",
    desc: "From our signature cookies and cupcakes to custom cakes and personalized sugar cookies with custom printing, we create sweet treats that make every occasion special.",
    img: cakeImg,
    btn: "PLACE AN ORDER TODAY",
    btnColor: "var(--brand-blue)",
    link: "#order",
  },
  {
    title: "The Cafe",
    desc: "Join us Monday through Thursday for lunchtime bites, daily specials, and grab-and-go options. Perfect for a quick meal or casual dining experience.",
    img: cookiesImg,
    btn: "PLACE AN ORDER TODAY",
    btnColor: "var(--brand-blue)",
    link: "#order",
  },
  {
    title: "The Caterers",
    desc: "Professional onsite and offsite catering services with custom menu development. We bring the restaurant experience to your event location.",
    img: cateringImg,
    btn: "LET US CATER TO YOU",
    btnColor: "var(--brand-blue)",
    link: "#catering",
  },
  {
    title: "Venue Rentals",
    desc: "Host your next event at our beautiful venue! Perfect for corporate meetings, birthday parties, and special celebrations. Capacity: 150 people with full amenities.",
    img: venueImg,
    btn: "HOST YOUR EVENT HERE",
    btnColor: "var(--brand-blue)",
    link: "#venue",
  },
];

function ServiceCard({ title, desc, img, btn, btnColor, link, index }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{desc}</p>
        <motion.a
          href={link}
          className="inline-block px-5 py-2 rounded-full text-white font-semibold text-sm tracking-wide"
          style={{
            background: btnColor,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {btn}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-16 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We Do It All!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our weekday cafe to custom catering and sweet treats – your
            Texas Sugar Daddies have got you covered
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((s, index) => (
            <ServiceCard key={s.title} {...s} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
