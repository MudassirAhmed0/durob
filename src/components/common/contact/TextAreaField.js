import React from "react";

const TextAreaField = () => {
  return (
    <div className="w-full lg:h-[2.55208333333vw] inputField text-[#002B87B2]">
      <textarea
        name=""
        id=""
        className="w-full border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] block outline-none bg-transparent"
        placeholder="Your message ..."
      ></textarea>
    </div>
  );
};

export default TextAreaField;
