"use client";
import ContentWrapper from "@/components/common/ContentWrapper";
import ImageComponent from "@/components/common/ImageComponent";
import Lottie from "react-lottie-player";
import mapEnDesktop from "../../../../public/json/map-english-desktop.json";
import mapARDesktop from "../../../../public/json/map-arabic-desktop.json";
import mapEnMobile from "../../../../public/json/map-english-mob.json";
import mapARMobile from "../../../../public/json/map-arabic-mob.json";
import React from "react";

const Operations = ({ data, arabic }) => {
  return (
    <section className="lg:mt-[-10.8333333333vw] sm:mt-[-16vw] mt-[-28vw]">
      <div className=" w-full bg-[#002B87] relative flex items-end lg:pt-[27.8125vw] sm:pt-[350px] pt-[250px] lg:pb-[18.8020833333vw] sm:pb-[250px] pb-[150px]">
        <div className="atwh_Full lrf1 overflow-hidden">
          <div className="atwh_Full lrf1">
            <span className="operation_Overlay1 atwh_Full lrf1"></span>
            <span className="operation_Overlay2 atwh_Full lrf1"></span>
            <span className="operation_Overlay3 atwh_Full lrf1"></span>
          </div>
          <div className="atwh_Full lrf1 hidden sm:block ">
            {/* <ImageComponent src="/images/home/operations/map.svg" alt="map" /> */}
            <Lottie
              loop
              animationData={arabic ? mapARDesktop : mapEnDesktop}
              play
              className="
              w-full h-full"
            />
          </div>
          <div className="atwh_Full lrf1  sm:hidden ">
            {/* <ImageComponent src="/images/home/operations/map.svg" alt="map" /> */}
            <Lottie
              loop
              animationData={arabic ? mapARMobile : mapEnMobile}
              play
              className="
              w-full h-full"
            />
          </div>
          <div className="atwh_Full lrf1  flipped">
            {/* <ImageComponent src="/images/home/operations/map.svg" alt="map" /> */}

            <img
              src="/images/home/operations/pattern.png"
              alt="pattern"
              className="absolute lg:bottom-[-28.5635416667vw] lrf1 bottom-[-20%] lg:w-[28.8020833333vw] w-[40%]"
            />
          </div>
        </div>
        <div className="relative z-[2] container1680">
          <ContentWrapper
            heading={data?.title_heading}
            desc={data?.description}
            classes="lg:w-[36.4583333333vw] white"
          />
        </div>
      </div>
    </section>
  );
};

export default Operations;
