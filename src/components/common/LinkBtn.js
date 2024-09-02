import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkBtn = ({ text, link, arabic, tag: Tag = Link, flipped }) => {
  return (
    <Tag
      {...(Tag == Link || link ? { href: link ? link : "#" } : {})}
      className={`${
        flipped ? "flex-row-reverse" : "flex-row"
      } flex items-center lg:gap-x-[0.52083333333vw] gap-x-[6px] group`}
    >
      <span className="lg:text30 mtext20 f600 text-[#002B87] capitalize">
        {" "}
        {text}
      </span>
      <div
        className={` ${
          flipped
            ? arabic
              ? "group-hover:lg:translate-x-[0.52083333333vw] group-hover:translate-x-[6px] scale-x-[1]"
              : "group-hover:lg:translate-x-[-0.52083333333vw] group-hover:translate-x-[-6px] scale-x-[-1]"
            : arabic
            ? "group-hover:lg:translate-x-[-0.52083333333vw] group-hover:translate-x-[-6px] scale-x-[-1]"
            : "group-hover:lg:translate-x-[0.52083333333vw] group-hover:translate-x-[6px] scale-x-[1]"
        } relative lg:size-[1.82291666667vw] size-[20px] transition500`}
      >
        <Image fill alt="chevron" src="/images/icons/link-chevron.svg" />
      </div>
    </Tag>
  );
};

export default LinkBtn;
