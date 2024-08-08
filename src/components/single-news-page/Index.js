import React from "react";
import SubPageHeroV2 from "../common/subpageherov2/SubPageHeroV2";
import ImageComponent from "../common/ImageComponent";
const breadCrumbs = [{ text: "News" }];

const SingleNewsPage = () => {
  return (
    <>
      <SubPageHeroV2
        heading="Lorem ipsum dolor sit amet consectetur cras adipiscing "
        breadCrumbs={breadCrumbs}
        tagText={"09 May 2023"}
      />
      <section>
        <div className="pt-[unset] py180 container1680 flex flex-col-reverse lg:flex-row justify-between items-start flex-wrap lg:gap-[6.04166666667vw] sm:gap-[40px] gap-[30px]">
          <div className="lg:w-[36.9791666667vw] lg:text22 mtext16 lg:leading-[1.66666666667vw]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam at elementum quisque
              et nascetur. In non nullam quam elementum dolor lacinia. Turpis
              lacus bibendum est tempus. Congue gravida eget aenean molestie ac
              augue. Nunc quis viverra adipiscing dolor elementum nibh ut purus.
              Ut id vitae egestas enim lorem cras justo. Ornare eu sed ipsum
              nibh adipiscing. Suspendisse vitae est tristique proin lorem
              risus. Eu molestie vel lobortis at. Sit feugiat velit nunc nunc
              dolor eget cursus sed. Malesuada blandit in sed ac ac aliquam
              tellus. Pharetra nulla sed est erat lorem quam nam. Viverra
              posuere sit eget pellentesque scelerisque lectus integer felis
              vel. <br /> <br /> Libero nulla scelerisque urna nisl metus porta
              purus fermentum dolor. Sed diam laoreet eros massa eget. Proin sem
              facilisis amet id tellus. Pellentesque nullam euismod ac sit magna
              diam. Massa ut nunc lacus augue urna a sit. Adipiscing quisque
              commodo ut duis morbi morbi. Amet viverra dictumst netus ac.
              Consequat eleifend scelerisque commodo ultrices porttitor proin
              integer rhoncus blandit. Adipiscing laoreet scelerisque dignissim
              faucibus volutpat rhoncus pulvinar penatibus. At viverra eget sed
              ut adipiscing fames nisi. Sed tincidunt fringilla dui scelerisque
              amet vitae eu. Mauris mauris tincidunt vulputate porta phasellus
              dolor volutpat cras eu.
            </p>
          </div>
          <div className="relative lg:w-[44.375vw] lg:h-[39.0104166667vw] w-full sm:h-[350px] h-[300px] border15 overflow-hidden">
            <ImageComponent
              alt={"banner"}
              src="/images/single-news/banner.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNewsPage;
