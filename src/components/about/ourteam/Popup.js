import { checkIfExist } from "@/utils/checkIfExist";
import Image from "next/image";
import React from "react";

const Popup = ({ arabic, activePopup, setActivePopup, popupData }) => {
  return (
    <div
      className={`${
        activePopup ? "block" : "hidden"
      } opacity-0 popup_Anim fixed z-[999] top-0 w-full h-screen lrf1 flex justify-center items-center`}
    >
      <span
        onClick={() => {
          setActivePopup(false);
        }}
        className="atwh_Full lrf1 bg-[#EDEDEDD9]"
      ></span>
      <div className="lg:w-[71.6666666667vw] container1680 relative z-[2]">
        <div
          onClick={() => {
            setActivePopup(false);
          }}
          className={`${
            arabic
              ? "lg:left-[-1.875vw] left-[-3%]"
              : "lg:right-[-1.875vw] right-[-3%]"
          }  cursor-pointer opacity_Hover lg:top-[-1.875vw] top-[-5%] absolute lg:size-[3.75vw] sm:size-[50px] size-[40px]`}
        >
          <Image
            quality={100}
            fill
            src="/images/icons/close-teampopup.svg"
            alt="close"
          />
        </div>
        <div className="w-full lg:max-h-[39.6875vw] sm:max-h-[738px] max-h-[534px] overflow-y-auto flex flex-wrap justify-center lg:justify-between lg:gap-[3.125vw] gap-[20px] border20 bg-white lg:px-[3.125vw] lg:py-[5.55555555556vh] sm:p-[40px] p-[30px]">
          <div className="relative lg:size-[20.1041666667vw] sm:size-[286px] size-[186px] bg-[#F8F8F8] rounded-full overflow-hidden">
            <div className="lg:size-[18.5416666667vw] size-[90%] relative">
              <Image
                quality={100}
                fill
                alt={popupData?.title}
                src={popupData?.picture?.src}
                className="object-cover object-top"
              />
            </div>
            <img
              src="/images/about/team/curved-pop-design.svg"
              alt="curved-img"
              className="absolute bottom-0 lrf1 flipped lg:w-[16.71875vw] w-[90%] z-[1]"
            />
          </div>
          <div className="lg:w-[42.0833333333vw]">
            <div className="flex flex-col lg:mb-[1.04166666667vw] mb-[10px]">
              <span className="lg:text40 mtext24 f600 text-[#002B87] capitalize">
                {popupData?.title}
              </span>
              <div className="flex items-center lg:gap-x-[0.36458333333vw] gap-x-[5px] lg:mt-[0.26041666666vw] mt-[5px]">
                <div className="relative lg:min-w-[0.78125vw] min-w-[12px] lg:size-[0.78125vw] size-[12px]">
                  <Image
                    quality={100}
                    fill
                    alt="icon"
                    src="/images/icons/member-icon.svg"
                  />
                </div>
                <span className="lg:text25 mtext18 text-[#3D81D3]">
                  {popupData?.position}
                </span>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: checkIfExist(popupData?.content),
              }}
              className="lg:text28 mtext20"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
