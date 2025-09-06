import React, { useState } from "react";
import logo from "../assets/Hackovation_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white/20 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Hackovation Logo" className="h-12 w-12 mr-3" />
          <span className="text-white font-bold text-2xl">Hackovation</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Timeline
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Prizes
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            FAQ
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Register
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          {isOpen ? "X" : "≡"}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white/20 backdrop-blur-md shadow-md px-6 py-4 text-white flex flex-col space-y-4 animate-fadeIn">
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Timeline
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Prizes
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            FAQ
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Register
          </li>
        </ul>
      )}

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
