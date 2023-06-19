"use client";
import { FC, useState } from "react";

import { TProduct } from "@/modules/product/types/product.type";
import { TVariant } from "@/types/variant";

import ButtonVariant from "../buttonVariant";
import ProductCard from "../productCard";

interface IProductListProps {
  variants?: TVariant[];
  title?: string;
  products: TProduct[];
}

const ProductList: FC<IProductListProps> = ({ variants, title, products }) => {
  const [selected, setSelected] = useState<string>(variants ? variants[0].value : "");

  return (
    <div>
      <div className="before:center-by-position relative before:z-0 before:h-[1px] before:w-full before:bg-gray-200 before:content-['']">
        {title && (
          <h1 className="z-1 relative mx-auto w-fit bg-white px-2 text-center text-xl font-normal text-primary sm:text-2xl">
            {title}
          </h1>
        )}
      </div>

      {variants && (
        <h4 className="w-full text-center text-lg font-normal uppercase">Chọn trọng lượng</h4>
      )}

      {variants && (
        <div className="flex-center mt-2 gap-1">
          {variants.map(variant => (
            <ButtonVariant
              key={variant.value}
              variant={variant}
              handleSelected={value => setSelected(value)}
              isActive={variant.value === selected}
            />
          ))}
        </div>
      )}

      <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
