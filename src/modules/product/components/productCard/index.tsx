import dayjs from "dayjs";
import { isNil } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, FC } from "react";

import Button from "@/components/button";
import { TProduct } from "@/modules/product/types/product.type";
import { calculateSale, numberToVND } from "@/utils/number";

interface IProductCardProps extends ComponentProps<"div"> {
  product: TProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product, ...props }) => {
  const isSaleAvailable =
    !isNil(product.salePrice) && !isNil(product.saleEndAt) && dayjs().isBefore(product.saleEndAt);

  return (
    <Link href={`/san-pham/${product.slug}`}>
      <div
        className="product-card-shadow flex h-full flex-col border border-gray-200 bg-white"
        {...props}
      >
        <div className={"relative h-[171px] w-full cursor-pointer overflow-hidden 2xl:h-[258px]"}>
          <Image
            src={product.thumbnailUrl}
            fill
            className="absolute h-full w-full object-cover object-center transition-all duration-300 hover:scale-110"
            alt={product.name}
          />
        </div>

        <div className="flex flex-1 flex-col px-4 pb-5 pt-10">
          <h4 className=" mb-2 h-full min-h-[40px] text-sm font-semibold text-black-900">
            {product.name}
          </h4>
          {isSaleAvailable && (
            <p className="before:center-by-position relative w-fit text-sm font-normal text-black-900 opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']">
              {numberToVND(product.salePrice ?? 0)}
            </p>
          )}
          <p className="text-lg font-bold leading-[16px] text-red-500">
            {numberToVND(product.price)}
          </p>
          {isSaleAvailable && (
            <div className="mt-1 w-fit rounded-2xl bg-red-500 py-1 pl-2 pr-3 text-[15px] font-bold text-white">
              <p>Giảm {calculateSale(product.price, product.salePrice ?? 0)}%</p>
            </div>
          )}

          <Button className="before:l-0 relative mx-auto mt-3 block w-fit pb-1 text-xs font-bold text-primary before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-primary before:opacity-30 before:content-['']">
            Thêm vào giỏ
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
