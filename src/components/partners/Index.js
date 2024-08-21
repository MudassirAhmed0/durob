import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import WhyDuroub from "./whyduroub/WhyDuroub";
import Partners from "./partners/Partners";
import Contact from "../common/contact/Contact";

const breadCrumbs = [{ text: "partners" }];
const PartnersPage = ({data}) => {
  console.log("data", data);

  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title || "Our Partners"}
        desc={data?.hero_banner?.description || "At Duroub Logistics, we pride ourselves on building strong, collaborative relationships with our clients. Our commitment to excellence ensures that we consistently deliver top-notch logistics solutions that meet the diverse needs of our clients. By partnering with us, businesses can achieve their logistics goals efficiently and effectively"}
        adjustContent={"lg:pb-[8.125vw]"}
        bannerSource={data?.hero_banner?.image?.src || "/images/partners/hero.jpg"}
        breadCrumbs={breadCrumbs}
      />
      <WhyDuroub data={data?.why_section} />
      <Partners data={data?.partners_section} />
      <Contact
        heading="Partner with Us"
        desc="Reach out for inquiries and support"
      />
    </>
  );
};

export default PartnersPage;
