const { gql } = require("@apollo/client");

export const homeQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_Home {
          hero_hero_video {
            permalink
            extension
          }
          hero_hero_mobile_video {
            extension
            permalink
          }
          hero_banner_title
          hero_banner_description
          hero_fallback_image {
            extension
            src(width: 1920, height: 1080)
            ... on Asset_Assets {
              alt
            }
          }
          hero_fallback_mobile_image {
            extension
            src(width: 380, height: 800)
            ... on Asset_Assets {
              alt
            }
          }
          hero_hero_links {
            ... on Set_HeroHeroLinks_NewSet {
              hero_link_text
              hero_link
              hero_external_link
            }
          }
          about_title_heading
          about_description
          about_link_text
          about_link
          about_external_link
          about_features {
            ... on Set_AboutFeatures_Feature {
              about_icon {
                extension
                permalink
              }
            }
          }
          about_image {
            extension
            src(width: 827, height: 657)
            ... on Asset_Assets {
              alt
            }
          }
          ba_bachelors_title_heading
          ba_bachelors_description
          ba_bachelors_link_text
          ba_bachelors_link
          ba_bachelors_external_link
          bachelor_programs_list {
            title
            ... on Entry_Program_Program {
              slug
              thumb_image: fallback_image {
                extension
                src(width: 200, height: 200)
                ... on Asset_Assets {
                  alt
                }
              }
              program_type {
                label
              }
              program_area {
                label
              }
            }
          }
          ba_masters_title_heading
          ba_masters_description
          ba_masters_link_text
          ba_masters_link
          ba_masters_external_link
          ba_masters_image {
            extension
            src(width: 933, height: 819)
            ... on Asset_Assets {
              alt
            }
          }
          ba_master_features {
            ... on Set_BaMasterFeatures_Feature {
              icon {
                extension
                permalink
              }
              ba_master_program_feature_short_description
              type
            }
          }
          collage_life_title_heading
          collage_life_description
          collage_life_link_text
          collage_life_link
          collage_life_external_link
          collage_life_images {
            extension
            src(width: null, height: null)
            ... on Asset_Assets {
              alt
            }
          }
          news_events_title_heading
          news_events_description
          news_events_link_text
          news_events_link
          news_events_external_link
          custom_select
          news_events_list {
            title
            ...NewsQuery
            ...EventQuery
          }
          title_heading
          explore_more_links {
            ... on Set_ExploreMoreLinks_NewSet {
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
          seo_image {
            extension
            src(width: 200, height: 200)
          }
          seo_title
          seo_description
          seo_keywords
        }
      }
      news: entries(collection: "news", limit: 6, site: $site) {
        data {
          ...NewsQuery
        }
      }
      events: entries(collection: "events", limit: 6, site: $site) {
        data {
          ...EventQuery
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale
      title
    }

    fragment NewsQuery on Entry_News_News {
      __typename
      title
      seo_title
      seo_keywords
      seo_description
      seo_image {
        extension
        src(width: 200, height: 200)
      }
      slug
      date(format: "d M Y")
      ... on Entry_News_News {
        thumb_image {
          extension
          src(width: 566, height: 568)
          ... on Asset_Assets {
            alt
          }
        }
      }
    }

    fragment EventQuery on Entry_Events_Event {
      __typename
      title
      seo_title
      seo_keywords
      seo_description
      seo_image {
        extension
        src(width: 200, height: 200)
      }
      slug
      date(format: "d M Y")
      ... on Entry_Events_Event {
        thumb_image {
          extension
          src(width: 566, height: 568)
          ... on Asset_Assets {
            alt
          }
        }
        location
        organizer
        start_date(format: "d M Y")
        end_date(format: "d M Y")
      }
    }
  `;
  return query;
};
