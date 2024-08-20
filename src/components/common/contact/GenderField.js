import clsx from "clsx";
import React from "react";

const GenderField = ({ setGender, touched, error, secondVarient }) => {
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="w-full lg:h-[3.07291666667vw] h-[44px] genderInputField ">
      <div className="lg:px-[1.5625vw] sm:px-[20px] px-[10px] flex items-center lg:gap-x-[1.40625vw] gap-x-[15px]">
        <span>Gender</span>
        <div className="InputField">
          <label
            htmlFor="male"
            className="text-[#94D4FF] flex items-center lg:gap-x-[0.36458333333vw] gap-x-[10px]"
          >
            <span>Male</span>
            <input
              name="gender"
              type="radio"
              id="male"
              value="male"
              onChange={handleChange}
              className="appearance-none lg:size-[0.67708333333vw] sm:size-[10px] size-[10px] rounded-full border-2 border-white bg-[#D6D6D6]"
            />
          </label>
        </div>
        <div className="InputField">
          <label
            htmlFor="female"
            className="text-[#94D4FF] flex items-center lg:gap-x-[0.36458333333vw] gap-x-[10px]"
          >
            <span>Female</span>
            <input
              name="gender"
              type="radio"
              id="female"
              value="female"
              onChange={handleChange}
              className="appearance-none lg:size-[0.67708333333vw] sm:size-[10px] size-[10px] rounded-full border-2 border-white bg-[#D6D6D6]"
            />
          </label>
        </div>
      </div>
      {touched && error && (
        <p
          className={clsx(
            "text-xs mt-2 font-semibold lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
            secondVarient ? "text-red-400" : "text-red-600"
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default GenderField;
