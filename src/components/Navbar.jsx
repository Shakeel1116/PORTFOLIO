import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    window.location.href = "https://www.linkedin.com/in/shaik-shakeel-93671a266/";
  };

  return (
    <nav className='bg-black text-white px-6 md:px-16 lg:px-24'>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Shakeel Shaik</div>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <a href="#" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Connect Button */}
        <button 
          className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
          onClick={handleSubmit}>
          Connect Me
        </button>

        {/* Mobile Menu Icon */}
        <button className='md:hidden' onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black text-white flex flex-col items-center py-4 space-y-4'>
          <a href="#" className='hover:text-gray-400' onClick={toggleMenu}>Home</a>
          <a href="#about" className='hover:text-gray-400' onClick={toggleMenu}>About Me</a>
          <a href="#service" className='hover:text-gray-400' onClick={toggleMenu}>Services</a>
          <a href="#project" className='hover:text-gray-400' onClick={toggleMenu}>Projects</a>
          <a href="#contact" className='hover:text-gray-400' onClick={toggleMenu}>Contact</a>
          <button 
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
            onClick={handleSubmit}>
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
