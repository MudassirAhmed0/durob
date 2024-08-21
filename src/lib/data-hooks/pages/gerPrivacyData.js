import { getClient } from "@/lib/client";
import { privacyQuery } from "@/lib/queries/pages/privacyQuery";

const getPrivacyData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: privacyQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getPrivacyData;
