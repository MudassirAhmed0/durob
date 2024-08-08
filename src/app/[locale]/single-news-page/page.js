import React from "react";

import Layout from "@/components/layout/Index";
import getData from "@/lib/data-hooks/getData";
import SingleNewsPage from "@/components/single-news-page/Index";

export const revalidate = 5;

export default async function Index({ params: { locale } }) {
  const isAr = locale == "ar";
  const data = await getData("home", isAr);
  return (
    <>
      <Layout arabic={isAr} blackHeader>
        <SingleNewsPage arabic={isAr} />
      </Layout>
    </>
  );
}
