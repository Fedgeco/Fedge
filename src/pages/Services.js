import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import ProjectsSection from "../Components/ProjectsSection";
import ConsultationModal from "../Components/ConsultationModal"; // Import modal

const sections = [
  { id: "business-guidance", title: "Business Guidance", bg: "bg-gray-900", text: "text-white", 
    description: "Transform your business vision into reality. We provide guidance on best practices and industry standards.",
    points: ["Market Analysis & Strategy", "Growth Planning", "Risk Management", "Digital Transformation"] },
  { id: "project-management", title: "Project Management", bg: "bg-white", text: "text-black", 
    description: "Deliver excellence, consistently. We offer tailored project planning, proactive risk management, and performance monitoring.",
    points: ["Agile Implementation", "Resource Optimization", "Timeline Management", "Quality Assurance"] },
  { id: "turnkey-solution", title: "Turnkey Solutions", bg: "bg-gray-900", text: "text-white", 
    description: "Comprehensive solutions from start to finish. Our Turnkey Business Solutions offer a complete pathway for setting up businesses.",
    points: ["Design & Implementation", "End-to-End Support", "Efficient Execution"] },
  { id: "grant-negotiation", title: "Grant Negotiation", bg: "bg-white", text: "text-black", 
    description: "Maximize funding opportunities. Our strategic approach enables us to deliver successful outcomes.",
    points: ["Proposal Writing", "Budget Planning", "Compliance Assurance"] }
];

export default function Services() {
  const [, setCurrentSection] = useState("business-guidance");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Modal state

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
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-gray-900"}`}> 
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src="/logo2.png" alt="Company Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Services", "About", "Contact"].map((name, index) => (
              <Link key={index} to={`/${name.toLowerCase()}`} className={`hover:text-gray-500 transition ${scrolled ? "text-black" : "text-white"}`}>{name}</Link>
            ))}
          </nav>
          <button className={`md:hidden p-2 transition ${scrolled ? "text-black" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden bg-black bg-opacity-80 p-4 space-y-4 text-center">
            {["Home", "Services", "About", "Contact"].map((name, index) => (
              <Link key={index} to={`/${name.toLowerCase()}`} className="block text-white hover:text-gray-300">{name}</Link>
            ))}
          </nav>
        )}
      </header>

      <div className="relative">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className={`min-h-screen flex flex-col items-start justify-center px-6 md:px-16 py-12 transition-colors duration-500 ${section.bg} ${section.text}`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h1>
              <p className="text-base md:text-lg mb-6">{section.description}</p>
              <ul className="text-left">
                {section.points.map((point, index) => (
                  <li key={index} className="mb-2">• {point}</li>
                ))}
              </ul>
            </motion.div>
          </section>
        ))}

        <ProjectsSection />
      </div>

      {/* Button to Open Modal */}
      <button 
        onClick={() => setModalOpen(true)} 
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Schedule a Consultation
      </button>

      {/* Render Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <Footer />
    </div>
  );
}
