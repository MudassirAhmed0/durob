import React from "react";
import Image from "next/image";

const Testimonial = ({data}) => {
  return (
    <div className="container1680 lg:mt-[-6.35416666667vw] mt-[-10%] relative bg-[#4964BF] border20 flex flex-wrap flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:gap-[15.2083333333vw] sm:gap-[40px] gap-[30px] px-[40px] lg:py-[unset] sm:py-[80px] py-[60px]">
      <img
        src="/images/careers/pattern.png"
        alt="pattern"
        className="absolute bottom-0 lrf1 flipped w-full pointer-events-none"
      />
      <div className="lg:w-[31.5625vw] text-[#FFFFFF] lg:pt-[8.54166666667vw]">
        <h5
          data-aos="fade-up"
          className="text60 relative before:absolute before:lrf1 before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#94D4FF]"
        >
          {data?.title || "Vision"}
        </h5>
        <p
          data-aos="fade-down"
          className="lg:text25 mtext16 mt16 lg:mt-[1.04166666667vw] lg:leading-[1.82291666667vw]"
        >
          {data?.description || "&quot;Working at Duroub Logistics has been an incredible experience. The supportive team and opportunities for growth are unparalleled&quot;"}
        </p>
      </div>
      <div
        data-aos="fade"
        className="lg:w-[28.0208333333vw] lg:h-[39.0625vw] sm:w-[50%] w-full sm:h-[350px] h-[300px] relative"
      >
        <Image
          fill
          alt="person"
          className="object-cover"
          src={data?.image?.src || "/images/careers/person.png"}
        />
      </div>
    </div>
  );
};

export default Testimonial;
