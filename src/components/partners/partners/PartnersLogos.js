import React from "react";
import Logo from "./Logo";
const partnersLogos = [
  "/images/home/partners/logos/1.svg",
  "/images/home/partners/logos/2.svg",
  "/images/home/partners/logos/3.svg",
  "/images/home/partners/logos/4.svg",
  "/images/home/partners/logos/5.svg",
  "/images/home/partners/logos/6.svg",
  "/images/home/partners/logos/7.svg",
  "/images/home/partners/logos/8.svg",
  "/images/home/partners/logos/9.svg",
  "/images/home/partners/logos/10.svg",
  "/images/home/partners/logos/11.svg",
  "/images/home/partners/logos/12.svg",
  "/images/home/partners/logos/13.svg",
  "/images/home/partners/logos/14.svg",
  "/images/home/partners/logos/15.svg",
];
const PartnersLogos = ({ arabic }) => {
  return (
    <div className="w-full lg:mt-[4.16666666667vw] sm:mt-[40px] mt-[30px]">
      <div className="flex items-center flex-wrap lg:gap-[2.60416666667vw] sm:gap-[30px] gap-[20px] w-full">
        {partnersLogos.map((partnersLogo, index) => (
          <Logo key={index} index={index} partnersLogo={partnersLogo} />
        ))}
      </div>
    </div>
  );
};

export default PartnersLogos;
