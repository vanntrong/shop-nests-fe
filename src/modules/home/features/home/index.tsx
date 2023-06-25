import Image from "next/image";
import { FC } from "react";

import Sidebar from "@/components/sidebar";
import FlashSaleBanner from "@/modules/home/components/flashSaleBanner";
import OtherListCategories from "@/modules/home/components/otherListCategories";
import { dummyOtherListCategories } from "@/modules/home/configs/dummyData";
import { HOME_RESOURCES } from "@/modules/home/configs/resources.config";
import ProductList from "@/modules/product/components/productList";
import { TProductList } from "@/modules/product/types/product.type";

interface IHomePageProps {
  productsList: TProductList[];
  otherProductsList: TProductList;
}

const HomePage: FC<IHomePageProps> = ({ productsList, otherProductsList }) => {
  return (
    <section className="2xl:mt-3">
      <div className="mx-auto max-w-[1230px] lg:grid lg:grid-cols-4 lg:gap-3 xl:px-6">
        <div className="hidden lg:col-span-1 lg:block">
          <Sidebar />
        </div>

        <div className="lg:col-span-3 lg:flex lg:flex-col">
          <div className="mb-1 h-[250px] w-full sm:h-[230px]">
            <Image
              src={HOME_RESOURCES.banner}
              alt="HOME"
              width={500}
              height={500}
              className="h-full w-full object-cover object-right"
            />
          </div>
          <FlashSaleBanner src={HOME_RESOURCES.flashSale} alt="Flash Sale" />
        </div>
      </div>

      <div className="px-2 xl:mx-auto xl:max-w-[1045px]">
        <div className="mt-4 grid grid-cols-1 gap-10 sm:mt-8 sm:gap-20 md:mt-12 lg:mt-16">
          {productsList.map(productList => (
            <ProductList
              variants={productList.variant}
              title={productList.title}
              key={productList.title}
              products={productList.products}
              variantTitle="Chọn trọng lượng"
            />
          ))}

          <ProductList
            variants={otherProductsList.variant}
            title={otherProductsList.title}
            products={otherProductsList.products}
          />
        </div>

        <div className="mt-10">
          <div>
            <h2 className="text-center text-xl font-normal uppercase text-primary lg:text-2xl">
              Danh mục sản phẩm khác
            </h2>

            <div className="mt-8">
              <OtherListCategories listCategories={dummyOtherListCategories} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
