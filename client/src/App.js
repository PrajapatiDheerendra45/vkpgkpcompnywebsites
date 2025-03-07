import React from "react";
import Headers from "./component/Headers";
import HeroSection from "./component/HeroSection";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";

import WhatWeDo from "./component/WhatWeDo";
import WhyChooseUs from "./component/WhyChooseUs";
import WeHire from "./component/WeHire";
import WeValueTeamWork from "./component/WeValueTeamWork";
import OurClients from "./component/OurClients";
import Services from "./component/Services";
import HomePage from "./component/HomePage";
import IndustriesWeServe from "./component/IndustriesWeServe";

const App = () => {
  return (
    <>
      <Headers />
      <HeroSection />
      <HomePage />
      <AboutUs />
      <Services />

      <WhatWeDo />
      <WhyChooseUs />
      <WeHire />
      <WeValueTeamWork />
      <IndustriesWeServe />
      <OurClients />
      <Footer />

      <div className="fixed bottom-0 left-0 p-4 flex flex-col space-y-4">
        <a href="#" className="text-white hover:text-gray-300">
          <FaInstagram className="text-3xl" style={{ color: "red" }} />{" "}
          {/* Instagram color */}
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573105329757"
          className="text-white hover:text-gray-300"
        >
          <FaFacebook className="text-3xl" style={{ color: "#1877F2" }} />{" "}
          {/* Facebook color */}
        </a>
        <a
          href="https://www.linkedin.com/company/106597540/admin/dashboard/"
          className="text-white hover:text-gray-300"
        >
          <FaLinkedin className="text-3xl" style={{ color: "#0A66C2" }} />{" "}
          {/* LinkedIn color */}
        </a>
       
        <a
          href="https://wa.me/916232513226?text=Hello!%20Welcome%20to%20VRS%20Manpower%20Solutions.%20How%20can%20we%20assist%20you%20today?"
          className="text-white hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-3xl" style={{ color: "#25D366" }} />
        </a>

        {/* <a href="#" className="text-white hover:text-gray-300">
        <FaTwitter className="text-3xl" style={{ color: '#1DA1F2' }} /> Twitter color
      </a> */}
      </div>
    </>
  );
};

export default App;
