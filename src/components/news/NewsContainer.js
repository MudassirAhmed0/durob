"use client";
import React, { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";
import getNewsUsingAxios from "@/lib/data-hooks/news/getNewsUsingAxios";

const NewsContainer = ({ allNews, arabic }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const [news, setNews] = useState(allNews?.data);
  const [isLoading, setIsloading] = useState(false);
  const containerRef = useRef(null);

  const updateData = async () => {
    setIsloading(true);

    // const url = new URL(window.location.href);

    // // Set or update the query parameter
    // url.searchParams.set("pageNumber", currentPageNumber);

    // // Use history.pushState to update the URL in the address bar without reloading the page
    // history.pushState(null, "", url.toString());

    const { data } = await getNewsUsingAxios(currentPageNumber, arabic);
    setNews(data?.data?.news?.data);
    setIsloading(false);
  };

  const updateScroll = () => {
    // if (window.innerWidth < 768) {
    // const offset = document.querySelector("header").offsetHeight;
    const offset = 0;
    const y =
      containerRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // }
  };

  useEffect(() => {
    updateData();
    updateScroll();
  }, [currentPageNumber]);

  return (
    <section ref={containerRef}>
      <div className="container1680 py180 flex justify-center flex-wrap items-stretch lg:gap-y-[3.75vw] lg:gap-x-[1.5625vw]  gap-[20px]">
        {news?.map((news, index) => (
          <NewsCard key={index} index={index} news={news} />
        ))}
        <Pagination
          currentPage={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
          lastPage={allNews?.last_page}
        />
      </div>
    </section>
  );
};

export default NewsContainer;
