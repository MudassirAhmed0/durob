import clsx from "clsx";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaField = ({
  captchaError,
  handleRecaptchaChange,
  handleRecaptchaExpire,
  captchaRef,
  arabic,
  secondVarient,
}) => {
  return (
    <div className="md:mt-[1vw] md:mb-0 mt-[15px] relative w-full">
      <ReCAPTCHA
        hl={arabic ? "ar" : "en"}
        ref={captchaRef}
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
        onChange={handleRecaptchaChange}
        onExpired={handleRecaptchaExpire}
      />
      {captchaError && (
        <span
          className={clsx(
            "text-xs mt-1 font-semibold lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
            secondVarient ? "text-red-400" : "text-red-600"
          )}
        >
          This Field is Required
        </span>
      )}
    </div>
  );
};

export default CaptchaField;
