import { Metadata } from "next";

import { DOMAIN } from "@/configs/app.config";

const defaultMetadata: Metadata = {
  title: "Yến sào Khánh Hoà",
  description:
    "Chào mừng bạn đến với trang web bán yến sào chất lượng cao. Tận hưởng lợi ích sức khỏe và vẻ đẹp của yến sào tươi ngon. Đặt hàng trực tuyến và nhận sản phẩm nhanh chóng.",
  keywords: "yen sao, yen sao khanh hoa, yen sao viet nam, yen sao vietnam",
  robots: {
    googleBot: "index,follow",
  },
  openGraph: {
    title: "Yến sào Khánh Hoà",
    description:
      "Chào mừng bạn đến với trang web bán yến sào chất lượng cao. Tận hưởng lợi ích sức khỏe và vẻ đẹp của yến sào tươi ngon. Đặt hàng trực tuyến và nhận sản phẩm nhanh chóng.",
    type: "website",
    locale: "vi_VN",
    url: DOMAIN,
    siteName: "Yến sào Khánh Hoà",
    images: ["/images/home/banner-tet-1.png"],
  },
};

export const getMetaData = (metadata?: Metadata): Metadata => {
  return {
    ...defaultMetadata,
    ...metadata,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...metadata?.openGraph,
    },
  };
};
