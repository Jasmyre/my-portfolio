import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Base Uniform Resource Locator
  //  const BASE_URL =
  //    process.env.Base_URL ?? "err:Envronment_Variable_Is_Not_Defined";

  const BASE_URL = process.env.Base_URL || "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: "",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
