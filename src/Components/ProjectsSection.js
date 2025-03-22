import React from "react";
import { motion } from "framer-motion";

// Import images properly
import busImage from "../Images/commercial-bus.jpg";
import callCenterImage from "../Images/call-center.jpg";
import wasteImage from "../Images/smart-waste.jpg";

// Project data
const projects = [
  { 
    title: "Commercial Bus Management System", 
    description: "A robust software solution designed to optimize commercial bus operations. It includes real-time tracking, automated fare collection, and fleet management.", 
    image: busImage
  },
  { 
    title: "International Call Center Project", 
    description: "A comprehensive call center platform integrating VoIP, AI-powered support, and multi-language assistance to enhance customer interactions.", 
    image: callCenterImage
  },
  { 
    title: "Smart Waste Management System", 
    description: "An IoT-based solution for waste collection and recycling, using smart sensors to monitor waste levels and optimize collection routes.", 
    image: wasteImage
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">Innovative solutions that make an impact</p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-lg transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-2xl mb-4" />

              {/* Project Title & Description */}
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
