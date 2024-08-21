import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import getMainNavData from "@/lib/data-hooks/layout/getMainNavData";
import getFooterData from "@/lib/data-hooks/layout/getFooterData";

const Layout = async ({ children, arabic, blackHeader }) => {
  const mainNavData = await getMainNavData(arabic);
  const footerData = await getFooterData(arabic);
  return (
    <>
      <div className={arabic ? "rtl" : "ltr"}>
        <Header blackHeader={blackHeader} data={mainNavData?.nav?.tree} />
        <main>{children}</main>
        <Footer
          arabic={arabic}
          data={footerData?.FooterData}
          navigation={footerData?.nav?.tree}
        />
      </div>
    </>
  );
};

export default Layout;
