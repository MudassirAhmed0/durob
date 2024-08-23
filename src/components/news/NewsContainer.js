import React from "react";
import NewsCard from "./NewsCard";

const NewsContainer = ({ allNews }) => {
  return (
    <section>
      <div className="container1680 py180 flex justify-center flex-wrap items-stretch lg:gap-y-[3.75vw] lg:gap-x-[1.5625vw]  gap-[20px]">
        {allNews?.data?.map((news, index) => (
          <NewsCard key={index} index={index} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsContainer;
