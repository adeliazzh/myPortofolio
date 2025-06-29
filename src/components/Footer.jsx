import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact" // ID Contact dipindahkan ke footer
      className="relative py-6 flex justify-center items-center z-10" /* Ubah 'fixed' jadi 'relative' */
      style={{
        background: '#08062D', // Warna gelap utama
        paddingLeft: '140px',
        paddingRight: '140px',
        // Hapus bottom, left, right jika tidak fixed
      }}
    >
      {/* Ikon Kontak */}
      <div className="flex justify-around items-center w-[calc(100%-280px)]">
        <a href="https://www.linkedin.com/in/adeliazhafira" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-blue-500 transition-colors duration-300 mx-4">
          <FaLinkedin />
        </a>
        <a href="https://github.com/adeliazzh" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-gray-400 transition-colors duration-300 mx-4">
          <FaGithub />
        </a>
        <a href="mailto:adeliazhafiraa@gmail.com" className="text-3xl text-white hover:text-red-500 transition-colors duration-300 mx-4">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/adeliazzh/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-pink-500 transition-colors duration-300 mx-4">
          <FaInstagram />
        </a>
      </div>

      {/* Jika Anda punya copyright/logo recreate di footer */}
      {/* <h5 className="heading-5 text-gray-500 mt-4">© 2020 Adelia Zhafira Puspasari</h5> */}
      {/* <img src={recreateLogo} alt="recreate logo" className="mt-2" /> */}
    </footer>
  );
};

export default Footer;