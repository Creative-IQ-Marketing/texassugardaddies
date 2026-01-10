import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { submitToGHL } from "../services/ghl";
import { trackEvent } from "../services/analytics";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackEvent("popup_shown", { popup_type: "order" });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    trackEvent("popup_closed", { action: "manual_close" });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.consent) {
      setSubmitStatus({
        type: "error",
        message: "Please fill all required fields and accept consent",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitToGHL(formData);

      trackEvent("form_submission", {
        form_name: "order_popup",
        form_destination: "ghl",
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! We will contact you soon.",
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
        form_name: "order_popup",
        error_message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full relative animate-slideUp overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Minimalist Header */}
        <div className="pt-10 px-8 pb-6">
          <h2 className="text-3xl font-black text-gray-900 mb-2">
            Ready to Order?
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Fresh, delicious, and made with love
          </p>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-lg font-semibold text-center text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm font-medium placeholder-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm font-medium placeholder-gray-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm font-medium placeholder-gray-400"
            />

            <textarea
              name="message"
              placeholder="Special requests or message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors duration-200 resize-none text-sm font-medium placeholder-gray-400"
            ></textarea>

            <label className="flex items-start gap-3 text-gray-600 text-xs cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 accent-gray-800 cursor-pointer mt-0.5 shrink-0"
              />
              <span className="group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                I agree to receive updates about orders and special offers
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Place Order"}
            </button>
          </form>
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
            transform: translateY(16px);
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
