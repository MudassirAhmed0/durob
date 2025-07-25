import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Operations from "./operations/Operations";
import News from "./news/News";
import Banner from "./Banner";
import Partners from "./partners/Partners";
import Contact from "../common/contact/Contact";
import getFormattedFormData from "@/form/getFormatterFormData";

const HomePage = ({
  data,
  recentNews,
  arabic,
  serviceItems,
  formFeedback,
  contactUsData
}) => {
  const formData = getFormattedFormData(
    data?.contact_us_form_section?.linked_form,
    arabic
  );
  return (
    <>
      <Hero data={data?.video_banner} arabic={arabic} />
      <About data={data?.about_section} arabic={arabic} />
      <Services
        data={data?.services_section_wrapper}
        arabic={arabic}
        serviceItems={serviceItems?.data}
      />
      <Operations data={data?.operation_section} arabic={arabic} />
      {data?.news_section?.hide || (
        <News
          data={data?.news_section}
          recentNews={recentNews}
          arabic={arabic}
        />
      )}
      <Partners
        paddingTop={data?.news_section?.hide}
        data={data?.partners_section}
        arabic={arabic}
      />
      <Banner data={data?.mid_banner_section} arabic={arabic} />
      <Contact
        heading={data?.contact_us_form_section?.title_heading}
        desc={data?.contact_us_form_section?.description}
        formData={formData}
        endpoint={data?.contact_us_form_section?.linked_form?.handle}
        arabic={arabic}
        formFeedback={formFeedback}
        contactUsData={contactUsData}
      />
    </>
  );
};

export default HomePage;
