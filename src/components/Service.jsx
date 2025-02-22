import React from "react";

const services = [
  {
    id: 3,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 1,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Building dynamic and scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
  }
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        
        {/* Grid layout ensuring perfect ordering */}
        <div className="grid grid-cols-2 gap-8">
          {/* Top Row (ID 1 & ID 3) */}
          <ServiceCard service={services[0]} />
          <ServiceCard service={services[2]} />
          
          {/* Bottom Row (ID 2 & ID 4) */}
          <ServiceCard service={services[1]} />
          <ServiceCard service={services[3]} />
        </div>
      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div
      className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
      transition-transform duration-300 hover:scale-105"
    >
      <div
        className="text-right text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-green-600 to-blue-400"
      >
        {service.id}
      </div>
      <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
      bg-gradient-to-r from-green-400 to-blue-500">
        {service.title}
      </h3>
      <p className="mt-2 text-gray-300">{service.description}</p>
      <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
    </div>
  );
};

export default Service;
