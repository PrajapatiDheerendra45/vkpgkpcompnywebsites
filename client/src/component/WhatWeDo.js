import React from "react";
import whatwedoimage from "../assets/images/whatdowe.jpg"; // Import your image

const WhatWeDo = () => {
  const cardData = [
    {
      title: "HR Solution",
      description:
        "Recruitment and retention are critical to sustain company's Armed Forces with the best men willing to stand in the gap & ensure best results. Social & Professional networking sites are increasingly becoming a very strong place for companies to develop their talent & recruitment plans and so there are ways in which we track some of the momentum there.",
      link: "LEARN MORE",
    },
    {
      title: "Bulk Hiring",
      description:
        "Mass recruitment or bulk hiring is when a company hires much greater number of employees than the other companies in the recruitment process. Mass recruitment often happens in such industries as technology, construction, manufacturing, hospitality. A large scale recruiting event doesn't necessarily mean sacrificing quality of hire.",
      link: "LEARN MORE",
    },
    {
      title: "Consulting",
      description:
        "Our recruiters have the experience and knowledge to understand the specific manpower needs of the companies from various industries. Another phase is the need to expand business for fast growing companies. It's crucial for recruitment team to define exactly the needs and demands of campaign to draw a suitable plan.",
      link: "LEARN MORE",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-8 text-center">What We Do</h2>
        <div className="flex flex-col md:flex-row items-start">
          {" "}
          {/* Changed to items-start */}
          <div className="md:w-1/2 px-5">
            {" "}
            {/* Added padding */}
            <img src={whatwedoimage} alt="What We Do" className="w-full" />
          </div>
          <div className="md:w-1/2 px-4">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105 h-full" // Added h-full
                >
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <div className="text-center">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      {card.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
