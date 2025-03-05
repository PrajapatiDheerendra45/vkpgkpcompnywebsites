import React from "react";
import whatwedoimage from "../assets/images/whatdowe.jpg"; // Import your image

const WhatWeDo = () => {
  const cardData = [
    {
      title: "HR Solution",
      description:
        "Our HR Solutions are designed to streamline your recruitment process, ensuring that you attract and retain the best talent. We leverage advanced analytics and social media platforms to identify potential candidates, assess their fit for your organization, and engage them effectively. Our team works closely with you to understand your unique needs, helping you build a strong workforce that drives your business forward.",
      link: "LEARN MORE",
    },
    {
      title: "Bulk Hiring",
      description:
        "In today's fast-paced business environment, bulk hiring is essential for companies looking to scale quickly. Our bulk hiring services focus on creating efficient recruitment strategies that allow you to hire large numbers of employees without compromising on quality. We specialize in industries such as technology, construction, and hospitality, ensuring that you have the right talent in place to meet your operational demands.",
      link: "LEARN MORE",
    },
    {
      title: "Consulting",
      description:
        "Our consulting services provide you with expert insights into your recruitment strategies. We analyze your current processes, identify gaps, and recommend tailored solutions to enhance your hiring efficiency. Whether you're a startup looking to build your team or an established company aiming to optimize your workforce, our consultants bring a wealth of experience to help you achieve your goals.",
      link: "LEARN MORE",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-8 text-center">What We Do</h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 px-5">
            <img src={whatwedoimage} alt="What We Do" className="w-full" />
          </div>
          <div className="md:w-1/2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-2xl shadow-blue-500 p-6 transition duration-300 transform hover:scale-105 h-full"
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