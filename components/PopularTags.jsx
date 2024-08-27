import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function PopularTags() {
  const icons = [
    { src: "/icons8-instagram.svg", label: "Instagram" },
    { src: "/icons8-facebook.svg", label: "Facebook" },
    { src: "/icons8-twitter.svg", label: "Twitter" },
    { src: "/icons8-linkedin.svg", label: "LinkedIn" },
    { src: "/icons8-whatsapp.svg", label: "Whatsapp" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? icons.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === icons.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section>
      <div className="flex items-center   space-x-3">
        <h2 className="text-[#1b1b1b] font-bold text-nowrap">Popular now:</h2>

        {/* Slider for smaller screens */}
        <div className=" sm:hidden flex items-center space-x-2">
          <button onClick={handlePrevClick} className="p-2 rounded-full border">
            <IoIosArrowDropleft className="text-[#1b1b1b]" size={24} />
          </button>

          <div className="flex items-center border rounded-full px-5 py-2 space-x-1">
            <Image src={icons[currentIndex].src} width={20} height={20} alt={icons[currentIndex].label} />
            <span className="text-[#1b1b1b] text-md text-nowrap">{icons[currentIndex].label}</span>
          </div>

          <button onClick={handleNextClick} className="p-2 rounded-full border">
            <IoIosArrowDropright className="text-[#1b1b1b]" size={24} />
          </button>
        </div>

        {/* Full list for larger screens */}
        <div className="hidden sm:flex items-center space-x-3">
          {icons.map((icon, index) => (
          <button
          key={index}
          className={`${(index === 3 || index === 4) ? 'hidden md:flex' : 'flex'} items-center border rounded-full px-5 py-2 space-x-1`}
        >

              <Image src={icon.src} width={20} height={20} alt={icon.label} />
              <span className="text-[#1b1b1b] text-md text-nowrap">{icon.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
