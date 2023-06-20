"use client";

import { FC, useState } from "react";
import { IoFilter } from "react-icons/io5";

import { TGetAllProductsParams } from "@/apis/product/getAllProducts";
import Breadcrumb from "@/components/breadrcumb";
import Button from "@/components/button";
import FilterPrice from "@/components/filterPrice";
import Pagination from "@/components/pagination";
import Sidebar from "@/components/sidebar";
import ProductCardRecentView from "@/modules/product/components/productCardRecentView";
import { TProduct } from "@/modules/product/types/product.type";
import { TCategory } from "@/types/category";
import { IPaginationResponse } from "@/types/common";

import ProductCard from "../../components/productCard";
import useGetProducts from "../../services/useGetProducts";

interface IProductsProps {
  category: TCategory;
  products: IPaginationResponse<TProduct>;
}

const Products: FC<IProductsProps> = ({ category, products }) => {
  const [params, setParams] = useState<TGetAllProductsParams>({
    category: category.slug,
    offset: 0,
    limit: 10,
  });
  const { data } = useGetProducts(params, {
    initialData: products,
  });

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
            <FilterPrice
              onChange={(min, max) =>
                setParams(prev => ({ ...prev, min_price: min, max_price: max }))
              }
              minPrice={10000}
              maxPrice={100000000}
            />
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
            <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-4 sm:grid-cols-3 lg:grid-cols-4">
              {data?.data?.map(product => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            {data?.total && data.total > data.limit && (
              <div className="mt-6">
                <Pagination
                  pageCount={Math.ceil(data.total / data.limit)}
                  onPageChange={event => {
                    setParams(prev => ({
                      ...prev,
                      offset: event.selected * (params.limit || 10),
                    }));
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
