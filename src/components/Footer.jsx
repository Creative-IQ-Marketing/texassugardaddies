import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useScrollToElement } from "../hooks/useScrollToElement";
import contactData from "../data/contact.json";

const SOCIAL_ICONS = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/TexasSugarDaddies/",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/texassugardaddies/",
    label: "Instagram",
  },
];

const QUICK_LINKS = [
  { name: "Menu", section: "menu" },
  { name: "About", section: "intro" },
  { name: "Catering", section: "services" },
  { name: "Contact", section: "contact" },
];

export default function Footer() {
  const { scrollToElement } = useScrollToElement();

  const handleScroll = (e, section) => {
    e.preventDefault();
    scrollToElement(section);
  };

  const getContactInfo = (type) =>
    contactData.contacts.find((c) => c.type === type);

  const address = getContactInfo("address");
  const phone = getContactInfo("phone");
  const email = getContactInfo("email");

  return (
    <footer className="bg-slate-800 text-slate-300 font-sans">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              San Antonio Catering & Bakery
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Professional catering services and custom bakery in San Antonio
              since 2017. Specializing in wedding catering, corporate events,
              custom cakes, and event venue rental.
            </p>
            <div className="flex gap-4">
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.section}`}
                    onClick={(e) => handleScroll(e, link.section)}
                    className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Catering & Bakery Services
            </h3>
            <ul className="space-y-4">
              <li className="text-slate-400">Wedding Catering San Antonio</li>
              <li className="text-slate-400">Corporate Event Catering</li>
              <li className="text-slate-400">Custom Cakes & Wedding Cakes</li>
              <li className="text-slate-400">
                Bakery - Cupcakes, Cookies, Desserts
              </li>
              <li className="text-slate-400">
                Event Venue Rental - up to 150 guests
              </li>
              <li className="text-slate-400">
                Lunch Cafe - Tuesday-Thursday 11am-3pm
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Contact San Antonio Caterer
            </h3>
            <ul className="space-y-5">
              {address && (
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="shrink-0 mt-1 text-blue-500" />
                  <span className="text-slate-400">{address.value}</span>
                </li>
              )}
              {phone && (
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="shrink-0 text-blue-500" />
                  <a
                    href={phone.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {phone.value}
                  </a>
                </li>
              )}
              {email && (
                <li className="flex items-center gap-3">
                  <FaEnvelope className="shrink-0 text-blue-500" />
                  <a
                    href={email.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {email.value}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Texas Sugar Daddies. All rights
            reserved.
          </p>
          <a
            href="https://creativeiq.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-xs tracking-widest uppercase text-slate-600 transition-colors duration-300 hover:text-white"
          >
            Powered by{" "}
            <span className="inline-flex items-center gap-0.5 font-semibold text-slate-400 group-hover:text-white">
              Creative IQ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 -translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
