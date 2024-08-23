import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import Testimonial from "./Testimonial";
import Contact from "../common/contact/Contact";
import JobOpenings from "./JobOpenings";
import getFormattedFormData from "@/form/getFormatterFormData";
const breadCrumbs = [{ text: "Careers" }];

const CareersPage = ({ data, arabic }) => {
  const formData = getFormattedFormData(
    data?.formlink_section?.linked_form,
    arabic
  );
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
        formData={formData}
        endpoint={data?.formlink_section?.linked_form.handle}
      />
    </>
  );
};

export default CareersPage;
