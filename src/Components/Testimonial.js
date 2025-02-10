// src/components/TestimonialsSection.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    position: "CEO, InnovateX",
    image: "/images/user1.jpg",
    rating: 5,
    text: "This company exceeded our expectations. Their expertise and professionalism helped us scale efficiently.",
  },
  {
    id: 2,
    name: "John Smith",
    position: "Founder, TechWave",
    image: "/images/user2.jpg",
    rating: 5,
    text: "Exceptional service! Their strategic approach and innovative solutions transformed our business.",
  },
  {
    id: 3,
    name: "Emily White",
    position: "Marketing Director, GrowthHub",
    image: "/images/user3.jpg",
    rating: 4.5,
    text: "A dedicated team that truly understands business needs. Highly recommend their services!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12">Hear from those who have worked with us</p>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-3xl shadow-lg transition transform hover:scale-105">
                {/* Profile Picture */}
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full mb-4" />

                {/* Quote */}
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>

                {/* Rating */}
                <div className="flex justify-center text-yellow-500 mb-4">
                  {"★".repeat(Math.floor(testimonial.rating))}
                  {testimonial.rating % 1 !== 0 && "☆"}
                </div>

                {/* Name & Position */}
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
