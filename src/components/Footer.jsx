import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SOCIAL_ICONS = [
  { Icon: FaFacebookF, href: "https://facebook.com/texassugardaddies" },
  { Icon: FaInstagram, href: "https://instagram.com/texassugardaddies" },
  {
    Icon: FaLinkedinIn,
    href: "https://linkedin.com/company/texassugardaddies",
  },
];

export default function Footer() {
  return (
    <footer className="py-6 bg-slate-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-white">Texas Sugar Daddies</h2>

        <div className="flex space-x-6">
          {SOCIAL_ICONS.map(
            (
              { Icon, href } // eslint-disable-line no-unused-vars
            ) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Icon size={20} />
              </a>
            )
          )}
        </div>

        <div className="text-xs text-white text-right">
          <p>© 2025 Texas Sugar Daddies. All rights reserved.</p>
          <p>CreativeIQ Digital Marketing • San Antonio, Texas</p>
        </div>
      </div>
    </footer>
  );
}
