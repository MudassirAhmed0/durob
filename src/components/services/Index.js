import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import AllServices from "./AllServices";
import Contact from "../common/contact/Contact";
const breadCrumbs = [{ text: "Services" }];
const ServicesPage = () => {
  return (
    <>
      <SubPageHero
        heading="Comprehensive 
Logistics Solutions"
        desc="Duroub Logistics offers a wide range of integrated logistics services, including transportation, warehousing, cross-border transport, and more, ensuring seamless and efficient supply chain management for our clients"
        adjustContent={"lg:pb-[7.03125vw]"}
        bannerSource={"/videos/services-hero.mp4"}
        breadCrumbs={breadCrumbs}
        video
      />
      <AllServices />
      <Contact
        heading="Partner with Us"
        desc="Reach out for inquiries and support"
      />
    </>
  );
};

export default ServicesPage;
