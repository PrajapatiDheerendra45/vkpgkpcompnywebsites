import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { BiSolidPhoneCall } from "react-icons/bi";

import { Building, MapPin } from "lucide-react";
import { FaHome } from "react-icons/fa";

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
          <h2 className="text-6xl font-bold mb-4">Get in touch with us</h2>
          <p className="text-2xl mb-2 mt-5 mb-5">INDIA VRS MANPOWER SOLUTIONS PVT LTD</p>
          <p className="text-sm">
            AN ISO 9001:2015 CERTIFIED RECRUITMENT COMPANY
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 mb-8">
          {" "}
          {/* Responsive flexbox */}
          <div className="flex flex-col items-center">
            <FaHome  icon={faPhoneAlt} className="text-2xl mb-2" />
            <p className="md:hidden">PHONE</p>
            <p className="hidden md:block">PHONE</p>
            <p>+91-731-4071119</p>
          </div>
          <div className="flex flex-col items-center">
            <BiSolidPhoneCall icon={faMobileAlt} className="text-2xl mb-2" />
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
            <div className="text-center text-black grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Corporate Office */}
      <div className="bg-gradient-to-br from-indigo-100 to-indigo-300 border border-indigo-400 shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <Building className="w-10 h-10 text-indigo-700 mb-3" />
          <h4 className="font-bold text-xl text-indigo-700 mb-2">
            Corporate Office
          </h4>
          <p className="text-gray-800 font-medium">
            VRS India Manpower Solutions Pvt. Ltd.
          </p>
          <p className="text-gray-700">233-241, 2nd Floor, Orbit Mall</p>
          <p className="text-gray-700">Near C-21 Mall, MR9 Square</p>
          <p className="text-gray-700">Vijay Nagar, Indore, MP - 452010</p>
        </div>
      </div>

      {/* Branch Office */}
      <div className="bg-gradient-to-br from-teal-100 to-teal-300 border border-teal-400 shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <MapPin className="w-10 h-10 text-teal-700 mb-3" />
          <h4 className="font-bold text-xl text-teal-700 mb-2">
            Branch Office
          </h4>
          <p className="text-gray-800 font-medium">
            VRS India Manpower Solutions Pvt. Ltd.
          </p>
          <p className="text-gray-700">Office No. 264, 2nd Floor, Orbit Mall</p>
          <p className="text-gray-700">Near C-21 Mall, Vijay Nagar</p>
          <p className="text-gray-700">Indore, MP - 452010</p>
        </div>
      </div>
    </div>
          </div>
        </div>
        <div className="text-center mt-8">
          {" "}
          {/* Copyright notice */}
          <p className="text-gray-200">
            Copyright © 2023 India VRS Manpower Solutions Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
