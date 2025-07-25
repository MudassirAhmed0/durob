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
          hero_banner: hero_banner_section {
            title
            description: chairman_message_content
            image {
              src(width: 1920, height: 1080)
            }
            ceo_picture {
              src
            }
            chairman_name
            chairman_title
          }
          vision {
            title
            description
            icon {
              id
              permalink
            }
          }
          mission {
            title
            description
            icon {
              id
              permalink
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
                permalink
              }
            }
          }
          our_operation_section {
            title_heading
            short_description
            images {
              src(webp: true)
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

      managementMembers: entries(
        collection: "management_members"
        site: $site
        sort: "order asc"
      ) {
        data {
          title
          published
          status
          slug
          ... on Entry_ManagementMembers_ManagementMember {
            title
            published
            position
            picture {
              src(width: 454, height: 525)
            }
            content
          }
        }
        total
        per_page
        current_page
        from
        to
        last_page
        has_more_pages
      }
      boardMembers: entries(
        collection: "board_members"
        site: $site
        sort: "order asc"
      ) {
        data {
          title
          published
          status
          slug
          ... on Entry_BoardMembers_BoardMember {
            title
            published
            position
            picture {
              src(width: 454, height: 525)
            }
            content
          }
        }
        total
        per_page
        current_page
        from
        to
        last_page
        has_more_pages
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
