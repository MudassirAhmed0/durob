"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import Logo from "./Logo";
const partners = [
  {
    partnersLogos: [
      "/images/home/partners/logos/1.svg",
      "/images/home/partners/logos/2.svg",
      "/images/home/partners/logos/3.svg",
      "/images/home/partners/logos/4.svg",
      "/images/home/partners/logos/5.svg",
      "/images/home/partners/logos/6.svg",
      "/images/home/partners/logos/7.svg",
      "/images/home/partners/logos/9.svg",
      "/images/home/partners/logos/10.svg",
      "/images/home/partners/logos/11.svg",
      "/images/home/partners/logos/12.svg",
      "/images/home/partners/logos/13.svg",
      "/images/home/partners/logos/14.svg",
      "/images/home/partners/logos/15.svg",
    ],
  },
  {
    partnersLogos: [
      "/images/home/partners/logos/1.svg",
      "/images/home/partners/logos/2.svg",
      "/images/home/partners/logos/3.svg",
      "/images/home/partners/logos/4.svg",
      "/images/home/partners/logos/5.svg",
      "/images/home/partners/logos/6.svg",
      "/images/home/partners/logos/7.svg",
      "/images/home/partners/logos/9.svg",
      "/images/home/partners/logos/10.svg",
      "/images/home/partners/logos/11.svg",
      "/images/home/partners/logos/12.svg",
      "/images/home/partners/logos/13.svg",
      "/images/home/partners/logos/14.svg",
      "/images/home/partners/logos/15.svg",
    ],
  },
];
function chunkArray(array, chunkSize) {
  // If chunkSize is less than or equal to 0, return an empty array.
  if (chunkSize <= 0) return [];

  // Initialize an empty array to hold the chunks.
  const result = [];

  // Loop through the array and slice it into chunks.
  for (let i = 0; i < array.length; i += chunkSize) {
    // Slice the array from the current index 'i' to 'i + chunkSize'.
    const chunk = array.slice(i, i + chunkSize);

    // Push the chunk into the result array.
    result.push(chunk);
  }

  // Return the array of chunks.
  return result;
}

const PartnersSwiper = ({ arabic, data }) => {
  const chunkedSwiperImages = chunkArray(data, 14);
  console.log(chunkedSwiperImages);
  return (
    <div
      data-aos="fade"
      className="lg:w-[93.75vw] w-[94.699%] mx-auto lg:mt-[4.47916666667vw] lg:mb-[5.72916666667vw] sm:my-[40px] my-[30px]"
    >
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper partnersSwiper lg:pb-[4.27083333333vw] sm:pb-[40px] pb-[30px]"
      >
        {chunkedSwiperImages?.map((partnerSlide, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center flex-wrap lg:gap-[2.60416666667vw] sm:gap-[30px] gap-[20px] w-full"
          >
            {partnerSlide?.map((partnersLogo, ind) => (
              <Logo key={ind} partnersLogo={partnersLogo} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSwiper;
