import React from 'react';
import mockupImage from '../assets/Mockup1.png';
import MouseScrollAnimation from './MouseScrollAnimation'; // Adjust path if needed

const MyProject = () => {
  return (
    <section
      id="projects"
      className="relative h-[1024px] flex items-center justify-between py-100"
      style={{
        paddingLeft: '140px',
        paddingRight: '100px',
      }}
    >
      <div className="w-1/2 pr-10 text-left">
        <h2 className="text-7xl font-bold mb-6">
          My <br /> Project
        </h2>
        <p className="text-xl font-light leading-loose mb-8">
          Developed and deployed impactful web and mobile applications using Laravel, PHP, JavaScript, Flutter, and Dart.
        </p>
        <p className="text-xl font-light leading-loose">
          Passionionate about building intelligent systems. My work integrates advanced AI techniques like Computer Vision, NLP, and Deep Learning to create smart and impactful applications.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={mockupImage} alt="Project Mockup" className="w-4/5 h-auto" />
      </div>

      <div className="absolute bottom-60 left-1/2 -translate-x-1/2 z-10">
        <MouseScrollAnimation />
      </div>
    </section>
  );
};

export default MyProject;