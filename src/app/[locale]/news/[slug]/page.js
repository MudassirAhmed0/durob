import Layout from "@/components/layout/Index";
import SingleNewsPage from "@/components/single-news-page/Index";
import getSingleNewsData from "@/lib/data-hooks/news/getSingleNewsData";
import getMetaData from "@/utils/seo/getMetaData";
import { redirect } from "next/navigation";

export const revalidate = 172800;
export async function generateMetadata({ params: { locale, slug } }, parent) {
  const isAr = locale == "ar";

  const data = await getSingleNewsData(slug, isAr);

  return await getMetaData({
    slug: slug,
    isAr,
    fetchedData: data
  });
}
export default async function Index({ params: { locale, slug } }) {
  const isAr = locale == "ar";
  const data = await getSingleNewsData(slug, isAr);
  if (isAr) {
    redirect(`/en`);
  }
  return (
    <>
      <Layout arabic={isAr} blackHeader>
        <SingleNewsPage arabic={isAr} data={data?.page} />
      </Layout>
    </>
  );
}
