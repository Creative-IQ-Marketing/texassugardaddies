import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { submitToGHLPopup } from "../services/ghl";
import { trackEvent } from "../services/analytics";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const hasVisited = localStorage.getItem("tss-visited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        trackEvent("popup_shown", { popup_type: "welcome" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("tss-visited", "true");
    trackEvent("popup_closed", { action: "manual_close" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitToGHLPopup(formData);

      trackEvent("form_submission", {
        form_name: "welcome_popup",
        form_destination: "ghl",
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon!",
      });

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      trackEvent("form_error", {
        form_name: "welcome_popup",
        error_message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative animate-slideUp overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <h2 className="text-3xl font-black mb-2">
            Welcome to Texas Sugar Daddies!
          </h2>
          <p className="text-blue-100 font-medium">
            Life is short, eat dessert first
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Get exclusive updates on our freshly baked goodies, special offers,
            and catering services. Join our sweet community today!
          </p>

          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-xl font-semibold text-center ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700 border-2 border-green-200"
                  : "bg-red-50 text-red-700 border-2 border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? "Submitting..." : "Get Exclusive Offers"}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
