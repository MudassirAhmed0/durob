import { getClient } from "@/lib/client";
import { serviceQuery } from "@/lib/queries/pages/serviceQuery";

const getServiceData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: serviceQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getServiceData;
