// app/robots.ts
import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SEO.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}