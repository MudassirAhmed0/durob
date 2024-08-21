import { getClient } from "@/lib/client";
import { partnersQuery } from "@/lib/queries/pages/partnersQuery";

const getPartnersData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: partnersQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getPartnersData;
