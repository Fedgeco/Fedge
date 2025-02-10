// src/components/StatsSection.js
import React from 'react';

const stats = [
  { id: 1, number: "2+", title: "Years in Business", description: "Innovating since 2021", color: "blue" },
  { id: 2, number: "50+", title: "Projects Completed", description: "Diverse and impactful projects", color: "purple" },
  { id: 3, number: "95%", title: "Client Satisfaction", description: "Building strong relationships", color: "orange" },
  { id: 4, number: "15+", title: "Team Members", description: "Passionate and skilled professionals", color: "green" },
];

const StatsSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact in Numbers</h2>
        <p className="text-lg text-gray-600 mb-16">
          Delivering exceptional results through years of expertise and dedication
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              {/* Number Badge */}
              <div className={`w-14 h-14 flex items-center justify-center text-white text-lg font-bold rounded-xl bg-${stat.color}-500 mb-6`}>
                {stat.id}
              </div>

              {/* Number */}
              <h3 className={`text-5xl font-bold text-${stat.color}-500 mb-4`}>{stat.number}</h3>
              
              {/* Title */}
              <p className="text-gray-900 text-lg font-medium">{stat.title}</p>
              
              {/* Description */}
              <p className="text-gray-500 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
