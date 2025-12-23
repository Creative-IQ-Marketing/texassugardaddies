import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { name: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
  { name: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 py-1" : "bg-white/30 py-4"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-full mx-auto flex items-center justify-between px-6">
        <motion.div
          className="flex items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a href="#home" className="block -ml-2">
            <motion.img
              src={logo}
              alt="Texas Sugar Daddies"
              className="h-16 w-16 md:h-24 md:w-24 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
        </motion.div>

        <motion.nav
          className="hidden lg:flex items-center gap-10 text-gray-800 tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="transition-transform duration-200"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="hidden md:flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-gray-800 transition"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.Icon size={14} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-full font-medium shadow-md"
            style={{ backgroundColor: "var(--brand-blue)", color: "white" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Get Your Quote
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
}
