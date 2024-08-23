const { gql } = require("@apollo/client");

export const partnersQuery = () => {
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
        ... on Entry_Pages_Partners {
          title
          hero_banner {
            title
            description
            image {
              src(width: 1200, height: 628, webp: true)
            }
          }
          why_section {
            title_heading
            description
            cards {
              title_heading
              icon {
                id
                permalink
              }
            }
          }
          partners_section {
            title_heading
            description
            images {
              src: url
            }
          }
          contact_us_section {
            title_heading
            description
            link_text
            link
            external_link
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
