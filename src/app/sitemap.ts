import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { resolveSiteUrl } from "@/lib/site-url";

const siteUrl = resolveSiteUrl();
const configuredLastModified = process.env.SITEMAP_LAST_MODIFIED;
const staticLastModifiedDates: Record<string, string> = {
  "": "2026-09-05",
  "/about": "2026-09-05",
  "/articles": "2026-09-05",
};

const staticPaths = [
  "",
  "/about",
  "/articles",
  "/contact",
  "/diabetes",
  "/diabetes/what-is-diabetes",
  "/diabetes/types",
  "/diabetes/early-symptoms",
  "/diabetes/causes",
  "/diabetes/diagnosis",
  "/diabetes/diet",
  "/diabetes/exercise",
  "/diabetes/daily-routine",
  "/diabetes/foot-care",
  "/diabetes/blood-sugar-monitoring",
  "/diabetes/complications",
  "/diabetes/faq",
  "/nutrition",
  "/exercise",
  "/millets",
  "/microgreens",
  "/forum",
  "/privacy",
  "/terms",
  "/cookie-policy",
  "/disclaimer",
  "/calculators/bmi",
  "/calculators/calories",
  "/calculators/diabetes-risk",
  "/calculators/water",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path, index) => {
    const pathLastModified = staticLastModifiedDates[path];

    return {
      url: `${siteUrl}${path}`,
      ...(configuredLastModified
        ? { lastModified: configuredLastModified }
        : pathLastModified
          ? { lastModified: pathLastModified }
          : {}),
      changeFrequency: path === "" || path === "/articles" ? "weekly" : "monthly",
      priority: index === 0 ? 1 : 0.8,
    };
  });

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: configuredLastModified ?? article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...articleUrls];
}
