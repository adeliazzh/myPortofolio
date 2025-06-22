import React from 'react';
import mockupImage from '../assets/Mockup1.png';

const MyProject = () => {
  return (
    <section
      id="projects"
      className="relative h-[1024px] flex items-center justify-between py-100"
      style={{
        paddingLeft: '140px', // Changed from px-100 to 140px
        paddingRight: '100px', // Retained 100px on the right
      }}
    >
      <div className="w-1/2 pr-10 text-left">
        {/* Increased text size for the main heading */}
        <h2 className="text-7xl font-bold mb-6"> {/* Changed from text-5xl to text-7xl, increased mb for spacing */}
          My <br /> Project
        </h2>
        {/* Increased text size for paragraphs and adjusted line height if necessary */}
        <p className="text-xl font-light leading-loose mb-8"> {/* Changed from text-lg to text-xl, leading-relaxed to leading-loose, increased mb */}
          Developed and deployed impactful web and mobile applications using Laravel, PHP, JavaScript, Flutter, and Dart.
        </p>
        <p className="text-xl font-light leading-loose"> {/* Changed from text-lg to text-xl, leading-relaxed to leading-loose */}
          Passionate about building intelligent systems. My work integrates advanced AI techniques like Computer Vision, NLP, and Deep Learning to create smart and impactful applications.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {/* Adjusted image size using Tailwind's w-4/5 and h-auto to maintain aspect ratio */}
        <img src={mockupImage} alt="Project Mockup" className="w-5/5 h-auto" />
      </div>
    </section>
  );
};

export default MyProject;