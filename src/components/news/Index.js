import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import NewsContainer from "./NewsContainer";
const breadCrumbs = [{ text: "News" }];

const NewsPage = ({data}) => {

  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title || "Latest News"}
        adjustContent={
          "lg:pb-[3.95833333333vw] lg:!h-[36.3020833333vw] !h-[70vh]"
        }
        bannerSource={data?.hero_banner?.image?.src || "/images/news/hero.jpg"}
        breadCrumbs={breadCrumbs}
      />
      <NewsContainer />
    </>
  );
};

export default NewsPage;
