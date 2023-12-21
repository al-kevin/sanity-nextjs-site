// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "6ulg38j4",
  dataset: "production",
  apiVersion: "2023-12-21",
  useCdn: false,
};

const client = createClient(config);

export default client;