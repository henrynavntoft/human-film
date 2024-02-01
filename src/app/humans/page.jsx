"use client";

import React, { useRef, useEffect, useState } from "react";

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

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.error("Video play failed:", error));
    }
  }, []);

  const changePerson = (newIndex) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentPersonIndex(newIndex);
      setAnimate(false);
    }, 300); // Duration of the animation
  };

  const scrollToNextPerson = () => {
    const nextIndex = currentPersonIndex + 1;
    if (nextIndex < people.length) {
      changePerson(nextIndex);
    }
  };

  const scrollToPreviousPerson = () => {
    const prevIndex = currentPersonIndex - 1;
    if (prevIndex >= 0) {
      changePerson(prevIndex);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        preload="auto"
        playsInline
        muted
        loop
        autoPlay
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-opacity duration-300 ${
          animate ? "opacity-0 translate-y-0" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="text-center text-white">
          <h3 className="text-2xl my-2">{people[currentPersonIndex].name}</h3>
          <p className="text-xl my-2">{people[currentPersonIndex].role}</p>
          <p>{people[currentPersonIndex].bio}</p>
        </div>
      </div>
      {currentPersonIndex > 0 && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToPreviousPerson}
            className="p-3 text-white rounded-full"
          >
            ↑
          </button>
        </div>
      )}
      {currentPersonIndex < people.length - 1 && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNextPerson}
            className="p-3 text-white rounded-full"
          >
            ↓
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundVideo;
