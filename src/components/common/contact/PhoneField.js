"use client";
import React, { useState } from "react";
import DropDown from "./DropDown";
import clsx from "clsx";
const countryCodes = [
  "+94",
  "+95",
  "+96",
  "+97",
  "+98",
  "+99",
  "+100",
  "+101",
  "+102",
  "+103",
  "+104",
  "+105",
  "+106",
  "+107",
  "+108",
  "+109",
  "+110",
  "+111",
  "+112",
  "+113",
];

const PhoneField = ({ arabic, setPhoneNumber, phoneNumber, touched, error, secondVarient }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("+966");
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleInputChange = (event) => {
    setPhoneNumber(dropDownValue + event.target.value)
  };
  
  const handleCouteryCodeSelect = (countryCode) => {
    setDropDownValue(countryCode)
    setPhoneNumber(prev => {
      let value = String(prev)
      const replaceTo = countryCodes.find(code => value.startsWith(code))
      const replaceWith = countryCode
      return value.replace(replaceTo, replaceWith)
    })
  }
  
  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] inputField">
      <div className="flex lg:gap-x-[1.25vw] gap-x-[15px] size-full">
        <div className="relative lg:min-w-[6.51041666667vw] lg:w-[6.51041666667vw] w-[25%]">
          <div
            onClick={() => {
              handleDropDown();
            }}
            htmlFor="+ 966"
            className={` ${
              arabic
                ? "lg:pr-[1.5625vw] sm:pr-[20px] pr-[10px]"
                : "lg:pl-[1.5625vw] sm:pl-[20px] pl-[10px]"
            } border-b size-full flex items-start lg:gap-x-[0.52083333333vw] gap-x-[5px] cursor-pointer`}
          >
            <input
              id="+ 966"
              type="phone"
              value={dropDownValue}
              className="outline-none bg-transparent w-full caret-transparent cursor-pointer"
            />
            <svg
              className={`${
                showDropDown ? "scale-y-[-1]" : ""
              } lg:mt-[0.26041666666vw] dropDownImg transition500 lg:min-w-[1.25vw] min-w-[20px] lg:size-[1.25vw] size-[20px] h-[28px]`}
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
          </div>
          <DropDown
            showDropDown={showDropDown}
            dropDown={countryCodes}
            handleDropDown={handleDropDown}
            setDropDownValue={handleCouteryCodeSelect}
          />
        </div>
        <label htmlFor="phone" className={` border-b size-full block`}>
          <input
            id="phone"
            type="number"
            placeholder="Phone number"
            autoComplete="off"
            onChange={handleInputChange}
            className={clsx("outline-none bg-transparent w-full", secondVarient ? "placeholder:text-blue-400": "")}
          />
        </label>
      </div>
      {
        touched && error && (
          <p className={clsx("text-xs mt-1 font-semibold", secondVarient ? "text-red-400" : "text-red-600")}>{error}</p>
        )
      }
    </div>
  );
};

export default PhoneField;
