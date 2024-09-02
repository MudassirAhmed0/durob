import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import AllServices from "./AllServices";
import Contact from "../common/contact/Contact";
import getFormattedFormData from "@/form/getFormatterFormData";

const ServicesPage = ({
  data,
  arabic,
  servicesItems,
  formFeedback,
  contactUsData
}) => {
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
        desc={data?.hero_banner?.description}
        adjustContent={"lg:pb-[7.03125vw]"}
        bannerSource={data?.hero_banner?.image?.src}
        breadCrumbs={breadCrumbs}
        video={data?.hero_banner?.image ? false : true}
        arabic={arabic}
      />
      <AllServices data={servicesItems?.data} arabic={arabic} />
      <Contact
        heading={data?.form_section?.title_heading}
        desc={data?.form_section?.short_description}
        formData={formData}
        endpoint={data?.form_section?.linked_form?.handle}
        arabic={arabic}
        formFeedback={formFeedback}
        contactUsData={contactUsData}
      />
    </>
  );
};

export default ServicesPage;
