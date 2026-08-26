import type { MetadataRoute } from "next";

const siteUrl = "https://arcade.kingironman.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/snake", "/tetris", "/hacker"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
