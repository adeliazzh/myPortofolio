import React, { useState, useEffect, useRef } from "react";
import adeliaLogo from "../assets/adelia.png";
import Particles from "./Particles/Particles";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger menu

const Header = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const animationFrameId = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const animate = () => {
      setRotationAngle((prevAngle) => (prevAngle + 0.1) % 360);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const sphere1 = {
    color: "linear-gradient(135deg, #FF00FF 0%, #8A2BE2 100%)",
    size: 300,
    orbitRadius: 400,
    initialAngleOffset: 0,
    speedMultiplier: 1,
  };

  const sphere2 = {
    color: "linear-gradient(135deg, #00FFFF 0%, #1E90FF 100%)",
    size: 250,
    orbitRadius: 300,
    initialAngleOffset: 180,
    speedMultiplier: 0.8,
  };

  const calculateSphereStyle = (sphere, currentAngle) => {
    const angleRad =
      ((currentAngle * sphere.speedMultiplier + sphere.initialAngleOffset) *
        Math.PI) /
      180;
    const xOffset = sphere.orbitRadius * Math.cos(angleRad);
    const yOffset = sphere.orbitRadius * Math.sin(angleRad);

    // Apply responsive sizes/offsets
    const viewportWidth = window.innerWidth;
    let actualSize = sphere.size;
    let actualOrbitRadius = sphere.orbitRadius;

    if (viewportWidth < 768) { // md breakpoint
      actualSize *= 0.6; // Smaller spheres on mobile
      actualOrbitRadius *= 0.6; // Smaller orbit radius
    } else if (viewportWidth < 1024) { // lg breakpoint
      actualSize *= 0.8;
      actualOrbitRadius *= 0.8;
    }

    const responsiveXOffset = actualOrbitRadius * Math.cos(angleRad);
    const responsiveYOffset = actualOrbitRadius * Math.sin(angleRad);


    return {
      width: `${actualSize}px`,
      height: `${actualSize}px`,
      background: sphere.color,
      top: "50%",
      left: "50%",
      transform: `translate(calc(-50% + ${responsiveXOffset}px), calc(-50% + ${responsiveYOffset}px))`,
    };
  };

  return (
    <header
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-white
                 bg-gradient-to-b from-[#3E3768] to-[#08062D] bg-cover bg-no-repeat"
    >
      {/* Background Particles Layer */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Particles particleCount={180} particleSpread={10} speed={0.1} />
      </div>

      {/* Header Navigation */}
      <nav className="fixed top-3.5 flex justify-between items-center z-1000
                      w-[calc(100%-2rem)] left-2 right-2          /* Base for mobile: w/ 1rem padding on each side */
                      sm:w-[calc(100%-4rem)] sm:left-4 sm:right-4 /* Small screens: w/ 2rem padding on each side */
                      md:w-[calc(100%-8rem)] md:left-8 md:right-8 /* Medium screens: w/ 4rem padding on each side */
                      lg:w-[calc(100%-12.5rem)] lg:left-[6.25rem] lg:right-[6.25rem] /* Large screens: w/ 6.25rem (100px) padding on each side */
                     ">
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}> {/* Add onClick to close mobile menu if open */}
          <img src={adeliaLogo} alt="adelia logo" className="h-8 md:h-10 w-auto" /> 
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base lg:text-lg">
          <li>
            <a href="#home" className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400">
              Project
            </a>
          </li>
          <li>
            <a href="#about" className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay/Sidebar (You'll implement this) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#08062D] bg-opacity-95 z-[999] flex flex-col items-center justify-center space-y-8 md:hidden">
          <ul className="text-3xl space-y-8">
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-400">Project</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-400">About</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Landing Page Content */}
      <div className="relative z-30 text-center px-4 md:px-12 lg:px-24">
        <div className="px-0 md:px-4"> {/* Removed redundant px-12 */}
          <h1 className="text-left text-2xl md:text-3xl lg:text-3xl font-thin">Hi there,</h1>
          <p className="mt-4 md:mt-8 text-left font-black text-5xl md:text-7xl lg:text-7xl">
            I'm <span className="rotating-gradient-text"> adelia.</span>
          </p>
        </div>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-thin font-poppins mt-8 md:mt-12">
          a Full Stack Developer Specializing in AI{" "}
        </h4>
      </div>
    </header>
  );
};

export default Header;