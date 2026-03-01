import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://availsthlm.se";
  const pages = [
    "",
    "/tjanster",
    "/case",
    "/hur-vi-jobbar",
    "/sakerhet",
    "/om-avail",
    "/kontakt",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
