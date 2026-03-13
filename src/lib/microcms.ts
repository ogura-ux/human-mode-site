import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

// Client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// Types
export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
  description?: string;
} & MicroCMSListContent;

// Fetch functions
export async function getBlogList(queries?: {
  limit?: number;
  offset?: number;
  filters?: string;
}) {
  return client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: queries?.limit ?? 10,
      offset: queries?.offset ?? 0,
      filters: queries?.filters,
      orders: "-publishedAt",
    },
  });
}

export async function getBlogDetail(contentId: string) {
  return client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
  });
}

export async function getAllBlogIds() {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { fields: "id", limit: 100 },
  });
  return data.contents.map((post) => post.id);
}
