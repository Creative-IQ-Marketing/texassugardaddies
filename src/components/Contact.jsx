import React, { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import contactData from "../data/contact.json";
import { submitToGHL } from "../services/ghl";
import { trackEvent } from "../services/analytics";
import SectionHeading from "./ui/SectionHeading";

const CONTACT_ICONS = {
  address: MapPin,
  email: Mail,
  phone: Phone,
};

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
    <section
      className="bg-slate-50 py-24 md:py-28"
      id="contact"
      data-section="contact"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title={contactData.title}
          description={contactData.description}
          className="mb-16"
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">
                {contactData.heading}
              </h3>
              <p className="mt-3 text-base italic text-[var(--brand-red)]">
                {contactData.tagline}
              </p>
            </div>

            <div className="space-y-4">
              {contactData.contacts.map((contact) => {
                const Icon = CONTACT_ICONS[contact.type];
                return (
                  <div
                    key={contact.type}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="mt-1 block text-base font-medium text-slate-900 transition-colors hover:text-[var(--brand-blue)]"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-medium text-slate-900">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-3.5 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:border-[var(--brand-blue)] focus:bg-white focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-3.5 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:border-[var(--brand-blue)] focus:bg-white focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-3.5 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:border-[var(--brand-blue)] focus:bg-white focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Tell us about your order or special request"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-3.5 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:border-[var(--brand-blue)] focus:bg-white focus:outline-none"
              />

              <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-600">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[var(--brand-blue)]"
                />
                <span>{contactData.form.consentText}</span>
              </label>

              {submitStatus && (
                <div
                  className={`rounded-xl px-4 py-3 text-center text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--brand-blue)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : contactData.form.submitText}
                {!isSubmitting && (
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
