import React from "react";
import profilePhoto from "../assets/profilePhoto.jpg";

const AboutContact = () => {
  return (
    <section
      id="about"
      className="relative h-[1024px] flex flex-col justify-center items-center py-100"
      style={{
        paddingLeft: "140px",
        paddingRight: "140px",
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="w-3/4 text-left">
          <h2 className="text-5xl font-bold text-left w-full mb-6">
            About me.
          </h2>
          <h3 className="text-xl mb-2">
            "The computer was born to solve problems that did not exist before."
          </h3>
          <p className="text-lg font-light mb-4">– Bill Gates</p>

          <p className="text-lg font-light leading-relaxed mb-4 text-justify">
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
        <div className="w-1/2 flex justify-end items-start">
          <img
            src={profilePhoto}
            alt="Adelia Zhafira Puspasari"
            className="rounded-lg w-72 h-80 object-cover"
          />
        </div>
      </div>

      {/* Bagian kontak dipindahkan ke Footer.jsx */}
    </section>
  );
};

export default AboutContact;
