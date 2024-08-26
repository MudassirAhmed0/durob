const { gql } = require("@apollo/client");

export const singleNewsQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "posts") {
        published
        blueprint
        locale
        title
        ... on Entry_Posts_Post {
          title
          content
          slug
          image {
            extension
            src(width: 852, height: 749)
            ... on Asset_Assets {
              alt
            }
          }
          thumbnail: image {
            extension
            src(width: 600, height: 666)
            ... on Asset_Assets {
              alt
            }
          }
          date(format: "d F Y")
          slug
          seo_group {
            seo_image {
              src(width: 1200, height: 628)
            }
            seo_title
            seo_description
            seo_keywords
          }
        }
      }
      globalSet(handle: "global_seo", site: "english") {
        ... on GlobalSet_GlobalSeo {
          seo_title
          seo_image {
            src(width: 1200, height: 628)
          }
          seo_description
          seo_keywords
        }
      }
    }
  `;
  return query;
};
