import React from "react";

const Footer = () => {
  return (
    <footer
      id="register"
      className="py-10 px-6 glass flex flex-col items-center"
    >
      <p>Contact: hackovation@event.com</p>
      <div className="flex space-x-6 mt-4">
        <a href="#" className="hover:text-yellow-300">
          Twitter
        </a>
        <a href="#" className="hover:text-yellow-300">
          Instagram
        </a>
        <a href="#" className="hover:text-yellow-300">
          LinkedIn
        </a>
      </div>
      <p className="mt-4 text-sm">
        &copy; 2025 Hackovation. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
