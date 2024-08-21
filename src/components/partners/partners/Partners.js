import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import PartnersLogos from "./PartnersLogos";

const Partners = ({data}) => {
  return (
    <div className="container1680">
      <ContentWrapper
        heading={data?.title_heading || "Partners"}
        desc={data?.description || "Our esteemed partners rely on us for top-tier logistics solutions that are reliable, efficient, and innovative. We are proud to serve a diverse range of industries, consistently meeting their unique needs with excellence"}
        classes="lg:w-[57.7083333333vw]"
      />
      <PartnersLogos partners={data?.images} />
    </div>
  );
};

export default Partners;
