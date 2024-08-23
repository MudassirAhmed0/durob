import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import PartnersLogos from "./PartnersLogos";

const Partners = ({ data }) => {
  return (
    <div className="container1680">
      <ContentWrapper
        heading={data?.title_heading}
        desc={data?.description}
        classes="lg:w-[57.7083333333vw]"
      />
      <PartnersLogos partners={data?.images} />
    </div>
  );
};

export default Partners;
