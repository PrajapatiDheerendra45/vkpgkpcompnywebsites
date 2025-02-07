import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBullseye,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const cardData = [
    {
      icon: <FontAwesomeIcon icon={faHome} size="2x" />,
      title: "COMPANY PROFILE",
      description:
        "VRS India Manpower Solutions Private Limited (V.M.S.) are executive search and a recruitment firm working on Pan India with presence in 23 states. We specialize in understanding the client's needs and based on that we provide the suitable candidate...",
      link: "LEARN MORE",
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} size="2x" />,
      title: "COMPANY OBJECTIVE",
      description:
        "Being Accurate. We strive to be better every day and provide best of the candidate's in our clients. Being Reliable. Our yearlong roots in recruiting services has made us a reliable source for our clients as we deliver the timely services in a satisfactory manner...",
      link: "LEARN MORE",
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} size="2x" />,
      title: "COMPANY VALUES",
      description:
        "We live by our values. Our endeavour is to fulfill the promise to deliver the Quality service to our clients on time. Honesty and fairness are the virtues that you will see in our work. We value people and bring vital respect to the wealth of diverse partnerships...",
      link: "LEARN MORE",
    },
  ];

  return (
    <section className="py-12 p-16 bg-gradient-to-r from-[#a7ead0] via-[#c0e8d5] to-[#f0f0f0]">
      {" "}
      {/* Gradient background */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Added padding */}
        <div className="flex justify-between items-center mb-8">
          {" "}
          {/* Align title and button */}
          <h2 className="text-4xl font-bold">About VRS</h2>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Fraud Alert
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-x-1 space-y-2  md:space-x-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-8 transition duration-300 transform hover:scale-105 relative"
            >
              <div className="text-center mb-6">
                {" "}
                {/* Increased margin */}
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>{" "}
              {/* Increased margin */}
              <p className="text-gray-700 mb-6">{card.description}</p>{" "}
              {/* Increased margin */}
              <div className="text-center absolute bottom-6 left-1/2 -translate-x-1/2">
                {" "}
                {/* Positioned button at bottom center */}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
