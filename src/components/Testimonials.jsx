import React from "react";
import testimonialsData from "../data/testimonials.json";
import SectionHeading from "./ui/SectionHeading";

function TestimonialCard({ rating, quote, name, role }) {
  return (
    <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
        "{quote}"
      </p>
      <div className="border-t border-gray-100 pt-6">
        <p className="font-bold text-gray-900 text-lg">{name}</p>
        <p className="text-gray-500 text-sm font-medium tracking-wide">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={testimonialsData.title}
          description={testimonialsData.subtitle}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {testimonialsData.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="border-t-2 border-gray-200 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {testimonialsData.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <p className="font-display text-3xl font-semibold text-black mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-base tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
