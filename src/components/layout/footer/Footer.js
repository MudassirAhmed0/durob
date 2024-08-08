import Image from "next/image";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    link: "#",
    text: "about Us",
  },
  {
    link: "#",
    text: "services",
  },
  {
    link: "#",
    text: "Partners",
  },
  {
    link: "#",
    text: "News",
  },
  {
    link: "#",
    text: "Careers",
  },
  {
    link: "#",
    text: "Contact Us",
  },
  {
    link: "#",
    text: "terms & conditions",
  },
  {
    link: "#",
    text: "privacy policy",
  },
];
const socialLinks = [
  {
    img: "/images/icons/social-footer/fb.svg",
    link: "https://www.facebook.com/",
  },
  {
    img: "/images/icons/social-footer/twitter.svg",
    link: "https://www.twitter.com/",
  },
  {
    img: "/images/icons/social-footer/insta.svg",
    link: "https://www.instagram.com/",
  },
  {
    img: "/images/icons/social-footer/linked.svg",
    link: "https://www.linkedin.com/",
  },
];
const Footer = ({ arabic }) => {
  return (
    <footer className="relative bg-[#002b8705]">
      <img
        src="/images/footer-pattern.png"
        alt="pattern"
        className="absolute bottom-0 lrf2 flipped w-full"
      />
      <div className="lg:py-[4.47916666667vw] sm:py-[60px] py-[40px] flex flex-wrap lg:gap-[4.6875vw] gap-[40px] items-end container1680 relative z-[2]">
        <Link
          href="#"
          className="relative z-[2] lg:w-[19.21875vw] lg:h-[6.19791666667vw] block sm:w-[250px] sm:h-[80px] w-[170px] h-[55px]"
        >
          <Image fill alt="logo" src="/images/icons/header-logo-black.svg" />
        </Link>
        <div className="flex flex-wrap lg:gap-[2.03125vw] sm:gap-[80px] gap-[40px] items-start">
          <nav className="lg:w-[unset] sm:w-[58%] flex flex-wrap flex-col lg:flex-row lg:gap-[1.5625vw] gap-[10px] sm:gap-[15px] items-start">
            <h6 className="lg:text22 mtext18 f600 text-[#002B87] capitalize">
              Company
            </h6>
            <ul className="lg:w-[28.0729166667vw] w-[95%] lg:text24 mtext18 capitalize flex flex-wrap lg:gap-x-[1.5625vw] lg:gap-y-[0.78125vw] gap-[12px] sm:gap-[15px] items-center">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={`${navLink.link}`}>{navLink.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-wrap flex-col lg:flex-row lg:gap-[1.5625vw] gap-[10px] sm:gap-[15px] items-start">
            <h6 className="lg:text22 mtext18 f600 text-[#002B87] capitalize">
              Follow Us
            </h6>

            <ul className="flex flex-wrap  lg:gap-[0.78125vw] gap-[15px] items-center">
              {socialLinks.map((socialLink, index) => (
                <li key={index}>
                  <Link
                    href={`${socialLink.link}`}
                    className="opacity_Hover relative block lg:size-[1.04166666667vw] size-[15px]"
                  >
                    <Image fill alt="social-icon" src={socialLink.img} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-[2] bg-[#4964BF] lg:py-[0.88541666666vw] py-[20px] text-center">
        <div className="lg:text16 mtext16 text-white text-opacity-[0.9] lg:tracking-[0.08333333333vw] tracking-[1.6px] container1680 flex flex-wrap sm:gap-[8px] gap-[6px] justify-center lg:justify-between">
          <span>Copyright @ 2023 Duroub Logistics. All Rights Reserved</span>
          <a
            href="https://brackets-tech.com/"
            target="_blank"
            className="opacity_Hover"
          >
            Developed by Brackets Technology
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
