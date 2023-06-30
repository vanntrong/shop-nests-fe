import { Metadata } from "next";
import React from "react";

import { getAllProducts } from "@/apis/product/getAllProducts";
import { PATH } from "@/configs/path.config";
import Products from "@/modules/product/features/products";
import { getMetaData } from "@/utils/metadata";

export const metadata: Metadata = getMetaData({
  title: "Sản phẩm - Yến sào Khánh Hoà",
  description: "Sản phẩm",
});

const Index = async ({ searchParams }: { searchParams: { keyword?: string } }) => {
  const products = await getAllProducts({
    ...searchParams,
  });
  return (
    <Products
      products={products}
      defaultBreadcrumb={[
        {
          name: "Trang chủ",
          href: "/",
        },
        {
          name: "Sản phẩm",
          href: PATH.SAN_PHAM,
        },
      ]}
    />
  );
};

export default Index;
