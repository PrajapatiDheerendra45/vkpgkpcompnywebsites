import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientImage from "../assets/images/ast.png";
import airtel from "../assets/images/airtel.png";
import amazone from "../assets/images/amazone.jpeg";
import ast from "../assets/images/ast.png";
import cocacola from "../assets/images/cocacola.png";
import hp from "../assets/images/hp.jpeg";
import meta from "../assets/images/meta.jpeg";
import motrola from "../assets/images/motrola.jpeg";
import samsung from "../assets/images/samsung.png";
import tata from "../assets/images/tata.png";
import logo from "../assets/images/VRSLOGO.png"

const clients = [
  // { img: airtel, name: "VE Commercial Vehicles" },
  // { img: amazone, name: "Vivo" },
  // { img: ast, name: "WNS" },
  // { img: cocacola, name: "Yash Technologies" },
  // { img: hp, name: "Acoem" },
  // { img: meta, name: "Meta" },
  // { img: motrola, name: "Motorola" },
  // { img: samsung, name: "Samsung" },
  { img: logo, name: "VRS" },
];

const OurClients = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollAmount = 200; // Adjust scroll step

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update active dot based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const index = Math.round(scrollRef.current.scrollLeft / scrollAmount);
        setActiveIndex(index);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full py-10 relative text-center bg-green-100">
      {/* Mobile Image */}
      <div className="flex justify-center bg-black items-center h-full mt-14">
        <img
          src={clientImage}
          alt="image"
          className="h-36 bg-black object-contain block md:hidden"
        />
      </div>

      {/* Heading */}
      <h2 className="md:text-4xl text-3xl font-semibold text-gray-800 mt-6 ">
        Our Prestigious Clients
      </h2>

      {/* Scrollable Clients Section */}
      <div className="relative flex items-center justify-center mt-10 px-10">
        {/* Large Screen Image */}
        <img
          src={clientImage}
          alt="image"
          className="h-72 object-contain mr-5 md:block hidden"
        />

        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="bg-white shadow-md p-3 rounded-full z-10"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>

        {/* Scrollable Client Logos */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 items-center justify-center px-10 w-[60%] scroll-smooth no-scrollbar"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center border shadow-md p-2 bg-white"
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="bg-white shadow-md p-3 rounded-full z-10"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {clients.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: index * scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            className={`h-2 w-2 rounded-full inline-block cursor-pointer transition-all ${
              index === activeIndex ? "bg-gray-900 scale-125" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Custom CSS to Hide Scrollbar Completely */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;  /* Hide scrollbar IE/Edge */
            scrollbar-width: none;  /* Hide scrollbar Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default OurClients;
