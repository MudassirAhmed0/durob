import { getClient } from "@/lib/client";
import { mainNavQuery } from "@/lib/queries/layout/mainNavQuery";

const getMainNavData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default"
  };
  try {
    const { data } = await getClient().query({
      query: mainNavQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getMainNavData;
