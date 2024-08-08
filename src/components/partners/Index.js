import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import WhyDuroub from "./whyduroub/WhyDuroub";
import Partners from "./partners/Partners";
import Contact from "../common/contact/Contact";

const breadCrumbs = [{ text: "partners" }];
const PartnersPage = () => {
  return (
    <>
      <SubPageHero
        heading="Our Partners"
        desc="At Duroub Logistics, we pride ourselves on building strong, collaborative relationships with our clients. Our commitment to excellence ensures that we consistently deliver top-notch logistics solutions that meet the diverse needs of our clients. By partnering with us, businesses can achieve their logistics goals efficiently and effectively"
        adjustContent={"lg:pb-[8.125vw]"}
        bannerSource={"/images/partners/hero.jpg"}
        breadCrumbs={breadCrumbs}
      />
      <WhyDuroub />
      <Partners />
      <Contact
        heading="Partner with Us"
        desc="Reach out for inquiries and support"
      />
    </>
  );
};

export default PartnersPage;
