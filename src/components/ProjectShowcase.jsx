import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 'project1',
      src: project1,
      alt: 'OCR & Symbol Detection',
      title: 'Optical Character Recognition (OCR) for Packaging Verification',
      description: 'Developed an automated pipeline for verifying product packaging labels at PT Mattel Indonesia. The system processes digital images of product labels and requirements to detect and recognize symbols and text.',
      technologies: ['PyTorch', 'YOLOv11', 'YOLOv12', 'RF-DETR', 'Llama']
    },
    {
      id: 'project2',
      src: project3,
      alt: 'BUDI AI Chatbot',
      title: 'BUDI AI Chatbot',
      description: 'BUDI or Study Buddy Chatbot, is an AI-powered interactive learning partner designed to answer science questions and engage in casual conversation.',
      technologies: ['DialoGPT', 'Flutter', 'Dart']
    },
    {
      id: 'project3',
      src: project2,
      alt: 'Object Detection',
      title: 'Object Detection',
      description: 'This computer vision project utilizes YOLOv8N and Faster R-CNN object detection models to classify waste.',
      technologies: ['YOLOv8N', 'PyTorch', 'CNN', 'OpenCV']
    },
    {
      id: 'project4',
      src: project4,
      alt: 'TappyTale',
      title: 'TappyTale',
      description: 'Innovative educational platform designed to help busy parents engage in their children\'s growth through interactive storytelling and sensory play. The platform consists of two integrated components: an Android application and a web-based platform. (Win "Harapan 1 Android Programming at IOFEST 2025")',
      technologies: ['Flutter', 'Dart', 'RestAPI', 'Llama']
    },
  ];

  return (
    <section
      className="relative h-auto py-10 lg:py-20 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36"
    >
      <div
        className="grid gap-4 sm:gap-6 w-full max-w-screen-xl
                   grid-cols-1                /* Default: 1 column on mobile */
                   md:grid-cols-2             /* Medium screens: 2 columns */
                   lg:grid-cols-3             /* Large screens: 3 columns */
                   auto-rows-fr                /* Ensure rows take equal height */
                   min-h-[400px] md:min-h-[600px] lg:min-h-[600px]" /* Min height for the grid */
      >
        {/* Project 1: Top-Left Wide Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={projects[0].src}
            alt={projects[0].alt}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x400?text=Image+Error"; }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {projects[0].title}
            </h3>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {projects[0].technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 text-xs sm:text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2: Top-Right Small Card */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={projects[1].src}
            alt={projects[1].alt}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400?text=Image+Error"; }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {projects[1].title}
            </h3>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {projects[1].description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {projects[1].technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 text-xs sm:text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 3: Bottom-Left Small Card */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={projects[2].src}
            alt={projects[2].alt}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400?text=Image+Error"; }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {projects[2].title}
            </h3>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {projects[2].description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {projects[2].technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 text-xs sm:text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 4: Bottom-Right Wide Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={projects[3].src}
            alt={projects[3].alt}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x400?text=Image+Error"; }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {projects[3].title}
            </h3>
            <p className="text-sm sm:text-lg mb-2 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {projects[3].description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {projects[3].technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 text-xs sm:text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-right mt-8">
        <a href="/another-projects-page" className="text-blue-400 hover:text-blue-600 text-lg md:text-xl font-medium">
          More of my projects &gt;
        </a>
      </div>
    </section>
  );
};

export default ProjectShowcase;