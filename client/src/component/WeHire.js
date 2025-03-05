import React from "react";
import { FaHandPointDown } from "react-icons/fa";

const WeHire = () => {
  return (
    <section className="py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        We Hire at Senior, Middle & Junior Management Levels
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* First Box - Job Hunting */}
        <div className="relative group w-full md:w-1/3">
          <div className="w-full h-full bg-[#5AC59A] text-white text-lg font-medium p-6 rounded-lg shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
            <FaHandPointDown className="text-3xl mx-auto mb-4" />
            <p className="text-justify">
              We create exceptional opportunities for candidates and businesses alike. Our extensive range of services spans various industry verticals, ensuring that we connect the right talent with the right roles.
            </p>
          </div>
        </div>

        {/* Second Box - Business Enquiry */}
        <div className="relative group w-full md:w-1/3">
          <div className="w-full h-full bg-[#3F50E7] text-white text-lg font-medium p-6 rounded-lg shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
            <FaHandPointDown className="text-3xl mx-auto mb-4" />
            <p className="text-justify">
              Our commitment is to find and place candidates in roles that align with their skills and aspirations. We work closely with companies to understand their specific requirements, ensuring a perfect match for both parties.
            </p>
          </div>
        </div>
      </div>

      {/* Job Hunting Section */}
      <div className="mt-8 shadow-lg flex flex-col items-center text-center md:w-1/2 mx-auto p-3">
        <h3 className="text-4xl font-bold text-gray-900">Are You Job Hunting?</h3>
        <p className="text-gray-600 max-w-2xl mt-3 p-5">
          Whether you're a recent graduate, an entry-level professional, a seasoned executive, or a senior manager seeking a new challenge, you've come to the right place. We are here to guide you through your job search journey and help you find the perfect opportunity.
        </p>
        <button className="mt-4 px-6 py-3 bg-[#28A469] text-white font-semibold rounded-lg shadow-md hover:bg-[#1F8651] transition">
          REACH OUT TO US
        </button>
      </div>
    </section>
  );
};

export default WeHire;