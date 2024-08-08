import React from "react";

const ContentWrapper = ({
  headingClasses,
  descClasses,
  classes,
  heading,
  desc,
  tag: Tag = "h2",
}) => {
  return (
    <div className={`${classes ? classes : "lg:w-[51.7708333333vw]"}`}>
      <Tag
        className={`${
          headingClasses ? headingClasses : "text70"
        } text-[#002B87] heading`}
      >
        {heading}
      </Tag>
      {desc && (
        <p
          className={`${
            descClasses ? descClasses : "lg:text28 mtext18"
          } mt16 desc`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default ContentWrapper;
