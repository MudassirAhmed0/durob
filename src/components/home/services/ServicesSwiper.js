"use client";
import ImageComponent from "@/components/common/ImageComponent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function replaceLastSlashWithHash(url) {
  // Find the index of the last slash
  let lastSlashIndex = url.lastIndexOf("/");

  // If a slash is found, replace it with a hash
  if (lastSlashIndex !== -1) {
    url =
      url.substring(0, lastSlashIndex) +
      "#" +
      url.substring(lastSlashIndex + 1);
  }

  return url;
}
const ServicesSwiper = ({ arabic, cards }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 1024 ? (window.innerWidth / 100) * 1.5625 : 16
    );
  }, []);

  const servicesCards = cards;

  return (
    <div
      data-aos="fade"
      className="lg:w-[93.75vw] w-[94.699%] ltr:ml-auto rtl:mr-auto lg:mt-[3.125vw] sm:mt-[40px] mt-[30px]"
    >
      <Swiper
        spaceBetween={swiperGap}
        className="w-full"
        slidesPerView={"auto"}
      >
        {servicesCards?.map((servicesCard, index) => (
          <SwiperSlide
            key={index}
            className="group cursor-pointer lg:w-[26.9791666667vw] lg:h-[25.9895833333vw] sm:w-[55.5%] w-[90%] h-[300px] border20 relative overflow-hidden"
          >
            <Link href={replaceLastSlashWithHash(servicesCard?.url)}>
              <div
                className={`${
                  arabic
                    ? "lg:translate-x-[-6.5vw] scale-x-[-1]"
                    : "lg:translate-x-[6.5vw] scale-x-[1]"
                } group-hover:translate-x-0 transition500 absolute lrf2 lg:size-[4.16666666667vw] sm:size-[40px] size-[30px] lg:mx-[2.13541666667vw] mx-[5%] lg:top-[2.13541666667vw] top-[5%]`}
              >
                <Image
                  fill
                  src={"/images/icons/card-chevron.svg"}
                  alt="goto-img"
                />
              </div>
              <span className="atwh_Full lrf1 services_Card group-hover:lg:opacity-0 transition500"></span>
              <span className="atwh_Full lrf1 group-hover:lg:opacity-[1] opacity-0 bg-[#4964BF] bg-opacity-[0.4] transition500"></span>
              <div className="w-full h-full flex justify-center items-end lg:pb-[2.13541666667vw] pb-[20px]">
                <ImageComponent
                  alt="card-img"
                  src={servicesCard?.image?.src}
                  className="object-cover z-[-1]"
                />
                <div className="relative z-[2] flex flex-col w-[84.172%]">
                  <span className="lg:text40 mtext28 f600 text-white">
                    {servicesCard.title_heading}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
