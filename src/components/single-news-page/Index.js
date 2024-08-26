import React from "react";
import SubPageHeroV2 from "../common/subpageherov2/SubPageHeroV2";
import ImageComponent from "../common/ImageComponent";
import { checkIfExist } from "@/utils/checkIfExist";

const SingleNewsPage = ({ data }) => {
  const breadCrumbs = [{ text: "News", link: "/news" }];
  return (
    <>
      <SubPageHeroV2
        heading={data?.title}
        breadCrumbs={breadCrumbs}
        tagText={data?.date}
      />
      <section>
        <div className="pt-[unset] py180 container1680 flex flex-col-reverse lg:flex-row justify-between items-start flex-wrap lg:gap-[6.04166666667vw] sm:gap-[40px] gap-[30px]">
          <div
            data-aos="fade-up"
            className="lg:w-[36.9791666667vw] lg:text22 mtext16 lg:leading-[1.66666666667vw]"
          >
            <div
              dangerouslySetInnerHTML={{ __html: checkIfExist(data?.content) }}
            ></div>
          </div>
          <div
            data-aos="fade"
            className="relative lg:w-[44.375vw] lg:h-[39.0104166667vw] w-full sm:h-[350px] h-[300px] border15 overflow-hidden"
          >
            <ImageComponent alt={data?.title} src={data?.image?.src} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNewsPage;
