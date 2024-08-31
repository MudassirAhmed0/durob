const { gql } = require("@apollo/client");

export const serviceQuery = () => {
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
        ... on Entry_Pages_Service {
          title
          hero_banner {
            title
            description
            image {
              src(width: 1920, height: 1080)
            }
          }

          form_section {
            title_heading
            short_description
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
      services_items: entries(
        collection: "services"
        site: $site
        sort: "order"
      ) {
        data {
          ... on Entry_Services_Service {
            slug
            url
            title
            description
            image {
              src(width: 767, height: 767)
            }
            features {
              icon {
                src: url
              }
              caption
              caption_details
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
