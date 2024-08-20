"use client";
import useAos from "@/hooks/useAos";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = ({ blackHeader, data }) => {
  useAos();
  const [showDropDown, setShowDropDown] = useState(false);
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  function toggleSidebar() {
    const body = document.querySelector("body");
    const sideBar = document.querySelector(".sideBar");
    const menu = document.querySelector(".menu");
    body.classList.toggle("active");
    sideBar.classList.toggle("active");
    menu.classList.toggle("active");
  }
  return (
    <header
      className={`${
        blackHeader ? "blackHeader" : ""
      } absolute w-full top-0 z-[9] lg:px-[6.25vw] lg:pt-[3.02083333333vw] p-[20px] flex items-center lg:gap-x-[9.375vw] justify-between`}
    >
      <Link
        href="/"
        className="relative z-[2] lg:w-[18.6979166667vw] lg:h-[5.98958333333vw] block sm:w-[230px] sm:h-[75px] w-[150px] h-[50px]"
      >
        <Image
          fill
          alt="logo"
          src="/images/icons/header-logo-white.svg"
          className="headerWhite-logo"
        />
        <Image
          fill
          alt="logo"
          src="/images/icons/header-logo-black.svg"
          className="headerBlack-logo hidden"
        />
      </Link>
      <nav className="text-[#FFFFFF]">
        <ul className="sideBar px-[20px] lg:px-[unset] absolute top-0 lrf1 lg:static h-[100vh] lg:h-[unset] w-full lg:w-[unset] lg:text28 mtext20 capitalize flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-[1.66666666667vw] place-content-center lg:items-center">
          {data.map(({ page }, index) => (
            <li key={index} onClick={toggleSidebar}>
              <Link className="whitespace-nowrap" href={`${page.url}`}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-[20px] items-center ltr:ml-[1.97916666667vw] rtl:mr-[1.97916666667vw]">
        <button className="langSwitcher text-[#FFF] lg:text18 mtext14 capitalize relative">
          <div
            onClick={() => {
              handleDropDown();
            }}
            className="flex lg:gap-x-[0.41666666666vw] items-center f700 relative z-[2]"
          >
            <span>English</span>
            <div className=" hidden lg:block relative lg:w-[1.5625vw] lg:h-[1.04166666667vw]">
              <Image
                fill
                alt="logo"
                src="/images/icons/american-flag.svg"
                className="american-flag"
              />
            </div>
            <svg
              className={`${
                showDropDown ? "scale-y-[-1]" : "scale-y-[1]"
              } chevron lg:w-[0.625vw] transition-all duration-500 hidden lg:block`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 9"
              fill="none"
            >
              <path
                d="M6.42104 8.44466L0 2.02356L1.42105 0.602539L7.84214 7.02356L6.42104 8.44466ZM12.8421 2.02356L6.42104 8.44466L4.99994 7.02356L11.421 0.602539L12.8421 2.02356Z"
                fill="white"
              />
            </svg>
          </div>
          <ul
            className={`${
              showDropDown
                ? "opacity-[1] scale-[1] translate-y-[0] pointer-events-auto"
                : "opacity-0 translate-y-[-0.2vw] pointer-events-none"
            } transition-all duration-500 lg:w-[8.28125vw] dropDown absolute top-[100%] lrf2 flex flex-col`}
          >
            <li className="lg:px-[1.04166666667vw] lg:py-[0.625vw] border15 bg-white text-[#002B87] flex lg:gap-x-[0.41666666666vw] items-center">
              <span>العربية</span>
              <div className="relative lg:w-[1.5625vw] lg:h-[1.04166666667vw]">
                <Image
                  fill
                  alt="logo"
                  src="/images/icons/arabic-flag.svg"
                  className="arabic-flag"
                />
              </div>
            </li>
          </ul>
        </button>
        <div
          onClick={toggleSidebar}
          className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
        >
          <span className="top-0"></span>
          <span className="top-[30%]"></span>
          <span className="top-[60%]"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
