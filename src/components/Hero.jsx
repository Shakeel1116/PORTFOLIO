import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const handleRedirect = () => {
    window.location.href = "https://www.linkedin.com/in/shaik-shakeel-93671a266/";
  };

  const ResumeRedirect = () => {
    window.location.href = "https://drive.google.com/file/d/1JUR5RegieSbkOANB1xkhMKCdyVBAvacL/view?usp=drive_link";
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center overflow-hidden px-4">
      
      {/* Background Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-green-400 to-blue-500 opacity-20 rounded-full animate-pulse-fast blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <img
          src={HeroImage}
          alt="Shakeel Shaik"
          className="mx-auto mb-6 w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-gray-500 shadow-lg hover:shadow-green-400 transition-shadow duration-300"
        />
        <h1 className="text-3xl sm:text-4xl font-bold">
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Shakeel Shaik
          </span>
          , MERN Stack Developer
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          I specialize in building scalable and responsive web applications with React.js & Node.js.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500"
            onClick={handleRedirect}
          >
            Contact Me
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-500"
            onClick={ResumeRedirect}
          >
            Resume
          </button>
        </div>
      </div>
      
      {/* Custom Animation */}
      <style>
        {`
          @keyframes pulseFast {
            0%, 100% {
              transform: scale(1);
              opacity: 0.2;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.4;
            }
          }
          .animate-pulse-fast {
            animation: pulseFast 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
