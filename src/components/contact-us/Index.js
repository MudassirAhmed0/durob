import React from "react";
import Contact from "../common/contact/Contact";
import SubPageHero from "../common/subpagehero/SubPageHero";
const breadCrumbs = [{ text: "Contact Us" }];

const ContactUsPage = ({data}) => {
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title || "Get in Touch"}
        adjustContent={"lg:pb-[3.90625vw] lg:!h-[36.3020833333vw] !h-[70vh]"}
        bannerSource={data?.hero_banner?.image?.src || "/images/contact/hero.jpg"}
        breadCrumbs={breadCrumbs}
      />
      <Contact
        heading="Drop Us a Line"
        desc="Reach out for inquiries and support. We offer specialized logistics services to meet your unique needs"
        fromContactPage
      />
    </>
  );
};

export default ContactUsPage;
