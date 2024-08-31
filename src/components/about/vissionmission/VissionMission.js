import Image from "next/image";
import React from "react";

const VissionMission = ({ vision, mission }) => {
  return (
    <div
      data-aos="fade"
      className="py180 container1680 flex flex-wrap justify-center items-stretch lg:gap-[1.92708333333vw] gap-[20px]"
    >
      <div className="lg:w-[35.7291666667vw] sm:w-[47%] w-full border20 vsms_Card relative lg:py-[3.125vw] sm:py-[40px] py-[30px]">
        <img
          src="/images/about/vsms/pattern.png"
          alt="pattern"
          className="absolute bottom-0 lrf2 lg:w-[22.5vw] w-[70%] flipped"
        />
        <div className="lg:w-[29.4791666667vw] w-[90%] mx-[auto] relative z-[2] flex flex-col items-center text-center">
          <div className="relative lg:w-[4.46427083333vw] sm:w-[60px] w-[40px] lg:h-[6.25vw] sm:h-[100px] h-[70px]">
            <Image
              quality={100}
              fill
              alt="card-icon"
              src={vision?.icon?.permalink}
            />
          </div>
          <div className="lg:mt-[3.125vw] sm:mt-[40px] mt-[30px]">
            <h5 className="text70 text-[#002B87] relative before:absolute before:left-[50%] before:translate-x-[-50%] before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#60A1E2]">
              {vision?.title}
            </h5>
            {vision?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: vision?.description }}
                className="lg:text22 lg:leading-[1.66666666667vw] mtext16 lg:mt-[1.04166666667vw] mt16"
              ></div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-[35.7291666667vw] sm:w-[47%] w-full border20 vsms_Card relative lg:py-[3.125vw] sm:py-[40px] py-[30px]">
        <img
          src="/images/about/vsms/pattern.png"
          alt="pattern"
          className="absolute bottom-0 lrf1 lg:w-[22.5vw] w-[70%] scale-x-[-1] noflipped"
        />
        <div className="lg:w-[29.4791666667vw] w-[90%] mx-[auto] relative z-[2] flex flex-col items-center text-center">
          <div className="relative lg:w-[7.98140625vw] sm:w-[120px] w-[90px] lg:h-[6.25vw] sm:h-[100px] h-[70px]">
            <Image
              quality={100}
              fill
              alt="card-icon"
              src={mission?.icon?.permalink}
            />
          </div>
          <div className="lg:mt-[3.125vw] sm:mt-[40px] mt-[30px]">
            <h5 className="text70 text-[#002B87] relative before:absolute before:left-[50%] before:translate-x-[-50%] before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#60A1E2]">
              {mission?.title}
            </h5>
            {mission?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: mission?.description }}
                className="lg:text22 lg:leading-[1.66666666667vw] mtext16 lg:mt-[1.04166666667vw] mt16"
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionMission;
