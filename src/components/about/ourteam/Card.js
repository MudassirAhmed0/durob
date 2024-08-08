import React from "react";
import LinkBtnV2 from "@/components/common/LinkBtnV2";
import Image from "next/image";

const Card = ({ setActivePopup, setPopupData, member, index }) => {
  return (
    <div
      onClick={() => {
        setActivePopup(true);
        setPopupData(member);
      }}
      key={index}
      className="group cursor-pointer relative lg:w-[28.125vw] lg:h-[28.3854166667vw] w-full sm:h-[450px] h-[300px] bg-[#F8F8F8] border20 overflow-hidden flex items-end"
    >
      <div className="atwh_Full lrf1 flipped">
        {/* <img
                  alt="pattern"
                  src="/images/about/team/pattern.png"
                  className="absolute bottom-0 lrf1 w-full z-[1] lg:h-[unset] sm:h-[32%] h-[44%]"
                /> */}
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] lg:w-[23.6458333333vw] lg:h-[27.34375vw] sm:w-[54%] w-[75%] h-[95%]">
          <Image
            fill
            alt="team-member"
            src={member.img}
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative z-[2] overflow-hidden lg:px-[1.45833333333vw] px-[20px] w-full lg:py-[1.25vw] py-[20px]">
        <img
          alt="pattern"
          src="/images/about/team/pattern.png"
          className="atwh_Full top-[unset] bottom-0 lrf1 flipped z-[-1] min-w-[146%] w-[146%] sm:w-full sm:min-w-full"
        />
        <div className="flex flex-col lg:mb-[2.1875vw] mb-[10px] lg:w-[17.7083333333vw]">
          <span className="lg:text25 mtext18 f600 text-[#002B87] capitalize">
            {member.name}
          </span>
          <div className="flex items-center lg:gap-x-[0.36458333333vw] gap-x-[5px] lg:mt-[0.26041666666vw] mt-[5px]">
            <div className="relative lg:min-w-[0.78125vw] min-w-[12px] lg:size-[0.78125vw] size-[12px]">
              <Image fill alt="icon" src="/images/icons/member-icon.svg" />
            </div>
            <span className="lg:text20 mtext16 text-[#3D81D3] block">
              {member.position}
            </span>
          </div>
        </div>
        <LinkBtnV2 text={"read more"} tag={"button"} />
      </div>
    </div>
  );
};

export default Card;
