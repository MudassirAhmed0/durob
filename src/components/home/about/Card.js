import React from "react";
import Image from "next/image";
import ImageComponent from "@/components/common/ImageComponent";
import parse from "html-react-parser";
import { checkIfExist } from "@/utils/checkIfExist";

const Card = ({ aboutCard, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="about_Card lg:h-[23.2291666667vw] w-full h-[300px] border20 relative flex justify-center items-end lg:pb-[1.875vw] pb-[20px] overflow-hidden"
    >
      <ImageComponent
        alt="card-img"
        src={aboutCard.image.src}
        className="object-cover z-[-1]" 
      />
      <span
        className="atwh_Full lrf1"
        style={{
          background:
            "linear-gradient(180deg, rgba(33, 33, 33, 0.00) 38.5%, rgba(33, 33, 33, 0.80) 84.5%)"
        }}
      ></span>
      <div className="relative z-[2] flex flex-col w-[91%]">
        <span className="text50 text-[#94D4FF]">{aboutCard?.title}</span>
        <div
          dangerouslySetInnerHTML={{
            __html: checkIfExist(aboutCard.description)
          }}
          className="lg:text25 mtext18 text-white lg:mt-[0.20833333333vw] mt-[4px]"
        ></div>
      </div>
    </div>
  );
};

export default Card;
