import React from "react";
import SubPageHeroV2 from "../common/subpageherov2/SubPageHeroV2";
import Contact from "../common/contact/Contact";
import Content from "./Content";
import Breifs from "./Breifs";
const breadCrumbs = [{ text: "Careers" }];

const SingleCareerPage = () => {
  return (
    <>
      <SubPageHeroV2
        heading="Position title goes here"
        breadCrumbs={breadCrumbs}
        tagImg={"/images/icons/careers.svg"}
        tagText={"Jeddah"}
      />
      <section>
        <div className="container1680 py180 pt-[unset] flex flex-wrap lg:gap-[3.75vw] sm:gap-[50px] gap-[40px] justify-between">
          <Content />
          <Breifs />
        </div>
      </section>
      <Contact
        heading="Apply for This position to Become a Part of Our Team"
        desc="Lorem ipsum dolor sit amet consectetur. Purus sed dignissim diam tempus. Purus praesent diam ultricies lorem dictum a. At pellentesque rutrum imperdiet neque ut leo cras."
        secondVarient
      />
    </>
  );
};

export default SingleCareerPage;
