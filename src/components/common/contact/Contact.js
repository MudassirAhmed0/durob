import React from "react";
import ContentWrapper from "../ContentWrapper";
import Link from "next/link";
import Image from "next/image";
import InputField from "./InputField";
import DropDownField from "./DropDownField";
import SubmitBtn from "./SubmitBtn";
import GenderField from "./GenderField";
import PhoneField from "./PhoneField";
import UploadFileField from "./UploadFIleField";
import TextAreaField from "./TextAreaField";
const contactLinks = [
  {
    img: "/images/icons/contact/phone.svg",
    link: "tel:+966 58 168 0000",
    text: "+966 58 168 0000",
  },
  {
    img: "/images/icons/contact/mail.svg",
    link: "mailto:Customercare@duroub.com",
    text: "Customercare@duroub.com",
  },
  {
    img: "/images/icons/contact/location.svg",
    link: "https://www.google.com/maps",
    text: "Business park, near to Jamjoom center, Al Hamrah dist. P.O. box: 8960, KSA. Jeddah 21492",
    taget: true,
  },
];
const Contact = ({ secondVarient, arabic, heading, desc }) => {
  return (
    <section
      className={`${
        secondVarient ? "lg:py-[6.77083333333vw]" : ""
      } py180 relative`}
    >
      {secondVarient && (
        <div className="atwh_Full lrf1">
          <img
            src="/images/home/ct-pattern.png"
            alt="pattern"
            className="flipped atwh_Full lrf1 object-cover"
          />
          <span className="atwh_Full lrf1 ct_Overlay"></span>
        </div>
      )}
      <div className="relative z-[2] container1680 flex flex-wrap items-start justify-between sm:gap-[40px] gap-[30px]">
        <div className="lg:w-[36.9791666667vw]">
          <ContentWrapper
            headingClasses="text67"
            heading={heading}
            desc={desc}
            classes={`lg:w-[36.9791666667vw] ${secondVarient ? "white" : ""}`}
          />
          {secondVarient || (
            <ul className="lg:mt-[2.08333333333vw] sm:mt-[30px] mt-[20px] flex flex-col flex-wrap lg:gap-y-[1.04166666667vw] gap-y-[15px] ">
              {contactLinks.map((contactLink, index) => (
                <li key={index}>
                  <Link
                    href={`${contactLink.link}`}
                    target={`${contactLink.taget ? "_blank" : "_self"}`}
                    className="opacity_Hover flex lg:gap-x-[0.52083333333vw] gap-x-[6px] items-start"
                  >
                    <div className="relative lg:min-w-[2.08333333333vw] sm:min-w-[30px] min-w-[20px] lg:size-[2.08333333333vw] sm:size-[30px] size-[20px]">
                      <Image fill alt="social-icon" src={contactLink.img} />
                    </div>
                    <span className="lg:text24 mtext18">
                      {contactLink.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form
          className={`${
            secondVarient
              ? "v2 lg:w-[41.4583333333vw] lg:px-[1.30208333333vw] !py-[unset] text-[#DFDFDF]"
              : "lg:w-[46.9270833333vw] lg:px-[2.70833333333vw] lg:py-[3.125vw] bg-[#94d4ff1a] border30 text-[#002B87B2]"
          } w-full sm:p-[40px] p-[10px] flex flex-col lg:gap-y-[2.08333333333vw] sm:gap-y-[30px] gap-y-[20px] lg:text24 mtext18 capitalize`}
        >
          <InputField />
          <DropDownField />
          {secondVarient && (
            <>
              <GenderField />
              <PhoneField />
              <UploadFileField />
            </>
          )}
          <TextAreaField />
          <SubmitBtn arabic={arabic} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
