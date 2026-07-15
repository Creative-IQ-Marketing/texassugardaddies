import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { submitFoodOrder } from "../services/ghl";
import { trackEvent } from "../services/analytics";

export default function FoodOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderDetails: "",
    estimatedValue: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.orderDetails) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitFoodOrder(formData);

      trackEvent("form_submission", {
        form_name: "food_order",
        form_destination: "ghl",
        estimated_value: formData.estimatedValue,
      });

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your order has been received. We'll contact you shortly to confirm.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        orderDetails: "",
        estimatedValue: 0,
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
      trackEvent("form_error", {
        form_name: "food_order",
        error_message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50"
      data-section="order"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Place Your Order
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Tell us what you'd like, and we'll make it happen!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {submitStatus && (
            <div
              className={`mb-8 p-6 rounded-2xl font-semibold text-center ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(210) 555-0123"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="[email protected]"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium"
              />
            </div>

            <div>
              <label
                htmlFor="orderDetails"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Order Details*
              </label>
              <textarea
                id="orderDetails"
                name="orderDetails"
                placeholder="Please describe what you'd like to order. Include details like:&#10;- Type of item (cake, cupcakes, cookies, etc.)&#10;- Quantity&#10;- Flavors&#10;- Special requests&#10;- Preferred pickup/delivery date"
                value={formData.orderDetails}
                onChange={handleChange}
                required
                rows="8"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="estimatedValue"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Estimated Budget (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                  $
                </span>
                <input
                  type="number"
                  id="estimatedValue"
                  name="estimatedValue"
                  placeholder="0.00"
                  value={formData.estimatedValue || ""}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 text-base font-medium"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                This helps us provide accurate pricing
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting Order...
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  Submit Order
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Required fields. We'll contact you within 24 hours to confirm
              your order.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
