import React from "react";
import testimonialsData from "../data/testimonials.json";

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
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {testimonialsData.title}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {testimonialsData.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="border-t-2 border-gray-200 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {testimonialsData.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <p className="text-3xl font-black text-black mb-3 group-hover:scale-110 transition-transform duration-300">
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
