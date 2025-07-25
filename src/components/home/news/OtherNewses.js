import React from "react";
import LinkBtnV2 from "@/components/common/LinkBtnV2";
import { checkIfExist } from "@/utils/checkIfExist";
const newses = [
  {
    date: "09 May 2023",
    desc: "Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ..."
  },
  {
    date: "09 May 2023",
    desc: "Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ..."
  },
  {
    date: "09 May 2023",
    desc: "Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ..."
  },
  {
    date: "09 May 2023",
    desc: "Lorem ipsum dolor sit amet consectetur lacus auctor amet varius in ..."
  }
];
const OtherNewses = ({ recentNews, arabic }) => {
  return (
    <div className="flex flex-col lg:w-[44.4270833333vw] w-full lg:gap-y-[1.25vw] gap-y-[15px]">
      {recentNews.map((news, index) => {
        if (index !== 0) {
          return (
            <div
              data-aos="fade"
              data-aos-delay={index * 100}
              key={index}
              className="group hover:bg-[#94d4ff26] transition500 cursor-pointer flex flex-wrap gap-[15px] justify-between items-center  border15 lg:px-[1.66666666667vw] sm:p-[20px] p-[25px] lg:py-[1.90104166667vw] bg-[#e7e7e733]"
            >
              <div className="flex flex-col lg:gap-y-[0.3125vw] gap-y-[4px] lg:w-[30.2083333333vw] sm:w-[70%] w-full">
                <span className="lg:text18 mtext16 text-[#60A1E2]">
                  {news?.date}
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: checkIfExist(news?.content)
                  }}
                  className="lg:text22 mtext18 line-clamp-2"
                ></div>
              </div>
              <LinkBtnV2
                text={"read more"}
                link={"/news/" + news?.slug}
                arabic={arabic}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default OtherNewses;
