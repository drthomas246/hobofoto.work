import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getBlogs = async (endpoint: string, queries: MicroCMSQueries) => {
  return await client.get({ endpoint: endpoint, queries });
};

export const getBlogDetail = async (endpoint: string, blogId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail({ endpoint: endpoint, contentId: blogId, queries });
};