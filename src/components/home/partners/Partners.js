import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import PartnersSwiper from "./PartnersSwiper";

const Partners = () => {
  return (
    <div>
      <div className="container1680">
        <ContentWrapper
          heading="Partnering for Excellence"
          desc="We collaborate with industry leaders to deliver top-tier logistics solutions. Our partners trust us to provide reliable, efficient, and innovative services that meet their diverse needs"
          classes="lg:w-[57.7083333333vw] text-center mx-[auto]"
        />
      </div>
      <PartnersSwiper />
    </div>
  );
};

export default Partners;
