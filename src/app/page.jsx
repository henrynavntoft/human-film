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
    </div>
  );
};

export default BackgroundVideo;