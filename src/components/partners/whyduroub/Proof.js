import React from "react";
import Image from "next/image";

const Proof = ({ proof, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="lg:w-[21.4583333333vw] sm:w-[47%] w-full border20 border border-[#FFFFFF1A] bg-[#60A1E2] flex flex-col items-center lg:gap-[1.5625vw] sm:gap-[20px] gap-[15px] lg:py-[2.55208333333vw] sm:py-[30px] lg:px-[1.5625vw] p-[20px]"
    >
      <span className="lg:text30 mtext20 f600 text-white">{proof?.title_heading || proof.text}</span>
      <div className="relative lg:w-[8.07291666667vw] lg:h-[7.5vw] sm:size-[110px] size-[80px]">
        <Image fill alt="icon" src={proof?.icon?.id || proof.img} />
      </div>
    </div>
  );
};

export default Proof;
