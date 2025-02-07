import React, { useRef, useEffect } from 'react';
import bgimgherosection from "../assets/images/herosctionbgimg.jpg";

const HeroSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.offsetWidth;
      const containerWidth = marqueeRef.current.parentNode.offsetWidth;

      let currentPosition = containerWidth;

      const animate = () => {
        currentPosition -= 1;

        marqueeRef.current.style.transform = `translateX(${currentPosition}px)`;

        if (currentPosition < -marqueeWidth) {
          currentPosition = containerWidth;
        }

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <section
      className="relative h-[500px] md:h-[400px] lg:h-[700px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgimgherosection})`, filter: 'blur(0px)' }}
    >
      <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2">
        <button className="bg-green-500 hover:bg-blue-700 text-white shadow-2xl text-lg font-semibold py-4 px-8 rounded">
          Looking For a Job?
        </button>
      </div>
      <div className="absolute bottom-0 w-full  bg-gradient-to-r from-[#a7ead0] via-[#dff8ee] to-[#a7ead0]   bg-opacity-50 text-black p-3 text-sm whitespace-nowrap">
        <p className="marquee" ref={marqueeRef}>
          VRS India Manpower Solutions Pvt. Ltd. does not charge any
          consultancy fees or Registration fees from the candidates. If
          anyone asks for any charges on behalf of VRS India Manpower
          Solutions Pvt. Ltd., kindly inform us.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;