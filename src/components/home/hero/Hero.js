"use client";
import React, { useState } from "react";
import BackGrounds from "./BackGrounds";
import PlayVideo from "./PlayVideo";
import MyLightBox from "@/components/common/MyLightBox/Index";
const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showNow, setShowNow] = useState(false);
  const handleOpen = () => {
    setShowLightBox(true);
    if (!showLightBox) {
      setTimeout(() => {
        const container = document.querySelector(".lightboxContainer");
        container.classList.remove("opacity-0");
        container.classList.remove("pointer-events-none");
        setShowNow(true);
      }, 1500);
    } else {
      const container = document.querySelector(".lightboxContainer");
      container.classList.remove("opacity-0");
      container.classList.remove("pointer-events-none");
      setTimeout(() => {
        setShowNow(true);
      }, 1500);
    }
  };
  const skipSection = () => {
    window.scroll(0, window.innerHeight);
  };
  return (
    <>
      <section className="h-screen w-full relative flex items-end py180 pt-[unset]">
        <BackGrounds />
        <div className="container1680 relative z-[2] flex flex-wrap items-end justify-between gap-[30px]">
          <h1
            data-aos="fade-up"
            className="text90 lg:w-[55.9895833333vw] w-full !uppercase text-white"
          >
            Experience the <br /> Future of Logistics
          </h1>
          <PlayVideo handleOpen={handleOpen} setSlideIndex={setSlideIndex} />
        </div>
        <img
          onClick={skipSection}
          src="/images/icons/skipsection.gif"
          alt="skipsection"
          className="absolute z-[2] left-[50%] translate-x-[-50%] lg:bottom-[0.52083333333vw] bottom-[10px] w-[27px] h-[47px] lg:w-[1.92708333333vw] lg:h-[2.96875vw] cursor-pointer"
        />
      </section>
      {showLightBox && (
        <MyLightBox
          slideNo={slideIndex}
          autoPlay
          showNow={showNow}
          setShowNow={setShowNow}
          // sources={[
          //   {
          //     source: getYouTubeVideoId(youtubeLink),
          //     type: "youtube"
          //   }
          // ]}
          // sources={[{ source: "/videos/college-life-hero.mp4", type: "video" }]}
          sources={[{ source: "pQHswXwWRGE", type: "youtube" }]}
        />
      )}
    </>
  );
};

export default Hero;
