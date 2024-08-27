"use client";
import ContentWrapper from "@/components/common/ContentWrapper";
import React, { useState } from "react";
import Popup from "./Popup";
import CardsWrapper from "./CardsWrapper";

const OurTeam = ({ data, arabic, managementMembers, boardMembers }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePopup, setActivePopup] = useState(false);
  const [popupData, setPopupData] = useState({});
  // const handlePopup = () => {};

  const membersData = data?.categories;
  return (
    <section>
      <div className="container1680 py180">
        <div className="flex flex-wrap justify-between items-end sm:gap-[40px] gap-[30px]">
          <ContentWrapper heading={data?.title || "Our Team"} />
          <div className="lg:w-[unset] w-full lg:pb-[0.41666666666vw] pb-[4px] lg:text25 mtext18 f600 text-[#3D81D399] flex whitespace-nowrap overflow-x-auto hideScroll lg:justify-end lg:gap-[1.5625vw] gap-[20px]">
            {membersData.map((category, index) => (
              <button
                onClick={() => {
                  setActiveCategory(index);
                }}
                key={index}
                className={`${
                  activeCategory === index
                    ? "before:opacity-[1] text-[#3D81D3]"
                    : "before:opacity-[0]"
                } hover:before:opacity-[1] hover:text-[#3D81D3] before:transition500 transition500 lg:px-[0.83046875vw] px-[5%] relative before:absolute before:lrf1 before:lg:bottom-[-0.41666666666vw] before:bottom-[-4px] before:content-[''] before:lg:h-[0.15625vw] before:h-[2px] before:w-full before:bg-[#3D81D3]`}
              >
                {category.title_heading}
              </button>
            ))}
          </div>
        </div>
        <CardsWrapper
          activeCategory={activeCategory}
          membersData={activeCategory == 0 ? boardMembers : managementMembers}
          setActivePopup={setActivePopup}
          setPopupData={setPopupData}
          arabic={arabic}
        />
      </div>
      <Popup
        arabic={arabic}
        activePopup={activePopup}
        setActivePopup={setActivePopup}
        popupData={popupData}
      />
    </section>
  );
};

export default OurTeam;
