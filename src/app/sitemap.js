import { BASE_URL, SITE_LAST_MODIFIED } from "../lib/site-config";
import { getTravelPackages } from "../services/travelService";

export default function sitemap() {
  const travelPackages = getTravelPackages();
  const siteLastModified = new Date(SITE_LAST_MODIFIED);

  const resolveLastModified = (value) => {
    const parsedDate = value ? new Date(value) : siteLastModified;

    return Number.isNaN(parsedDate.getTime()) ? siteLastModified : parsedDate;
  };

  const staticPages = [
    {
      url: `${BASE_URL}/about`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/packages`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/destination`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const destinations = travelPackages.map((pkg) => ({
    url: `${BASE_URL}/destination/${pkg.id}`,
    lastModified: resolveLastModified(pkg.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: siteLastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...staticPages,
    ...destinations,
  ];
}
