import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import Values from "./Values";

const OurValues = () => {
  return (
    <section>
      <div className="container1680 lg:mb-[4.16666666667vw] sm:mb-[40px] mb-[30px]">
        <ContentWrapper
          heading="Our Values"
          desc="Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh"
          classes="lg:w-[51.7708333333vw] text-center mx-[auto]"
        />
      </div>
      <Values />
    </section>
  );
};

export default OurValues;
