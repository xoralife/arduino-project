"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash on Delivery (COD), Easypaisa, and Credit/Debit Card payments. All transactions are secure and processed through encrypted channels.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are typically processed within 24 hours. Delivery takes 3-7 business days depending on your location. You will receive a tracking number once your order ships.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Currently we ship within Pakistan only. We are working on expanding our shipping options to other countries in the near future.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 14-day return policy for unused items in original packaging. Contact our support team to initiate a return. Shipping costs for returns are borne by the customer.",
  },
  {
    q: "Are the Arduino boards genuine?",
    a: "Yes, all our Arduino boards are 100% genuine and sourced directly from authorized distributors. We stand by the authenticity of every product we sell.",
  },
  {
    q: "Do you provide technical support?",
    a: "Absolutely! Our team of experienced makers and engineers is available to help you with any technical questions. Contact us via email or phone during business hours.",
  },
  {
    q: "Can I cancel my order?",
    a: "You can cancel your order within 2 hours of placing it, as long as it has not been shipped yet. Contact us immediately with your order number.",
  },
  {
    q: "Do you sell wholesale?",
    a: "Yes, we offer wholesale pricing for educational institutions, makerspaces, and bulk orders. Please contact us for a custom quote.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h1>
          <p className="text-gray-500 mt-2 text-sm text-center">Everything you need to know about shopping with us</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
