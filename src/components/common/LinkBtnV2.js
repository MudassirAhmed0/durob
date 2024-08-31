import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkBtnV2 = ({ text, link, arabic, tag: Tag = Link, secondVarient }) => {
  return (
    <Tag
      {...(Tag == Link || link ? { href: link ? link : "#" } : {})}
      className="flex items-center lg:gap-x-[0.26041666666vw] gap-x-[4px] group"
    >
      <span
        className={`${
          secondVarient ? "lg:text22 mtext16" : "lg:text24 mtext18"
        }   text-[#002B87] capitalize`}
      >
        {" "}
        {text}
      </span>
      <div
        className={`${
          arabic
            ? "group-hover:lg:translate-x-[-0.26041666666vw] group-hover:translate-x-[-4px] scale-x-[-1]"
            : "group-hover:lg:translate-x-[0.26041666666vw] group-hover:translate-x-[4px] scale-x-[1]"
        } relative lg:size-[0.88541666666vw] size-[12px] transition500`}
      >
        <Image
          quality={100}
          fill
          alt="chevron"
          src="/images/icons/news-chveron.svg"
        />
      </div>
    </Tag>
  );
};

export default LinkBtnV2;
