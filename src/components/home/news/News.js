import ContentWrapper from "@/components/common/ContentWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import React from "react";
import MainNews from "./MainNews";
import OtherNewses from "./OtherNewses";

const News = () => {
  return (
    <section>
      <div className="py180 container1680">
        <div className="flex flex-wrap gap-[20px] justify-between items-end ">
          <ContentWrapper
            headingClasses="text67"
            heading="Latest News"
            desc="Stay updated with our latest achievements and industry news"
          />
          <div data-aos="fade">
            <LinkBtn text="All news" link={"/news"} />
          </div>
        </div>
        <div className="lg:mt-[2.5vw] sm:mt-[30px] mt-[20px] flex items-start flex-wrap lg:gap-[2.70833333333vw] sm:gap-[40px] gap-[30px]">
          <MainNews />
          <OtherNewses />
        </div>
      </div>
    </section>
  );
};

export default News;
