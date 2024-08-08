import ContentWrapper from "@/components/common/ContentWrapper";
import Image from "next/image";
import React from "react";
const partnersLogos = [
  "/images/about/operations/logo/1.svg",
  "/images/about/operations/logo/2.svg",
  "/images/about/operations/logo/3.svg",
  "/images/about/operations/logo/4.svg",
  "/images/about/operations/logo/5.svg",
];
const ExcellenceOperation = () => {
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
            heading="Our Operation Excellence "
            desc="Committed to quality and sustainability, Duroub holds certifications like ISO 14001:2015 and ISO 9001:2015, reflecting its adherence to international standards. With a dedicated trained workforce, Duroub Logistics continues to empower the food industry by ensuring the safe and efficient delivery of products from raw materials to finished goods"
            classes="lg:w-[31.6145833333vw] white"
            descClasses={"lg:text26 mtext16"}
          />
          <div className="lg:w-[44.84375vw] w-full lg:pt-[12.7083333333vw] flex justify-center lg:justify-end flex-wrap lg:gap-[1.35416666667vw] gap-[20px]">
            {partnersLogos.map((partnersLogo, index) => (
              <div
                key={index}
                className="relative overflow-hidden border20 bg-[#4964BF66] lg:size-[10.2083333333vw] sm:size-[120px] size-[90px]"
              >
                <Image
                  fill
                  alt="partner-log"
                  className="object-contain lg:!size-[unset] !size-[70%] translate-y-[-50%] !top-[50%] translate-x-[-50%] !left-[50%]"
                  src={partnersLogo}
                />
              </div>
            ))}
            <div className="relative overflow-hidden border20 bg-[#4964BF66] lg:w-[20.8854166667vw] sm:w-[320px] w-[260px] lg:h-[10.2083333333vw] sm:h-[120px] h-[90px]">
              <Image
                fill
                alt="partner-log"
                className="object-contain lg:!size-[unset] !size-[70%] translate-y-[-50%] !top-[50%] translate-x-[-50%] !left-[50%]"
                src="/images/about/operations/logo/6.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceOperation;
