"use client";

import { useEffect, useRef, useState } from "react";

const ScrollControlledVideo = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Existing useEffect code here for scroll control

  const playVideo = () => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch((error) => console.error("Video play failed:", error));
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      {!isVideoPlaying && (
        <button
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white bg-black bg-opacity-50"
          onClick={playVideo}
        >
          Play
        </button>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        preload="auto"
        playsInline
        muted
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default ScrollControlledVideo;
