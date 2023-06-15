import Image from "next/image";
import React, { ComponentProps, FC } from "react";

import Button from "@/components/button";

interface IProductCardProps extends ComponentProps<"div"> {
  product: any;
}

const ProductCard: FC<IProductCardProps> = ({ ...props }) => {
  return (
    <div className="product-card-shadow border border-gray-200 bg-white" {...props}>
      <div className={"relative h-[171px] w-full 2xl:h-[258px]"}>
        <Image
          src={"/images/home/product-1.jpeg"}
          fill
          className="absolute h-full w-full object-cover object-center"
          alt="abc"
        />
      </div>

      <div className="px-4 pb-5 pt-10">
        <h4 className="text-sm font-semibold leading-[1.3] text-black-900">
          Yến Tinh Chế Vụn 100gr
        </h4>
        <p className="before:center-by-position relative w-fit text-sm font-normal text-black-900 opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']">
          4.000.000đ
        </p>
        <p className="text-lg font-bold leading-[16px] text-red-500">3.100.000đ</p>
        <div className="mt-1 w-fit rounded-2xl bg-red-500 py-1 pl-2 pr-3 text-[15px] font-bold text-white">
          <p>Giảm 23%</p>
        </div>

        <Button className="before:l-0 relative mx-auto mt-3 block w-fit pb-1 text-xs font-bold text-primary before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-primary before:opacity-30 before:content-['']">
          Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
