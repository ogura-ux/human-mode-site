import type { MetadataRoute } from "next";
import { getBlogList } from "@/lib/microcms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://human-mode.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dev`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Blog posts from microCMS
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { contents } = await getBlogList({ limit: 100 });
    blogPages = contents.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.updatedAt || post.publishedAt!),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // microCMS unavailable — skip blog entries
  }

  return [...staticPages, ...blogPages];
}
