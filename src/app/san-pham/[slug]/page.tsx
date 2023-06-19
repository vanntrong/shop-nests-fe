import React from "react";

import { getProductDetail } from "@/apis/product/getProductDetail";
import ProductDetail from "@/modules/product/features/productDetail";

type TParamsProductType = {
  slug: string;
};

export interface IProductPageProps {
  params: TParamsProductType;
}

const Index = async ({ params }: IProductPageProps) => {
  const { data } = await getProductDetail(params.slug);
  return <ProductDetail product={data} />;
};

export default Index;
