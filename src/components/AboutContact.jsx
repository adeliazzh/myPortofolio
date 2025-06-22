import React from 'react';
import profilePhoto from '../assets/profilePhoto.jpg'; // Your profile photo

const AboutContact = () => {
  return (
    <section id="about" className="relative h-[1024px] flex items-center justify-between px-100 py-100">
      <div className="w-1/2 pr-10 text-left">
        <h3 className="text-3xl font-bold mb-4">"The computer was born to solve problems that did not exist before."</h3>
        <p className="text-xl font-light mb-8">– Bill Gates</p>
        <p className="text-lg font-light leading-relaxed mb-4">
          This idea fuels my approach to technology. I'm Adelia Zhafira Puspasari, an Informatics student at President
          University, specializing in AI (Machine Learning, Computer Vision, NLP). My passion lies in transforming
          innovative ideas into real-world applications through full-stack development with Flutter/Dart and Laravel.
          I thrive on solving complex problems by crafting intelligent solutions, from chatbots to automated
          verification systems and engaging mobile apps.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={profilePhoto} alt="Adelia Zhafira Puspasari" className="rounded-full w-80 h-80 object-cover" />
      </div>

      {/* Contact Section */}
      <div id="contact" className="absolute bottom-40 left-100 right-100 w-[calc(100%-200px)] flex justify-around items-center">
        <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          GitHub
        </a>
        <a href="mailto:your.email@example.com" className="text-xl hover:text-red-400">
          Email
        </a>
        <a href="https://www.instagram.com/your-instagram/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-400">
          Instagram
        </a>
      </div>
    </section>
  );
};

export default AboutContact;