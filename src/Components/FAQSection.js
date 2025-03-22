import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";



const faqs = [
  {
    question: "What services does Fedge Consulting provide?",
    answer:
      "Fedge Consulting offers a comprehensive suite of services including strategic planning, digital transformation, operations excellence, and data analytics consulting. We work closely with organizations to deliver customized solutions that drive measurable business outcomes.",
  },
  {
    question: "How does the consulting process work?",
    answer:
      "Our consulting process involves initial assessment, strategic planning, implementation, and continuous improvement to ensure business success.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in industries such as finance, healthcare, technology, and retail, providing tailored solutions for each sector.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration varies based on scope, but most consulting engagements last between 3 to 6 months.",
  },
  {
    question: "What makes Fedge different from other consulting firms?",
    answer:
      "Our commitment to data-driven decision-making, personalized strategies, and long-term partnerships sets us apart.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showContacts, setShowContacts] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-4">Questions? Answers.</h2>
      <p className="text-gray-600 text-center mb-8">
        Find answers to common questions about our consulting services
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 bg-white hover:bg-gray-100 transition"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      
      {/* Still Got Questions Section */}
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold">Still got questions?</p>
        <p className="text-gray-600">Our team is here to help you find the answers you need and guide you through your next steps.</p>
        <button 
          onClick={() => setShowContacts(!showContacts)} 
          className="mt-4 bg-gray-200 rounded-full p-4 hover:bg-gray-300 transition focus:outline-none"
        >
          {showContacts ? "✖" : "➕"}
        </button>
        {showContacts && (
  <div className="mt-4 flex justify-center space-x-6">
    <a href="mailto:divine.f@fedge.com" className="bg-red-500 text-white p-3 rounded-full shadow-md">
      <Mail className="w-6 h-6" />
    </a>
    <a href="https://wa.me/233209133569" className="bg-green-500 text-white p-3 rounded-full shadow-md">
      <Phone className="w-6 h-6" />
    </a>
    <a href="https://t.me/233571765745" className="bg-blue-500 text-white p-3 rounded-full shadow-md">
      <Send className="w-6 h-6" />
    </a>
  </div>
)}

      </div>
    </section>
  );
};

export default FAQSection;
