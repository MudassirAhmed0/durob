import React from "react";
import NewsCard from "./NewsCard";

const newses = [
  {
    img: "/images/home/news/banner.jpg",
    date: "09 May 2023",
    heading: "Lorem ipsum dolor sit amet consectetu lacus auctor amet vari ...",
    desc: "Lorem ipsum dolor sit amet consectetur. Libero velit tristique portaRhoncus amet euismod co ...",
  },
  {
    img: "/images/home/news/banner.jpg",
    date: "09 May 2023",
    heading: "Lorem ipsum dolor sit amet consectetu lacus auctor amet vari ...",
    desc: "Lorem ipsum dolor sit amet consectetur. Libero velit tristique portaRhoncus amet euismod co ...",
  },
  {
    img: "/images/home/news/banner.jpg",
    date: "09 May 2023",
    heading: "Lorem ipsum dolor sit amet consectetu lacus auctor amet vari ...",
    desc: "Lorem ipsum dolor sit amet consectetur. Libero velit tristique portaRhoncus amet euismod co ...",
  },
  {
    img: "/images/home/news/banner.jpg",
    date: "09 May 2023",
    heading: "Lorem ipsum dolor sit amet consectetu lacus auctor amet vari ...",
    desc: "Lorem ipsum dolor sit amet consectetur. Libero velit tristique portaRhoncus amet euismod co ...",
  },
  {
    img: "/images/home/news/banner.jpg",
    date: "09 May 2023",
    heading: "Lorem ipsum dolor sit amet consectetu lacus auctor amet vari ...",
    desc: "Lorem ipsum dolor sit amet consectetur. Libero velit tristique portaRhoncus amet euismod co ...",
  },
  {
    img: "/images/home/news/banner.jpg",
    date: "09 May 2023",
    heading: "Lorem ipsum dolor sit amet consectetu lacus auctor amet vari ...",
    desc: "Lorem ipsum dolor sit amet consectetur. Libero velit tristique portaRhoncus amet euismod co ...",
  },
];
const NewsContainer = () => {
  return (
    <section>
      <div className="container1680 py180 flex justify-center flex-wrap items-stretch lg:gap-y-[3.75vw] lg:gap-x-[1.5625vw]  gap-[20px]">
        {newses.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsContainer;
