import fs from "fs";
import { Feed } from "feed";

export default async function generateRssFeed() {
  const site_url = "https://dhairya-blog.vercel.app";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  fs.writeFileSync("./public/rss.xml", feed.rss2());
}
