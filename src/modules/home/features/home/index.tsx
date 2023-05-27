import Image from "next/image";
import React from "react";

import FlashSaleBanner from "@/modules/home/components/flashSaleBanner";
import OtherListCategories from "@/modules/home/components/otherListCategories";
import { dummyOtherListCategories, dummyVariants } from "@/modules/home/configs/dummyData";
import { HOME_RESOURCES } from "@/modules/home/configs/resources.config";
import ProductList from "@/modules/product/components/productList";

const HomePage = () => {
  return (
    <section>
      <div className="mb-1 min-h-[250px] w-full">
        <Image
          src={HOME_RESOURCES.banner}
          alt="HOME"
          width={500}
          height={500}
          className="h-full min-h-[250px] w-full object-cover object-right"
        />
      </div>
      <FlashSaleBanner src={HOME_RESOURCES.flashSale} alt="Flash Sale" />

      <div className="px-2">
        <div className="mt-4 grid grid-cols-1 gap-10">
          <ProductList variants={dummyVariants} title="TỔ YẾN SẠCH - TINH CHẾ" />
          <ProductList variants={dummyVariants} title="TỔ YẾN SẠCH THƯỢNG HẠNG - SƠ CHẾ" />
          <ProductList variants={dummyVariants} title="TỔ YẾN CÒN LÔNG - THÔ" />
          <ProductList variants={dummyVariants} title="YẾN CHƯNG TƯƠI" />
          <ProductList variants={dummyVariants} title="TỔ YẾN SẠCH - TINH CHẾ" />
          <ProductList variants={dummyVariants} title="TỔ YẾN SẠCH - TINH CHẾ" />
        </div>

        <div className="mt-10">
          <div>
            <h2 className="text-center text-xl font-normal uppercase text-primary">
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
