import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import contactData from "../data/contact.json";
import { submitToGHL } from "../services/ghl";
import { trackEvent } from "../services/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        form_name: "contact_form",
        form_destination: "ghl",
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! We will contact you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      trackEvent("form_error", {
        form_name: "contact_form",
        error_message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" data-section="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl lg:text-5xl font-black text-black-600 text-center mb-20 leading-tight">
          {contactData.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl lg:text-5xl font-bold text-black mb-8">
              {contactData.heading}
            </h3>
            <p className="text-2xl text-slate-600 font-semibold mb-16 leading-relaxed">
              {contactData.description}
            </p>

            <div className="space-y-12">
              {contactData.contacts.map((contact, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-300">
                    {contact.type === "address" && (
                      <MapPin className="text-black group-hover:text-white w-5 h-5" />
                    )}
                    {contact.type === "email" && (
                      <Mail className="text-black group-hover:text-white w-5 h-5" />
                    )}
                    {contact.type === "phone" && (
                      <Phone className="text-black group-hover:text-white w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="text-red-500 font-bold text-lg mb-1">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-black  text-lg font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-lg">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-3xl font-black text-red-500 mt-16">
              {contactData.tagline}
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors duration-300 text-base font-medium"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors duration-300 text-base font-medium"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors duration-300 text-base font-medium"
              />

              <textarea
                name="message"
                placeholder="Tell us about your order or special request"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors duration-300 resize-none text-base font-medium"
              ></textarea>

              <label className="flex items-start gap-3 text-gray-700 text-sm cursor-pointer group">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-6 h-6 accent-blue-600 cursor-pointer mt-1 shrink-0"
                />
                <span className="group-hover:text-gray-900 transition-colors duration-300">
                  {contactData.form.consentText}
                </span>
              </label>

              {submitStatus && (
                <div
                  className={`p-4 rounded-xl text-center font-semibold ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-blue-100 text-gray-700 font-bold rounded-xl hover:bg-blue-200 active:scale-95 transition-all duration-200 text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : contactData.form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
