import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/common/ImageComponent";
import LinkBtnV2 from "@/components/common/LinkBtnV2";

const MainNews = () => {
  return (
    <Link href="#" className="group lg:w-[40.3645833333vw] w-full">
      <div className="relative w-full lg:h-[26.1458333333vw] sm:h-[400px] h-[300px] border15 overflow-hidden">
        <ImageComponent
          alt={"banner-img"}
          src="/images/home/news/banner.jpg"
          className="object-cover group-hover:scale-[1.05] transition500"
        />
        <span className="atwh_Full lrf1 bg-[#002B87] bg-opacity-[0.15] group-hover:opacity-[1] opacity-0 transition500"></span>
        <div className="absolute lg:top-[2.65625vw] lrf1 px-[12px] py-[8px] lg:py-[0.41666666666vw] lg:px-[0.65098958333vw] lg:mx-[2.65625vw] mx-[5%] top-[7%] lg:text18 mtext14 text-[#002B87] border10 bg-[#94D4FF]">
          <span>09 May 2023</span>
        </div>
      </div>
      <div className="lg:mb-[1.45833333333vw] mb-[20px] flex flex-col lg:gap-y-[0.41666666666vw] gap-y-[4px] lg:mt-[1.82291666667vw] mt-[10px]">
        <p className="lg:text26 mtext18">
          Lorem ipsum dolor sit amet consectetur lacus auctor amet varius
        </p>
        <p className="lg:text22 mtext16 w-[88.517%]">
          Lorem ipsum dolor sit amet consectetur. Libero velit tristique
          portaRhoncus amet euismod congc malesuada ...
        </p>
      </div>
      <LinkBtnV2 text={"read more"} tag={"button"} />
    </Link>
  );
};

export default MainNews;
