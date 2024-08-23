import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import WhyDuroub from "./whyduroub/WhyDuroub";
import Partners from "./partners/Partners";
import Contact from "../common/contact/Contact";
import getFormattedFormData from "@/form/getFormatterFormData";

const PartnersPage = ({ data, arabic }) => {
  const breadCrumbs = [];
  breadCrumbs.push({ text: data?.title });
  const formData = getFormattedFormData(
    data?.contact_us_section?.linked_form,
    arabic
  );
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title}
        desc={data?.hero_banner?.description}
        adjustContent={"lg:pb-[8.125vw]"}
        bannerSource={data?.hero_banner?.image?.src}
        breadCrumbs={breadCrumbs}
      />
      <WhyDuroub data={data?.why_section} />
      <Partners data={data?.partners_section} />
      <Contact
        heading={data?.contact_us_section?.title_heading}
        desc={data?.contact_us_section?.description}
        formData={formData}
      />
    </>
  );
};

export default PartnersPage;
