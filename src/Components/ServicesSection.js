import React from 'react';
import { Lightbulb, Clock, Building2, FileText } from 'lucide-react';

const services = [
  {
    title: "Business Guidance",
    description:
      "We provide expert advice and tailored solutions to help businesses navigate challenges, seize opportunities, and achieve their objectives.",
    benefits: ["Improved decision-making", "Enhanced operational efficiency", "Strategies for sustainable growth"],
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    bgColor: "from-purple-500 to-purple-400",
    textColor: "text-purple-500",
  },
  {
    title: "Project Management Solutions",
    description:
      "Our experienced Project Leads ensure successful execution of your projects by combining expertise with proven strategies.",
    benefits: ["Timely delivery", "Access to top-tier experts", "Streamlined processes"],
    icon: <Clock className="w-8 h-8 text-white" />,
    bgColor: "from-pink-500 to-pink-400",
    textColor: "text-pink-500",
  },
  {
    title: "Turnkey Business Solutions",
    description:
      "End-to-end management of new businesses, from startup to operational stability within 6-12 months.",
    benefits: ["Accelerated growth", "Reduced risks", "Strategic planning"],
    icon: <Building2 className="w-8 h-8 text-white" />,
    bgColor: "from-blue-500 to-blue-400",
    textColor: "text-blue-500",
  },
  {
    title: "Grant & Contract Negotiation",
    description:
      "We secure project grants from investors and handle contract negotiations on your behalf, maximizing funding opportunities with expert compliance.",
    benefits: ["Increased funding", "Expert negotiation", "Full compliance"],
    icon: <FileText className="w-8 h-8 text-white" />,
    bgColor: "from-orange-500 to-orange-400",
    textColor: "text-orange-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">What We Offer</h3>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Comprehensive solutions tailored to elevate your business through innovation, expertise, and strategic excellence.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-xl transition hover:shadow-2xl">
              {/* Icon */}
              <div className={`bg-gradient-to-r ${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              {/* Benefits List */}
              <ul className="space-y-3 text-left">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-6 h-6 rounded-full bg-opacity-20 ${service.textColor} flex items-center justify-center mr-2`}>
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
