import React from "react";

const DropDown = ({
  showDropDown,
  dropDown,
  handleDropDown,
  setDropDownValue,
}) => {
  return (
    <ul className={`${showDropDown ? "active" : ""} contact_DropDown`}>
      {dropDown.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            handleDropDown();
            setDropDownValue(item.item);
          }}
        >
          <span className="block">{item.item}</span>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
