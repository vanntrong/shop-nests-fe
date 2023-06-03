/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useState } from "react";

import Breadcrumb from "@/components/breadrcumb";
import Button from "@/components/button";
import CountDownBanner from "@/components/countDownBanner";
import QuantityInput from "@/components/quantityInput";
import ProductDetailSlider from "@/modules/product/components/productDetailSlider";
import ProductDetailTable from "@/modules/product/components/productDetailTable";
import ProductCompanyIntro from "@/modules/product/productCompanyIntro";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number>(1);
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
    {
      name: "Hộp 50gr",
      href: "/san-pham/to-yen/to-yen-tinh-che",
    },
  ];

  const handleQuantityChange = useCallback((value: number) => {
    setQuantity(value);
  }, []);

  return (
    <div className="xl:mx-auto xl:max-w-[1080px]">
      <div className="px-4 pt-4">
        <Breadcrumb data={breadcrumbData} />
      </div>

      <div className="px-4">
        <div className="mt-2 h-[1px] w-full bg-gray-200"></div>
      </div>

      <div className="sm:grid-cols-3 sm:px-3 md:grid">
        <div className="mt-4">
          <ProductDetailSlider />
        </div>
        <div className="mt-4 px-4">
          <CountDownBanner />

          <h2 className="mt-4 text-2xl font-medium">Tổ yến tinh chế 250g</h2>
          <div className="mt-2 flex items-center justify-between sm:justify-start sm:gap-3 md:flex-wrap md:gap-1">
            <p className="before:center-by-position relative w-fit text-[28px] font-normal text-black-900 opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']">
              4.000.000đ
            </p>
            <p className="text-[28px] font-bold leading-[16px] text-primary-300">3.100.000đ</p>
          </div>
          <div className="w-fit rounded-2xl bg-red-500 py-1 pl-2 pr-3 text-sm font-bold text-white md:mt-2">
            <p>Giảm 23%</p>
          </div>

          <div className="mt-3 flex items-stretch gap-2 md:flex-wrap">
            <QuantityInput value={quantity} onChange={handleQuantityChange} />
            <Button className="min-h-[40px] rounded-[7px] bg-green-300 px-2 uppercase text-white">
              Thêm vào giỏ
            </Button>
            <Button className="min-h-[40px] rounded-[7px] bg-red-300 px-2 uppercase text-white">
              Mua ngay
            </Button>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-bold text-[#222]">Vận Chuyển</h4>
            <div className="ml-auto mt-3 w-fit">
              <div className="flex items-start">
                <img
                  src="/free-1.png"
                  alt=""
                  className="mt-1 h-5 shrink-0 object-cover object-center"
                />
                <div className="flex-1">
                  <p className="w-fit text-sm">Miễn phí vận chuyển toàn quốc</p>
                  <p className="mt-1 w-fit text-[13px] text-[#808080]">
                    Áp dụng cho đơn hàng trên 2.000.000₫
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src="/free-2.png"
                  alt=""
                  className="mt-1 h-5 shrink-0 object-cover object-center"
                />
                <div className="flex-1">
                  <p className="text-sm">Miễn phí giao hàng hỏa tốc</p>
                  <p className="mt-1 text-[13px] text-[#808080]">
                    Áp dụng tại TP.HCM cho đơn hàng trên 2.000.000₫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-2">
          <div className="md:hidden">
            <ProductCompanyIntro />
          </div>
          <div className="mt-6 md:mt-0">
            <ProductDetailTable />
          </div>
        </div>

        <div className="hidden md:col-span-3 md:mx-auto md:mt-6 md:block">
          <ProductCompanyIntro />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
