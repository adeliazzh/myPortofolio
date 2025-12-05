import React from "react";
import profilePhoto from "../assets/profilePhoto.jpg";
import portfolioPdf from "../assets/Portfolio.pdf";
import cvPdf from "../assets/CV_Adelia Zhafira Puspasari.pdf";

const AboutContact = () => {
  return (
    <section
      id="about"
      // Adjusted vertical padding for mobile, keeping desktop padding.
      // Added pt-24 for mobile to push content below the fixed header.
      className="relative min-h-screen flex flex-col justify-center items-center pt-0 pb-16 md:py-20
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
        <div className="w-full md:w-3/4 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left w-full mb-4 md:mb-6">
            About me.
          </h2>

          <p className="text-base md:text-lg font-light leading-relaxed mb-4 text-justify">
            Hey, my name is Adelia Zhafira
            Puspasari, an Informatics student at President University,
            specializing in AI (Machine Learning, Computer Vision, NLP). My
            passion lies in transforming innovative ideas into real-world
            applications through full-stack development!
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed mb-4 text-justify">
            and I’m always curious to learn more when it comes to new technologies and creative coding.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-blue-400 text-blue-400 text-sm md:text-base hover:bg-blue-400/10 transition-colors duration-200"
            >
              Resume
            </a>
            <a
              href={portfolioPdf}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-blue-400 text-blue-400 text-sm md:text-base hover:bg-blue-400/10 transition-colors duration-200"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <img
            src={profilePhoto}
            alt="Adelia Zhafira Puspasari"
            className="rounded-lg w-48 h-56 md:w-72 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContact;