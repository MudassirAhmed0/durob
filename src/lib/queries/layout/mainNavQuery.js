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
            ... on NavEntryPage_TopNavigation_Pages_Home {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_News {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_Aboutus {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_Career {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_Partners {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_Contactus {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_Page {
              published
            }
            ... on NavEntryPage_TopNavigation_Pages_Service {
              published
            }
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
