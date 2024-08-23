"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "../common/ImageComponent";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import slugify from "slugify";

const AllServices = ({ data }) => {
  const services = data.services.map((item) => ({
    ...item,
    id: slugify(item.title, { lower: true })
  }));
  const router = useRouter();
  const headerRef = useRef(null);
  const [activeHeader, setActiveHeader] = useState(services[0]);

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight * 3; // 3 times more height
    const isMobile = window.innerWidth < 768;
    const updateCurrentHeader = () => {
      services?.map((item) => {
        if (
          document.getElementById(item.id)?.getBoundingClientRect().top <=
          headerHeight
        ) {
          setActiveHeader(item);
          if (isMobile) {
            setTimeout(() => {
              const leftOffset = document.getElementById(
                `${item.id}-active`
              )?.offsetLeft;
              headerRef.current?.scroll({
                left: leftOffset,
                behavior: "smooth"
              });
            }, 1000);
          } else {
            router.push(`#${item.id}`, { scroll: false });
          }
        }
      });
    };

    // const handleHashChange = () => {
    //   const hash = window.location.hash.substring(1); // Get the ID from the hash
    //   const element = document.getElementById(hash);

    //   if (element) {
    //     const leftOffset = document.getElementById(
    //       `${hash}-active`
    //     )?.offsetLeft;
    //     const top = element.offsetTop;

    //     headerRef.current?.scroll({
    //       left: leftOffset,
    //       top: top,
    //       behavior: "smooth"
    //     });
    //   }
    // };
    window.addEventListener("scroll", updateCurrentHeader);
    // window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", updateCurrentHeader);
      // window.removeEventListener("hashchange", handleHashChange);
    };
  }, [router, services]);

  return (
    <section>
      <div>
        <div
          ref={headerRef}
          className="w-full bg-[#002B87] sticky top-0 overflow-auto scrollbar-hide z-10 flex items-stretch "
        >
          {services.map((service) => (
            <Link
              href={`#${service.id}`}
              key={service.id}
              id={
                service.id === activeHeader.id
                  ? `${service.id}-active`
                  : `${service.id}-inactive`
              }
              // onClick={()=> document.getElementById(service.id)?.scrollIntoView({behavior: "smooth"})}
              className={clsx(
                "lg:text22 md:mtext18 whitespace-nowrap lg:whitespace-normal text-[12px] flex items-center capitalize text-center border-[#FFFFFF1A] ltr:border-r rtl:border-l lg:px-[2.1875vw] lg:py-[0.88541666666vw] p-[15px] relative before:absolute before:lrf1",
                activeHeader.id === service.id
                  ? "text-white before:bottom-0 before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:w-full before:bg-[#94D4FF]"
                  : "text-[#94D4FF]"
              )}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="py180 flex flex-col lg:gap-y-[10.4166666667vw] sm:gap-y-[180px] gap-y-[90px]">
          {services?.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="relative scroll-mt-[20vw] lg:scroll-mt-[8vw]"
            >
              <img
                src="/images/services/container/pattern1.png"
                alt="pattern"
                className="absolute bottom-0 lrf1 lg:w-[24.53125vw] w-[20%] flipped"
              />
              <div className="relative z-[2] flex flex-wrap justify-center items-center lg:gap-[4.42708333333vw] sm:gap-[50px] gap-[40px] container1680">
                <div
                  className={clsx(
                    "relative lg:size-[39.9479166667vw] sm:size-[450px] size-[350px] border20 overflow-hidden",
                    index % 2 !== 0 ? "lg:order-last" : ""
                  )}
                >
                  <ImageComponent alt={"banner-img"} src={service.image.src} />
                </div>
                <div className="lg:w-[39.1666666667vw] w-full">
                  <div>
                    <h5 className="text70 !f600 text-[#002B87] relative before:absolute before:lrf1 before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#60A1E2]">
                      {service.title}
                    </h5>
                    {service?.description && (
                      // <Markdown className="prose prose-headings:p-0 prose-headings:mb-2 prose-img:rounded-lg prose-a:no-underline prose-a:text-blue-500">
                      //   {service.description}
                      // </Markdown>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: service?.description
                        }}
                        className="lg:text26 mtext16 mt16 lg:mt-[1.04166666667vw]"
                      ></div>
                    )}
                  </div>
                  <ul className="lg:mt-[3.125vw] sm:mt-[40px] mt-[30px] flex flex-wrap lg:gap-[6.04166666667vw] sm:gap-[40px] gap-[30px]">
                    {service?.features?.map((item) => {
                      return (
                        <li key={item?.caption}>
                          <div className="lg:size-[3.4375vw] sm:size-[56px] size-[46px] border20 bg-[#94D4FF26] flex justify-center items-center">
                            <div className="relative lg:size-[2.39583333333vw] size-[76%]">
                              {item?.icon && (
                                <Image fill alt="icon" src={item.icon?.src} />
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col lg:mt-[1.04166666667vw] mt-[10px]">
                            <span className="lg:text40 mtext28 f700 text-[#4964BF]">
                              {item?.caption}
                            </span>
                            <span className="lg:text22 mtext16 lg:leading-[2.08333333333vw]">
                              {item?.caption_details}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
