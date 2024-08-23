import clsx from "clsx";
import React from "react";

const InputField = ({ secondVarient, touched, error, ...rest }) => {
  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] inputField">
      <label
        htmlFor={rest?.name ?? ""}
        className={` border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] size-full block`}
      >
        <input
          className={clsx(
            "outline-none bg-transparent w-full ",
            secondVarient
              ? "placeholder:text-[#DFDFDF] text-[#DFDFDF]"
              : "placeholder:text-[#002b8756] text-[#002b8756]"
          )}
          {...rest}
        />
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
    </div>
  );
};

export default InputField;
