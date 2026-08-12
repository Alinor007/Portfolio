import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";

/* Single-page site: one URL. The section anchors aren't separate
   documents and shouldn't be listed as such. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
