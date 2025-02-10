import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import Testimonial from "../Components/Testimonial";
import StatsSection from "../Components/StatsSection";
import Footer from "../Components/Footer";
import FAQSection from "../Components/FAQSection";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <Testimonial />
      {/* Add Testimonials before FAQ */}
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
