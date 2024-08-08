"use client";
import React, { useState } from "react";
import DropDown from "./DropDown";
const dropDown = [
  { item: "General inquiry" },
  { item: "Complaint" },
  { item: "Business request" },
];
const DropDownField = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Subject");
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleInputChange = (event) => {
    setDropDownValue(event.target.value);
  };
  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] relative inputField dropDownct">
      <label
        onClick={() => {
          handleDropDown();
        }}
        htmlFor="Subject"
        className={`  border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] size-full flex justify-between items-start cursor-pointer`}
      >
        <input
          id="Subject"
          type="text"
          value={dropDownValue}
          onChange={handleInputChange}
          className="outline-none bg-transparent w-full caret-transparent cursor-pointer"
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
      <DropDown
        showDropDown={showDropDown}
        dropDown={dropDown}
        handleDropDown={handleDropDown}
        setDropDownValue={setDropDownValue}
      />
    </div>
  );
};

export default DropDownField;
