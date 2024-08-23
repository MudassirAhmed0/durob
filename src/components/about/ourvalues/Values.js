import React from "react";
import Value from "./Value";
const Values = ({ arabic, data }) => {
  const values = data;

  return (
    <div className="flex items-stretch flex-wrap bg-[#002B87] lg:h-[27.7604166667vw] w-full">
      {values?.map((value, index) => (
        <Value
          key={index}
          value={value}
          arabic={arabic}
          values={values}
          index={index}
        />
      ))}
    </div>
  );
};

export default Values;
