"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import clsx from "clsx";
const countryCodes = [
  { value: "+1", label: "+1" },
  { value: "+7", label: "+7" },
  { value: "+20", label: "+20" },
  { value: "+27", label: "+27" },
  { value: "+30", label: "+30" },
  { value: "+31", label: "+31" },
  { value: "+32", label: "+32" },
  { value: "+33", label: "+33" },
  { value: "+34", label: "+34" },
  { value: "+36", label: "+36" },
  { value: "+39", label: "+39" },
  { value: "+40", label: "+40" },
  { value: "+41", label: "+41" },
  { value: "+43", label: "+43" },
  { value: "+44", label: "+44" },
  { value: "+45", label: "+45" },
  { value: "+46", label: "+46" },
  { value: "+47", label: "+47" },
  { value: "+48", label: "+48" },
  { value: "+49", label: "+49" },
  { value: "+51", label: "+51" },
  { value: "+52", label: "+52" },
  { value: "+53", label: "+53" },
  { value: "+54", label: "+54" },
  { value: "+55", label: "+55" },
  { value: "+56", label: "+56" },
  { value: "+57", label: "+57" },
  { value: "+58", label: "+58" },
  { value: "+60", label: "+60" },
  { value: "+61", label: "+61" },
  { value: "+62", label: "+62" },
  { value: "+63", label: "+63" },
  { value: "+64", label: "+64" },
  { value: "+65", label: "+65" },
  { value: "+66", label: "+66" },
  { value: "+81", label: "+81" },
  { value: "+82", label: "+82" },
  { value: "+84", label: "+84" },
  { value: "+86", label: "+86" },
  { value: "+90", label: "+90" },
  { value: "+91", label: "+91" },
  { value: "+92", label: "+92" },
  { value: "+93", label: "+93" },
  { value: "+94", label: "+94" },
  { value: "+95", label: "+95" },
  { value: "+98", label: "+98" },
  { value: "+211", label: "+211" },
  { value: "+212", label: "+212" },
  { value: "+213", label: "+213" },
  { value: "+216", label: "+216" },
  { value: "+218", label: "+218" },
  { value: "+220", label: "+220" },
  { value: "+221", label: "+221" },
  { value: "+222", label: "+222" },
  { value: "+223", label: "+223" },
  { value: "+224", label: "+224" },
  { value: "+225", label: "+225" },
  { value: "+226", label: "+226" },
  { value: "+227", label: "+227" },
  { value: "+228", label: "+228" },
  { value: "+229", label: "+229" },
  { value: "+230", label: "+230" },
  { value: "+231", label: "+231" },
  { value: "+232", label: "+232" },
  { value: "+233", label: "+233" },
  { value: "+234", label: "+234" },
  { value: "+235", label: "+235" },
  { value: "+236", label: "+236" },
  { value: "+237", label: "+237" },
  { value: "+238", label: "+238" },
  { value: "+239", label: "+239" },
  { value: "+240", label: "+240" },
  { value: "+241", label: "+241" },
  { value: "+242", label: "+242" },
  { value: "+243", label: "+243" },
  { value: "+244", label: "+244" },
  { value: "+245", label: "+245" },
  { value: "+246", label: "+246" },
  { value: "+247", label: "+247" },
  { value: "+248", label: "+248" },
  { value: "+249", label: "+249" },
  { value: "+250", label: "+250" },
  { value: "+251", label: "+251" },
  { value: "+252", label: "+252" },
  { value: "+253", label: "+253" },
  { value: "+254", label: "+254" },
  { value: "+255", label: "+255" },
  { value: "+256", label: "+256" },
  { value: "+257", label: "+257" },
  { value: "+258", label: "+258" },
  { value: "+260", label: "+260" },
  { value: "+261", label: "+261" },
  { value: "+262", label: "+262" },
  { value: "+263", label: "+263" },
  { value: "+264", label: "+264" },
  { value: "+265", label: "+265" },
  { value: "+266", label: "+266" },
  { value: "+267", label: "+267" },
  { value: "+268", label: "+268" },
  { value: "+269", label: "+269" },
  { value: "+290", label: "+290" },
  { value: "+291", label: "+291" },
  { value: "+297", label: "+297" },
  { value: "+298", label: "+298" },
  { value: "+299", label: "+299" },
  { value: "+350", label: "+350" },
  { value: "+351", label: "+351" },
  { value: "+352", label: "+352" },
  { value: "+353", label: "+353" },
  { value: "+354", label: "+354" },
  { value: "+355", label: "+355" },
  { value: "+356", label: "+356" },
  { value: "+357", label: "+357" },
  { value: "+358", label: "+358" },
  { value: "+359", label: "+359" },
  { value: "+370", label: "+370" },
  { value: "+371", label: "+371" },
  { value: "+372", label: "+372" },
  { value: "+373", label: "+373" },
  { value: "+374", label: "+374" },
  { value: "+375", label: "+375" },
  { value: "+376", label: "+376" },
  { value: "+377", label: "+377" },
  { value: "+378", label: "+378" },
  { value: "+379", label: "+379" },
  { value: "+380", label: "+380" },
  { value: "+381", label: "+381" },
  { value: "+382", label: "+382" },
  { value: "+383", label: "+383" },
  { value: "+385", label: "+385" },
  { value: "+386", label: "+386" },
  { value: "+387", label: "+387" },
  { value: "+389", label: "+389" },
  { value: "+420", label: "+420" },
  { value: "+421", label: "+421" },
  { value: "+423", label: "+423" },
  { value: "+500", label: "+500" },
  { value: "+501", label: "+501" },
  { value: "+502", label: "+502" },
  { value: "+503", label: "+503" },
  { value: "+504", label: "+504" },
  { value: "+505", label: "+505" },
  { value: "+506", label: "+506" },
  { value: "+507", label: "+507" },
  { value: "+508", label: "+508" },
  { value: "+509", label: "+509" },
  { value: "+590", label: "+590" },
  { value: "+591", label: "+591" },
  { value: "+592", label: "+592" },
  { value: "+593", label: "+593" },
  { value: "+594", label: "+594" },
  { value: "+595", label: "+595" },
  { value: "+596", label: "+596" },
  { value: "+597", label: "+597" },
  { value: "+598", label: "+598" },
  { value: "+599", label: "+599" },
  { value: "+670", label: "+670" },
  { value: "+672", label: "+672" },
  { value: "+673", label: "+673" },
  { value: "+674", label: "+674" },
  { value: "+675", label: "+675" },
  { value: "+676", label: "+676" },
  { value: "+677", label: "+677" },
  { value: "+678", label: "+678" },
  { value: "+679", label: "+679" },
  { value: "+680", label: "+680" },
  { value: "+681", label: "+681" },
  { value: "+682", label: "+682" },
  { value: "+683", label: "+683" },
  { value: "+685", label: "+685" },
  { value: "+686", label: "+686" },
  { value: "+687", label: "+687" },
  { value: "+688", label: "+688" },
  { value: "+689", label: "+689" },
  { value: "+690", label: "+690" },
  { value: "+691", label: "+691" },
  { value: "+692", label: "+692" },
  { value: "+850", label: "+850" },
  { value: "+852", label: "+852" },
  { value: "+853", label: "+853" },
  { value: "+855", label: "+855" },
  { value: "+856", label: "+856" },
  { value: "+880", label: "+880" },
  { value: "+886", label: "+886" },
  { value: "+960", label: "+960" },
  { value: "+961", label: "+961" },
  { value: "+962", label: "+962" },
  { value: "+963", label: "+963" },
  { value: "+964", label: "+964" },
  { value: "+965", label: "+965" },
  { value: "+966", label: "+966" },
  { value: "+967", label: "+967" },
  { value: "+968", label: "+968" },
  { value: "+971", label: "+971" },
  { value: "+972", label: "+972" },
  { value: "+973", label: "+973" },
  { value: "+974", label: "+974" },
  { value: "+975", label: "+975" },
  { value: "+976", label: "+976" },
  { value: "+977", label: "+977" },
  { value: "+992", label: "+992" },
  { value: "+993", label: "+993" },
  { value: "+994", label: "+994" },
  { value: "+995", label: "+995" },
  { value: "+996", label: "+996" },
  { value: "+998", label: "+998" }
];
const PhoneField = ({
  arabic,
  setPhoneNumber,
  phoneNumber,
  touched,
  error,
  secondVarient,
  ...props
}) => {
  const [dropDownValue, setDropDownValue] = useState({
    value: "+966",
    label: "+966"
  });

  const handleInputChange = (event) => {
    setPhoneNumber(dropDownValue.value + event.target.value);
  };

  const formatAfterCodeChange = (countryCode) => {
    let phone = String(phoneNumber);
    const replaceTo = countryCodes.find((code) =>
      phone.startsWith(code.value)
    )?.value;
    const replaceWith = countryCode;
    return phone.replace(replaceTo, replaceWith);
  };

  const handleCouteryCodeSelect = (countryCode) => {
    setDropDownValue(countryCode);
    setPhoneNumber(formatAfterCodeChange(countryCode.value));
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  return (
    <div className="w-full lg:h-[2.55208333333vw] h-[39px] inputField phoneField">
      <div className="flex lg:gap-x-[1.25vw] gap-x-[15px] size-full">
        <div className="relative lg:min-w-[7.51041666667vw] lg:w-[7.51041666667vw] w-[52%]">
          {isMounted ? (
            <Select
              options={countryCodes}
              value={dropDownValue}
              onChange={handleCouteryCodeSelect}
            />
          ) : null}
        </div>
        <label htmlFor={props.id} className={` border-b size-full block`}>
          <input
            id={props.id}
            name={props.name}
            type="number"
            placeholder={props.placeholder}
            autoComplete="off"
            onChange={handleInputChange}
            className={clsx(
              "outline-none bg-transparent w-full",
              secondVarient
                ? "placeholder:text-[#DFDFDF] text-[#DFDFDF]"
                : "placeholder:text-[#002b8756] text-[#002b8756]"
            )}
          />
        </label>
      </div>
      {touched && error && (
        <p
          className={clsx(
            "mtext16 lg:text20 mt-1  lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
            secondVarient ? "text-red-400" : "text-red-600"
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default PhoneField;
