"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.error("Video play failed:", error));
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover absolute top-0 left-0"
        preload="auto"
        playsInline
        muted // Muted is required for autoplay in most browsers
        loop // Loop the video
        autoPlay // Attempt to autoplay the video
      >
        <source src="/eye-connect.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay with Contact Info */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
        <div className="text-center text-white">
          <h1 className="mb-4">Human Film</h1>
          <h2 className="mb-4">cb@humanfilm.dk</h2>
          <h2 className="mb-4">+45 40 56 22 44</h2>
          <h2 className="">Thoravej 24<br></br> 2400, Copenhagen/DK</h2>
          {/* <div className="flex justify-center items-center mx-auto gap-4 my-4">
            <Link href={""} target="_blank">
              <Image
                src="/linkedin.svg"
                alt="arrow"
                width={35}
                height={25}
                className="white-filter"
              />
            </Link>

            <Link href={""} target="_blank">
              <Image
                src="/instagram.svg"
                alt="arrow"
                width={35}
                height={25}
                className="white-filter"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
