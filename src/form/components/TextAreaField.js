import React from "react";

const TextAreaField = ({
  error,
  widthHalf,
  type,
  placeholder,
  value,
  handleChange,
  id,
}) => {
  console.log(placeholder, "plac");
  return (
    <div
      className={`inputWrapper  relative flex flex-col ${
        widthHalf ? "lg:w-[24.0625vw] w-full " : "w-full"
      }`}
    >
      <textarea
        autoComplete="off"
        value={value}
        onChange={handleChange}
        id={id}
        placeholder={placeholder}
        className="bg-transparent blackOp07 f500 placeholder:f500 placeholder:blackOp07 outline-none  font-[500] lg:text22 placeholder:lg:text22 placeholder:m17 m17  lg:py-[0.91145833333vw] py-[11.5px] border-b border-[#1B1C16B2] w-full"
      ></textarea>
      {error && (
        <span className="text18 z-[2]  relative mt-[0.2vw] text-[#D51D5D] font-[500] lg:px-[1.5625vw] sm:px-[20px] px-[10px]">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
