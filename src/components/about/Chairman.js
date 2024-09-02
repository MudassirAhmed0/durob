import Image from "next/image";
import React from "react";

const Chairman = ({ desc, chairmanName, chairmanTitle, chairmanImage }) => {
  return (
    <section>
      <div className="container1680 border20 aboutChairman_Overlay lg:min-h-[73.3333333333vh] lg:p-[7.03703703704vh] py-[30px] px-[20px] relative mt-[-20%] lg:mt-[-28.2407407407vh]">
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          className="lg:text30 lg:leading-[3.7037037037vh] mtext18 lg:w-[41.875vw] text-white relative z-[2] pt-[180px] lg:pt-[unset]"
        ></div>
        <div className="lg:w-[44.375vw] w-full lg:h-[calc(100%_+42.037037037vh)] absolute lrf2 lg:top-[-42.037037037vh] top-[-20%] lg:mx-[2.03125vw]">
          <div className=" w-full lg:relative top-0 lrf2">
            {/* <span className="ceo_Overlay atwh_Full z-[1] lrf1 top-[unset] bottom-[50px] lg:bottom-0 lg:h-[16.9444444444vh] h-[20%]"></span> */}
            <div className="lg:h-[81.4814814815vh] lg:w-[41.9791666667vw] w-[90%] h-[300px] sm:h-[450px] relative lg:ltr:ml-auto mx-auto lg:ltr:mr-[unset]">
              {chairmanImage && (
                <Image
                  fill
                  alt="person"
                  src={chairmanImage}
                  className="flipped object-contain"
                  quality={100}
                />
              )}
            </div>
            <div className="flex lg:justify-end text-white relative z-[2] lg:px-[4.79166666667vw] px-[50px] lg:mt-[-6.94444444444vh] mt-[-10px] w-full">
              <div className="flex flex-col lg:gap-y-[0.52083333333vw]">
                <h5 className="lg:text40 mtext24 f600 relative before:absolute before:lrf1 before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#94D4FF]">
                  {chairmanName}
                </h5>
                <span className="lg:text25 mtext18 text-start">
                  {chairmanTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
