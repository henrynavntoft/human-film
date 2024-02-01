"use client";

import { useEffect, useRef, useState } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.error("Video play failed:", error));
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let videoSource, videoClass;
  if (windowWidth < 600) {
    videoSource = "/mobile-video.mp4";
    videoClass = "object-cover h-full w-full"; // Adjust as needed for vertical video
  } else if (windowWidth < 1000) {
    videoSource = "/tablet-video.mp4";
    videoClass = "w-full h-full object-cover";
  } else {
    videoSource = "/video.mp4";
    videoClass = "w-full h-full object-cover";
  }

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 ${videoClass}`}
        preload="auto"
        playsInline
        muted
        loop
        autoPlay
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
