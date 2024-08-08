import getPagesData from "./getPagesData";
import getAboutData from "./pages/getAboutData";
import getAdministrativeData from "./pages/getAdministrativeData";
import getHomeData from "./pages/getHomeData";

const getData = async (slug, isAr, current_page) => {
  const pagesData = await getPagesData(isAr);
  const pages = pagesData?.pages?.data;
  const handleData = async (blueprint) => {
    switch (blueprint) {
      case "home":
        return await getHomeData(slug, isAr);
      case "about":
        return await getAboutData(slug, isAr);
      case "administrative_departments":
        return await getAdministrativeData(slug, isAr);
      //   case "about":
      //     return await getAboutData(slug, isAr);
      //   case "leadership":
      //     return await getLeadershipData(slug, isAr);
      //   case "career":
      //     return await getCareerData(slug, isAr);
      //   case "products":
      //     return await getProductPageData(slug, isAr);
      //   case "sustainability":
      //     return await getSustainabilityData(slug, isAr);
      //   case "contactus":
      //     return await getContactData(slug, isAr);
      //   case "currentopp":
      //     return await getCurrentOpportunitiesData(slug, isAr, current_page);
      //   case "news":
      //     return await getNewsData(slug, isAr, current_page);
      //   case "page":
      //     return await getPrivacy(slug, isAr);
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
