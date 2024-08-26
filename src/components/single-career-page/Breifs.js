import React from "react";
import Breif from "./Breif";
const breifs = [
  {
    heading: "Responsibilities",
    points: `<li>Lorem ipsum dolor sit amet consectetur. </li>
 <li>Diam at elementum quisque et nascetur.</li>
 <li>In non nullam quam elementum dolor lacinia.</li>
 <li>Turpis lacus bibendum est tempus.</li>
 <li>Congue gravida eget aenean molestie ac augue.</li>
 <li>Nunc quis viverra adipiscing dolor elementum nibh ut purus.</li>
 <li>Ut id vitae egestas enim lorem cras justo.</li>
 <li>Ornare eu sed ipsum nibh adipiscing.</li>
<li>Viverra posuere sit eget pellentesque scelerisque lectus integer felis vel.</li> `
  },
  {
    heading: "Requirements",
    points: `<li>Lorem ipsum dolor sit amet consectetur. </li>
 <li>Diam at elementum quisque et nascetur.</li>
 <li>In non nullam quam elementum dolor lacinia.</li>
 <li>Turpis lacus bibendum est tempus.</li>
 <li>Congue gravida eget aenean molestie ac augue.</li>
 <li>Nunc quis viverra adipiscing dolor elementum nibh ut purus.</li>
 <li>Ut id vitae egestas enim lorem cras justo.</li>
 <li>Ornare eu sed ipsum nibh adipiscing.</li>
<li>Viverra posuere sit eget pellentesque scelerisque lectus integer felis vel.</li> `
  }
];
const Breifs = ({ resposiblity, requirement }) => {
  return (
    <div className="flex flex-wrap lg:gap-[1.5625vw] gap-[20px] justify-between">
      <Breif points={resposiblity} heading={"Responsibilities"} />

      <Breif points={requirement} heading={"Requirements"} />
    </div>
  );
};

export default Breifs;
