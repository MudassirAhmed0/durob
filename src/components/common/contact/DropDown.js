import React from "react";

const DropDown = ({
  showDropDown,
  dropDown,
  handleDropDown,
  setDropDownValue,
}) => {
  return (
    <ul className={`${showDropDown ? "active" : ""} contact_DropDown`}>
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
