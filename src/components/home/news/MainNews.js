import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/common/ImageComponent";
import LinkBtnV2 from "@/components/common/LinkBtnV2";
import { checkIfExist } from "@/utils/checkIfExist";

const MainNews = ({ recentNews, arabic }) => {
  return (
    <Link
      data-aos="fade"
      href="/single-news-page"
      className="group lg:w-[40.3645833333vw] w-full"
    >
      <div className="relative w-full lg:h-[26.1458333333vw] sm:h-[400px] h-[300px] border15 overflow-hidden">
        <ImageComponent
          alt={checkIfExist(recentNews[0].thumbnail?.alt, recentNews[0].title)}
          src={recentNews[0].thumbnail?.src}
          className="object-cover group-hover:scale-[1.05] transition500"
        />
        <span className="atwh_Full lrf1 bg-[#002B87] bg-opacity-[0.15] group-hover:opacity-[1] opacity-0 transition500"></span>
        <div className="absolute lg:top-[2.65625vw] lrf1 px-[12px] py-[8px] lg:py-[0.41666666666vw] lg:px-[0.65098958333vw] lg:mx-[2.65625vw] mx-[5%] top-[7%] lg:text18 mtext14 text-[#002B87] border10 bg-[#94D4FF]">
          <span>{recentNews[0].date}</span>
        </div>
      </div>
      <div className="lg:mb-[1.45833333333vw] mb-[20px] flex flex-col lg:gap-y-[0.41666666666vw] gap-y-[4px] lg:mt-[1.82291666667vw] mt-[10px]">
        <h4 className="lg:text26 mtext18 line-clamp-1">
          {recentNews[0].title}
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: checkIfExist(recentNews[0].content)
          }}
          className="lg:text22 mtext16 w-[88.517%] line-clamp-2"
        ></div>
      </div>
      <LinkBtnV2
        text={"read more"}
        tag={"button"}
        link={"/news/" + recentNews[0].slug}
        arabic={arabic}
      />
    </Link>
  );
};

export default MainNews;
