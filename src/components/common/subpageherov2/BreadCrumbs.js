import React from "react";
import Link from "next/link";
import Image from "next/image";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <div className="flex lg:gap-x-[0.52083333333vw] gap-x-[8px] items-center">
      <Link
        href="#"
        className="relative block lg:size-[0.9375vw] sm:size-[15px] size-[12px] opacity_Hover"
      >
        <Image fill alt="home-icon" src="/images/icons/home-blue.svg" />
      </Link>
      {breadCrumbs.map((breadCrumb, index) => (
        <>
          <img
            src="/images/icons/bread-chevron-blue.svg"
            alt="chevron"
            className="lg:size-[0.625vw] sm:size-[10px] size-[8px] flipped"
          />
          {breadCrumb.link ? (
            <Link
              href={`${breadCrumb.link}`}
              className="lg:text20 mtext16 f600 text-[#002B87] opacity_Hover capitalize"
            >
              {breadCrumb.text}
            </Link>
          ) : (
            <span className="lg:text20 mtext16 f600 text-[#002B87] capitalize">
              {breadCrumb.text}
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default BreadCrumbs;
