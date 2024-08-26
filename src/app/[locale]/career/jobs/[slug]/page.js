import Layout from "@/components/layout/Index";
import SingleCareerPage from "@/components/single-career-page/Index";
import getSingleJobData from "@/lib/data-hooks/career/getSingleJobData";
import getMetaData from "@/utils/seo/getMetaData";

export const revalidate = 172800;
export async function generateMetadata({ params: { locale, slug } }, parent) {
  const isAr = locale == "ar";

  const data = await getSingleJobData(slug, isAr);

  return await getMetaData({
    slug: slug,
    isAr,
    fetchedData: data
  });
}

export default async function Index({ params: { locale, slug } }) {
  const isAr = locale == "ar";
  const data = await getSingleJobData(slug, isAr);
  return (
    <>
      <Layout arabic={isAr} blackHeader>
        <SingleCareerPage arabic={isAr} data={data?.page} form={data?.form} />
      </Layout>
    </>
  );
}
