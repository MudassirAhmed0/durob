import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import Proofs from "./Proofs";

const WhyDuroub = () => {
  return (
    <section className="relative">
      <img
        src="/images/partners/pattern.png"
        alt="pattern"
        className="absolute lg:top-[-33.75vw] sm:top-[-40%] top-[-15%] lg:w-[16.875vw] w-[30%] lrf1 flipped"
      />
      <div className="container1680 py180 relative z-[2]">
        <ContentWrapper
          heading="Why Duroub"
          desc="Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh"
          classes={"lg:w-[51.7708333333vw] mx-auto text-center"}
        />
        <Proofs />
      </div>
    </section>
  );
};

export default WhyDuroub;
