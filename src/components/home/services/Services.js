import ContentWrapper from "@/components/common/ContentWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import React from "react";
import ServicesSwiper from "./ServicesSwiper";

const Services = () => {
  return (
    <section>
      <div className="container1680 flex flex-wrap justify-between items-end">
        <ContentWrapper
          heading="Our Services"
          desc="Comprehensive logistics solutions tailored to meet diverse client needs. We provide transportation, warehousing, cross-border transport, 4PL & control tower management, freight forwarding, value-added services, and direct store delivery"
        />
        <div className="lg:pb-[0.625vw] lg:pt-[unset] pt-[20px]">
          <LinkBtn text="explore more" />
        </div>
      </div>
      <ServicesSwiper />
    </section>
  );
};

export default Services;
