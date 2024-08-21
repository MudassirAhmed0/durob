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
              src(width: 1200, height: 628)
            }
          }
          testimony_section {
            title
            description
            image {
              src(width: 1200, height: 628)
            }
          }
          jobs_section {
            title_heading
            jobs {
              ... on Entry_Jobs_Job {
                title
                city
                job_br
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
