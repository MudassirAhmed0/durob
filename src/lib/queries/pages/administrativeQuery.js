const { gql } = require("@apollo/client");

export const administrativeQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_AdministrativeDepartments {
          hero_hero_title
          hero_description
          hero_fallback_image {
            extension
            src(width: 200, height: 200)
            ... on Asset_Assets {
              alt
            }
          }
          departments_list {
            ... on Set_DepartmentsList_Department {
              section_image {
                extension
                src(width: 200, height: 200)
                ... on Asset_Assets {
                  alt
                }
              }
              section_title
              section_description
              features
              link_text
              link
              external_link
            }
          }
          explore_more_title_heading
          explore_more_explore_more_links {
            ... on Set_ExploreMoreExploreMoreLinks_NewSet {
              image {
                extension
                src(width: 200, height: 200)
                ... on Asset_Assets {
                  alt
                }
              }
              link_text
              external_link
              link
            }
          }
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale
      title
      slug
    }
  `;
  return query;
};
