import React from "react";

const Breif = ({ points, heading }) => {
  return (
    <div
      data-aos="fade"
      className="lg:w-[25.9375vw] lg:p-[1.5625vw] p-[20px] border20 bg-[#94D4FF1A]"
    >
      <span className="lg:text30 mtext20 f600 capitalize text-[#002B87]">
        {heading}
      </span>
      <ul className="text-[#3B3B3B] text-opacity-[0.9] lg:text22 mtext16 defaultList mt16">
        {points?.map(({ point }, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Breif;
