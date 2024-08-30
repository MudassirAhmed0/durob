const { gql } = require("@apollo/client");

export const singleJobQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "jobs") {
        published
        blueprint
        locale
        title
        ... on Entry_Jobs_Job {
          id
          slug
          title
          city
          job_br
          responsibility {
            point: points
          }
          requirement {
            point: points
          }
          id
          url
          published
          uri
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
      form(handle: "career_form") {
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
