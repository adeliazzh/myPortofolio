import React from "react";

const MouseScrollAnimation = () => {
  return (
    <a href="#project-showcase"> {/* Pastikan ID ini ada di ProjectShowcase */}
      <div className="mouse-scroll-container">
        {/* SVG Container for the Mouse and Animation */}
        <svg
          className="mouse-scroll-svg"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definisi Gradien */}
          <defs>
            <linearGradient
              id="animatedGradient"
              x1="0%" y1="0%" x2="100%" y2="0%"
              gradientUnits="userSpaceOnUse"
            >
              {/* Pastikan warna-warna ini kontras dengan background */}
              <stop offset="0%" stopColor="rgb(155,55,255)" /> {/* Ungu */}
              <stop offset="50%" stopColor="#00ffff" />       {/* Cyan */}
              <stop offset="75%" stopColor="#ff00ff" />       {/* Magenta */}
              <stop offset="100%" stopColor="#ff00ff" />      {/* Magenta */}
            </linearGradient>
          </defs>

          {/* Mouse Body Outline */}
          <path
            className="mouse-outline-gradient"
            d="M18.324,4.428 C18.324,4.428 18.287,14.213 18.287,14.213 C18.324,24.313 10.100,32.5 0,32.5 C0,32.5 0,32.5 0,32.5 C-10.100,32.5 -18.287,24.313 -18.287,14.213 C-18.287,14.213 -18.287,-14.213 -18.287,-14.213 C-18.287,-24.313 -10.100,-32.5 0,-32.5 C0,-32.5 0,-32.5 0,-32.5 C10.100,-32.5 18.287,-24.313 18.287,-14.213 C18.287,-14.213 18.287,7.376 18.287,7.376"
            transform="translate(36 36)"
            stroke="url(#animatedGradient)" // Pastikan ini mereferensikan ID gradien
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
          />

          {/* Scroll Indicator (purple line, animated via CSS) */}
          <path
            className="mouse-scroll-path"
            d="M0,0 L0,16.626"
            transform="translate(36,43.996)"
            stroke="#ff00ff" // Warna solid untuk garis scroll
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
          />

          {/* Down Arrow (animated via CSS) */}
          <path
            className="arrow-jump"
            d="M-24.452,3.003 C-24.452,3.003 -18.043,9.497 -18.043,9.497 C-18.043,9.497 -14.466,5.921 -12.621,3.000"
            transform="translate(54,52.246)"
            stroke="#ff00ff" // Warna solid untuk panah
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      </div>
    </a>
  );
};

export default MouseScrollAnimation;