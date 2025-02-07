import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Job Sectors */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#4C3FB5] text-white text-lg font-semibold py-2 px-4 rounded-t-lg text-center">
            Job Sectors
          </div>
          <div className="border border-[#4C3FB5] rounded-b-lg p-4 space-y-3">
            {["BPO", "Finance", "Hospitality", "IT", "Real Estate & more...."].map(
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
          <div className="border border-[#5AC59A] rounded-b-lg p-4 space-y-3">
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
          <div className="border border-[#4C3FB5] rounded-b-lg p-4 space-y-3">
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
