import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header"; // Import Header
import Footer from "../Components/Footer"; // Import Footer

const sections = [
  { id: "business-guidance", title: "Business Guidance", bg: "bg-gray-900", text: "text-white", 
    description: "Transform your business vision into reality.",
    points: ["Market Analysis & Strategy", "Growth Planning", "Risk Management", "Digital Transformation"] },
  { id: "project-management", title: "Project Management", bg: "bg-white", text: "text-black", 
    description: "Deliver excellence, consistently.",
    points: ["Agile Implementation", "Resource Optimization", "Timeline Management", "Quality Assurance"] },
  { id: "turnkey-solution", title: "Turnkey Solutions", bg: "bg-gray-900", text: "text-white", 
    description: "Comprehensive solutions from start to finish.",
    points: ["Design & Implementation", "End-to-End Support", "Efficient Execution"] },
  { id: "grant-negotiation", title: "Grant Negotiation", bg: "bg-white", text: "text-black", 
    description: "Maximize funding opportunities.",
    points: ["Proposal Writing", "Budget Planning", "Compliance Assurance"] }
];

export default function Services() {
  const [currentSection, setCurrentSection] = useState("business-guidance");

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
          }
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header className={"text-black"}/> {/* Include the header */}
      <div className="relative pt-20"> {/* Adjusted padding to prevent overlap */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`h-screen flex items-center justify-start pl-16 transition-colors duration-500 ${section.bg} ${section.text}`}
          >
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }} 
              className="max-w-2xl"
            >
              <h1 className="text-4xl font-bold mb-4">{section.title}</h1>
              <p className="text-lg mb-6">{section.description}</p>
              <ul className="text-left">
                {section.points.map((point, index) => (
                  <li key={index} className="mb-2">• {point}</li>
                ))}
              </ul>
            </motion.div>
          </section>
        ))}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === section.id ? "bg-white" : "bg-gray-500"}`}
            ></div>
          ))}
        </div>
      </div>
      <Footer /> {/* Include the footer */}
    </div>
  );
}
