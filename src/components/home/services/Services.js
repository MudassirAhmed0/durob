import ContentWrapper from "@/components/common/ContentWrapper";
import LinkBtn from "@/components/common/LinkBtn";
import React from "react";
import ServicesSwiper from "./ServicesSwiper";

const Services = ({ data, arabic, serviceItems }) => {
  return (
    <section className="relative z-[2]">
      <div className="container1680 flex flex-wrap justify-between items-end">
        <ContentWrapper
          heading={data?.title_heading}
          desc={data?.description}
        />
        <div
          className="lg:pb-[0.625vw] lg:pt-[unset] pt-[20px]"
          data-aos="fade"
        >
          <LinkBtn link={data?.link} text={data?.link_text} arabic={arabic} />
        </div>
      </div>
      <ServicesSwiper arabic={arabic} cards={serviceItems} />
    </section>
  );
};

export default Services;
