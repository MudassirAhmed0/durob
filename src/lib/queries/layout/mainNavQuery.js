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
              ... on NavEntryPage_TopNavigation_Pages_About {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Business {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Career {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_HelpAndSupport {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Page {
                slug
              }
              ... on NavEntryPage_TopNavigation_Pages_Terms {
                slug
              }
              ... on NavEntryPage_BottomNavigation_Pages_About {
                slug
              }
              ... on NavEntryPage_BottomNavigation_Pages_Business {
                slug
              }
              ... on NavEntryPage_BottomNavigation_Pages_Career {
                slug
              }
              ... on NavEntryPage_BottomNavigation_Pages_HelpAndSupport {
                slug
              }
            }
          }
          page {
            id
            title
            url
            permalink
            entry_id
            ... on NavEntryPage_TopNavigation_Pages_About {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Business {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Career {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_HelpAndSupport {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Page {
              slug
            }
            ... on NavEntryPage_TopNavigation_Pages_Terms {
              slug
            }
            ... on NavEntryPage_BottomNavigation_Pages_About {
              slug
            }
            ... on NavEntryPage_BottomNavigation_Pages_Business {
              slug
            }
            ... on NavEntryPage_BottomNavigation_Pages_Career {
              slug
            }
            ... on NavEntryPage_BottomNavigation_Pages_HelpAndSupport {
              slug
            }
          }
        }
      }
    }
  `;
  return query;
};
