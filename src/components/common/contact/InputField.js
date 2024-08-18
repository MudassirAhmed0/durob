

import clsx from "clsx";
import React from "react";

const InputField = (props) => {
  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] inputField">
      <label
        htmlFor={props?.name ?? ""}
        className={` border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] size-full block`}
      >
        <input className={clsx("outline-none bg-transparent w-full placeholder:text-[#002b8756]", props.secondVarient ? "placeholder:text-blue-400": "")} {...props} />
      </label>
      {
        props.touched && props.error && (
          <p className={clsx("text-xs mt-1 font-semibold", props.secondVarient ? "text-red-400" : "text-red-600")}>{props.error}</p>
        )
      }
    </div>
  );
};

export default InputField;
