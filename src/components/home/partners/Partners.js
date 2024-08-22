"use client";
import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import PartnersSwiper from "./PartnersSwiper";

const Partners = ({ data }) => {
  return (
    <div>
      <div className="container1680">
        <ContentWrapper
          heading={data?.title_heading}
          desc={data?.description}
          classes="lg:w-[57.7083333333vw] text-center mx-[auto]"
        />
      </div>
      <PartnersSwiper data={data?.images} />
    </div>
  );
};

export default Partners;
