const { gql } = require("@apollo/client");

export const homeQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        id
        title
        slug
        url
        uri
        edit_url
        permalink
        published
        private
        status
        blueprint
        date
        last_modified
        locale
        ... on Entry_Pages_Home {
          title
          video_banner {
            title
            video_link
            extra_video
            play_button_text
          }
          about_section {
            title_heading
            description
            link_text
            link
            external_link
            blocks {
              title
              description
              image {
                src(width: 600, height: 446, webp: true)
              }
            }
          }
          services_section_wrapper {
            title_heading
            description
            link_text
            link
            external_link
          }
          operation_section {
            title_heading
            description
          }
          partners_section {
            title_heading
            description
            images {
              src: url
            }
          }
          mid_banner_section {
            content
            image {
              src(width: 1920, height: 902, webp: true)
            }
          }
          news_section {
            hide
            title_heading
            description
          }
          contact_us_form_section {
            title_heading
            description
            linked_form {
              handle
              title
              honeypot
              fields {
                display
                type
                handle
                width
                config
              }
            }
          }
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
      recentNews: entries(
        collection: "posts"
        sort: "order"
        limit: 5
        site: $site
      ) {
        data {
          title
          published
          status

          slug
          ... on Entry_Posts_Post {
            title
            date(format: "d F Y")
            image {
              src(width: 852, height: 759)
            }
            thumbnail: image {
              src(width: 775, height: 502)
            }
            content
          }
        }
      }
      service_slider: entries(
        collection: "services"
        site: $site
        sort: "order"
      ) {
        data {
          ... on Entry_Services_Service {
            slug
            url
            title_heading: title
            description
            image {
              src(webp: true)
            }
          }
        }
      }
      formsFeedback: globalSet(handle: "forms_feedback", site: $site) {
        ... on GlobalSet_FormsFeedback {
          contact_us_form {
            success
            failure
          }
          career_form {
            success
            failure
          }
        }
      }
      fallbackSEO: globalSet(handle: "global_seo", site: $site) {
        title
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
