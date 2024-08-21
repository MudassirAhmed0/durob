import React from "react";

const Breif = ({ breif, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="lg:w-[25.9375vw] lg:p-[1.5625vw] p-[20px] border20 bg-[#94D4FF1A]"
    >
      <span className="lg:text30 mtext20 f600 capitalize text-[#002B87]">
        {breif.heading}
      </span>
      <ul
        dangerouslySetInnerHTML={{ __html: breif.points }}
        className="text-[#3B3B3B] text-opacity-[0.9] lg:text22 mtext16 defaultList mt16"
      ></ul>
    </div>
  );
};

export default Breif;
