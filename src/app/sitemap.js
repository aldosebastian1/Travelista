import { travelPackages } from "./constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export default function sitemap() {
    const destinations = travelPackages.map((pkg) => ({
        url: `${BASE_URL}/destination/${pkg.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...destinations,
    ];
}
