import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {/* Header */}
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
          <nav className="md:hidden bg-black bg-opacity-90 p-4 space-y-2 text-center">
            {["Home", "Services", "About", "Contact"].map((name, index) => (
              <Link key={index} to={`/${name.toLowerCase()}`} className="block text-white hover:text-gray-300 py-2" onClick={() => setIsOpen(false)}>{name}</Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 md:px-20 pt-24 pb-10">
        <h2 className="text-4xl font-bold text-center mb-4">Let's build something amazing together</h2>
        <p className="text-gray-600 text-center mb-10">Have a project in mind? We'd love to hear about it.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <div className="bg-white shadow-md p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6">Connect with us through any of these channels.</p>
            <div className="space-y-4">
              {[
                { icon: "📧", label: "Email", value: "info@fedgeco.io", link: "mailto:info@fedgeco.io"}, 
                { icon: "💬", label: "WhatsApp", value: "+233 54 727 6530" link: "https://wa.me/233547276530" },
                { icon: "💬", label: "Support", value: "support@fedgeco.io" link: "mailto:support@fedgeco.io" },
              ].map((info, index) => (
               <div key={index} className="flex items-center space-x-4">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <p className="font-semibold">{info.label}</p>
                  <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 hover:underline">
                    {info.value}
                  </a>
                </div>
              </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "company"].map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-600 font-medium capitalize">{field}</label>
                  <input name={field} type="text" placeholder={`Your ${field}`} required onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
              ))}
              <div>
                <label className="block text-gray-600 font-medium">Message</label>
                <textarea name="message" placeholder="Tell us about your project..." required onChange={handleChange} className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-16 w-full max-w-5xl">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Location</h3>
          <p className="text-gray-600 text-center mb-6">Visit us at our office or find us on the map below.</p>
          <div className="w-full h-80 overflow-hidden rounded-lg shadow-md">
            <iframe title="Google Map Location" className="w-full h-full" frameBorder="0" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDrolxk5qh6sv0WPmcfrVNkhYQlZ8qqgRM&q=Fedge+Consulting"></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
