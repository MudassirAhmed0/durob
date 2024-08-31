import React from "react";
import Image from "next/image";

const Logo = ({ partnersLogo }) => {
  return (
    <div className="overflow-hidden relative lg:size-[9.91421875vw] sm:size-[120px] size-[90px] bg-[#94D4FF26] border25">
      {partnersLogo?.src && (
        <Image
          fill
          alt="partner-log"
          className="object-contain "
          src={partnersLogo.src}
          quality={100}
        />
      )}
    </div>
  );
};

export default Logo;
