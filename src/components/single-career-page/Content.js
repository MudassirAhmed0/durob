import React from "react";

const Content = ({ data }) => {
  return (
    <div className="lg:w-[29.4791666667vw]">
      <h2
        data-aos="fade-up"
        className="lg:text40 mtext28 f700 capitalize text-[#002B87]"
      >
        Job Brief
      </h2>
      <div
        data-aos="fade-down"
        dangerouslySetInnerHTML={{ __html: data }}
        className="lg:text22 mtext16 mt16 text-[#3B3B3B] text-opacity-[0.9]"
      ></div>
    </div>
  );
};

export default Content;
