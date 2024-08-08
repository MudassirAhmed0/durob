import React from "react";
import ImageComponent from "../common/ImageComponent";
import Image from "next/image";

const AllServices = () => {
  return (
    <section>
      <div>
        <div className="w-full bg-[#002B87] flex items-stretch text-[#94D4FF]">
          <button
            className="lg:text22 mtext18 capitalize text-center border-[#FFFFFF1A] ltr:border-r rtl:border-l lg:px-[2.1875vw] lg:py-[0.88541666666vw] p-[15px]
        relative before:absolute before:lrf1 before:bottom-0 before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:w-full before:bg-[#94D4FF]"
          >
            4PL & Control <br /> Tower Management
          </button>
        </div>
        <div className="py180 flex flex-col lg:gap-y-[10.4166666667vw] sm:gap-y-[180px] gap-y-[90px]">
          <div className="relative">
            <img
              src="/images/services/container/pattern1.png"
              alt="pattern"
              className="absolute bottom-0 lrf1 lg:w-[24.53125vw] w-[20%] flipped"
            />
            <div className="relative z-[2] flex flex-wrap justify-center items-center lg:gap-[4.42708333333vw] sm:gap-[50px] gap-[40px] container1680">
              <div className="relative lg:size-[39.9479166667vw] sm:size-[450px] size-[350px] border20 overflow-hidden">
                <ImageComponent
                  alt={"banner-img"}
                  src="/images/services/container/banners/1.jpg"
                />
              </div>
              <div className="lg:w-[39.1666666667vw] w-full">
                <div>
                  <h5 className="text70 !f600 text-[#002B87] relative before:absolute before:lrf1 before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#60A1E2]">
                    Vision
                  </h5>
                  <p className="lg:text26 mtext16 mt16 lg:mt-[1.04166666667vw]">
                    We offer efficient and reliable delivery solutions, ensuring
                    that your goods are transported safely and on time. Our
                    extensive fleet and experienced drivers guarantee seamless
                    logistics operations.
                  </p>
                </div>
                <ul className="lg:mt-[3.125vw] sm:mt-[40px] mt-[30px] flex flex-wrap lg:gap-[6.04166666667vw] sm:gap-[40px] gap-[30px]">
                  <li>
                    <div className="lg:size-[3.4375vw] sm:size-[56px] size-[46px] border20 bg-[#94D4FF26] flex justify-center items-center">
                      <div className="relative lg:size-[2.39583333333vw] size-[76%]">
                        <Image
                          fill
                          alt="icon"
                          src="/images/services/container/icons/1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:mt-[1.04166666667vw] mt-[10px]">
                      <span className="lg:text40 mtext28 f700 text-[#4964BF]">
                        +60
                      </span>
                      <span className="lg:text22 mtext16 lg:leading-[2.08333333333vw]">
                        Total Trucks
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="lg:size-[3.4375vw] sm:size-[56px] size-[46px] border20 bg-[#94D4FF26] flex justify-center items-center">
                      <div className="relative lg:size-[2.39583333333vw] size-[76%]">
                        <Image
                          fill
                          alt="icon"
                          src="/images/services/container/icons/2.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:mt-[1.04166666667vw] mt-[10px]">
                      <span className="lg:text40 mtext28 f700 text-[#4964BF]">
                        +5
                      </span>
                      <span className="lg:text22 mtext16 lg:leading-[2.08333333333vw]">
                        Cities Around SA
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
