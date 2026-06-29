import logo from "../assets/logo_new_tss.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useScrollToElement } from "../hooks/useScrollToElement";

const NAV_LINKS = [
  { label: "Menu", section: "menu" },
  { label: "About", section: "intro" },
  { label: "Catering", section: "services" },
  { label: "Contact", section: "contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/TexasSugarDaddies/",
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/texassugardaddies/",
    Icon: FaInstagram,
  },
];

export default function Header() {
  const { scrollToElement } = useScrollToElement();

  const handleNavClick = (e, section) => {
    e.preventDefault();
    scrollToElement(section);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-lg shadow-slate-900/10 md:gap-4 md:px-5 md:py-2.5">
        <button
          onClick={(e) => handleNavClick(e, "hero")}
          className="shrink-0 cursor-pointer border-none bg-transparent p-0"
        >
          <img
            src={logo}
            alt="San Antonio Bakery and Catering Company Logo - Custom Cakes and Event Services"
            className="h-11 w-auto object-contain md:h-14"
            decoding="async"
          />
        </button>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => handleNavClick(e, link.section)}
              className="text-lg font-medium text-slate-700 transition-colors hover:scale-105 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-0.5 md:flex">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.Icon size={14} />
              </a>
            ))}
          </div>

          <button
            onClick={(e) => handleNavClick(e, "contact")}
            className="cursor-pointer rounded-full border-none bg-[var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 md:px-5 md:py-2.5"
          >
            Get Your Quote
          </button>
        </div>
      </div>
    </header>
  );
}
