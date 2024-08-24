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
import { notFound } from "next/navigation";

const page = async ({ params: { locale, slug } }) => {
  const isAr = locale == "ar";

  const data = await getData(slug, isAr);

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  switch (data?.page?.blueprint) {
    case "aboutus":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <AboutPage arabic={isAr} data={data?.page} />
          </Layout>
        </Suspense>
      );
    case "partners":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <PartnersPage arabic={isAr} data={data?.page} />
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
            <ServicesPage arabic={isAr} data={data?.page} />
          </Layout>
        </Suspense>
      );
    case "career":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <CareersPage arabic={isAr} data={data?.page} />
          </Layout>
        </Suspense>
      );
    case "contactus":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <ContactUsPage arabic={isAr} data={data?.page} />
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
