import React, { useState, useEffect, useRef } from "react";
import adeliaLogo from "../assets/adelia.png";
import Particles from "./Particles/Particles";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const animationFrameId = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      let shouldNavbarBeActive = false;

      if (homeSection) {
        const homeRect = homeSection.getBoundingClientRect();
        const homeSectionThreshold = homeRect.height * 0.8; // 80% down the home section

        if (window.scrollY > homeSectionThreshold) {
            shouldNavbarBeActive = true;
        } else {
            shouldNavbarBeActive = false;
        }
      }
      setIsNavbarActive(shouldNavbarBeActive);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

    const viewportWidth = window.innerWidth;
    let actualSize = sphere.size;
    let actualOrbitRadius = sphere.orbitRadius;

    if (viewportWidth < 768) {
      actualSize *= 0.6;
      actualOrbitRadius *= 0.6;
    } else if (viewportWidth < 1024) {
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
      <div className="absolute inset-0 z-10 w-full h-full">
        <Particles particleCount={180} particleSpread={10} speed={0.1} />
      </div>

      <nav
        className={`fixed top-0 flex justify-between items-center z-[9999] py-4 px-4
                   w-full
                   sm:px-8
                   md:px-16
                   lg:px-24
                   transition-all duration-300 ease-in-out
                   ${
                     isNavbarActive
                       ? "py-2 bg-[#08062D]/90 shadow-lg shadow-black/40 backdrop-blur-sm"
                       : ""
                   }`}
      >
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src={adeliaLogo}
            alt="adelia logo"
            className="h-6 md:h-8 w-auto"
          />
        </a>

        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base lg:text-lg">
          <li>
            <a
              href="#home"
              className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400 opacity-75 hover:opacity-100"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400 opacity-75 hover:opacity-100"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400 opacity-75 hover:opacity-100"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white no-underline px-2 py-1 transition-colors duration-300 hover:text-gray-400 opacity-75 hover:opacity-100"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#08062D] bg-opacity-95 z-[999] flex flex-col items-center justify-center space-y-8 md:hidden">
          <ul className="text-3xl space-y-8">
            <li>
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-400"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="relative z-30 text-center px-4 md:px-12 lg:px-24">
        <div className="px-0 md:px-4">
          <h1 className="text-left text-2xl md:text-3xl lg:text-3xl font-thin">
            Hi there,
          </h1>
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