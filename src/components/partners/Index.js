import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import WhyDuroub from "./whyduroub/WhyDuroub";
import Partners from "./partners/Partners";
import Contact from "../common/contact/Contact";

const PartnersPage = ({ data }) => {
  const breadCrumbs = [];
  breadCrumbs.push({ text: data?.title });

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
      />
    </>
  );
};

export default PartnersPage;
