import React from "react";

import Layout from "@/components/layout/Index";
import HomePage from "@/components/home/Index";
import getData from "@/lib/data-hooks/getData";

export const revalidate = 5;

export default async function Index({ params: { locale } }) {
  const isAr = locale == "ar";
  const data = await getData("home", isAr);
  return (
    <>
      <Layout arabic={isAr}>
        <HomePage
          arabic={isAr}
          data={data?.page}
          recentNews={data?.recentNews.data}
        />
      </Layout>
    </>
  );
}
