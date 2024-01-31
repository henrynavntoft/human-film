"use client";

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
          <h2 className="text-4xl mb-4">Contact Us</h2>
          <p className="text-xl mb-2">Email: contact@example.com</p>
          <p className="text-xl">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
