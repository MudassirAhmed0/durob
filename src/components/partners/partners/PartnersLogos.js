import React from "react";
import Logo from "./Logo";
const PartnersLogos = ({ partners, arabic }) => {
  const partnersLogos = partners;

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
