import getPagesData from "./getPagesData";
import getHomeData from "./pages/getHomeData";
import getAboutData from "./pages/getAboutData";
import getPartnersData from "./pages/getPartnersData";
import getNewsData from "./pages/getNewsData";
import getServiceData from "./pages/getServiceData";
import getCareerData from "./pages/getCareerData";
import getContactData from "./pages/getContactData";
import gerPrivacyData from "./pages/gerPrivacyData";

const getData = async (slug, isAr) => {
  const pagesData = await getPagesData(isAr);
  const pages = pagesData?.pages?.data;
  const handleData = async (blueprint) => {
    switch (blueprint) {
      case "home":
        return await getHomeData(slug, isAr);
      case "aboutus":
        return await getAboutData(slug, isAr);
      case "partners":
        return await getPartnersData(slug, isAr);
      case "news":
        return await getNewsData(slug, isAr);
      case "service":
        return await getServiceData(slug, isAr);
      case "career":
        return await getCareerData(slug, isAr);
      case "contactus":
        return await getContactData(slug, isAr);
      case "page":
        return await gerPrivacyData(slug, isAr);
    }
  };

  for (const page of pages) {
    if (page.slug === slug) {
      const data = await handleData(page.blueprint);
      return data;
    }
  }
  return slug;
};

export default getData;
