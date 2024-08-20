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
      copyrightNav: nav(handle: "copyright_navigation") {
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
          white_logo {
            path: url
          }
          social_media_contacts {
            social_platforms {
              platform_name
              platform_link
              platform_icon {
                path: url
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
