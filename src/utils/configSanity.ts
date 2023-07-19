import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "c16u4t3y",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
