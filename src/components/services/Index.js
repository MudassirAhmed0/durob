import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import AllServices from "./AllServices";
import Contact from "../common/contact/Contact";
import { checkIfExist } from "@/utils/checkIfExist";
const breadCrumbs = [{ text: "Services" }];

const ServicesPage = ({ data, arabic }) => {
  // checkIfExist()
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title || "Comprehensive Logistics Solutions"}
        desc={data?.hero_banner?.description || "Duroub Logistics offers a wide range of integrated logistics services, including transportation, warehousing, cross-border transport, and more, ensuring seamless and efficient supply chain management for our clients"}
        adjustContent={"lg:pb-[7.03125vw]"}
        bannerSource={data?.hero_banner?.image?.src || "/videos/services-hero.mp4"}
        breadCrumbs={breadCrumbs}
        video={data?.hero_banner?.image ? false : true}
      />
      <AllServices data={data?.services_section} />
      <Contact
        heading="Partner with Us"
        desc="Reach out for inquiries and support"
      />
    </>
  );
};

export default ServicesPage;
