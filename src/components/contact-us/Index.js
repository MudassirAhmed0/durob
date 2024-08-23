import React from "react";
import Contact from "../common/contact/Contact";
import SubPageHero from "../common/subpagehero/SubPageHero";
import getFormattedFormData from "@/form/getFormatterFormData";

const ContactUsPage = ({ data, arabic }) => {
  const breadCrumbs = [];
  breadCrumbs.push({ text: data?.title });
  const formData = getFormattedFormData(
    data?.form_section?.linked_form,
    arabic
  );
  return (
    <>
      <SubPageHero
        heading={data?.hero_banner?.title}
        adjustContent={"lg:pb-[3.90625vw] lg:!h-[36.3020833333vw] !h-[70vh]"}
        bannerSource={data?.hero_banner?.image?.src}
        breadCrumbs={breadCrumbs}
      />
      <Contact
        heading={data?.form_section?.title_heading}
        desc="Reach out for inquiries and support. We offer specialized logistics services to meet your unique needs"
        fromContactPage
        formData={formData}
      />
    </>
  );
};

export default ContactUsPage;
