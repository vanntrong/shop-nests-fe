import React from "react";

import Products from "@/modules/product/features/products";

type TParamsProductType = {
  type: string;
};

type TParamsProductSubType = {
  subType: string;
  type: string;
};

export interface IProductsPageProps {
  params: TParamsProductType | TParamsProductSubType;
}

const Index = ({ params }: IProductsPageProps) => {
  return <Products params={params} />;
};

export default Index;
