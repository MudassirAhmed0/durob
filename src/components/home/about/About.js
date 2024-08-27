import React from "react";
import CardsWrapper from "./CardsWrapper";
import Patterns from "./Patterns";
import ContentWrapper from "@/components/common/ContentWrapper";
import LinkBtn from "@/components/common/LinkBtn";

const About = ({ data, arabic }) => {
  return (
    <section className="relative">
      <Patterns />
      <div className="lg:pt-[7.8125vw] lg:pb-[16.0416666667vw] py180 container1680 relative z-[2]">
        <ContentWrapper
          heading={data?.title_heading}
          desc={data?.description}
        />
        <div className="lg:mt-[2.39583333333vw] mt-[20px]" data-aos="fade">
          <LinkBtn text={data.link_text} link={data?.link} arabic={arabic} />
        </div>

        <CardsWrapper data={data?.blocks} />
      </div>
    </section>
  );
};

export default About;
