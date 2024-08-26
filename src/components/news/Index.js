import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import NewsContainer from "./NewsContainer";

const NewsPage = ({ data, allNews, arabic }) => {
  const breadCrumbs = [];
  breadCrumbs?.push({ text: data?.title });
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title}
        adjustContent={
          "lg:pb-[3.95833333333vw] lg:!h-[36.3020833333vw] !h-[70vh]"
        }
        bannerSource={data?.hero_banner?.image?.src}
        breadCrumbs={breadCrumbs}
      />
      <NewsContainer allNews={allNews} arabic={arabic} />
    </>
  );
};

export default NewsPage;
