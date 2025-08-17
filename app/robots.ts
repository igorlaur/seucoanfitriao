import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://seucoanfitriao.com.br";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
