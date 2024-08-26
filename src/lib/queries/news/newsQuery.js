export const newsQuery = `
     query Page($site: String,$current_page:Int!) {
     news: entries(
        collection: "posts"
        site: $site
        sort: "date desc"
        page:$current_page
        limit: 6
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
              src(width: 539, height: 414)
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
    }
  `;
