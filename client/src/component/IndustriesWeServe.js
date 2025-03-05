import React from "react";

const IndustriesWeServe = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Industries We Serve – <span className="text-green-600">Tailored Solutions for Every Sector</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          At VRS Manpower Solutions, we understand that every industry has unique staffing and operational needs. That’s why we offer industry-specific solutions to help businesses, colleges, hospitals, and manufacturing units thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Industry Cards */}
          {[
            {
              title: "Colleges & Coaching Institutes",
              description: "Student admissions, teacher recruitment, and placement support.",
            },
            {
              title: "Hospitals & Healthcare",
              description: "Staffing for doctors, nurses, security, and marketing teams.",
            },
            {
              title: "Manufacturing Units",
              description: "Skilled and semi-skilled workers for production and operations.",
            },
            {
              title: "IT & Technology",
              description: "Recruitment, training, and skill development for IT professionals.",
            },
            {
              title: "Retail & Hospitality",
              description: "Staffing for customer service, sales, and management roles.",
            },
            {
              title: "Education & Training",
              description: "HR internships, live projects, and skill development programs.",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700">
            Our deep understanding of various industries ensures that we deliver the right talent and solutions for your specific needs. Partner with us for reliable, efficient, and results-driven services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;