import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import Testimonial from "./Testimonial";
import Contact from "../common/contact/Contact";
import JobOpenings from "./JobOpenings";
const breadCrumbs = [{ text: "Careers" }];

const CareersPage = ({ data }) => {
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title}
        desc={data?.hero_banner?.description}
        adjustContent={"lg:pb-[18.7037037037vh]"}
        bannerSource={data?.hero_banner?.image?.src}
        breadCrumbs={breadCrumbs}
      />
      <Testimonial data={data?.testimony_section} />
      <JobOpenings data={data?.jobs_section} />
      <Contact
        heading={data?.formlink_section?.title_heading}
        desc={data?.formlink_section?.desc}
        secondVarient
      />
    </>
  );
};

export default CareersPage;
