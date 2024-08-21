import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import Testimonial from "./Testimonial";
import Contact from "../common/contact/Contact";
import JobOpenings from "./JobOpenings";
const breadCrumbs = [{ text: "Careers" }];

const CareersPage = ({data}) => {
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title || "Join Duroub Logistics"}
        desc={data?.hero_banner?.description || "Our dynamic and inclusive work environment fosters growth and innovation. We offer exciting career opportunities in the logistics industry, where you can make a significant impact"}
        adjustContent={"lg:pb-[18.7037037037vh]"}
        bannerSource={data?.hero_banner?.image?.src || "/images/partners/hero.jpg"}
        breadCrumbs={breadCrumbs}
      />
      <Testimonial data={data?.testimony_section} />
      <JobOpenings data={data?.jobs_section} />
      <Contact
        heading="Become a Part of Our Trailblazing Team"
        desc="Lorem ipsum dolor sit amet consectetur. Purus sed dignissim diam tempus. Purus praesent diam ultricies lorem dictum a. At pellentesque rutrum imperdiet neque ut leo cras."
        secondVarient
      />
    </>
  );
};

export default CareersPage;
