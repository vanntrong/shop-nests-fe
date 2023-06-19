import { getCategory } from "@/apis/category/getCategory";
import { getAllProducts } from "@/apis/product/getAllProducts";
import Products from "@/modules/product/features/products";

type TParamsProductType = {
  type: string[];
};

export interface IProductsPageProps {
  params: TParamsProductType;
}

const Index = async ({ params }: IProductsPageProps) => {
  const categorySlug = params.type.pop();
  const { data: category } = await getCategory(categorySlug ?? "");
  const { data: products } = await getAllProducts({
    category: categorySlug,
  });

  return <Products category={category} products={products} />;
};

export default Index;
