import React from "react";
import BackGrounds from "./BackGrounds";
import BreadCrumbs from "./BreadCrumbs";

const SubPageHero = ({
  heading,
  desc,
  adjustContent,
  overlay,
  fromAbout,
  bannerSource,
  breadCrumbs,
  video,
  chairmanImage
}) => {
  return (
    <section
      className={`${
        adjustContent ? adjustContent : ""
      } py180 pt-[unset] h-screen w-full relative flex items-end `}
    >
      <BackGrounds
        video={video}
        fromAbout={fromAbout}
        overlay={overlay}
        bannerSource={bannerSource}
        chairmanImage={chairmanImage}
      />
      <div className="container1680 relative z-[2] flex flex-wrap items-end justify-between gap-[30px]">
        <div className="lg:w-[51.7708333333vw]">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="lg:mt-[1.04166666667vw] mt16">
            <h1 data-aos="fade-up" className="text-[#94D4FF] text90">
              {heading}
            </h1>
            {desc && (
              <div
                dangerouslySetInnerHTML={{ __html: desc }}
                data-aos="fade-down"
                className="lg:text30 mtext18 lg:mt-[1.5625vw] mt16 text-[#DFDFDF]"
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
