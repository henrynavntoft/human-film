"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

const people = [
  {
    name: "CHRISTIAN BÉVORT",
    role: "EP & CEO",
    bio: "Serial start-up entrepreneur in high-end media and marketing since mid 90's.",
    linkedin: "https://www.linkedin.com/in/christian-b%C3%A9vort-84241b3/",
  },
  {
    name: "SØREN ENGBERG",
    role: "HEAD OF PRODUCTION",
    bio: "Extensive experience in spearheading leading production companies.",
    linkedin: "https://www.linkedin.com/in/s%C3%B8ren-engberg-76098444/",
  },
  {
    name: "UFFE TRUUST",
    role: "CREATIVE DIRECTOR",
    bio: "Global experience in bridging corporate strategic objectives with film storytelling.",
    linkedin: "https://www.linkedin.com/in/uffetruust/",
  },
  {
    name: "HENRIK DAHLERUP",
    role: "STATEGIC PLANNING",
    bio: "Multiple senior positions within international advertising and marketing.",
    linkedin: "https://www.linkedin.com/in/henrik-dahlerup-12520b9/",
  },
  {
    name: "RIKKE LAUMANN",
    role: "STATEGIC DESIGN",
    bio: "Senior experience from leading ad agencies and founder of own design house.",
    linkedin: "https://www.linkedin.com/in/simplyrikke/",
  },
  {
    name: "RASMUS LAUMANN",
    role: "CREATIVE",
    bio: "Creative Head of ad agencies, director at global fashion brand and founder of own agency.",
    linkedin: "https://www.linkedin.com/in/laumann/",
  },
];

const ImageBackground = () => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Function to get the image source based on the current index
  const getImageSrc = (index) => `/eye-${(index % 4) + 1}.png`; // This will cycle through 1 to 4 based on the person index

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
    <div className="fixed inset-0 w-full h-full bg-black">
      <div className="w-full h-full object-cover">
        <Image
          src={getImageSrc(currentPersonIndex)}
          alt="Background"
          width={10000}
          height={10000}
          className={`w-full h-full object-cover transition-opacity duration-300 bg-black bg-opacity-50 ${
            animate ? "opacity-0 translate-y-0" : "opacity-100 translate-y-0"
          }`}
        />
      </div>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-opacity duration-300 bg-black bg-opacity-50 ${
          animate ? "opacity-0 translate-y-0" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="text-center text-white">
          <h1 className="my-2 font-normal">
            {people[currentPersonIndex].name}
          </h1>
          <h2 className="my-2">{people[currentPersonIndex].role}</h2>
          <h3 className="max-w-lg px-8 my-2">
            {people[currentPersonIndex].bio}
          </h3>
          <div className="flex justify-center items-center mx-auto py-3">
            <a target="_blank" href={`${people[currentPersonIndex].linkedin}`}>
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={35}
                height={25}
                className="white-filter"
              />
            </a>
          </div>
        </div>
      </div>
      {currentPersonIndex > 0 && (
        <div className="fixed top-40 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToPreviousPerson}
            className="p-3 text-white rounded-full"
          >
            <Image
              alt="Previous"
              src="/arrow.svg"
              width={50}
              height={50}
              className="rotate-180 white-filter"
            />
          </button>
        </div>
      )}
      {currentPersonIndex < people.length - 1 && (
        <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNextPerson}
            className="p-3 text-white rounded-full"
          >
            <Image
              className="white-filter"
              alt="Next"
              src="/arrow.svg"
              width={50}
              height={50}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageBackground;
