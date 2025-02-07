import React from "react";
import { FaHandPointDown, FaHandPointUp } from "react-icons/fa";

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
            <FaHandPointDown className="text-3xl mx-auto mb-4 " />
            <p className="text-justify">
              We Create Exemplary Opportunities for Candidates & Businesses, by
              Virtue of the Wide Variety of Services We are able to Provide
              across Various Industry Verticals.
            </p>
          </div>
        </div>

        {/* Second Box - Business Enquiry */}
        <div className="relative group w-full md:w-1/3">
          <div className="w-full h-full bg-[#3F50E7] text-white text-lg font-medium p-6 rounded-lg shadow-lg transition-transform duration-700 group-hover:rotate-[360deg]">
            <FaHandPointDown className="text-3xl mx-auto mb-4" />
            <p className="text-justify">
              We are absolutely committed to finding and placing candidates into
              the best possible roles with companies based on their requirements
              & interests.
            </p>
          </div>
        </div>
      </div>

      {/* Job Hunting Section */}
      <div className="mt-8 shadow-lg flex flex-col items-center text-center md:w-1/2 mx-auto p-3">
        <h3 className="text-4xl font-bold text-gray-900">Job Hunting?</h3>
        <p className="text-gray-600 max-w-2xl mt-3 p-5">
          If you are fresh out of college, an entry-level executive, a senior
          executive, or someone in a very senior managerial role and you are
          looking for a change in your work profile, then you are at the right
          place.
        </p>
        <button className="mt-4 px-6 py-3 bg-[#28A469] text-white font-semibold rounded-lg shadow-md hover:bg-[#1F8651] transition">
          REACH OUT TO US
        </button>
      </div>
    </section>
  );
};

export default WeHire;
