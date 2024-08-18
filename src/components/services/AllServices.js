"use client"

import React, { useEffect, useState } from "react";
import ImageComponent from "../common/ImageComponent";
import Image from "next/image";
import clsx from "clsx";

const services = [
  {
    id: "transportation",
    header: "Transportation",
    description: "We offer efficient and reliable delivery solutions, ensuring that your goods are transported safely and on time. Our extensive fleet and experienced drivers guarantee seamless logistics operations.",
    img: "/images/services/container/banners/1.jpg"
  },
  {
    id: "warehousing",
    header: "Warehousing",
    description: "Our multi-temperature warehousing solutions ensure the safety and quality of your products, from -25°C to +25°C. Our facilities are equipped with the latest technology to maintain optimal storage conditions",
    img: "/images/services/container/banners/07.png"
  },
  {
    id: "cross-border-transport",
    header: "Cross Border Transport",
    description: "We facilitate seamless international logistics, ensuring that your goods cross borders efficiently and without delays. Our expertise in customs regulations and cross-border documentation ensures smooth operations",
    img: "/images/services/container/banners/01.png"
  },
  {
    id: "4pl-&control-tower-management",
    header: "4PL & Control\n\nTower Management",
    description: "Our 4PL and control tower management services provide comprehensive oversight of your supply chain, ensuring real-time visibility and optimized operations. We manage your logistics, so you can focus on your core business",
    img: "/images/services/container/banners/02.png"
  },
  {
    id: "freight-forwarding",
    header: "Freight Forwarding",
    description: "Our freight forwarding services include air, sea, and land transportation, ensuring your goods reach their destination efficiently. We handle all aspects of logistics, from documentation to delivery",
    img: "/images/services/container/banners/03.png"
  },
  {
    id: "direct-store-delivery",
    header: "Direct Store Delivery",
    description: "Our direct store delivery services ensure timely and efficient delivery of products to retail outlets. We manage the entire process, from warehousing to final delivery, ensuring your products are always in stock",
    img: "/images/services/container/banners/04.png"
  },
  {
    id: "import-export",
    header: "Import/Export",
    description: "Lorem ipsum dolor sit amet consectetur. Diam at elementum quisque et nascetur. In non nullam quam elementum dolor lacinia. Turpis lacus bibendum est tempus. Congue gravida eget aenean molestie ac augue.",
    img: "/images/services/container/banners/05.png"
  },
  {
    id: "value-added-services",
    header: "Value Added Services",
    description: "Lorem ipsum dolor sit amet consectetur. Diam at elementum quisque et nascetur. In non nullam quam elementum dolor lacinia. Turpis lacus bibendum est tempus. Congue gravida eget aenean molestie ac augue.",
    img: "/images/services/container/banners/06.png"
  },
]

const AllServices = () => {
  const [activeHeader, setActiveHeader] = useState(services[0])
  const updateCurrentHeader = () => {
      services.map((item)=> {
        if (document.getElementById(item.id)?.getBoundingClientRect().top <= 200) {
          setActiveHeader(item)
        }
      })
  }

  useEffect(()=> {
    window.addEventListener("scroll", updateCurrentHeader)
    return ()=> window.removeEventListener("scroll", updateCurrentHeader)
  }, [])



  return (
    <section>
      <div>
        <div className="w-full bg-[#002B87] sticky top-0 overflow-auto scrollbar-hide z-10 flex items-stretch ">
          {
            services.map(service => (
            <button
              key={service.id}
              onClick={()=> document.getElementById(service.id)?.scrollIntoView({behavior: "smooth"})}
              className={clsx("lg:text22 md:mtext18 text-[12px] capitalize text-center border-[#FFFFFF1A] ltr:border-r rtl:border-l lg:px-[2.1875vw] lg:py-[0.88541666666vw] p-[15px] relative before:absolute before:lrf1", activeHeader.id === service.id ? "text-white before:bottom-0 before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:w-full before:bg-[#94D4FF]": "text-[#94D4FF]")}
            >
              {service.header}
            </button>
            ))
          }
        </div>
        <div className="py180 flex flex-col lg:gap-y-[10.4166666667vw] sm:gap-y-[180px] gap-y-[90px]">
          {
            services.map((service, index) => (
              <div key={service.id} id={service.id} className="relative">
                <img
                  src="/images/services/container/pattern1.png"
                  alt="pattern"
                  className="absolute bottom-0 lrf1 lg:w-[24.53125vw] w-[20%] flipped"
                />
                <div className="relative z-[2] flex flex-wrap justify-center items-center lg:gap-[4.42708333333vw] sm:gap-[50px] gap-[40px] container1680">
                  <div className={clsx("relative lg:size-[39.9479166667vw] sm:size-[450px] size-[350px] border20 overflow-hidden", index % 2 !== 0 ? "lg:order-last" : "")}>
                    <ImageComponent
                      alt={"banner-img"}
                      src={service.img}
                    />
                  </div>
                  <div className="lg:w-[39.1666666667vw] w-full">
                    <div>
                      <h5 className="text70 !f600 text-[#002B87] relative before:absolute before:lrf1 before:lg:top-[-0.78125vw] before:top-[-8px] before:content-[''] before:lg:h-[0.26041666666vw] before:h-[3px] before:lg:w-[2.96875vw] before:w-[12%] before:bg-[#60A1E2]">
                        {service.header}
                      </h5>
                      <p className="lg:text26 mtext16 mt16 lg:mt-[1.04166666667vw]">
                        {service.description}
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
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default AllServices;
