import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png'; 
import project6 from '../assets/project6.png'; 
import project12 from '../assets/project12.png';
import project15 from '../assets/project15.png';
const FullProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      id: 'project15',
      src: project15,
      alt: 'AIFA Chatbot',
      title: 'AIFA Chatbot',
      description: 'AI For All Chatbot, Your Company’s AI Brain. Imagine if your company’s documents, SOPs, reports, and slides could talk back to you clearly, instantly, and in your language. That\'s what AIFA Chatbot is built for.',
      technologies: ['React.js', 'Ollama', 'ChromaDB'],
      link: ''
    },
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
      src: project5,
      alt: 'Space Pals',
      title: 'Space Pals',
      description: 'Space Pals is an interactive educational mobile application designed to engage children in space exploration through immersive 3D visualizations, storytelling, and collectible fun facts.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
    {
      id: 'project3',
      src: project3,
      alt: 'Object Detection',
      title: 'Object Detection',
      description: 'This computer vision project utilizes YOLOv8N and Faster R-CNN object detection models to classify waste.',
      technologies: ['YOLOv8N', 'PyTorch', 'CNN', 'OpenCV'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
    {
      id: 'project12',
      src: project12,
      alt: 'Project 12',
      title: 'Project 12',
      description: 'Description for this project will be added soon.',
      technologies: ['Coming Soon'],
      link: ''
    },
    {
      id: 'project6',
      src: project6,
      alt: 'Project 6 Title',
      title: 'Project 6 Title',
      description: 'Description for project 6. This is a placeholder description for the sixth project.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: 'https://www.linkedin.com/in/adeliazhafira17/details/projects/'
    },
  ];

  return (
    <section className="relative h-auto pt-6 pb-10 lg:pt-10 lg:pb-16 flex flex-col items-center w-full">
      <div className="w-full mb-4 sticky top-0 z-20 bg-[#08062D]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-200 text-lg md:text-xl font-medium"
          >
            <span className="mr-2 text-2xl">←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-screen-xl items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
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