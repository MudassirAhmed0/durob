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
              src(width: 1200, height: 628)
            }
          }
          services_section {
            s {
              title
              description
              image {
                src(width: 1200, height: 628)
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
          form_section {
            title_heading
            short_description
            linked_form {
              handle
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
