"use client";
import ContentWrapper from "@/components/common/ContentWrapper";
import React, { useState } from "react";
import Popup from "./Popup";
import CardsWrapper from "./CardsWrapper";
const dummyMembersData = [
  {
    department: "Board Members",
    members: [
      {
        name: "Hicham Falhi",
        position: "Director",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/1.png",
      },
      {
        name: "Hossam Eldin Ahmed",
        position: "Head of Warehouse & logistics Operations",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/2.png",
      },
      {
        name: "Eslam Kassem",
        position: "Head of Finance",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/3.png",
      },
      {
        name: "Kamal Akhoun",
        position: "Head of HR",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/4.png",
      },
      {
        name: "Hasan Khan",
        position: "Head of Facilities",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/5.png",
      },
    ],
  },
  {
    department: "Management Members",
    members: [
      {
        name: "22Hicham Falhi",
        position: "Director",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/4.png",
      },
      {
        name: "22Hossam Eldin Ahmed",
        position: "Head of Warehouse & logistics Operations",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/2.png",
      },
      {
        name: "22Eslam Kassem",
        position: "Head of Finance",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/5.png",
      },
      {
        name: "22Kamal Akhoun",
        position: "Head of HR",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/1.png",
      },
      {
        name: "22Hasan Khan",
        position: "Head of Facilities",
        desc: `<p>Lorem ipsum dolor sit amet consectetur. Aliquam mattis blandit nulla orci a morbi. Sit hac proin a facilisi dui. Vel rutrum vel mattis eget sed velit commodo amet turpis. Egestas nunc eu scelerisque egestas in enim. Diam arcu aliquam est eget suspendisse leo in est.</p>`,
        img: "/images/about/team/members/3.png",
      },
    ],
  },
];

const OurTeam = ({ data, arabic }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePopup, setActivePopup] = useState(false);
  const [popupData, setPopupData] = useState({});
  // const handlePopup = () => {};

  const membersData = data?.categories ? data?.categories : dummyMembersData
 
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
                {category.title_heading || category.department}
              </button>
            ))}
          </div>
        </div>
        <CardsWrapper
          activeCategory={activeCategory}
          membersData={membersData}
          setActivePopup={setActivePopup}
          setPopupData={setPopupData}
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
