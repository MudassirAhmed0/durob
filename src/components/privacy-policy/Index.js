import React from "react";
import SubPageHeroV2 from "../common/subpageherov2/SubPageHeroV2";
import PrivacyTermsContainer from "../common/PrivacyTermsContainer";

const PrivacyPolicyPage = ({ data }) => {
  const breadCrumbs = [{ text: data?.title }];
  return (
    <>
      <SubPageHeroV2 heading={data?.title} breadCrumbs={breadCrumbs} />
      <PrivacyTermsContainer privacyTerms={data?.content} />
    </>
  );
};

export default PrivacyPolicyPage;
