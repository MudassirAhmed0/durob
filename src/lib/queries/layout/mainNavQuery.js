const { gql } = require("@apollo/client");

export const mainNavQuery = () => {
  const query = gql`
    query MainNav($site: String) {
      nav(handle: "main_navigation") {
        title
        handle
        max_depth
        expects_root
        tree(site: $site) {
          ...NavItemFields
          children {
            ...NavItemFields
            children {
              ...NavItemFields
              children {
                ...NavItemFields
              }
            }
          }
        }
      }
    }

    fragment NavItemFields on NavTreeBranch {
      page {
        title
        entry_id
        permalink
        ...NavEntryPageFieldsHome
        ...NavEntryPageFieldsAbout
        ...NavEntryPageFieldsAcademics
        ...NavEntryPageFieldsAdministrativeDepartments
        ...NavEntryPageFieldsAdmissions
        ...NavEntryPageFieldsCollegeLife
        ...NavEntryPageFieldsEducationCenters
        ...NavEntryPageFieldsHelpSupport
        ...NavEntryPageFieldsMasterDegree
        ...NavEntryPageFieldsNewsEvents
        ...NavEntryPageFieldsResearch
        ...NavEntryPageFieldsExterallink
      }
      depth
    }

    fragment NavEntryPageFieldsHome on NavEntryPage_MainNavigation_Pages_Home {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsAbout on NavEntryPage_MainNavigation_Pages_About {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }
    fragment NavEntryPageFieldsAcademics on NavEntryPage_MainNavigation_Pages_Academics {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }
    fragment NavEntryPageFieldsAdministrativeDepartments on NavEntryPage_MainNavigation_Pages_AdministrativeDepartments {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsAdmissions on NavEntryPage_MainNavigation_Pages_Admissions {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsCollegeLife on NavEntryPage_MainNavigation_Pages_CollegeLife {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsEducationCenters on NavEntryPage_MainNavigation_Pages_EducationCenters {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsHelpSupport on NavEntryPage_MainNavigation_Pages_HelpSupport {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsMasterDegree on NavEntryPage_MainNavigation_Pages_MasterDegree {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsNewsEvents on NavEntryPage_MainNavigation_Pages_NewsEvents {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsResearch on NavEntryPage_MainNavigation_Pages_Research {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }

    fragment NavEntryPageFieldsExterallink on NavBasicPage_TopNavigation {
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 200, height: 200)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
    }
  `;
  return query;
};
