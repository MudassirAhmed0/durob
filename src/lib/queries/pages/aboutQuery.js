const { gql } = require("@apollo/client");

export const aboutQuery = () => {
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
        ... on Entry_Pages_Aboutus {
          hero_banner {
            title
            description
            image {
              src(width: 1200, height: 628)
            }
          }
          vision {
            title
            description
            icon {
              id
            }
          }
          mission {
            title
            description
            icon {
              id
            }
          }
          our_team_section {
            section_title
            categories {
              title_heading
              id
            }
          }
          values_section {
            title_heading
            short_description
            values {
              title
              description
              icon {
                id
              }
            }
          }
          our_operation_section {
            title_heading
            short_description
            images {
              src(width: 700, height: 628, webp: true)
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
              id
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
