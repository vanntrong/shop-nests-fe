import { getAllCategories } from "@/apis/category/getAllCategories";
import { getAllProducts } from "@/apis/product/getAllProducts";
import HomePage from "@/modules/home/features/home";
import { TProductList } from "@/modules/product/types/product.type";

const Home = async () => {
  const [{ data: categories }, { data: otherCategories }] = await Promise.all([
    getAllCategories({
      isShowAtHome: true,
      sortBy: "name",
      sortOrder: "asc",
    }),
    getAllCategories({
      isShowAtHome: false,
      maxLevel: 1,
      limit: 6,
    }),
  ]);

  const productsList: TProductList[] = await Promise.all(
    categories.map(async category => {
      const subCategory =
        category.subCategories && category.subCategories.length > 0
          ? category.subCategories[0]
          : category;

      const products = await getAllProducts({
        category: subCategory.slug,
      });

      const title = category.name;
      const variant =
        category.subCategories && category.subCategories.length > 0
          ? category.subCategories
              .map(sub => ({
                title: sub.name,
                value: sub.slug,
              }))
              .sort((a, b) => a.title.localeCompare(b.title))
          : [
              {
                title: category.name,
                value: category.slug,
              },
            ];

      return {
        products,
        title,
        variant,
      };
    })
  );

  const otherProducts = await getAllProducts({
    category: otherCategories[0].slug,
  });

  const otherProductsList: TProductList = {
    products: otherProducts,
    title: "SẢN PHẨM KHÁC",
    variant: otherCategories.map(category => ({
      title: category.name,
      value: category.slug,
    })),
  };

  return <HomePage productsList={productsList} otherProductsList={otherProductsList} />;
};

export default Home;
