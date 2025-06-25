import React from 'react';
import mockupImage from '../assets/Mockup1.png';

const MyProject = () => {
  return (
    <section
      id="projects"
      className="relative h-[1024px] flex items-center justify-between py-100"
      style={{
        paddingLeft: '140px',
        paddingRight: '100px',
        // Tidak perlu scroll-margin-top di sini. Akan kita tambahkan di CSS global.
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
          Passionate about building intelligent systems. My work integrates advanced AI techniques like Computer Vision, NLP, and Deep Learning to create smart and impactful applications.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {/* Adjusted image size */}
        <img src={mockupImage} alt="Project Mockup" className="w-4/5 h-auto" /> {/* Mengembalikan ke w-4/5 agar tidak terlalu besar */}
      </div>
    </section>
  );
};

export default MyProject;