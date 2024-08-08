import Image from "next/image";
import React from "react";

const ImageComponent = ({ src, alt, className, noLoading }) => {
  return (
    <>
      {noLoading || (
        <span className="atwh_Full lrf1 z-[-1] bg-[#132D2B33] border20 animate-pulse"></span>
      )}
      {src && (
        <Image
          fill
          src={src}
          alt={`${alt}`}
          className={`  ${className ? className : "object-cover"}`}
        />
      )}
    </>
  );
};

export default ImageComponent;
