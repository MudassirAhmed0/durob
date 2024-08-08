import React from "react";
import Image from "next/image";

const Logo = ({ partnersLogo }) => {
  return (
    <div className="overflow-hidden relative lg:size-[9.91421875vw] sm:size-[120px] size-[90px] bg-[#94D4FF26] border25">
      <Image
        fill
        alt="partner-log"
        className="object-contain lg:!size-[unset] !size-[70%] translate-y-[-50%] !top-[50%] translate-x-[-50%] !left-[50%]"
        src={partnersLogo}
      />
    </div>
  );
};

export default Logo;
