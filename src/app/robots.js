export default function robots() {
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
