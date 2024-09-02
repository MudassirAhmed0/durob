import { checkIfExist } from "@/utils/checkIfExist";
import React from "react";

const PrivacyTermsContainer = ({ privacyTerms }) => {
  return (
    <section>
      <div
        data-aos="fade"
        className="container1680 py180 pt-[unset] lg:mt-[4.16666666667vw] sm:mt-[50px] mt-[40px]"
      >
        <div
          dangerouslySetInnerHTML={{ __html: checkIfExist(privacyTerms) }}
          className="lg:w- [59.1666666667vw] w-full PrivacyTerms defaultList"
        ></div>
      </div>
    </section>
  );
};

export default PrivacyTermsContainer;
