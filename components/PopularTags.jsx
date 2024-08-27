import Image from "next/image";
import React from "react";

export default function PopularTags() {
  // Array of icon names and corresponding tags
  const icons = [
    { src: "/icons8-instagram.svg", label: "Instagram" },
    { src: "/icons8-facebook.svg", label: "Facebook" },
    { src: "/icons8-twitter.svg", label: "Twitter" },
    { src: "/icons8-linkedin.svg", label: "LinkedIn" },
    { src: "/icons8-whatsapp.svg", label: "Whatsapp" }
  ];

  return (
    <section>
      <div className="flex items-center space-x-3">
        <h2 className="text-[#1b1b1b] font-bold">Popular now:</h2>
        {icons.map((icon, index) => (
          <button key={index} className="flex items-center border rounded-full px-5 py-2 space-x-1">
            <Image src={icon.src} width={20} height={20} alt={icon.label} />
            <span className="text-[#1b1b1b] text-md">{icon.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
