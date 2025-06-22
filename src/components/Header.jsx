import React from 'react';
import Particles from './Particles'; // Assuming Particles.jsx is in the same folder
import adeliaLogo from '../assets/adelia.png'; // Your adelia.png logo
import gradientVideo from '../assets/gradientVideo.mp4'; // Your gradientVideo.mp4

const Header = () => {
  return (
    <header
      id="home" // Added id for navigation linking
      className="relative h-[1024px] overflow-hidden flex flex-col justify-center items-center text-white"
      style={{
        background: 'linear-gradient(180deg, #3E3768 0%, #08062D 100%)',
        backgroundSize: '100% 100%', // Ensure gradient covers the area
      }}
    >
      {/* Particles Background - Ensure this is behind content */}
      {/* <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute inset-0 z-0" // Position absolute and lower z-index
      /> */}

      {/* Header Navigation - Remains on top */}
      <nav className="absolute top-40 left-100 right-100 flex justify-between items-center w-[calc(100%-200px)] z-20">
        <img src={adeliaLogo} alt="adelia logo" className="h-8 header-logo" /> {/* Adjust height as needed */}
        <ul className="flex space-x-8 text-lg header-nav">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Project</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
        </ul>
      </nav>

      {/* Landing Page Content - Positioned relative to the header and above particles */}
      <div className="relative z-10 text-center px-100"> {/* Removed transform translateY since it's now flex centered */}
        <h5 className="text-xl font-light mb-2 font-poppins">Hi there,</h5>

        {/* I'm adelia. text with video gradient effect */}
        <div className="text-container">
          <video autoPlay playsInline muted loop preload="auto" className="video-background">
            <source src={gradientVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Your custom SVG for "adelia." - the path data is crucial */}
          <svg className="text-mask-svg" viewBox="0 12.449999809265137 172.89999389648438 40.45000076293945" data-asc="1.05" width="172.89999389648438" height="40.45000076293945">
            <defs/>
            <g>
              {/* Fill with white or any solid color for the SVG shape itself. 
                  The blend mode in CSS will make the video show through this shape. */}
              <path fill="#ffffff" d="M0 38.50Q0 34.20 1.63 30.95Q3.25 27.70 6.05 25.95Q8.85 24.20 12.30 24.20Q15.25 24.20 17.48 25.40Q19.70 26.60 20.90 28.55L20.90 24.60L29.45 24.60L29.45 52.50L20.90 52.50L20.90 48.55Q19.65 50.50 17.43 51.70Q15.20 52.90 12.25 52.90Q8.85 52.90 6.05 51.13Q3.25 49.35 1.63 46.08Q0 42.80 0 38.50M20.90 38.55Q20.90 35.35 19.13 33.50Q17.35 31.65 14.80 31.65Q12.25 31.65 10.47 33.47Q8.70 35.30 8.70 38.50Q8.70 41.70 10.47 43.58Q12.25 45.45 14.80 45.45Q17.35 45.45 19.13 43.60Q20.90 41.75 20.90 38.55ZM33.95 38.50Q33.95 34.20 35.58 30.95Q37.20 27.70 40.00 25.95Q42.80 24.20 46.25 24.20Q49 24.20 51.28 25.35Q53.55 26.50 54.85 28.45L54.85 15.50L63.40 15.50L63.40 52.50L54.85 52.50L54.85 48.50Q53.65 50.50 51.43 51.70Q49.20 52.90 46.25 52.90Q42.80 52.90 40.00 51.13Q37.20 49.35 35.58 46.08Q33.95 42.80 33.95 38.50M54.85 38.55Q54.85 35.35 53.08 33.50Q51.30 31.65 48.75 31.65Q46.20 31.65 44.43 33.47Q42.65 35.30 42.65 38.50Q42.65 41.70 44.43 43.58Q46.20 45.45 48.75 45.45Q51.30 45.45 53.08 43.60Q54.85 41.75 54.85 38.55ZM95.90 38.10Q95.90 39.30 95.75 40.60L76.40 40.60Q76.60 43.20 78.08 44.58Q79.55 45.95 81.70 45.95Q84.90 45.95 86.15 43.25L95.25 43.25Q94.55 46 92.72 48.20Q90.90 50.40 88.15 51.65Q85.40 52.90 82 52.90Q77.90 52.90 74.70 51.15Q71.50 49.40 69.70 46.15Q67.90 42.90 67.90 38.55Q67.90 34.20 69.67 30.95Q71.45 27.70 74.65 25.95Q77.85 24.20 82 24.20Q86.05 24.20 89.20 25.90Q92.35 27.60 94.13 30.75Q95.90 33.90 95.90 38.10M87.15 35.85Q87.15 33.65 85.65 32.35Q84.15 31.05 81.90 31.05Q79.75 31.05 78.28 32.30Q76.80 33.55 76.45 35.85L87.15 35.85ZM108.95 15.50L108.95 52.50L100.40 52.50L100.40 15.50L108.95 15.50ZM119.45 21.70Q117.20 21.70 115.77 20.38Q114.35 19.05 114.35 17.10Q114.35 15.10 115.77 13.77Q117.20 12.45 119.45 12.45Q121.65 12.45 123.08 13.77Q124.50 15.10 124.50 17.10Q124.50 19.05 123.08 20.38Q121.65 21.70 119.45 21.70M123.70 24.60L123.70 52.50L115.15 52.50L115.15 24.60L123.70 24.60ZM128.20 38.50Q128.20 34.20 129.82 30.95Q131.45 27.70 134.25 25.95Q137.05 24.20 140.50 24.20Q143.45 24.20 145.68 25.40Q147.90 26.60 149.10 28.55L149.10 24.60L157.65 24.60L157.65 52.50L149.10 52.50L149.10 48.55Q147.85 50.50 145.63 51.70Q143.40 52.90 140.45 52.90Q137.05 52.90 134.25 51.13Q131.45 49.35 129.82 46.08Q128.20 42.80 128.20 38.50M149.10 38.55Q149.10 35.35 147.32 33.50Q145.55 31.65 143 31.65Q140.45 31.65 138.68 33.47Q136.90 35.30 136.90 38.50Q136.90 41.70 138.68 43.58Q140.45 45.45 143 45.45Q145.55 45.45 147.32 43.60Q149.10 41.75 149.10 38.55ZM167.85 52.90Q165.60 52.90 164.18 51.58Q162.75 50.25 162.75 48.30Q162.75 46.30 164.18 44.95Q165.60 43.60 167.85 43.60Q170.05 43.60 171.47 44.95Q172.90 46.30 172.90 48.30Q172.90 50.25 171.47 51.58Q170.05 52.90 167.85 52.90Z"/>
            </g>
          </svg>
          {/* This span acts as a placeholder to retain text size/layout if SVG fails, 
              but the color is transparent so the video shows through. */}
          <span className="font-bold text-mask-span">I'm adelia.</span>
        </div>

        <h4 className="text-2xl font-light font-poppins">a Full Stack Developer Specializing in AI</h4>
      </div>
    </header>
  );
};

export default Header;