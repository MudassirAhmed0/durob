import React from "react";
import SubPageHeroV2 from "../common/subpageherov2/SubPageHeroV2";
import Contact from "../common/contact/Contact";
import Content from "./Content";
import Breifs from "./Breifs";
import getFormattedFormData from "@/form/getFormatterFormData";

const SingleCareerPage = ({
  data,
  arabic,
  form,
  formFeedback,
  contactUsData
}) => {
  const breadCrumbs = [{ text: "Careers", link: "/career" }];
  const formData = getFormattedFormData(form, arabic);
  return (
    <>
      <SubPageHeroV2
        heading={data?.title}
        breadCrumbs={breadCrumbs}
        tagImg={"/images/icons/careers.svg"}
        tagText={data?.city}
        arabic={arabic}
      />
      <section>
        <div className="container1680 py180 pt-[unset] flex flex-wrap lg:gap-[3.75vw] sm:gap-[50px] gap-[40px] justify-between">
          <Content data={data?.job_br} />
          <Breifs
            resposiblity={data?.responsibility}
            requirement={data?.requirement}
          />
        </div>
      </section>
      <Contact
        heading={form?.title_heading}
        desc={form?.description}
        formData={formData}
        endpoint={form?.handle}
        secondVarient
        jobId={data?.id}
        jobSlug={data?.slug}
        arabic={arabic}
        formFeedback={formFeedback}
        contactUsData={contactUsData}
      />
    </>
  );
};

export default SingleCareerPage;
