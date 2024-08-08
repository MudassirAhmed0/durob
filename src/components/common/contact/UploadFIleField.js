import Image from "next/image";
import React from "react";

const UploadFileField = () => {
  return (
    <label
      htmlFor="myFile"
      className="opacity_Hover cursor-pointer flex flex-col justify-center items-center lg:gap-y-[0.52083333333vw] gap-y-[10px] border-dashed border border20 border-[#94D4FF] w-full lg:py-[2.52604166667vw] lg:px-[1.04166666667vw] sm:p-[30px] p-[20px]"
    >
      <input type="file" id="myFile" name="filename" className="hidden" />

      <div className="relative lg:w-[3.71723958333vw] lg:h-[2.8321875vw] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]">
        <Image fill alt="upload" src="/images/icons/upload.svg" />
      </div>
      <span className="text-[#94D4FF]">Upload your CV</span>
    </label>
  );
};

export default UploadFileField;
