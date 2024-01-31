"use client";

import { useEffect, useRef } from "react";

const ScrollControlledVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Disable the default page scroll
    document.body.classList.add("overflow-hidden");

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
      video.currentTime = Math.max(0, Math.min(video.duration, calculatedTime));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      // Restore page scroll
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
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
