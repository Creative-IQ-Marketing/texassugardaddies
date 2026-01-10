import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { submitToGHL } from "../services/ghl";
import { trackEvent } from "../services/analytics";
import { Gift } from "lucide-react";

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
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full relative animate-slideUp overflow-hidden"
        style={{
          backgroundImage: "url(/src/assets/daddies.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20 bg-black/30 rounded-full p-2 hover:bg-black/50"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner */}
        <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white py-3 px-6 text-center font-bold text-lg z-10 flex items-center justify-center gap-2">
          <span className="text-2xl">
            <Gift />
          </span>
          <span>Free Delivery for orders $10+</span>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-8 pb-8">
          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-lg font-semibold text-center text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
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
              className="w-full px-5 py-3.5 bg-white/95 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:bg-white transition-all duration-200 text-base font-medium placeholder-gray-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-white/95 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:bg-white transition-all duration-200 text-base font-medium placeholder-gray-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3.5 bg-white/95 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:bg-white transition-all duration-200 text-base font-medium placeholder-gray-500"
            />

            <textarea
              name="message"
              placeholder="Tell us about your order or special request"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-5 py-3.5 bg-white/95 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:bg-white transition-all duration-200 resize-none text-base font-medium placeholder-gray-500"
            ></textarea>

            <label className="flex items-start gap-3 text-gray-700 text-sm cursor-pointer group bg-white/90 p-4 rounded-lg">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 accent-gray-800 cursor-pointer mt-0.5 shrink-0"
              />
              <span className="group-hover:text-gray-900 transition-colors duration-300 leading-relaxed font-medium">
                I Consent to Receive SMS Notifications, Alerts & Occasional
                Marketing Communication from company. Message frequency varies.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-white text-gray-800 font-bold rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
