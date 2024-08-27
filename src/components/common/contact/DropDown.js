import React from "react";

const DropDown = ({
  showDropDown,
  dropDown,
  handleDropDown,
  setDropDownValue,
  fromPhoneField
}) => {
  return (
    <ul
      className={`${showDropDown ? "active" : ""} contact_DropDown ${
        fromPhoneField
          ? "!lg:p-[1.5625vw] !p-[10px]"
          : "lg:p-[1.5625vw] p-[20px]"
      }`}
    >
      {Object.keys(dropDown)?.map((key, index) => (
        <li
          key={index}
          onClick={() => {
            handleDropDown();
            setDropDownValue(dropDown[key]?.value);
          }}
        >
          <span className="block">{dropDown[key]?.placeholder}</span>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
