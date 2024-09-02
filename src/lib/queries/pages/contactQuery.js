const { gql } = require("@apollo/client");

export const contactQuery = () => {
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
        ... on Entry_Pages_Contactus {
          title
          hero_banner {
            title
            description
            image {
              src(width: 1920, height: 1080, webp: true)
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
          sm_title_section
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
