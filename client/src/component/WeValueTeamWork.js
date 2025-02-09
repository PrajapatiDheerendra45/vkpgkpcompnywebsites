import React from "react";

const WeValueTeamWork = () => {
  return (
    <section className="relative bg-[#f3fbf7] py-16 px-6 md:px-16">
      {/* Background Pattern */}
   

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Video Embed */}
        <div className="w-full md:w-1/3 flex justify-center">
          <iframe
            className="w-full max-w-sm md:max-w-xs rounded-lg shadow-lg"
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/XfS_75M5QVY"
            title="Team IMS"
            allowFullScreen
          ></iframe>
        </div>
        

        {/* Text Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-gray-900">
            We Value <span className="text-green-600">Team Work</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 my-4"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At  VRS Manpower Solutions Pvt. Ltd., we take great pride in
            providing our employees with exceptional working conditions. We
            understand that a positive work environment is crucial for
            productivity and job satisfaction, which is why we go above and
            beyond to ensure that our employees feel valued and supported.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            Our office space is clean, bright, and spacious, with plenty of
            natural light and comfortable seating. We also provide our employees
            with the latest technology and equipment to help them perform their
            job to the best of their abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeValueTeamWork;
