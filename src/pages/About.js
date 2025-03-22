import React, { useState, useEffect } from "react";
//import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "../Components/Footer";
import { Menu, X } from "lucide-react"; // Mobile menu icons
import ConsultationModal from "../Components/ConsultationModal"; 


const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);  // Modal state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-gray-900"}`}> 
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src="/logo2.png" alt="Company Logo" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Services", "About", "Contact"].map((name, index) => (
              <Link key={index} to={`/${name.toLowerCase()}`} className={`hover:text-gray-500 transition ${scrolled ? "text-black" : "text-white"}`}>{name}</Link>
            ))}
          </nav>
          <button className={`md:hidden p-2 transition ${scrolled ? "text-black" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-black bg-opacity-80 p-4 space-y-4 text-center">
            {["Home", "Services", "About", "Contact"].map((name, index) => (
              <Link key={index} to={`/${name.toLowerCase()}`} className="block text-white hover:text-grey-300" onClick={() => setMenuOpen(false)}>{name}</Link>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-[90vh] md:h-screen overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" src="/background.mp4"></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold">Empowering Businesses with Innovation</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl">
            At FEDGE Consult, we provide strategic business solutions to help organizations grow, adapt, and thrive.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section id="mission" className="container mx-auto py-12 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 max-w-3xl text-lg">
          We empower businesses with innovative strategies that drive growth, enhance efficiency, and build sustainable success.
        </p>
      </section>

      <section id="vision" className="container mx-auto py-12 bg-gray-50 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Vision</h2>
        <p className="mt-4 max-w-3xl text-lg">
          To create a global platform where professionals collaborate to solve complex problems and inspire innovation.
        </p>
      </section>

      {/* Swiper Section */}
      <section id="why-choose-us" className="container mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Why Choose Us?</h2>
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-6">
          {["expertise", "growth", "data", "sustainability"].map((item, index) => (
            <SwiperSlide key={index} className="p-6 bg-blue-200 flex flex-col items-center w-full md:w-80">
              <img src={`/${item}.jpg`} alt={item} className="w-full h-48 object-cover" />
              <p className="mt-4 text-center capitalize text-lg">{item.replace("-", " ")}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto py-12 bg-gray-50 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            { name: "Benedicta Frimpong", role: "Founder & Lead Executive", img: "/images/benedicta.jpg" },
            { name: "Acheampong Emmanuella", role: "Financial & Operations Manager", img: "/images/emmanuella.jpg" },
            { name: "Lois Akoto Baffour", role: "Business Development & Innovation Manager", img: "/images/lois.jpg" },
            { name: "Vincent Monbo", role: "IT Support & Contributor", img: "/images/vincent.jpg" }
          ].map((member, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg text-center">
              <img src={member.img} alt={member.name} className="w-24 md:w-32 h-24 md:h-32 mx-auto rounded-lg object-cover" />
              <h3 className="text-lg md:text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="container mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Get in Touch</h2>
        <p className="mt-4 max-w-2xl text-center mx-auto text-lg">
          Ready to take your business to the next level? Contact us today.
        </p>
        <div className="flex justify-center mt-6">
          <button 
          className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700"
          onClick={() => setModalOpen(true)} >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Modal Component */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
