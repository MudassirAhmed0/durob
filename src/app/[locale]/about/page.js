import React from "react";

import Layout from "@/components/layout/Index";
import getData from "@/lib/data-hooks/getData";
import AboutPage from "@/components/about/Index";

export const revalidate = 5;

export default async function Index({ params: { locale } }) {
  const isAr = locale == "ar";
  const data = await getData("home", isAr);
  return (
    <>
      <Layout arabic={isAr}>
        <AboutPage arabic={isAr} />
      </Layout>
    </>
  );
}
