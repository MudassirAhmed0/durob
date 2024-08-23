import React from "react";
import ImageComponent from "../common/ImageComponent";
import LinkBtnV2 from "../common/LinkBtnV2";
import Link from "next/link";

const NewsCard = ({ news, index }) => {
  return (
    <Link
      data-aos="fade"
      data-aos-delay={index * 100}
      href="/single-news-page"
      className="group lg:w-[28.0729166667vw] sm:w-[47%] w-full flex flex-col"
    >
      <div className="relative w-full lg:h-[21.5625vw] sm:h-[350px] h-[300px] border15 overflow-hidden">
        <ImageComponent
          alt={"banner-img"}
          src={news?.thumbnail?.src}
          className="object-cover group-hover:scale-[1.05] transition500"
        />
        <span className="atwh_Full lrf1 bg-[#002B87] bg-opacity-[0.15] group-hover:opacity-[1] opacity-0 transition500"></span>
        <div className="absolute lg:top-[2.65625vw]  lrf1 px-[12px] py-[8px] lg:py-[0.41666666666vw] lg:px-[0.65098958333vw] lg:mx-[2.65625vw] mx-[5%] top-[7%] lg:text18 mtext14 text-[#002B87] border10 bg-[#94D4FF]">
          <span>{news?.date}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between grow-[1]">
        <div className="lg:mb-[1.45833333333vw] mb-[20px] flex flex-col lg:gap-y-[0.41666666666vw] gap-y-[4px] lg:mt-[1.82291666667vw] mt-[10px]">
          <h6 className="lg:text28 mtext18 text-[#0F0D0F] line-clamp-2 lg:min-h-[3.95833333333vw] sm:min-h-[56px] line-clamp-2">
            {news?.title}
          </h6>
          <div
            dangerouslySetInnerHTML={{ __html: news?.content }}
            className="lg:text22 mtext16 text-[#0F0D0F] text-opacity-[0.9] line-clamp-2 lg:leading-[1.66666666667vw]"
          ></div>
        </div>
        <LinkBtnV2 text={"read more"} tag={"button"} />
      </div>
    </Link>
  );
};

export default NewsCard;
