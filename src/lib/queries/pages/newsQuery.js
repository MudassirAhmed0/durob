const { gql } = require("@apollo/client");

export const newsQuery = () => {
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
        parent {
          title
          url
        }
        ... on Entry_Pages_News {
          title
          seo_group {
            seo_image {
              src(width: 1200, height: 628)
            }
            seo_title
            seo_description
            seo_keywords
          }
          hero_banner {
            title
            description
            image {
              src(width: 1920, height: 1080, webp: true)
            }
          }
        }
      }
      allNews: entries(
        collection: "posts"
        site: $site
        sort: "date desc"
        limit: 3
      ) {
        data {
          title
          published
          status
          slug
          ... on Entry_Posts_Post {
            date(format: "d F Y")
            title
            date(format: "d F Y")
            image {
              src(width: 852, height: 759)
            }
            thumbnail: image {
              src(width: 775, height: 502)
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
