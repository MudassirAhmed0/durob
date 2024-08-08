import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import Testimonial from "./Testimonial";
import Contact from "../common/contact/Contact";
import JobOpenings from "./JobOpenings";
const breadCrumbs = [{ text: "Careers" }];

const CareersPage = () => {
  return (
    <>
      <SubPageHero
        heading="Join Duroub Logistics"
        desc="Our dynamic and inclusive work environment fosters growth and innovation. We offer exciting career opportunities in the logistics industry, where you can make a significant impact"
        adjustContent={"lg:pb-[18.7037037037vh]"}
        bannerSource={"/images/partners/hero.jpg"}
        breadCrumbs={breadCrumbs}
      />
      <Testimonial />
      <JobOpenings />
      <Contact
        heading="Become a Part of Our Trailblazing Team"
        desc="Lorem ipsum dolor sit amet consectetur. Purus sed dignissim diam tempus. Purus praesent diam ultricies lorem dictum a. At pellentesque rutrum imperdiet neque ut leo cras."
        secondVarient
      />
    </>
  );
};

export default CareersPage;
