import React from "react";
import parse from "html-react-parser"
const Banner = (data) => {
  return (
    <section className="bg-[#002B87] relative lg:py-[18.0208333333vw] sm:py-[200px] py-[120px] overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0">
        <span className=" w-full h-full absolute top-0 left-0 parallaxBg"></span>
        {/* <img
          src="/images/home/logistic.jpg"
          className="w-full top-0 h-full object-cover fixed "
        /> */}
        <span className="bannerOverlay1 w-full h-full absolute top-0 left-0"></span>
        <span className="bannerOverlay2 w-full h-full absolute top-0 left-0"></span>
        <span className="bannerOverlay3 w-full h-full absolute top-0 left-0"></span>
      </div>
      <img
        src="/images/home/pattern.png"
        alt="pattern"
        className="absolute lrf1 bottom-0 w-full flipped"
      />
      <span
        data-aos="fade-up"
        className="text64 text-white text-center block lg:w-[69.0625vw] container1680 relative z-[2]"
      >
        {data?.content ? parse(data.content) : "Duroub logistics is a fully integrated logistics cold chain solutions provider offering end to end logistics services across the kingdom"}
      </span>
    </section>
  );
};

export default Banner;
