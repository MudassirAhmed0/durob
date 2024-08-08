import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import VissionMission from "./vissionmission/VissionMission";
import OurValues from "./ourvalues/OurValues";
import OurTeam from "./ourteam/OurTeam";
import ExcellenceOperation from "./excellenceoperation/ExcellenceOperation";
import Contact from "../common/contact/Contact";
const breadCrumbs = [{ text: "About Us" }];
const AboutPage = ({ arabic }) => {
  return (
    <>
      <SubPageHero
        heading="Chairman Message"
        desc={`At Duroub Logistics, we are committed to setting the benchmark for excellence in the logistics industry. Our mission is to deliver innovative, reliable, and sustainable solutions that exceed our clients' expectations`}
        adjustContent={"lg:pb-[21.7592592593vh]"}
        overlay="about_HeroOverlay"
        bannerSource={"/images/about/hero.jpg"}
        breadCrumbs={breadCrumbs}
        fromAbout
      />
      <VissionMission arabic={arabic} />
      <OurValues arabic={arabic} />
      <OurTeam arabic={arabic} />
      <ExcellenceOperation arabic={arabic} />
      <Contact
        heading="Get in Touch"
        desc="Reach out for inquiries and support"
      />
    </>
  );
};

export default AboutPage;
