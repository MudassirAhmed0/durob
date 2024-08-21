"use client";

import React, { useEffect, useState } from "react";
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
import { useFormik } from "formik";
import { contactSchema, contactSecondVarientSchema } from "@/form/schemas";

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
const Contact = ({ secondVarient, arabic, heading, desc, fromContactPage }) => {
  const [subject, setSubject] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState("");

  const contactValues = {
    fullname: "",
    subject: "",
    email: "",
    message_subject: "",
    message: "",
  };

  const contactSecondVarientValues = {
    subject: "",
    fullname: "",
    nationality: "",
    gender: "",
    email: "",
    phone: "",
    file: "",
  };

  const {
    values,
    setValues,
    resetForm,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldTouched,
  } = useFormik({
    initialValues: secondVarient ? contactSecondVarientValues : contactValues,
    validationSchema: secondVarient
      ? contactSecondVarientSchema
      : contactSchema,
    onSubmit: (values) => {
      console.log("values: ", values);
      resetForm();
      setSubject("");
      setGender("");
      setFile("");
      setPhoneNumber("");
    },
  });

  console.log("values", values);
  // console.log("error", errors);
  // console.log("touched", touched);

  useEffect(() => {
    setValues((values) => ({ ...values, subject }));
  }, [setValues, subject]);

  useEffect(() => {
    setValues((values) => ({ ...values, gender }));
  }, [setValues, gender]);

  useEffect(() => {
    setValues((values) => ({ ...values, phone: phoneNumber }));
  }, [setValues, phoneNumber]);

  useEffect(() => {
    if (file) {
      setValues((values) => ({ ...values, file }));
      setFieldTouched("file", true);
    }
  }, [setValues, file, setFieldTouched]);

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
            <>
              <ul className="lg:mt-[2.08333333333vw] sm:mt-[30px] mt-[20px] flex flex-col flex-wrap lg:gap-y-[1.04166666667vw] gap-y-[15px] ">
                {contactLinks.map((contactLink, index) => (
                  <li
                    data-aos="fade"
                    data-aos-delay={index * 100}
                    key={contactLink.text}
                  >
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
              {fromContactPage && (
                <div className="flex justify-between items-center flex-wrap gap-[15px] lg:mt-[2.65625vw] sm:mt-[30px] mt-[20px] lg:pt-[2.65625vw] sm:pt-[30px] pt-[20px] border-t border-[#4964BF4D]">
                  <span data-aos="fade-up" className="lg:text24 mtext18 f600">
                    Our Accounts
                  </span>
                  <ul
                    data-aos="fade"
                    className="flex flex-wrap  lg:gap-[0.9375vw] gap-[18px] items-center"
                  >
                    {socialLinks.map((socialLink, index) => (
                      <li key={index}>
                        <Link
                          href={`${socialLink.link}`}
                          className="opacity_Hover relative block lg:size-[1.35416666667vw] size-[18px]"
                        >
                          <Image fill alt="social-icon" src={socialLink.img} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        <form
          data-aos="fade"
          onSubmit={handleSubmit}
          className={`${
            secondVarient
              ? "v2 lg:w-[41.4583333333vw] lg:px-[1.30208333333vw] !py-[unset] text-[#DFDFDF]"
              : "lg:w-[46.9270833333vw] lg:px-[2.70833333333vw] lg:py-[3.125vw] bg-[#94d4ff1a] border30 text-[#002B87B2]"
          } w-full sm:p-[40px] p-[10px] flex flex-col lg:gap-y-[2.08333333333vw] sm:gap-y-[30px] gap-y-[20px] lg:text24 mtext18`}
        >
          <DropDownField
            setValue={setSubject}
            value={subject}
            handleChange={handleChange}
            id="subject"
            name="subject"
            placeholder="Subject"
            error={errors.subject}
            touched={touched?.subject}
            secondVarient={secondVarient}
          />
          <InputField
            name="fullname"
            placeholder="Full Name"
            id="fullname"
            type="text"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            error={errors.fullname}
            touched={touched?.fullname}
            secondVarient={secondVarient}
          />
          {secondVarient && (
            <InputField
              name="nationality"
              placeholder="Nationality"
              id="nationality"
              type="text"
              value={values.nationality}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              error={errors.nationality}
              touched={touched?.nationality}
              secondVarient={secondVarient}
            />
          )}
          {secondVarient && (
            <GenderField
              gender={gender}
              setGender={setGender}
              error={errors.gender}
              secondVarient
              touched={touched?.gender}
            />
          )}
          <InputField
            name="email"
            placeholder="Email"
            id="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            error={errors.email}
            touched={touched?.email}
            secondVarient={secondVarient}
          />

          {secondVarient && (
            <PhoneField
              setPhoneNumber={setPhoneNumber}
              touched={touched?.phone}
              error={errors.phone}
              secondVarient
            />
          )}
          {secondVarient && (
            <UploadFileField
              file={file}
              setFile={setFile}
              touched={touched?.file}
              error={errors.file}
              secondVarient
            />
          )}

          {!secondVarient && (
            <InputField
              name="message_subject"
              placeholder="Message Subject"
              id="message_subject"
              type="text"
              value={values.message_subject}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              error={errors.message_subject}
              touched={touched?.message_subject}
            />
          )}

          {!secondVarient && (
            <TextAreaField
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              id="message"
              placeholder="Your message ..."
              autoComplete="off"
              error={errors.message}
              touched={touched?.message}
            />
          )}
          <SubmitBtn arabic={arabic} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
