import React from 'react';
import mockupImage from '../assets/Mockup1.png';
import MouseScrollAnimation from './MouseScrollAnimation';

const MyProject = () => {
  return (
    <section
      id="projects"
      // Hapus h-[1024px] jika tidak benar-benar diperlukan dan menyebabkan masalah
      // Gunakan min-h-screen untuk memastikan section setidaknya setinggi viewport
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between py-10 md:py-20
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32" /* Responsive padding */
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-10 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6">
          My <br /> Project
        </h2>
        <p className="text-base md:text-xl font-light leading-relaxed mb-4 md:mb-8">
          Developed and deployed impactful web and mobile applications using Laravel, PHP, JavaScript, Flutter, and Dart.
        </p>
        <p className="text-base md:text-xl font-light leading-relaxed">
          Passionate about building intelligent systems. My work integrates advanced AI techniques like Computer Vision, NLP, and Deep Learning to create smart and impactful applications.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={mockupImage} alt="Project Mockup" className="w-4/5 max-w-xs md:max-w-none md:w-4/5 h-auto" />
      </div>

      {/* Mouse Scroll Animation - HIDDEN ON SMALL SCREENS, VISIBLE ON MD AND UP */}
      {/* Tambahkan kelas 'hidden md:block' pada div ini */}
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <MouseScrollAnimation />
      </div>
    </section>
  );
};

export default MyProject;