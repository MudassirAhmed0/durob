
import React from "react";
import Value from "./Value";
const dummyValues = [
  {
    heading: "Civility",
    desc: "We treat everyone with respect and courtesy.",
    img: "/images/about/values/1.svg",
  },
  {
    heading: "Trustworthiness",
    desc: "Building reliable and honest relationships",
    img: "/images/about/values/2.svg",
  },
  {
    heading: "Diversity",
    desc: "Embracing a wide range of perspectives",
    img: "/images/about/values/3.svg",
  },
  {
    heading: "Excellence",
    desc: "Striving for the highest standards in all we do",
    img: "/images/about/values/4.svg",
  },
  {
    heading: "Creativity",
    desc: "Fostering innovation and unique solutions",
    img: "/images/about/values/5.svg",
  },
  {
    heading: "Sustainability",
    desc: "Committed to environmentally friendly practices",
    img: "/images/about/values/6.svg",
  },
  {
    heading: "Community Building",
    desc: "Supporting and engaging with our communities",
    img: "/images/about/values/7.svg",
  },
];
const Values = ({ arabic, data }) => {
  const values = data ?? dummyValues

  return (
    <div className="flex items-stretch flex-wrap bg-[#002B87] lg:h-[27.7604166667vw] w-full">
      {values.map((value, index) => (
        <Value
          key={index}
          value={value}
          arabic={arabic}
          values={values}
          index={index}
        />
      ))}
    </div>
  );
};

export default Values;
