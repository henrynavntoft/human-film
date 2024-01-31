"use client";

import React, { useRef, useEffect } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.error("Video play failed:", error));
    }
  }, []);

  // Array of people with their information
  const people = [
    {
      name: "Christian Bévort",
      role: "EP & CEO",
      bio: "Serial start-up entrepreneur in high-end media and marketing since mid 90's.",
    },
    {
      name: "Søren Engberg",
      role: "Head of Production",
      bio: "Extensive experience in spearheading leading production companies.",
    },
    {
      name: "Uffe Truust",
      role: "Creative Director",
      bio: "Global experience in bridging corporate strategic objectives with film storytelling.",
    },
    {
      name: "Henrik Dahlerup",
      role: "Strategic Planning",
      bio: "Multiple senior positions within international advertising and marketing.",
    },
    {
      name: "Rikke Laumann",
      role: "Strategic Design",
      bio: "Senior experience from leading ad agencies and founder of own design house.",
    },
    {
      name: "Rasmus Laumann",
      role: "Creative",
      bio: "Creative Head of ad agencies, director at global fashion brand and founder of own agency.",
    },
  ];

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover absolute top-0 left-0"
        preload="auto"
        playsInline
        muted // Muted is required for autoplay in most browsers
        loop // Loop the video
        autoPlay // Attempt to autoplay the video
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay with Contact Info */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl mb-8">HUMANS</h2>
          <div className="grid grid-cols-3 mx-8 gap-4 ">
            {people.map((person, index) => (
              <div key={index} className="  ">
                <h3 className="text-2xl my-2 ">{person.name}</h3>
                <p className="text-xl my-2">{person.role}</p>
                <p className="">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
