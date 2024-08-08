import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Operations from "./operations/Operations";
import News from "./news/News";
import Banner from "./Banner";
import Partners from "./partners/Partners";
import Contact from "../common/contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Operations />
      <News />
      <Partners />
      <Banner />
      <Contact
        heading="Get in Touch"
        desc="Reach out for inquiries and support"
      />
    </>
  );
};

export default HomePage;
