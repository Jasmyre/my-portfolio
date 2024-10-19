import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Base Uniform Resource Locator
 const BASE_URL =
   process.env.Base_URL ?? "err:Envronment_Variable_Is_Not_Defined";

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: "",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
