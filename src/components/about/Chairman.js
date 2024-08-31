import Image from "next/image";
import React from "react";

const Chairman = () => {
  return (
    <section>
      <div className="container1680 border20 aboutChairman_Overlay lg:min-h-[73.3333333333vh] lg:p-[7.03703703704vh] py-[30px] px-[20px] relative mt-[-20%] lg:mt-[-28.2407407407vh]">
        <div className="lg:text30 lg:leading-[3.7037037037vh] mtext18 lg:w-[41.875vw] text-white relative z-[2] pt-[180px] lg:pt-[unset]">
          Welcome to Duroub Integrated Logistics,
          <br />
          <br />
          As the leading provider of comprehensive food logistics solutions in
          the region, we take pride in offering an unmatched, all-in-one service
          that fulfills all your logistics needs across Saudi Arabia with a
          single, seamless contract. Our unwavering commitment to excellence,
          powered by cutting-edge technology and a dedicated team, ensures the
          utmost quality and reliability at every stage of your supply chain.
          <br />
          <br />
          At Duroub, we are dedicated to supporting your business&apos;s growth
          while safeguarding the integrity of your products from start to
          finish. Thank you for placing your trust in Duroub Integrated
          Logistics. We look forward to driving your success together.
        </div>
        <div className="lg:w-[44.375vw] w-full lg:h-[calc(100%_+42.037037037vh)] absolute lrf2 lg:top-[-42.037037037vh] top-[-20%] lg:mx-[2.03125vw]">
          <div className=" w-full lg:sticky top-0 lrf2">
            <span className="ceo_Overlay atwh_Full z-[1] lrf1 top-[unset] bottom-0 lg:h-[16.9444444444vh] h-[20%]"></span>
            <div className="lg:h-[81.4814814815vh] lg:w-[41.9791666667vw] w-[90%] h-[300px] sm:h-[450px] relative lg:ltr:ml-auto mx-auto lg:ltr:mr-[unset]">
              <Image
                fill
                alt="person"
                src="/images/about/about-person-hero.png"
                className="flipped object-contain"
                quality={100}
              />
            </div>
            <div className="flex lg:justify-end text-white relative z-[2] lg:px-[4.79166666667vw] px-[50px] lg:mt-[-6.94444444444vh] mt-[-10px] w-full">
              <div className="flex flex-col lg:gap-y-[0.52083333333vw]">
                <h5 className="lg:text40 mtext24 f600 relative before:absolute before:lrf1 before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#94D4FF]">
                  Samer Kurdi
                </h5>
                <span className="lg:text25 mtext18 text-start">Chairman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
