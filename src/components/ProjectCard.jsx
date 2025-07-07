import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[804px] h-[344px] overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gambar Proyek */}
      <img
        src={project.src}
        alt={project.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay dengan Detail Proyek */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6 text-white transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          {project.title}
        </h3>
        <p className="text-md md:text-lg text-center mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-300 hover:text-blue-100 text-lg font-medium"
          >
            Learn More &gt;
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;