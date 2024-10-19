import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL =
    process.env.BASE_URL ?? "err:Envronment_Variable_Is_Not_Defined";

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
  ];
}
