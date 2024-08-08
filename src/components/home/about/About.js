import React from "react";
import CardsWrapper from "./CardsWrapper";
import Patterns from "./Patterns";
import ContentWrapper from "@/components/common/ContentWrapper";
import LinkBtn from "@/components/common/LinkBtn";

const About = () => {
  return (
    <section className="relative">
      <Patterns />
      <div className="lg:pt-[7.8125vw] lg:pb-[16.0416666667vw] py180 container1680 relative z-[2]">
        <ContentWrapper
          heading="About Duroub Logistics"
          desc="Duroub Logistics is a premier provider of integrated logistics and cold chain solutions across Saudi Arabia. We offer end-to-end services, ensuring efficiency and reliability at every stage"
        />
        <div className="lg:mt-[2.39583333333vw] mt-[20px]">
          <LinkBtn text="explore more" />
        </div>

        <CardsWrapper />
      </div>
    </section>
  );
};

export default About;
