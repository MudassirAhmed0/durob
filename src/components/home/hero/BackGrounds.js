import React from "react";

const BackGrounds = () => {
  return (
    <div className="atwh_Full lrf1 overflow-hidden">
      <span className="atwh_Full lrf1 hero-Overlay1"></span>
      <div className="atwh_Full lrf1 z-[-1]">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default BackGrounds;
