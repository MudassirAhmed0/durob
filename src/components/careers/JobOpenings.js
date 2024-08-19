import Image from "next/image";
import React from "react";
import LinkBtnV2 from "../common/LinkBtnV2";
import Link from "next/link";
const openings = [
  {
    location: "Jeddah",
    name: "PMO Specialist"
  },
  {
    location: "Jeddah",
    name: "Procurement Professional"
  },
  {
    location: "Jeddah",
    name: "Senior Public Relations & External Communication Officer"
  },
  {
    location: "Jeddah",
    name: "PMO Specialist"
  },
  {
    location: "Jeddah",
    name: "Procurement Professional"
  }
];
const JobOpenings = ({ arabic }) => {
  return (
    <section>
      <div className="container1680 py180">
        <h2 className="text67 text-[#002B87] text-center">Job Openings </h2>
        <div className="flex flex-col items-center lg:gap-y-[1.5625vw] gap-y-[20px] lg:w-[72.65625vw] w-full mx-auto lg:mt-[4.16666666667vw] sm:mt-[50px] mt-[40px]">
          {openings.map((opening, index) => (
            <Link
              key={index}
              href="/single-career-page"
              className="group w-full bg-[#94d4ff1a] border10 lg:px-[2.60416666667vw] lg:py-[2.21354166667vw] sm:p-[40px] p-[30px] flex flex-wrap justify-between items-end lg:gap-[3.75vw] sm:gap-[30px] gap-[20px]"
            >
              <div>
                <div className=" flex items-center lg:gap-x-[0.26041666666vw] gap-x-[4px]">
                  <div className=" relative lg:size-[0.72916666666vw] sm:size-[13px] size-[12px]">
                    <Image fill alt="icon" src="/images/icons/careers.svg" />
                  </div>
                  <span className="lg:text18 mtext14 text-[#002B87]">
                    {opening.location}
                  </span>
                </div>
                <span className="lg:text25 mtext18 text-[#0F0D0F] capitalize block lg:mt-[0.52083333333vw] mt-[6px]">
                  {opening.name}
                </span>
              </div>
              <LinkBtnV2 text={"Apply Now"} tag={"button"} />
            </Link>
          ))}
          <button className="mt16 lg:mt-[1.04166666667vw] flex items-center lg:gap-x-[0.52083333333vw] gap-x-[6px] group">
            <span className="lg:text30 mtext20 f600 text-[#002B87] capitalize">
              Load More
            </span>
            <div
              className={`${
                arabic
                  ? "group-hover:lg:translate-x-[-0.52083333333vw] group-hover:translate-x-[-6px] scale-x-[-1]"
                  : "group-hover:lg:translate-x-[0.52083333333vw] group-hover:translate-x-[6px] scale-x-[1]"
              } relative lg:size-[0.9375vw] size-[12px] transition500`}
            >
              <Image
                fill
                alt="chevron"
                src="/images/icons/loadmore-chevron.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
