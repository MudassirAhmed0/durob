import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Image from "next/image";

const SubPageHeroV2 = ({ heading, desc, breadCrumbs, tagImg, tagText }) => {
  return (
    <section className="relative  mt-[35vw]  mb-[20vw] sm:mt-[20vw] sm:mb-[10vw] lg:mt-[16.6666666667vw] lg:mb-[5.20833333333vw] w-full">
      <img
        src="/images/herov2-pattern.png"
        alt="pattern"
        className="absolute lrf2 top-0 flipped"
      />
      <div className="container1680 relative z-[2]">
        <div className="lg:w-[50.5208333333vw] flex flex-col items-start">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          {tagText && (
            <div
              data-aos="fade"
              className="bg-[#94D4FF] border10 lg:px-[0.68072916666vw] lg:py-[0.67708333333vw] p-[8px] flex items-center lg:gap-x-[0.52083333333vw] gap-x-[8px] lg:mt-[1.5625vw] mt-[20px]"
            >
              {tagImg && (
                <div className=" relative lg:size-[1.04166666667vw] sm:size-[15px] size-[12px]">
                  <Image fill alt="icon" src={tagImg} />
                </div>
              )}
              <span className="lg:text22 mtext16 text-[#002B87]">
                {tagText}
              </span>
            </div>
          )}
          <div className="lg:mt-[1.04166666667vw] mt16">
            <h1 data-aos="fade-up" className="text-[#002B87] text70 f600">
              {heading}
            </h1>
            {desc && (
              <p
                data-aos="fade-down"
                className="lg:text30 mtext18 lg:mt-[1.5625vw] mt16 text-[#DFDFDF]"
              >
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHeroV2;
