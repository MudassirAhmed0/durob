import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import getMainNavData from "@/lib/data-hooks/layout/getMainNavData";
import getTopNavData from "@/lib/data-hooks/layout/getTopNavData";

const Layout = async ({ children, arabic, blackHeader }) => {
  const mainNavData = await getMainNavData(arabic);
  const topNavData = await getTopNavData(arabic);
  return (
    <>
      <div className={arabic ? "rtl" : "ltr"}>
        <Header
          blackHeader={blackHeader}
          arabic={arabic}
          mainNavData={mainNavData?.nav?.tree}
          topNavData={topNavData?.nav?.tree}
        />
        <main>{children}</main>
        <Footer arabic={arabic} />
      </div>
    </>
  );
};

export default Layout;
