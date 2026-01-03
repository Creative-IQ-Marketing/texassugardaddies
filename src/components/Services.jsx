import React from "react";
import cakeImg from "../assets/extras/cake.jpg";
import cookiesImg from "../assets/extras/imgi_4_68c0e4f744a6632cc3db5706.jpg";
import cateringImg from "../assets/extras/imgi_5_68c0e4f632f3399471194aff.jpg";
import venueImg from "../assets/extras/imgi_6_68c0e4f6fc367038f91acf8a.jpg";
import servicesData from "../data/services.json";

const imageMap = {
  "cake.jpg": cakeImg,
  "imgi_4_68c0e4f744a6632cc3db5706.jpg": cookiesImg,
  "imgi_5_68c0e4f632f3399471194aff.jpg": cateringImg,
  "imgi_6_68c0e4f6fc367038f91acf8a.jpg": venueImg,
};

function ServiceCard({ title, desc, img, btn, link, index }) {
  const isEven = index % 2 === 0;
  const imageSrc = imageMap[img];

  return (
    <div
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-stretch min-h-96 lg:min-h-screen bg-white transition-all duration-300`}
    >
      <div className="w-full lg:w-1/2 overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 bg-white">
        <div className="space-y-8">
          <h3 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
          <a
            href={link}
            className="inline-block px-12 py-5 bg-blue-600 text-white font-bold text-sm tracking-wider rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg w-fit"
          >
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {servicesData.title}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">{servicesData.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {servicesData.services.map((s, index) => (
          <div
            key={s.id}
            className={
              index < servicesData.services.length - 1
                ? "border-b border-gray-200"
                : ""
            }
          >
            <ServiceCard {...s} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
