import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Client {
  img: string;
  name: string;
}

const clients: Client[] = [
  { img: "/images/tata-tea.png", name: "Tata Tea" },
  { img: "/images/tcs.png", name: "TCS" },
  { img: "/images/ve-commercial.png", name: "VE Commercial" },
  { img: "/images/vivo.png", name: "Vivo" },
  { img: "/images/wns.png", name: "WNS" },
];

const OurClients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Our Prestigious Clients
      </h2>
      <div className="flex items-center relative overflow-hidden">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Scrollable Client List */}
        <div ref={scrollRef} style={{ width: '200px', height: '100px', border: '1px solid black' }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="min-w-[150px] h-24 flex items-center justify-center bg-gray-100 rounded-lg shadow-sm snap-center p-2"
            >
              <img src={client.img} alt={client.name} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default OurClients;