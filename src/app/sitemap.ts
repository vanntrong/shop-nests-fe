import { MetadataRoute } from "next";

import { DOMAIN } from "@/configs/app.config";
import { PATH } from "@/configs/path.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
    },
    {
      url: DOMAIN + PATH.SAN_PHAM,
      lastModified: new Date(),
    },
    {
      url: DOMAIN + PATH.DANH_MUC_SAN_PHAM,
      lastModified: new Date(),
    },
    {
      url: DOMAIN + PATH.GIO_HANG,
      lastModified: new Date(),
    },
    {
      url: DOMAIN + PATH.DANG_NHAP,
      lastModified: new Date(),
    },
    {
      url: DOMAIN + PATH.DANG_KY,
      lastModified: new Date(),
    },
  ];
}
