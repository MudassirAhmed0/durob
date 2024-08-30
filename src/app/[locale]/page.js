import React from "react";

import Layout from "@/components/layout/Index";
import HomePage from "@/components/home/Index";
import getData from "@/lib/data-hooks/getData";
import { locales } from "@/middleware";
import getMetaData from "@/utils/seo/getMetaData";
import { unstable_setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
export const revalidate = 172800;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale, slug } }, parent) {
  return await getMetaData({ slug: "home", isAr: locale == "ar" });
}

export default async function Index({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  if (isAr) {
    redirect(`/en`);
  }
  const data = await getData("home", isAr);
  return (
    <>
      <Layout arabic={isAr}>
        <HomePage
          arabic={isAr}
          data={data?.page}
          recentNews={data?.recentNews.data}
          serviceItems={data?.service_slider}
          formFeedback={data?.formsFeedback?.contact_us_form}
        />
      </Layout>
    </>
  );
}
