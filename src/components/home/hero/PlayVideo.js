import React, { useState } from "react";
import Image from "next/image";

const PlayVideo = ({ handleOpen, setSlideIndex, label }) => {
  return (
    <button
      data-aos="fade"
      onClick={() => {
        handleOpen();
        setSlideIndex(0);
      }}
      className="flex items-center lg:gap-x-[0.78125vw] gap-x-[6px] opacity_Hover"
    >
      <div className="relative lg:size-[2.5vw] sm:size-[30px] size-[30px] flipped">
        <Image fill alt="play" src="/images/icons/play-gif.gif" />
      </div>
      <span className="lg:text28 mtext18 text-white f700">{label}</span>
    </button>
  );
};

export default PlayVideo;
