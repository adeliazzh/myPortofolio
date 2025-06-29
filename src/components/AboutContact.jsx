import React from "react";
import profilePhoto from "../assets/profilePhoto.jpg";

const AboutContact = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center py-10 md:py-20
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32" /* Responsive padding */
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
        <div className="w-full md:w-3/4 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left w-full mb-4 md:mb-6">
            About me.
          </h2>
          <h3 className="text-lg md:text-xl mb-2">
            "The computer was born to solve problems that did not exist before."
          </h3>
          <p className="text-base md:text-lg font-light mb-4 text-justify">
            – Bill Gates
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed mb-4 text-justify">
            This idea fuels my approach to technology. I'm Adelia Zhafira
            Puspasari, an Informatics student at President University,
            specializing in AI (Machine Learning, Computer Vision, NLP). My
            passion lies in transforming innovative ideas into real-world
            applications through full-stack development with Flutter/Dart and
            Laravel. I thrive on solving complex problems by crafting
            intelligent solutions, from chatbots to automated verification
            systems and engaging mobile apps.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <img
            src={profilePhoto}
            alt="Adelia Zhafira Puspasari"
            className="rounded-lg w-48 h-56 md:w-72 md:h-80 object-cover" /* Responsive image size */
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContact;