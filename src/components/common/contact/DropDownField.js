"use client";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import clsx from "clsx";

const dropDown = ["General Inquiry", "Complaint", "Business Request"];

const DropDownField = ({
  handleChange,
  name,
  id,
  placeholder,
  error,
  touched,
  value,
  setValue,
  secondVarient,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] relative inputField dropDownct">
      <label
        onClick={handleDropDown}
        htmlFor={name}
        className={`  border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] size-full flex justify-between items-start cursor-pointer`}
      >
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          className={clsx(
            "outline-none bg-transparent w-full caret-transparent cursor-pointer placeholder:text-[#002b8756]",
            secondVarient ? "placeholder:text-[#94D4FF]" : ""
          )}
        />
        <svg
          className={`${
            showDropDown ? "scale-y-[-1]" : ""
          } dropDownImg transition500 lg:min-w-[1.25vw] min-w-[20px] lg:size-[1.25vw] size-[20px] h-[28px]`}
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.9992 16.4212L5.57812 10.0001L6.99918 8.5791L13.4203 15.0001L11.9992 16.4212ZM18.4203 10.0001L11.9992 16.4212L10.5781 15.0001L16.9992 8.5791L18.4203 10.0001Z"
            fill=""
          />
        </svg>
      </label>
      {touched && error && (
        <p
          className={clsx(
            "text-xs mt-1 font-semibold lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
            secondVarient ? "text-red-400" : "text-red-600"
          )}
        >
          {error}
        </p>
      )}
      <DropDown
        showDropDown={showDropDown}
        dropDown={dropDown}
        handleDropDown={handleDropDown}
        setDropDownValue={setValue}
      />
    </div>
  );
};

export default DropDownField;
