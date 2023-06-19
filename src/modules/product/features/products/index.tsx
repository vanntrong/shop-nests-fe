import { FC } from "react";
import { IoFilter } from "react-icons/io5";

import Breadcrumb from "@/components/breadrcumb";
import Button from "@/components/button";
import FilterPrice from "@/components/filterPrice";
import Sidebar from "@/components/sidebar";
import ProductCardRecentView from "@/modules/product/components/productCardRecentView";
import ProductList from "@/modules/product/components/productList";
import { TProduct } from "@/modules/product/types/product.type";
import { TCategory } from "@/types/category";

interface IProductsProps {
  category: TCategory;
  products: TProduct[];
}

const Products: FC<IProductsProps> = ({ category, products }) => {
  const breadcrumbData = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Danh mục sản phẩm",
      href: "#",
    },
  ];

  const getParentCategory = (category: TCategory) => {
    if (category.parentCategory) {
      getParentCategory(category.parentCategory);
    }
    breadcrumbData.push({
      name: category.name,
      href: `/danh-muc-san-pham/${category.slug}`,
    });
    return;
  };

  getParentCategory(category);

  return (
    <div className="xl:mx-auto xl:max-w-[1080px]">
      <div className="px-4 pt-4">
        <Breadcrumb data={breadcrumbData} />
      </div>

      <div className="mt-4 flex justify-center lg:hidden">
        <Button className="flex items-center gap-1">
          <IoFilter />
          <span className="text-base font-medium uppercase">LỌC</span>
        </Button>
      </div>

      <div className="mt-8 lg:grid lg:grid-cols-4">
        <div className="hidden lg:col-span-1 lg:block">
          <Sidebar className="shadow-none" />
          <div className="mt-4 px-4">
            <h3 className="text-base uppercase">Lọc theo giá</h3>
            <div className="h-[2px] w-[30px] bg-black-900"></div>
            <FilterPrice />
          </div>

          <div className="mt-6 px-4">
            <h3 className="text-base uppercase">Mới vừa xem</h3>
            <div className="h-[2px] w-[30px] bg-black-900"></div>
            <div className="mt-4 flex flex-col gap-3">
              <ProductCardRecentView />
              <ProductCardRecentView />
              <ProductCardRecentView />
              <ProductCardRecentView />
              <ProductCardRecentView />
              <ProductCardRecentView />
              <ProductCardRecentView />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="px-3 text-base">{category.description}</p>
          <div className="mt-4">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
