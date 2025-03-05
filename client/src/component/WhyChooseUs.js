import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the unique advantages of partnering with us for your recruitment needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Job Sectors */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#4C3FB5] text-white text-lg font-semibold py-2 px-4 rounded-t-lg text-center">
            Job Sectors
          </div>
          <div className="border border-[#4C3FB5] shadow-2xl shadow-blue-500 rounded-b-lg p-4 space-y-3">
            <p className="text-gray-800 text-center mb-2">
              We specialize in a diverse range of job sectors, ensuring that we can meet the unique needs of various industries.
            </p>
            {["BPO", "Finance", "Hospitality", "IT", "Real Estate & more..."].map(
              (item, index) => (
                <div
                  key={index}
                  className="border border-[#4C3FB5] text-gray-800 text-center py-2 px-4 rounded-lg"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Functions */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#5AC59A] text-white text-lg font-semibold py-2 px-4 rounded-t-lg text-center">
            Functions
          </div>
          <div className="border border-[#5AC59A] shadow-2xl shadow-green-500 rounded-b-lg p-4 space-y-3">
            <p className="text-gray-800 text-center mb-2">
              Our recruitment services cover a wide array of functions, ensuring that we find the right talent for every role.
            </p>
            {[
              "Finance & Accounts",
              "Sales & Marketing",
              "IT & CS",
              "HR, Admin & Training",
              "Sr. Management",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#5AC59A] text-gray-800 text-center py-2 px-4 rounded-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#4C3FB5] text-white text-lg font-semibold py-2 px-4 rounded-t-lg text-center">
            Our Services
          </div>
          <div className="border border-[#4C3FB5] rounded-b-lg p-4 space-y-3 shadow-2xl shadow-blue-500">
            <p className="text-gray-800 text-center mb-2">
              We offer a comprehensive suite of services tailored to meet your recruitment needs.
            </p>
            {["BULK HIRING", "HR SOLUTIONS", "CONSULTING", "PAYROLL"].map(
              (item, index) => (
                <div
                  key={index}
                  className="border border-[#4C3FB5] text-gray-800 text-center py-2 px-4 rounded-lg"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;