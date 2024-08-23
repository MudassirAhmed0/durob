import React from "react";

const TextAreaField = ({ touched, error, ...props }) => {
  return (
    <div className="w-full lg:h-[2.55208333333vw] inputField ">
      <textarea
        className="w-full border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] block outline-none bg-transparent placeholder:text-[#002b8756]"
        {...props}
      ></textarea>
      {touched && error && (
        <p className="text-xs text-red-600 mt-1 font-semibold lg:px-[1.5625vw] sm:px-[20px] px-[10px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
