import React from "react";
import cakeImg from "../assets/extras/optimized/cake.webp";
import cookiesImg from "../assets/extras/optimized/imgi_4_68c0e4f744a6632cc3db5706.webp";
import cateringImg from "../assets/extras/optimized/imgi_5_68c0e4f632f3399471194aff.webp";
import venueImg from "../assets/extras/optimized/imgi_6_68c0e4f6fc367038f91acf8a.webp";
import servicesData from "../data/services.json";
import { useScrollToElement } from "../hooks/useScrollToElement";
import OptimizedImage from "./ui/OptimizedImage";
import SectionHeading from "./ui/SectionHeading";

const imageMap = {
  "cake.jpg": cakeImg,
  "imgi_4_68c0e4f744a6632cc3db5706.jpg": cookiesImg,
  "imgi_5_68c0e4f632f3399471194aff.jpg": cateringImg,
  "imgi_6_68c0e4f6fc367038f91acf8a.jpg": venueImg,
};

const altTextMap = {
  "cake.jpg":
    "Custom wedding cake from San Antonio bakery - Professional cake design and bakery services",
  "imgi_4_68c0e4f744a6632cc3db5706.jpg":
    "Fresh baked cupcakes and cookies from San Antonio bakery cafe",
  "imgi_5_68c0e4f632f3399471194aff.jpg":
    "Professional catering services San Antonio - Wedding and corporate event catering",
  "imgi_6_68c0e4f6fc367038f91acf8a.jpg":
    "San Antonio event venue rental - Wedding and corporate event space",
};

function ServiceCard({ title, desc, img, btn, link, index }) {
  const imageSrc = imageMap[img];
  const altText = altTextMap[img] || title;
  const { scrollToElement } = useScrollToElement();

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log(link);
    scrollToElement("contact");
  };

  return (
    <div className="group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
          <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:h-80">
            <OptimizedImage
              src={imageSrc}
              alt={altText}
              wrapperClassName="h-full w-full"
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold text-gray-900 md:text-3xl">
              {title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
            <button
              onClick={handleButtonClick}
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 border-none cursor-pointer"
            >
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services" data-section="services">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title={servicesData.title}
          description={servicesData.subtitle}
          className="mb-20"
        />

        <div className="space-y-12">
          {servicesData.services.map((s, index) => (
            <ServiceCard key={s.id} {...s} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
