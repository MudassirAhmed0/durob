import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#002B87] relative lg:py-[18.0208333333vw] sm:py-[200px] py-[120px]">
      <img
        src="/images/home/pattern.png"
        alt="pattern"
        className="absolute lrf1 bottom-0 w-full flipped"
      />
      <span className="text64 text-white text-center block lg:w-[69.0625vw] container1680 relative z-[2]">
        Duroub logistics is a fully integrated logistics cold chain solutions
        provider offering end to end logistics services across the kingdom
      </span>
    </section>
  );
};

export default Banner;
