import React from "react";

const WeValueTeamWork = () => {
  return (
    <section className="relative bg-[#f3fbf7] py-16 px-6 md:px-16">
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
            We Value <span className="text-green-600">Teamwork</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 my-4"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At VRS Manpower Solutions Pvt. Ltd., we believe that teamwork is the cornerstone of our success. We take great pride in fostering a collaborative environment where every employee feels valued and empowered to contribute their best.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            Our commitment to creating a positive work atmosphere is reflected in our clean, bright, and spacious office. With ample natural light and comfortable seating, we ensure that our employees have the ideal setting to thrive. We also equip our team with the latest technology and tools, enabling them to perform at their highest potential.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            By prioritizing teamwork and employee well-being, we not only enhance productivity but also cultivate a culture of innovation and mutual support. Together, we achieve great things!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeValueTeamWork;