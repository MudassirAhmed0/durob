import LinkBtn from "@/components/common/LinkBtn";
import Layout from "@/components/layout/Index";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <Layout blackHeader>
      <section className="h-screen w-full flex justify-center lg:items-end items-center lg:pb-[21.2037037037vh] relative">
        <span className="atwh_Full lrf1 error_Overlay"></span>
        <div className="lg:w-[36.6145833333vw] container1680 flex flex-col lg:gap-y-[3.7037037037vh] gap-y-[20px] items-center text-center relative z-[2]">
          <div className="relative lg:w-[19.8958333333vw] lg:h-[13.75vw] w-[65%] h-[40vw]">
            <Image fill alt="404" src="/images/404.png" />
          </div>
          <div className="flex flex-col lg:gap-y-[1.85185185185vh] gap-y-[8px] items-center">
            <span className="text50 !font-[800] text-[#002B87]">
              Oops! Page not found
            </span>
            <span className="lg:text30 mtext20 ">Oops! Page not found</span>
          </div>
          <LinkBtn flipped text="Go Back Home" />
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
