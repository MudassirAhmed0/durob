import React from "react";

const GenderField = () => {
  return (
    <div className="w-full lg:h-[3.07291666667vw] h-[44px] lg:px-[1.5625vw] sm:px-[20px] px-[10px] genderInputField flex items-center lg:gap-x-[1.40625vw] gap-x-[15px]">
      <span>Gender</span>
      <div className="InputField">
        <label
          htmlFor="male"
          className="text-[#94D4FF] flex items-center lg:gap-x-[0.36458333333vw] gap-x-[10px]"
        >
          <span>Male</span>
          <input
            id="male"
            type="radio"
            className="appearance-none lg:size-[0.67708333333vw] sm:size-[10px] size-[10px] rounded-full border-2 border-white bg-[#D6D6D6]"
          />
        </label>
      </div>
      <div className="InputField">
        <label
          htmlFor="Female"
          className="text-[#94D4FF] flex items-center lg:gap-x-[0.36458333333vw] gap-x-[10px]"
        >
          <span>Female</span>
          <input
            id="Female"
            type="radio"
            className="appearance-none lg:size-[0.67708333333vw] sm:size-[10px] size-[10px] rounded-full border-2 border-white bg-[#D6D6D6]"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderField;
