import clsx from "clsx";
import React from "react";

const GenderField = ({
  setGender,
  id,
  touched,
  error,
  secondVarient,
  options,
  arabic
}) => {
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div id={id} className="w-full  genderInputField ">
      <div className="lg:px-[1.5625vw] sm:px-[20px] px-[10px] flex items-center lg:gap-x-[1.40625vw] gap-x-[15px]">
        <span>{arabic ? "الجنس" : "Gender"}</span>

        {Object?.keys(options)?.map((optionsKey, index) => (
          <div key={index} className="InputField">
            <label
              htmlFor={optionsKey}
              className="text-[#94D4FF] flex items-center lg:gap-x-[0.36458333333vw] gap-x-[10px]"
            >
              <input
                name="gender"
                type="radio"
                id={optionsKey}
                value={optionsKey}
                onChange={handleChange}
                className="appearance-none lg:size-[1vw] sm:size-[10px] size-[10px] rounded-full border-2 border-white bg-[#D6D6D6]"
              />
              <span>{options[optionsKey]?.placeholder}</span>
            </label>
          </div>
        ))}
      </div>
      {touched && error && (
        <p
          className={clsx(
            "mtext16 lg:text20 mt-2  lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
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
