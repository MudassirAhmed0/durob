import ContentWrapper from "@/components/common/ContentWrapper";
import React from "react";
import Values from "./Values";

const OurValues = ({data}) => {
  return (
    <section>
      <div className="container1680 lg:mb-[4.16666666667vw] sm:mb-[40px] mb-[30px]">
        <ContentWrapper
          heading={data?.title_heading || "Our Values"}
          desc={data?.description || "Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh"}
          classes="lg:w-[51.7708333333vw] text-center mx-[auto]"
        />
      </div>
      <Values data={data?.values} />
    </section>
  );
};

export default OurValues;
