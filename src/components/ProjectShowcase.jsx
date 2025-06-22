import React from 'react';
import project1 from '../assets/project1.png'; // Top-Left Wide
import project2 from '../assets/project2.png'; // Top-Right Small
import project3 from '../assets/project3.png'; // Bottom-Left Small
import project4 from '../assets/project4.png'; // Bottom-Right Wide

const ProjectShowcase = () => {
  return (
    <section
      className="relative h-[1024px] py-100 flex flex-col justify-center items-center"
      style={{
        paddingLeft: '140px',
        paddingRight: '140px',
      }}
    >
      <div
        // Changed grid container height from h-[800px] to h-[600px]
        // This will make all grid items scale down proportionally.
        className="grid gap-8 w-full h-[600px]" // Adjusted height to make the whole grid smaller
        style={{
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 2fr)',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        }}
      >
        {/* Top-Left Wide Card (project1) */}
        <div className="col-span-2 row-span-1 rounded-lg overflow-hidden relative flex items-center justify-center">
          <img src={project1} alt="Project 1" className="object-cover w-full h-full" />
        </div>

        {/* Top-Right Small Card (project2) */}
        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative flex items-center justify-center">
          <img src={project2} alt="Project 2" className="object-cover w-full h-full" />
        </div>

        {/* Bottom-Left Small Card (project3) */}
        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative flex items-center justify-center">
          <img src={project3} alt="Project 3" className="object-cover w-full h-full" />
        </div>

        {/* Bottom-Right Wide Card (project4) */}
        <div className="col-span-2 row-span-1 rounded-lg overflow-hidden relative flex items-center justify-center">
          <img src={project4} alt="Project 4" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="w-full text-right mt-8">
        <a href="/another-projects-page" className="text-blue-400 hover:text-blue-600 text-xl">
          More of my projects &gt;
        </a>
      </div>
    </section>
  );
};

export default ProjectShowcase;