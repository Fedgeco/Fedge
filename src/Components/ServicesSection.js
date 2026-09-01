import React from 'react';
import { Lightbulb, Clock, Building2, FileText } from 'lucide-react';

const services = [
  {
    title: "Business Guidance",
    description:
      "We provide expert advice and tailored solutions to help businesses navigate challenges, seize opportunities, and achieve their objectives.",
    benefits: ["Improved decision-making", "Enhanced operational efficiency", "Strategies for sustainable growth"],
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    bgColor: "from-purple-500 to-purple-400",
    textColor: "text-purple-500",
  },
  {
    title: "Time Management",
    description:
      "Optimize your workflow and enhance productivity with effective time management strategies and tools.",
    benefits: ["Better work-life balance", "Increased efficiency", "Improved prioritization"],
    icon: <Clock className="w-10 h-10 text-white" />,
    bgColor: "from-blue-500 to-blue-400",
    textColor: "text-blue-500",
  },
  {
    title: "Corporate Solutions",
    description:
      "Tailored corporate solutions designed to enhance business operations and drive long-term success.",
    benefits: ["Scalable solutions", "Improved collaboration", "Streamlined operations"],
    icon: <Building2 className="w-10 h-10 text-white" />,
    bgColor: "from-green-500 to-green-400",
    textColor: "text-green-500",
  },
  {
    title: "Documentation & Compliance",
    description:
      "Ensure seamless regulatory compliance with comprehensive documentation support and legal expertise.",
    benefits: ["Reduced legal risks", "Accurate record-keeping", "Regulatory adherence"],
    icon: <FileText className="w-10 h-10 text-white" />,
    bgColor: "from-red-500 to-red-400",
    textColor: "text-red-500",
  },
];

const ServicesSection = () => {
  return (
   <section id="services" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Our Services</h2>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Our Services</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          We offer a wide range of services designed to empower businesses and professionals for success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-full max-w-xs h-auto mx-auto flex flex-col"> 
              <div className={`bg-gradient-to-r ${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}> 
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base">{service.description}</p>
              
              <ul className="space-y-3 text-left">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-7 h-7 rounded-full bg-opacity-20 ${service.textColor} flex items-center justify-center mr-3 text-lg`}>✓</span>
                    <span className="text-sm md:text-base">{benefit}</span>
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
