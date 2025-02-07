import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // ... (Your form submission logic here)
  };

  return (
    <footer className="bg-gradient-to-r from-[#4446AA] via-[#5153BA] to-[#5D5FEA] py-8 md:py-12 text-white">
      {" "}
      {/* Gradient background, padding */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Container for centering */}
        <div className="text-center mb-8">
          {" "}
          {/* Main heading */}
          <h2 className="text-4xl font-bold mb-4">Get in touch with us</h2>
          <p className="text-lg mb-2">INDIA MANPOWER SOLUTIONS PVT LTD</p>
          <p className="text-sm">
            AN ISO 9001:2015 CERTIFIED RECRUITMENT COMPANY
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 mb-8">
          {" "}
          {/* Responsive flexbox */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl mb-2" />
            <p className="md:hidden">PHONE</p>
            <p className="hidden md:block">PHONE</p>
            <p>+91-731-4071119</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMobileAlt} className="text-2xl mb-2" />
            <p className="md:hidden">MOBILE</p>
            <p className="hidden md:block">MOBILE</p>
            <p>+91-7566661930</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl mb-2" />
            <p className="md:hidden">MAIL</p>
            <p className="hidden md:block">MAIL</p>
            <p>info@indiamanpowersolution.com</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#a7ead0] via-[#dff8ee] to-[#a7ead0] rounded-lg shadow-md py-8 px-4 md:px-16">
          {" "}
          {/* White section with padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Grid layout */}
            <div className="">
              <div className="  text-black rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                <h3 className="text-2xl font-extrabold mb-6 text-center text-indigo-600">
                  Contact Us
                </h3>
                <form className="space-y-4">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 hover:border-indigo-500"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="Your Mobile Number"
                      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 hover:border-indigo-500"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 hover:border-indigo-500"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 hover:border-indigo-500"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      11 + 2 =
                    </label>
                    <input
                      type="text"
                      className="w-20 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 hover:border-indigo-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center text-black grid grid-cols-4 md:grid-cols-2 gap-6 text-black ">
              <div className=" rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-bold text-lg mb-3 text-indigo-600">
                  CORPORATE OFFICE
                </h4>
                <p>IMS India Manpower Solutions Pvt. Ltd.,</p>
                <p>233-241, 2nd floor, Orbit Mall A.B. Road,</p>
                <p>Near C-21 Mall, MR9 Square, Vijay Nagar,</p>
                <p>Indore, Madhya Pradesh 452010</p>
              </div>

              {/* Branch Office */}
              <div className=" rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-bold text-lg mb-3 text-indigo-600">
                  BRANCH OFFICE
                </h4>
                <p>IMS India Manpower Solutions Pvt. Ltd.,</p>
                <p>Office No. 264, 2nd floor, Orbit Mall,</p>
                <p>A.B. Road, Near C-21 Mall, Vijay Nagar,</p>
                <p>Indore, Madhya Pradesh 452010</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          {" "}
          {/* Copyright notice */}
          <p className="text-gray-200">
            Copyright © 2023 India Manpower Solutions Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
