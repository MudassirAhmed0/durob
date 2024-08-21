import React from "react";
import Image from "next/image";

const Value = ({ arabic, value, values, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="group cursor-pointer relative overflow-hidden lg:w-[14.285%] sm:w-[49.999%] w-full lg:h-full lg:pb-[2.60416666667vw] sm:pb-[30vw] pb-[40vw] lg:px-[1.5625vw] px-[20px] flex justify-center items-start"
    >
      {index !== values.length - 1 && (
        <span className="absolute lg:top-0 bottom-0 w-full h-[1px] lg:w-[1px] lg:h-full lrf2 bg-[#FFFFFF1A]"></span>
      )}
      <div className="relative z-[2]">
        <h6 className="relative z-[7] bg-[#002B87] lg:pt-[2.60416666667vw] sm:pt-[40px] pt-[30px] lg:text30 mtext20 f600 text-[#94D4FF] capitalize">
          {value.heading}
        </h6>
        <p className="group-hover:lg:translate-y-0 group-hover:lg:opacity-[1] lg:opacity-[0] lg:translate-y-[-150%] transition500 lg:text22 mtext16 text-[#FFF] lg:pt-[0.52083333333vw] pt-[8px]">
          {value.desc}
        </p>
      </div>
      <div
        className={`${
          arabic
            ? "lg:left-[-1.30208333333vw] left-[-5%]"
            : "lg:right-[-1.30208333333vw] right-[-5%]"
        } group-hover:lg:translate-y-[1.04166666667vw] transition500 flipped absolute lg:bottom-[2.60416666667vw] sm:bottom-[40px] bottom-[30px] lg:size-[13.0208333333vw] sm:size-[180px] size-[90px]`}
      >
        <Image fill alt="value-icon" src={value.img} />
      </div>
    </div>
  );
};

export default Value;
