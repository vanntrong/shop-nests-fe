import { Metadata } from "next";
import React from "react";

import { getProductDetail } from "@/apis/product/getProductDetail";
import ProductDetail from "@/modules/product/features/productDetail";
import { getMetaData } from "@/utils/metadata";

type TParamsProductType = {
  slug: string;
};

export interface IProductPageProps {
  params: TParamsProductType;
}

export const metadata: Metadata = getMetaData({
  title: "Sản phẩm - Yến sào Khánh Hoà",
  description: "Sản phẩm",
});

const Index = async ({ params }: IProductPageProps) => {
  const { data } = await getProductDetail(params.slug);
  return <ProductDetail product={data} />;
};

export default Index;
