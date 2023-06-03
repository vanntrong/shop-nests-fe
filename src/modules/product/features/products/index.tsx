import React, { FC } from "react";
import { IoFilter } from "react-icons/io5";

import { IProductsPageProps } from "@/app/danh-muc-san-pham/[type]/[subType]/page";
import Breadcrumb from "@/components/breadrcumb";
import Button from "@/components/button";
import FilterPrice from "@/components/filterPrice";
import Sidebar from "@/components/sidebar";
import ProductCardRecentView from "@/modules/product/components/productCardRecentView";
import ProductList from "@/modules/product/components/productList";

type TProductsProps = IProductsPageProps;

const Products: FC<TProductsProps> = () => {
  const breadcrumbData = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Sản phẩm",
      href: "/san-pham",
    },
    {
      name: "Tổ Yến",
      href: "/san-pham/to-yen",
    },
    {
      name: "Tổ Yến Tinh Chế",
      href: "/san-pham/to-yen/to-yen-tinh-che",
    },
  ];
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
          <p className="px-3 text-base">
            Là dòng yến sào được xử lý sạch lông bằng phương pháp ngâm tổ yến vào nước để làm mềm và
            nhặt sạch lông. Sau đó tổ yến được tái tạo hình, khử trùng và sấy khô. Tổ yến sạch thành
            phẩm sẽ được ghép lại từ nhiều tổ khác, có độ thẫm mỹ, cảm giác về độ sợi, nở ở mức
            trung bình. Phù hợp với nhu cầu tập trung vào bồi bổ sức khỏe.
          </p>
          <div className="mt-4">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
