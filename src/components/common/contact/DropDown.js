import React from "react";

const DropDown = ({
  showDropDown,
  dropDown,
  handleDropDown,
  setDropDownValue,
  fromPhoneField,
}) => {
  return (
    <ul
      className={`${showDropDown ? "active" : ""} contact_DropDown ${
        fromPhoneField
          ? "!lg:p-[1.5625vw] !p-[10px]"
          : "lg:p-[1.5625vw] p-[20px]"
      }`}
    >
      {dropDown.map((item) => (
        <li
          key={item}
          onClick={() => {
            handleDropDown();
            setDropDownValue(item);
          }}
        >
          <span className="block">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
