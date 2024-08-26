import { getClient } from "@/lib/client";
import { singleNewsQuery } from "@/lib/queries/news/singleNewsQuery";

const getSingleNewsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug,
    current_page: 1,
    limit: 3
  };
  try {
    const { data } = await getClient().query({
      query: singleNewsQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSingleNewsData;
