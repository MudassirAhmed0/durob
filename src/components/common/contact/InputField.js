import React from "react";

const InputField = () => {
  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] inputField">
      <label
        htmlFor="Full name"
        className={` border-b lg:px-[1.5625vw] sm:px-[20px] px-[10px] size-full block`}
      >
        <input
          id="Full name"
          type="text"
          placeholder="Full name"
          className="outline-none bg-transparent w-full"
        />
      </label>
    </div>
  );
};

export default InputField;
