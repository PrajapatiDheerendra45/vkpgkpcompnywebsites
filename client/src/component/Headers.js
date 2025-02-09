import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/VRSLOGO.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" relative">
      <div className="contact-info text-left bg-black text-white p-2 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-left">
            {" "}
            {/* Changed to flex-col and md:flex-row */}
            <div className="text-center md:text-left w-full md:w-auto">
              {" "}
              {/* Added w-full md:w-auto */}
              <p className="text-lg">📳+917566661690,📲+917314071119</p>
            </div>
            <div className="text-center md:text-left w-full md:w-auto mt-2 md:mt-0">
              {" "}
              {/* Added w-full md:w-auto and margin top */}
              <a
                href="mailto:info@manpowersolution.com"
                className="text-white hover:text-blue-300 md:ml-2 text-lg"
              >
                ✉️info@manpowersolution.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="logo">
          <img src={logo} alt="Your Logo" className="max-h-12 " />
        </div>
        <nav className="navigation">
          <ul
            className={`lg:flex space-x-6 lg:items-center transition-all duration-300 ${
              isMobileMenuOpen
                ? "flex flex-col absolute top-16 left-0 w-full bg-gray-100 shadow-md z-10 lg:hidden"
                : "hidden lg:flex"
            }`}
          >
            <li className="lg:block py-2 lg:py-0 px-4">
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
            </li>
            <li className="lg:block py-2 lg:py-0 px-4">
              <a href="/about" className="text-gray-800 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li className="lg:block py-2 lg:py-0 px-4">
              <a href="/team" className="text-gray-800 hover:text-blue-500">
                Team IMS
              </a>
            </li>
            <li className="lg:block py-2 lg:py-0 px-4">
              <a href="/services" className="text-gray-800 hover:text-blue-500">
                Services
              </a>
            </li>
            <li className="lg:block py-2 lg:py-0 px-4">
              <a href="/others" className="text-gray-800 hover:text-blue-500">
                Others
              </a>
            </li>
            <li className="lg:block py-2 lg:py-0 px-4">
              <a href="/contact" className="text-gray-800 hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="lg:hidden p-8 relative z-20"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl text-gray-800" /> // Close icon
          ) : (
            <FaBars className="text-2xl text-gray-800" /> // Open icon
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
