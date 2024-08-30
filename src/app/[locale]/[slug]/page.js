import AboutPage from "@/components/about/Index";
import CareersPage from "@/components/careers/Index";
import ContactUsPage from "@/components/contact-us/Index";
import Layout from "@/components/layout/Index";
import NewsPage from "@/components/news/Index";
import PartnersPage from "@/components/partners/Index";
import PrivacyPolicyPage from "@/components/privacy-policy/Index";
import ServicesPage from "@/components/services/Index";
import getData from "@/lib/data-hooks/getData";
import React, { Suspense } from "react";
import Loading from "../loading";
import { notFound, redirect } from "next/navigation";
import getMetaData from "@/utils/seo/getMetaData";
import { locales } from "@/middleware";
import { unstable_setRequestLocale } from "next-intl/server";

export const dynamic = "force-static";

export const revalidate = 172800;

const slugs = [
  "about-us",
  "services",
  "our-partners",
  "news",
  "career",
  "contact-us"
];
export function generateStaticParams() {
  return slugs.map((slug) => {
    locales.map((locale) => ({ slug, locale }));
  });
}

export async function generateMetadata({ params: { locale, slug } }, parent) {
  return await getMetaData({ slug: slug, isAr: locale == "ar" });
}

const page = async ({ params: { locale, slug } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  if (isAr) {
    redirect(`/en`);
  }
  const data = await getData(slug, isAr);

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  switch (data?.page?.blueprint) {
    case "aboutus":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <AboutPage
              arabic={isAr}
              data={data?.page}
              managementMembers={data?.managementMembers?.data}
              boardMembers={data?.boardMembers?.data}
            />
          </Layout>
        </Suspense>
      );
    case "partners":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <PartnersPage
              arabic={isAr}
              data={data?.page}
              formFeedback={data?.formsFeedback?.contact_us_form}
            />
          </Layout>
        </Suspense>
      );
    case "news":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <NewsPage arabic={isAr} data={data?.page} allNews={data?.allNews} />
          </Layout>
        </Suspense>
      );
    case "service":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <ServicesPage
              arabic={isAr}
              data={data?.page}
              servicesItems={data?.services_items}
              formFeedback={data?.formsFeedback?.contact_us_form}
            />
          </Layout>
        </Suspense>
      );
    case "career":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <CareersPage
              arabic={isAr}
              data={data?.page}
              formFeedback={data?.formsFeedback?.career_form}
            />
          </Layout>
        </Suspense>
      );
    case "contactus":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <ContactUsPage
              arabic={isAr}
              data={data?.page}
              formFeedback={data?.formsFeedback?.contact_us_form}
            />
          </Layout>
        </Suspense>
      );
    case "page":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr} blackHeader>
            <PrivacyPolicyPage arabic={isAr} data={data?.page} />
          </Layout>
        </Suspense>
      );
    default:
      return notFound();
  }
};

export default page;
