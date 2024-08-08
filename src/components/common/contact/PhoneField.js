"use client";
import React, { useState } from "react";
import DropDown from "./DropDown";
const dropDown = [
  { item: "+94" },
  { item: "+95" },
  { item: "+96" },
  { item: "+97" },
  { item: "+98" },
  { item: "+99" },
  { item: "+100" },
  { item: "+101" },
  { item: "+102" },
  { item: "+103" },
  { item: "+104" },
  { item: "+105" },
  { item: "+106" },
  { item: "+107" },
  { item: "+108" },
  { item: "+109" },
  { item: "+110" },
  { item: "+111" },
  { item: "+112" },
  { item: "+113" },
];

const PhoneField = ({ arabic }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("+ 966");
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleInputChange = (event) => {
    setDropDownValue(event.target.value);
  };
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
              onChange={handleInputChange}
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
            dropDown={dropDown}
            handleDropDown={handleDropDown}
            setDropDownValue={setDropDownValue}
          />
        </div>
        <label htmlFor="Phone number" className={` border-b size-full block`}>
          <input
            id="Phone number"
            type="phone"
            placeholder="Phone number"
            className="outline-none bg-transparent w-full"
          />
        </label>
      </div>
    </div>
  );
};

export default PhoneField;
