import React from 'react';
import mockupImage from '../assets/Mockup1.png';
import MouseScrollAnimation from './MouseScrollAnimation';

const MyProject = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-0 py-16 md:py-24
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32" // Adjusted vertical padding
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-10 text-left mb-12 md:mb-0"> {/* Changed text-center to text-left, adjusted mb */}
        <h2 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6">
          My <br /> Project
        </h2>
        <p className="text-base md:text-xl font-light leading-relaxed mb-4 md:mb-8 text-left"> {/* Explicitly text-left */}
          Developed and deployed impactful web and mobile applications using Laravel, PHP, JavaScript, Flutter, and Dart.
        </p>
        <p className="text-base md:text-xl font-light leading-relaxed text-left"> {/* Explicitly text-left */}
          Passionate about building intelligent systems. My work integrates advanced AI techniques like Computer Vision, NLP, and Deep Learning to create smart and impactful applications.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"> {/* Added mt-8 for mobile spacing */}
        <img
          src={mockupImage}
          alt="Project Mockup"
          className="w-4/5 max-w-sm md:max-w-none md:w-4/5 h-auto object-contain" // Added max-w-sm and object-contain
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x600?text=Mockup+Image+Error"; }}
        />
      </div>

      {/* Mouse Scroll Animation - HIDDEN ON SMALL SCREENS, VISIBLE ON MD AND UP */}
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <MouseScrollAnimation />
      </div>
    </section>
  );
};

export default MyProject;