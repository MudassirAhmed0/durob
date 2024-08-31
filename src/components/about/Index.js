"use client";
import React from "react";
import SubPageHero from "../common/subpagehero/SubPageHero";
import VissionMission from "./vissionmission/VissionMission";
import OurValues from "./ourvalues/OurValues";
import OurTeam from "./ourteam/OurTeam";
import ExcellenceOperation from "./excellenceoperation/ExcellenceOperation";
import Contact from "../common/contact/Contact";
import getFormattedFormData from "@/form/getFormatterFormData";
import Chairman from "./Chairman";
const AboutPage = ({ arabic, data, managementMembers, boardMembers }) => {
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
        adjustContent={"lg:pb-[35.6481481481vh] pb-[250px]"}
        overlay="about_HeroOverlay"
        bannerSource={data?.hero_banner?.image?.src}
        breadCrumbs={breadCrumbs}
        chairmanImage={data?.hero_banner?.ceo_picture?.src}
        fromAbout
        arabic={arabic}
      />
      <Chairman />
      <VissionMission
        vision={data?.vision}
        mission={data?.mission}
        arabic={arabic}
      />
      <OurValues data={data?.values_section} arabic={arabic} />
      <OurTeam
        data={data?.our_team_section}
        arabic={arabic}
        managementMembers={managementMembers}
        boardMembers={boardMembers}
      />
      <ExcellenceOperation data={data?.our_operation_section} arabic={arabic} />
      <Contact
        heading={data?.form_section?.title_heading}
        desc={data?.form_section?.short_description}
        formData={formData}
        endpoint={data?.form_section?.linked_form?.handle}
        arabic={arabic}
      />
    </>
  );
};

export default AboutPage;
