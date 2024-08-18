import React from "react";
import Card from "./Card";
const aboutCards = [
  {
    numbes: "-25o C to +25o C",
    desc: "Multi-Temperature warehouses",
    img: "/images/home/about/card/1.jpg"
  },
  {
    numbes: "+150",
    desc: "Trucks",
    img: "/images/home/about/card/2.jpg"
  },
  {
    numbes: "+15,000",
    desc: "Shipments annually",
    img: "/images/home/about/card/3.jpg"
  },
  {
    numbes: "+300",
    desc: "Professionals",
    img: "/images/home/about/card/4.jpg"
  }
];

const CardsWrapper = () => {
  return (
    <div className="lg:w-[64.0625vw] ltr:lg:ml-auto rtl:lg:mr-auto lg:mt-[unset] sm:mt-[40px] mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:gap-[1.5625vw] gap-[20px] items-stretch">
      {aboutCards.map((aboutCard, index) => (
        <Card key={index} index={index} aboutCard={aboutCard} />
      ))}
    </div>
  );
};

export default CardsWrapper;
