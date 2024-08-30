const { gql } = require("@apollo/client");

export const careerQuery = () => {
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
        ... on Entry_Pages_Career {
          title
          hero_banner {
            title
            description
            image {
              src(width: 1920, height: 1080)
            }
          }
          testimony_section {
            hide
            title
            description
            image: picture {
              src(width: 538, height: 750)
            }
          }
          jobs_section {
            fallback_message
            title_heading
            fallback_message
            jobs {
              ... on Entry_Jobs_Job {
                title
                city
                job_br
                slug
                responsibility {
                  points
                }
                requirement {
                  points
                }
                id
                url
                date
                published
                uri
              }
            }
          }
          formlink_section {
            title_heading
            desc
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
