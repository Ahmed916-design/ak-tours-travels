// app/sitemap.ts
import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes-data";
import { CITIES } from "@/lib/cities-data";
import { SEO } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl.replace(/\/$/, "");
  const now = new Date();

  // Static pages
  const staticPages = [
    { url: "", priority: 1.0, changeFreq: "daily" as const },
    { url: "/fleet", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/routes", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/packages", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/cities", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/about", priority: 0.7, changeFreq: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { url: "/faq", priority: 0.6, changeFreq: "monthly" as const },
    { url: "/terms", priority: 0.3, changeFreq: "yearly" as const },
    { url: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
  ];

  // Dynamic route pages
  const routePages = ROUTES.map((route) => ({
    url: `/routes/${route.slug}`,
    priority: 0.8,
    changeFreq: "weekly" as const,
  }));

  // Dynamic city pages
  const cityPages = CITIES.map((city) => ({
    url: `/cities/${city.slug}`,
    priority: 0.85,
    changeFreq: "weekly" as const,
  }));

  return [...staticPages, ...routePages, ...cityPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));
}