import React from "react";

const InputField = ({
  error,
  widthHalf,
  type,
  placeholder,
  value,
  handleChange,
  id
}) => {
  const handleKeyDown = (e) => {
    if (type == "number") {
      if (e.key.toLowerCase() === "e") {
        e.preventDefault();
      }
    }
  };
  return (
    <div
      className={`inputWrapper  relative flex flex-col ${
        widthHalf ? "lg:w-[24.0625vw] w-full " : "w-full"
      }`}
    >
      <input
        autoComplete="off"
        onKeyDown={handleKeyDown}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id={id}
        className="bg-transparent blackOp07 f500 placeholder:f500 placeholder:blackOp07 outline-none  font-[500] lg:text22 placeholder:lg:text22 placeholder:m17 m17  lg:py-[0.91145833333vw] py-[11.5px] border-b border-[#1B1C16B2] w-full"
      />
      {error && (
        <span className="text18 z-[2]  relative mt-[0.2vw] text-[#D51D5D] font-[500]">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
