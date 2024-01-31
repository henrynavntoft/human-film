"use client";

import { useEffect, useRef, useState } from "react";

const ScrollControlledVideo = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Disable the default page scroll
    document.body.classList.add("overflow-hidden");

    // Only add event listeners if the video is playing
    if (isVideoPlaying) {
      let lastTouchY = 0;

      const handleWheel = (e) => {
        const delta = e.deltaY;
        handleScroll(delta);
      };

      const handleTouchStart = (e) => {
        lastTouchY = e.touches[0].clientY;
      };

      const handleTouchMove = (e) => {
        const touchY = e.touches[0].clientY;
        const deltaY = lastTouchY - touchY;
        lastTouchY = touchY;
        handleScroll(deltaY);
      };

      const handleScroll = (delta) => {
        const video = videoRef.current;
        if (!video) return;

        // Adjust this value to control the speed of playback based on scroll
        const speed = 0.001;
        const calculatedTime = video.currentTime + delta * speed;

        // Update the video current time, clamping it within the video duration
        video.currentTime = Math.max(
          0,
          Math.min(video.duration, calculatedTime)
        );
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [isVideoPlaying]); // Re-run effect when isVideoPlaying changes

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
    <div
      className="fixed inset-0 overflow-hidden"
      onClick={() => isVideoPlaying || playVideo()}
    >
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
