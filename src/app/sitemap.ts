import type { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://norfolkpatienttransport.com";
  const now = new Date();

  const staticPages = [
    "/",
    "/services",
    "/service-areas",
    "/for-facilities",
    "/book",
    "/faq",
    "/about",
    "/careers",
    "/contact",
    "/privacy-policy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.75,
  }));

  const areaPages = SERVICE_AREAS.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages];
}
