import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBullseye, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AboutUs = () => {
  const cardData = [
    {
      icon: <FontAwesomeIcon icon={faHome} size="2x" />,
      title: "COMPANY PROFILE",
      description:
        "VRS India Manpower Solutions Private Limited (V.M.S.) are executive search and a recruitment firm working on Pan India with presence in 29 states. We specialize in understanding the client's needs and based on that we provide the suitable candidate...",
      link: "LEARN MORE",
      gradient: "from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4]",
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} size="2x" />,
      title: "COMPANY OBJECTIVE",
      description:
        "Being Accurate. We strive to be better every day and provide best of the candidate's in our clients. Being Reliable. Our yearlong roots in recruiting services has made us a reliable source for our clients as we deliver the timely services in a satisfactory manner...",
      link: "LEARN MORE",
      gradient: "from-[#a18cd1] via-[#fbc2eb] to-[#fbc2eb]",
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} size="2x" />,
      title: "COMPANY VALUES",
      description:
        "We live by our values. Our endeavour is to fulfill the promise to deliver the Quality service to our clients on time. Honesty and fairness are the virtues that you will see in our work. We value people and bring vital respect to the wealth of diverse partnerships...",
      link: "LEARN MORE",
      gradient: "from-[#f093fb] via-[#f5576c] to-[#f093fb]",
    },
  ];

  return (
    <section className="py-12 md:p-16 sm:-16 bg-gradient-to-r from-[#a7ead0] via-[#c0e8d5] to-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">About VRS</h2>
          <button className="bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 rounded">
            Fraud Alert
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`w-full md:w-1/3 bg-gradient-to-b ${card.gradient} rounded-lg shadow-lg p-8 relative overflow-hidden`}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 360, scale: 1.05 }}
            >
              <div className="text-center mb-6">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
              <p className="text-gray-800 mb-6 text-justify">{card.description}</p>
              <div className="text-center absolute bottom-6 left-1/2 -translate-x-1/2">
                <a href="#" className="text-gray-800 font-semibold underline hover:text-gray-200">
                  {card.link}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
