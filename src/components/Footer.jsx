import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
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
              Texas Sugar Daddies
            </h2>
            <p className="text-slate-400 leading-relaxed">
              From corporate cubicles to the kitchen, bringing you the finest
              custom cakes, catering, and cafe experiences in San Antonio.
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
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">Custom Cakes & Desserts</li>
              <li className="text-slate-400">Weekday Cafe & Lunch</li>
              <li className="text-slate-400">Corporate Catering</li>
              <li className="text-slate-400">Wedding Catering</li>
              <li className="text-slate-400">Event Venue Rentals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
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
          <div className="flex items-center gap-1">
            <span>Made</span>
            <span>by </span>
            <a
              href="https://creativeiq.marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              CreativeIQ Digital Marketing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
