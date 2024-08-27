import ContentWrapper from "@/components/common/ContentWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import React from "react";
import MainNews from "./MainNews";
import OtherNewses from "./OtherNewses";

const News = ({ data, recentNews, arabic }) => {
  return (
    <section>
      <div className="py180 container1680">
        <div className="flex flex-wrap gap-[20px] justify-between items-end ">
          <ContentWrapper
            headingClasses="text67"
            heading={data?.title_heading}
            desc={data?.description}
          />
          <div data-aos="fade">
            <LinkBtn text="All news" link={"/news"} arabic={arabic} />
          </div>
        </div>
        <div className="lg:mt-[2.5vw] sm:mt-[30px] mt-[20px] flex items-start flex-wrap lg:gap-[2.70833333333vw] sm:gap-[40px] gap-[30px]">
          {recentNews?.length > 0 && (
            <MainNews recentNews={recentNews} arabic={arabic} />
          )}
          <OtherNewses recentNews={recentNews} arabic={arabic} />
        </div>
      </div>
    </section>
  );
};

export default News;
