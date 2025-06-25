import React, { useState, useEffect, useRef } from "react";
import adeliaLogo from "../assets/adelia.png";
import Particles from "./Particles/Particles";

// Make sure you have your custom CSS imported, e.g., in src/index.css
import "../index.css";

const Header = () => {
  const [rotationAngle, setRotationAngle] = useState(0); // For continuous sphere rotation
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Animation loop for the spheres
    const animate = () => {
      setRotationAngle((prevAngle) => (prevAngle + 0.1) % 360); // Adjust speed (0.1) as needed
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Define properties for each sphere
  const sphere1 = {
    color: "linear-gradient(135deg, #FF00FF 0%, #8A2BE2 100%)", // Pink to Purple gradient
    size: 300, // Diameter in pixels
    orbitRadius: 400, // Distance from the center of the Header component
    initialAngleOffset: 0, // Starting angle for its orbit
    speedMultiplier: 1, // How fast this sphere rotates relative to the main animation speed
  };

  const sphere2 = {
    color: "linear-gradient(135deg, #00FFFF 0%, #1E90FF 100%)", // Cyan to Blue gradient
    size: 250,
    orbitRadius: 300,
    initialAngleOffset: 180, // Starts opposite sphere1
    speedMultiplier: 0.8, // Slower rotation
  };

  // Function to calculate the style for a sphere based on its properties and current rotation angle
  const calculateSphereStyle = (sphere, currentAngle) => {
    const angleRad =
      ((currentAngle * sphere.speedMultiplier + sphere.initialAngleOffset) *
        Math.PI) /
      180;
    const xOffset = sphere.orbitRadius * Math.cos(angleRad);
    const yOffset = sphere.orbitRadius * Math.sin(angleRad);

    return {
      width: `${sphere.size}px`,
      height: `${sphere.size}px`,
      background: sphere.color,
      // Position the sphere absolutely relative to the header's center
      // Then translate it by the calculated orbit offset and finally center the sphere itself
      top: "50%",
      left: "50%",
      transform: `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px))`,
    };
  };

  return (
    <header
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-white"
      // HAPUS background style dari <header> jika div di bawah ini yang akan menjadi background utama
      // style={{
      //   background: "linear-gradient(180deg, #3E3768 0%, #08062D 100%)",
      //   backgroundSize: "100% 100%",
      // }}
    >
      {/* Background Gradient Layer (paling belakang) */}
      {/* Tambahkan w-full h-full agar div memiliki dimensi */}
      {/* Gunakan inset-0 untuk mengisi penuh parent dengan positioning absolute */}
      {/* z-index diatur lebih rendah dari Particles, tapi tetap di belakang konten utama */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          background: "linear-gradient(180deg, #3E3768 0%, #08062D 100%)",
          backgroundSize: "100% 100%",
        }}
      ></div>

      {/* Background Particles Layer */}
      {/* Perbaiki typo h-fu menjadi h-full */}
      {/* z-index diatur lebih tinggi dari gradient background, tapi lebih rendah dari konten utama dan sphere */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Particles particleCount={180} particleSpread={10} speed={0.1} />
      </div>

      {/* Header Navigation - FIXED POSITION & SHADING */}
      <nav className="fixed-navbar">
        <img src={adeliaLogo} alt="adelia logo" className="h-6 header-logo" />{" "}
        <ul className="flex space-x-8 text-lg header-nav-links">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Project
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Landing Page Content */}
      {/* Pastikan z-index konten utama lebih tinggi dari elemen background */}
      <div className="relative z-30 text-center px-100">
        <div className="px-12">
          <h1 className="text-left text-2xl font-thin">Hi there,</h1>
          <p className="mt-8 text-left font-black text-5xl">
            I'm
            <span className="rotating-gradient-text"> adelia.</span>
          </p>
        </div>
        <h4 className="text-3xl font-thin font-poppins mt-12">
          a Full Stack Developer Specializing in AI{" "}
        </h4>
      </div>
    </header>
  );
};

export default Header;
