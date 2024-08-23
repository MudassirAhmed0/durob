import React from "react";
import ImageComponent from "../ImageComponent";
import Image from "next/image";

const BackGrounds = ({
  video,
  bannerSource,
  overlay,
  fromAbout,
  chairmanImage
}) => {
  return (
    <div className="atwh_Full lrf1 overflow-hidden">
      <div className="atwh_Full lrf1 flipped">
        {video ? (
          <video
            className="w-full h-full object-cover"
            src={bannerSource}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        ) : (
          <ImageComponent src={bannerSource} alt={"hero-banner"} />
        )}
      </div>
      <span
        className={`${
          overlay ? overlay : "subPage_heroOverlay"
        } atwh_Full lrf1`}
      ></span>
      {fromAbout && (
        <div data-aos="fade" className="atwh_Full lrf1">
          <img
            src="/images/about/hero-pattern.png"
            alt="pattern"
            className="atwh_Full lrf2 object-cover flipped"
          />
          <div className="lg:w-[41.9791666667vw] lg:h-[81.3888888889vh] absolute bottom-0 lrf2">
            <Image
              fill
              src={chairmanImage}
              alt="Chairman "
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BackGrounds;
