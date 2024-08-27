import React from "react";
import Image from "next/image";

const Logo = ({ partnersLogo, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="overflow-hidden relative lg:size-[9.91421875vw] sm:size-[120px] size-[90px] bg-[#94D4FF26] border25"
    >
      {partnersLogo?.src && (
        <Image
          fill
          alt="partner-logo"
          className="object-contain "
          src={partnersLogo?.src}
        />
      )}
    </div>
  );
};

export default Logo;
