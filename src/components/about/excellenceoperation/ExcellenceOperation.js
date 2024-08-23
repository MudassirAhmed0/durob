import ContentWrapper from "@/components/common/ContentWrapper";
import Image from "next/image";
import React from "react";

const ExcellenceOperation = ({ data }) => {
  const partnerLogos = data?.images;

  return (
    <section>
      <div className="w-full bg-[#0B44AA] relative flex items-end lg:pt-[7.60416666667vw] lg:pb-[14.1666666667vw] py180">
        <div className="atwh_Full lrf1 flipped overflow-hidden">
          <img
            src="/images/about/operations/pattern.png"
            alt="pattern"
            className="absolute bottom-0 lrf1  w-full"
          />
        </div>
        <div className="relative z-[2] container1680 flex justify-center items-start flex-wrap lg:gap-[unset] sm:gap-[40px] gap-[30px]">
          <ContentWrapper
            heading={data?.title_heading}
            desc={data?.short_description}
            classes="lg:w-[31.6145833333vw] white"
            descClasses={"lg:text26 mtext16"}
          />
          <div
            data-aos="fade"
            className="lg:w-[44.84375vw] w-full lg:pt-[12.7083333333vw] flex justify-center lg:justify-end flex-wrap lg:gap-[1.35416666667vw] gap-[20px]"
          >
            {partnerLogos?.map((partnerLogo, index) => {
              if (index + 1 != partnerLogo?.length) {
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden border20 bg-[#4964BF66]  lg:size-[10.2083333333vw] sm:size-[120px] size-[90px]"
                  >
                    {partnerLogo?.src && (
                      <Image
                        fill
                        alt="partner-log"
                        className="object-contain !relative"
                        src={partnerLogo?.src}
                      />
                    )}
                  </div>
                );
              }
            })}
            {partnerLogos?.length > 0 && (
              <div className="relative overflow-hidden border20 bg-[#4964BF66]  lg:w-[20.8854166667vw] sm:w-[320px] w-[260px] lg:h-[10.2083333333vw] sm:h-[120px] h-[90px]">
                {partnerLogos[partnerLogos?.length - 1].src && (
                  <Image
                    fill
                    alt="partner-log"
                    className="object-contain !relative"
                    src={partnerLogos[partnerLogos?.length - 1].src}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceOperation;
