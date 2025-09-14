import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 bg-black/70 backdrop-blur-md rounded-t-2xl text-white flex flex-col items-center mt-auto shadow-lg">
      
      {/* Contact Email */}
      <p className="mb-4 text-lg flex items-center gap-2 text-yellow-400">
        <FaEnvelope className="text-white" /> 
        <a href="mailto:ieeepels@vit.ac.in" className="hover:text-pink-400 transition-colors">
          ieeepels@vit.ac.in
        </a>
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-4 text-2xl">
        <a
          href="https://www.instagram.com/ieeepels_vitvellore/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/ieee-pels-vitv/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-300">
        &copy; 2025 Hackovation. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
