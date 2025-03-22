import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <div className="inline-block px-4 py-1 rounded-full bg-white text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
          Strategic Partnership
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-snug">
          Transform your <span className="text-indigo-400">business's</span>{" "}
          <span className="text-indigo-400">future.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8">
          Elevate your business with strategic insights and innovative solutions
          that drive meaningful growth.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full flex items-center justify-center mx-auto text-sm sm:text-base">
          Get started <ArrowRight className="ml-2 w-4 h-4" />
        </button>
        <div className="mt-6 md:mt-8 text-gray-300 text-xs sm:text-sm">
          Trusted by industry leaders
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 flex flex-col items-center">
        <a href="#next-section" className="animate-bounce">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronDown className="text-gray-700 w-5 sm:w-6 h-5 sm:h-6" />
          </div>
        </a>
        <button className="mt-3 px-3 sm:px-4 py-1 sm:py-2 text-gray-700 bg-white rounded-full shadow-md hover:bg-gray-100 text-xs sm:text-sm">
          Scroll to explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
