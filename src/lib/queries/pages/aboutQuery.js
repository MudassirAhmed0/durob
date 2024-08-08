const { gql } = require("@apollo/client");

export const aboutQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_About {
          hero_hero_title
          hero_description
          hero_fallback_image {
            extension
            src(width: 1920, height: 1080)
            ... on Asset_Assets {
              alt
            }
          }
          image_special {
            extension
            permalink
            ... on Asset_Assets {
              alt
            }
          }
          dean_title_heading
          title_heading_postion
          title_heading_guiding
          guiding_principles_list {
            ... on Set_GuidingPrinciplesList_Principle {
              principle_name
              principle_description
            }
          }
          why_title_heading
          why_description
          why_jic_features {
            ... on Set_WhyJicFeatures_Feature {
              why_jic_feature_icon {
                extension
                permalink
                ... on Asset_Assets {
                  alt
                }
              }
              why_jic_feature_short_description
            }
          }
          governance_title_heading
          governance_description
          governance_members {
            ... on Set_GovernanceMembers_Member {
              governance_cate {
                title
                slug
              }
              member_image {
                extension
                permalink
                ... on Asset_Assets {
                  alt
                }
              }
              member_heading
              member_position
              member_description
              member_link
            }
          }
          organisation_heading
          organization_description
          explore_more_title_heading
          explore_more_explore_more_links {
            ... on Set_ExploreMoreExploreMoreLinks_NewSet {
              image {
                extension
                src(width: 567, height: 506)
                ... on Asset_Assets {
                  alt
                }
              }
              link_text
              link
              external_link
            }
          }
        }
      }
      terms(taxonomy: "governance_category", filter: { site: $site }) {
        data {
          title
          slug
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale
      title
    }
  `;
  return query;
};
