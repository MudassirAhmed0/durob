const { gql } = require("@apollo/client");

export const footerQuery = () => {
  const query = gql`
    query bottomnav($site: String) {
      nav(handle: "bottom_navigation") {
        handle
        title
        max_depth
        expects_root
        tree(site: $site) {
          page {
            entry_id
            title
            url
          }
        }
      }
      FooterData: globalSet(handle: "footer_data", site: $site) {
        ... on GlobalSet_FooterData {
          website_logos {
            dark {
              src: url
            }
            white {
              src: url
            }
          }
          social_media_contacts {
            social_platforms {
              platform_link
              platform_icon {
                src: url
              }
            }
          }
          contact_us_data {
            address
            phone
            email
          }
          copyright_text
        }
      }
    }
  `;
  return query;
};
