import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png'; 
import project6 from '../assets/project6.png'; 


const FullProject = () => {
  const projects = [
    {
      id: 'project1',
      src: project1,
      alt: 'OCR & Symbol Detection',
      title: 'Optical Character Recognition (OCR) for Packaging Verification',
      description: 'Developed an automated pipeline for verifying product packaging labels at PT Mattel Indonesia. The system processes digital images of product labels and requirements to detect and recognize symbols and text.',
      technologies: ['PyTorch', 'YOLOv11', 'YOLOv12', 'RF-DETR', 'Llama'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
    {
      id: 'project2',
      src: project3,
      alt: 'BUDI AI Chatbot',
      title: 'BUDI AI Chatbot',
      description: 'BUDI or Study Buddy Chatbot, is an AI-powered interactive learning partner designed to answer science questions and engage in casual conversation.',
      technologies: ['DialoGPT', 'Flutter', 'Dart'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
    {
      id: 'project3',
      src: project2,
      alt: 'Object Detection',
      title: 'Object Detection',
      description: 'This computer vision project utilizes YOLOv8N and Faster R-CNN object detection models to classify waste.',
      technologies: ['YOLOv8N', 'PyTorch', 'CNN', 'OpenCV'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
    {
      id: 'project4',
      src: project4,
      alt: 'TappyTale',
      title: 'TappyTale',
      description: 'Innovative educational platform designed to help busy parents engage in their children\'s growth through interactive storytelling and sensory play. The platform consists of two integrated components: an Android application and a web-based platform. (Win "Harapan 1 Android Programming at IOFEST 2025")',
      technologies: ['Flutter', 'Dart', 'RestAPI', 'Llama'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
    {
      id: 'project5',
      src: project5, // Make sure to have project5.png in your assets folder
      alt: 'Project 5 Title',
      title: 'Project 5 Title',
      description: 'Description for project 5. This is a placeholder description for the fifth project.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/' // Update with actual link
    },
    {
      id: 'project6',
      src: project6, // Make sure to have project6.png in your assets folder
      alt: 'Project 6 Title',
      title: 'Project 6 Title',
      description: 'Description for project 6. This is a placeholder description for the sixth project.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/' // Update with actual link
    },
  ];

  return (
    <section className="relative h-auto py-10 lg:py-20 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-screen-xl">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 block"
            style={{ width: '804px', height: '344px' }} // Fixed size for each grid item
          >
            <img
              src={project.src}
              alt={project.alt}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/804x344?text=Image+Error"; }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-sm sm:text-lg mb-2 sm:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 text-xs sm:text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FullProject;