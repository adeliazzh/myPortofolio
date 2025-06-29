import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative py-6 flex flex-col sm:flex-row justify-center items-center z-10
                 bg-[#08062D] text-white text-center
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32" /* Responsive padding */
    >
      {/* Contact Icons */}
      <div className="flex justify-around items-center w-full max-w-sm sm:max-w-none sm:w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] lg:w-[calc(100%-12.5rem)] mb-4 sm:mb-0"> {/* Adjust width for mobile */}
        <a href="https://www.linkedin.com/in/adeliazhafira" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-white hover:text-blue-500 transition-colors duration-300 mx-2 md:mx-4">
          <FaLinkedin />
        </a>
        <a href="https://github.com/adeliazzh" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-white hover:text-gray-400 transition-colors duration-300 mx-2 md:mx-4">
          <FaGithub />
        </a>
        <a href="mailto:adeliazhafiraa@gmail.com" className="text-2xl md:text-3xl text-white hover:text-red-500 transition-colors duration-300 mx-2 md:mx-4">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/adeliazzh/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-white hover:text-pink-500 transition-colors duration-300 mx-2 md:mx-4">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;