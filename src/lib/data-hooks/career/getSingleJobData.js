import { getClient } from "@/lib/client";
import { singleJobQuery } from "@/lib/queries/career/singleJobQuery";

const getSingleJobData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: singleJobQuery(),
      variables
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSingleJobData;
