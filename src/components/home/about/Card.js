import React from "react";
import Image from "next/image";
import ImageComponent from "@/components/common/ImageComponent";

const Card = ({ aboutCard }) => {
  return (
    <div className="about_Card lg:w-[31.25vw] lg:h-[23.2291666667vw] sm:w-[48.5%] w-full h-[300px] border20 relative flex justify-center items-end lg:pb-[1.875vw] pb-[20px] overflow-hidden">
      <ImageComponent
        alt="card-img"
        src={aboutCard.img}
        className="object-cover z-[-1]"
      />
      <div className="relative z-[2] flex flex-col w-[91%]">
        <span className="text50 text-[#94D4FF]">{aboutCard.numbes}</span>
        <span className="lg:text25 mtext18 text-white lg:mt-[0.20833333333vw] mt-[4px]">
          {aboutCard.desc}
        </span>
      </div>
    </div>
  );
};

export default Card;
