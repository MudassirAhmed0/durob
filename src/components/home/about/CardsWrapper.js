import React from "react";
import Card from "./Card";

const CardsWrapper = ({ data }) => {
  const aboutCards = data;

  return (
    <div className="lg:w-[64.0625vw] ltr:lg:ml-auto rtl:lg:mr-auto lg:mt-[unset] sm:mt-[40px] mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:gap-[1.5625vw] gap-[20px] items-stretch">
      {aboutCards.map((aboutCard, index) => (
        <Card key={index} index={index} aboutCard={aboutCard} />
      ))}
    </div>
  );
};

export default CardsWrapper;
