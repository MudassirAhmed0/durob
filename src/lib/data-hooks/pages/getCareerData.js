import { getClient } from "@/lib/client";
import { careerQuery } from "@/lib/queries/pages/careerQuery";

const getCareerData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: careerQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getCareerData;
