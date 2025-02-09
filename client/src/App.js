import React from 'react'
import Headers from './component/Headers'
import HeroSection from './component/HeroSection'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';

import WhatWeDo from './component/WhatWeDo';
import WhyChooseUs from './component/WhyChooseUs';
import WeHire from './component/WeHire';
import WeValueTeamWork from './component/WeValueTeamWork';
import OurClients from './component/OurClients';

const App = () => {
  return (
    <>
     <Headers/>
     <HeroSection/>
     <AboutUs/>
   
     <WhatWeDo/>
     <WhyChooseUs/>
     <WeHire/>
     <WeValueTeamWork/>
     <OurClients/>
     <Footer/>
    

     <div className="fixed bottom-0 left-0 p-4 flex flex-col space-y-4"> 
      <a href="#" className="text-white hover:text-gray-300">
        <FaInstagram  className="text-3xl" style={{ color: 'red' }} /> {/* Instagram color */}
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaFacebook className="text-3xl" style={{ color: '#1877F2' }} /> {/* Facebook color */}
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaLinkedin className="text-3xl" style={{ color: '#0A66C2' }} /> {/* LinkedIn color */}
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaWhatsapp className="text-3xl" style={{ color: '#25D366' }} /> {/* WhatsApp color */}
      </a>
      <a href="#" className="text-white hover:text-gray-300">
        <FaTwitter className="text-3xl" style={{ color: '#1DA1F2' }} /> {/* Twitter color */}
      </a>
    </div>
    </>
  )
}

export default App
