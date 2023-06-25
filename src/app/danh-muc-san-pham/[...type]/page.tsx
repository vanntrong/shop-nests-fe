import { Metadata } from "next";

import { getCategory } from "@/apis/category/getCategory";
import { getAllProducts } from "@/apis/product/getAllProducts";
import Products from "@/modules/product/features/products";
import { getMetaData } from "@/utils/metadata";

type TParamsProductType = {
  type: string[];
};

export interface IProductsPageProps {
  params: TParamsProductType;
}

export function generateMetadata(): Metadata {
  return getMetaData({
    title: "Danh mục sản phẩm - Yến sào Khánh Hoà",
    description: "Danh mục sản phẩm",
  });
}

const Index = async ({ params }: IProductsPageProps) => {
  const categorySlug = params.type.pop();
  const { data: category } = await getCategory(categorySlug ?? "");
  const products = await getAllProducts({
    category: categorySlug,
  });

  return <Products category={category} products={products} />;
};

export default Index;
