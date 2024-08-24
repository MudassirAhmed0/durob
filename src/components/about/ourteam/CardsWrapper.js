import React from "react";
import Card from "./Card";

const CardsWrapper = ({ membersData, setActivePopup, setPopupData }) => {
  return (
    <div className="lg:mt-[5.20833333333vw] sm:mt-[60px] mt-[40px] flex flex-wrap lg:gap-x-[1.5625vw] gap-[20px]">
      {membersData.map((member, index) => (
        <Card
          key={index}
          setActivePopup={setActivePopup}
          setPopupData={setPopupData}
          member={member}
          index={index}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
