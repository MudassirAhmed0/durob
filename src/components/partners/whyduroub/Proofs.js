import React from "react";
import Proof from "./Proof";
const dummyProofs = [
  {
    text: "Flexibility",
    img: "/images/partners/why/1.svg",
  },
  {
    text: "Services provided",
    img: "/images/partners/why/2.svg",
  },
  {
    text: "Customer service",
    img: "/images/partners/why/3.svg",
  },
  {
    text: "Warehouses network",
    img: "/images/partners/why/4.svg",
  },
  {
    text: "Cost accessibility",
    img: "/images/partners/why/5.svg",
  },
];
const Proofs = ({cards}) => {

  const proofs = cards ?? dummyProofs

  return (
    <div className="lg:mt-[3.4375vw] sm:mt-[40px] mt-[30px] flex items-stretch flex-wrap justify-center lg:gap-[2.60416666667vw] sm:gap-[30px] gap-[20px]">
      {proofs.map((proof, index) => (
        <Proof key={index} proof={proof} index={index} />
      ))}
    </div>
  );
};

export default Proofs;
