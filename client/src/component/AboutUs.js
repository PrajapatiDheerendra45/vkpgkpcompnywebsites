import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartLine, faShieldAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AboutUs = () => {
  const cardData = [
    {
      icon: <FontAwesomeIcon icon={faUsers} size="2x" />,
      title: "Experience",
      description:
        "Years of expertise in manpower and HR solutions, ensuring quality recruitment and business success.",
      gradient: "from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4]",
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} size="2x" />,
      title: "Diverse Services",
      description:
        "From staffing to skill development, we offer comprehensive solutions tailored to your needs.",
      gradient: "from-[#a18cd1] via-[#fbc2eb] to-[#fbc2eb]",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} size="2x" />,
      title: "Transparency",
      description:
        "Honest and reliable services with a client-centric approach you can trust.",
      gradient: "from-[#a8edea] via-[#fed6e3] to-[#a8edea]", // Soft Aqua & Pink
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} size="2x" />,
      title: "Client-Centric Approach",
      description:
        "We listen, understand, and deliver solutions that align with your business needs and goals.",
      gradient: "from-[#f6d365] via-[#fda085] to-[#f6d365]", // Light Gold & Peach
    },
    
  ];

  return (
    <section id="about" className="py-12 px-6 bg-gradient-to-r from-[#a7ead0] via-[#c0e8d5] to-[#f0f0f0] text-gray-900">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-4xl font-bold mb-4">About VRS Manpower Solutions</h2>
        <p className="text-lg mb-6">
          At VRS Manpower Solutions, we are more than just a recruitment agency – we are your partners in growth.
          Founded with a vision to bridge the gap between talent and opportunity, we have grown into a trusted name in manpower solutions.
        </p>
        <p className="text-lg mb-10">
          Our mission is to provide innovative, reliable, and customized solutions for businesses, colleges, hospitals, and manufacturing units.
          From recruitment to training and consulting, we are committed to delivering excellence at every step.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-b ${card.gradient} rounded-lg shadow-lg p-6 text-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-800">{card.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-lg font-medium text-gray-900">
          Join hands with VRS Manpower Solutions and experience the difference of working with a team that truly cares about your success.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;