import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://human-mode.com/sitemap.xml",
  };
}

// Note: llms.txt is served at /llms.txt via route handler
// Note: RSS feed is served at /feed.xml via route handler
