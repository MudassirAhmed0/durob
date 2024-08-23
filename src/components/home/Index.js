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

const HomePage = ({ data, recentNews, arabic }) => {
  const formData = getFormattedFormData(
    data?.contact_us_form_section?.linked_form,
    arabic
  );
  return (
    <>
      <Hero data={data?.video_banner} />
      <About data={data?.about_section} />
      <Services data={data?.services_section_wrapper} />
      <Operations data={data?.operation_section} />
      <News data={data?.news_section} recentNews={recentNews} />
      <Partners data={data?.partners_section} />
      <Banner data={data?.mid_banner_section} />
      <Contact
        heading={data?.contact_us_form_section?.title_heading}
        desc={data?.contact_us_form_section?.description}
        formData={formData}
      />
    </>
  );
};

export default HomePage;
