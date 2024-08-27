"use client";

import React, { useEffect, useRef, useState } from "react";
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
import {
  contactSchema,
  contactSecondVarientSchema,
  getValidationSchema
} from "@/form/schemas";
import CaptchaField from "./CaptchaField";
import postForm from "@/form/postForm";
import clsx from "clsx";

const contactLinks = [
  {
    img: "/images/icons/contact/phone.svg",
    link: "tel:+966 58 168 0000",
    text: "+966 58 168 0000"
  },
  {
    img: "/images/icons/contact/mail.svg",
    link: "mailto:Customercare@duroub.com",
    text: "Customercare@duroub.com"
  },
  {
    img: "/images/icons/contact/location.svg",
    link: "https://www.google.com/maps",
    text: "Business park, near to Jamjoom center, Al Hamrah dist. P.O. box: 8960, KSA. Jeddah 21492",
    taget: true
  }
];
const socialLinks = [
  {
    img: "/images/icons/social-footer/fb.svg",
    link: "https://www.facebook.com/"
  },
  {
    img: "/images/icons/social-footer/twitter.svg",
    link: "https://www.twitter.com/"
  },
  {
    img: "/images/icons/social-footer/insta.svg",
    link: "https://www.instagram.com/"
  },
  {
    img: "/images/icons/social-footer/linked.svg",
    link: "https://www.linkedin.com/"
  }
];
const Contact = ({
  secondVarient,
  arabic,
  heading,
  desc,
  fromContactPage,
  formData,
  endpoint,
  jobId,
  jobSlug
}) => {
  const [additionalFields, setAdditionalFields] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [varified, setVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const initialValues = formData?.reduce((acc, item) => {
    acc[item.id] = "";
    return acc;
  }, {});

  const validationSchema = getValidationSchema(formData);

  const {
    values,
    setValues,
    resetForm,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
    touched,
    isSubmitting,
    setTouched,
    validateForm
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("submit", values);
      let res;
      if (jobId && jobSlug) {
        res = await postForm(
          { ...values, job_id: jobId, job_slug: jobSlug },
          endpoint
        );
      } else {
        res = await postForm(values, endpoint);
      }
      if (res?.status == 200) {
        setSubmitSuccess("Your Form has been sucessfully submitted.");
        setSubmitError(null);
        resetForm();
        setAdditionalFields({});
        captchaRef.current?.reset();
      } else {
        setSubmitError("Internal server Error.");
        setSubmitSuccess(null);
        captchaRef.current?.reset();
      }
    }
  });

  const validateThenSumbit = async (e) => {
    e.preventDefault();
    const errors = await validateForm(); // Trigger Formik validation
    if (Object.keys(errors).length === 0) {
      if (varified) {
        handleSubmit(); // Call Formik's handleSumbit function if valid
      } else {
        setCaptchaError(true);
      }
    } else {
      const touches = Object.keys(errors).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});

      setTouched(touches);
      setErrors(errors);
      const firstErrorId = formData.find((field) =>
        errors.hasOwnProperty(field.id)
      ).id;
      const errorElement = document.getElementById(firstErrorId);
      errorElement.style.scrollMarginTop = "40px";
      errorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    formData?.map((field) => {
      if (
        field.type === "select" ||
        field.type === "number" ||
        field.type === "tel" ||
        field.type === "files"
      ) {
        setAdditionalFields((prev) => ({ ...prev, [field.id]: "" }));
      }
    });
  }, []);

  useEffect(() => {
    setValues((values) => ({ ...values, ...additionalFields }));
  }, [setValues, additionalFields]);

  const handleRecaptchaChange = (token) => {
    // This callback will be called when the user verifies the CAPTCHA
    setVerified(true);
    setCaptchaError(false);
  };
  const handleRecaptchaExpire = (token) => {
    // This callback will be called when the user verifies the CAPTCHA
    setVerified(false);
    setCaptchaError(true);
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

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
          onSubmit={validateThenSumbit}
          className={`${
            secondVarient
              ? "v2 lg:w-[41.4583333333vw] lg:px-[1.30208333333vw] !py-[unset] text-[#DFDFDF]"
              : "lg:w-[46.9270833333vw] lg:px-[2.70833333333vw] lg:py-[3.125vw] bg-[#94d4ff1a] border30 text-[#002B87B2]"
          } w-full sm:p-[40px] p-[10px] flex flex-col lg:gap-y-[2.08333333333vw] sm:gap-y-[30px] gap-y-[20px] lg:text24 mtext18`}
        >
          {formData?.map((field) =>
            field.type === "honeypot" ? (
              <input
                className="absolute top-0 pointer-events-none honeypot opacity-0"
                value={values[field?.id]}
                id={field.id}
                onChange={handleChange}
                key={field.id}
              />
            ) : field.type === "select" ? (
              <DropDownField
                key={field.id}
                setValue={(val) =>
                  setAdditionalFields((prev) => ({ ...prev, [field.id]: val }))
                }
                value={values[field.id]}
                handleChange={handleChange}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                error={errors[field.id]}
                touched={touched[field.id]}
                secondVarient={secondVarient}
                options={field?.options}
              />
            ) : field.type === "textarea" ? (
              <TextAreaField
                key={field.id}
                value={values[field.id]}
                onChange={handleChange}
                onBlur={handleBlur}
                name={field.id}
                id={field.id}
                placeholder={field.placeholder}
                autoComplete="off"
                error={errors[field.id]}
                touched={touched[field.id]}
              />
            ) : field.type === "number" || field.type === "tel" ? (
              <PhoneField
                key={field.id}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                phoneNumber={values[field.id]}
                setPhoneNumber={(val) =>
                  setAdditionalFields((prev) => ({ ...prev, [field.id]: val }))
                }
                touched={touched[field.id]}
                error={errors[field.id]}
                secondVarient
              />
            ) : field.type === "files" ? (
              <UploadFileField
                id={field.id}
                key={field.id}
                file={values[field.id]}
                dragActive={dragActive}
                setDragActive={setDragActive}
                setFile={(val) =>
                  setAdditionalFields((prev) => ({ ...prev, [field.id]: val }))
                }
                handleDrag={handleDrag}
                handleDrop={(val) =>
                  setAdditionalFields((prev) => ({ ...prev, [field.id]: val }))
                }
                touched={touched[field.id]}
                error={errors[field.id]}
                secondVarient
              />
            ) : field.type === "radio" ? (
              <GenderField
                id={field.id}
                key={field.id}
                gender={values[field.id]}
                setGender={(val) =>
                  setAdditionalFields((prev) => ({ ...prev, [field.id]: val }))
                }
                touched={touched[field.id]}
                error={errors[field.id]}
                secondVarient
                options={field.options}
                arabic={arabic}
              />
            ) : (
              <InputField
                key={field.id}
                name={field.id}
                placeholder={field.placeholder}
                id={field.id}
                type="text"
                value={values[field.id]}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                error={errors[field.id]}
                touched={touched[field.id]}
                secondVarient={secondVarient}
              />
            )
          )}
          <CaptchaField
            captchaError={captchaError}
            captchaRef={captchaRef}
            handleRecaptchaChange={handleRecaptchaChange}
            handleRecaptchaExpire={handleRecaptchaExpire}
            secondVarient={secondVarient}
            arabic={arabic}
          />
          {submitError && (
            <span
              className={clsx(
                "text-xs font-semibold lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
                secondVarient ? "text-red-400" : "text-red-600"
              )}
            >
              {submitError}
            </span>
          )}
          {submitSuccess && (
            <span
              className={clsx(
                "text-xs font-semibold lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
                secondVarient ? "text-green-400" : "text-green-600"
              )}
            >
              {submitSuccess}
            </span>
          )}
          <SubmitBtn arabic={arabic} disabled={isSubmitting} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
