const { gql } = require("@apollo/client");

export const mainNavQuery = () => {
  const query = gql`
    query MainNav($site: String) {
      nav(handle: "top_navigation") {
        handle
        title
        max_depth
        expects_root
        tree(site: $site) {
          depth
          children {
            depth
            page {
              id
              title
              url
              permalink
              entry_id
            }
          }
          page {
            id
            title
            url
            permalink
            entry_id
          }
        }
      }
    }
  `;
  return query;
};
