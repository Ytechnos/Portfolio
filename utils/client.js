import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ytechnos008",
  apiKey: process.env.API_KEY || "",
});
