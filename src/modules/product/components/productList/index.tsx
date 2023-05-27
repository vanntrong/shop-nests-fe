"use client";
import { FC, useState } from "react";

import { TVariant } from "@/types/variant";

import ButtonVariant from "../buttonVariant";
import ProductCard from "../productCard";

interface IProductListProps {
  variants: TVariant[];
  title: string;
}

const ProductList: FC<IProductListProps> = ({ variants, title }) => {
  const [selected, setSelected] = useState<string>(variants && variants[0].value);

  return (
    <div>
      <div className="before:center-by-position relative before:z-0 before:h-[1px] before:w-full before:bg-gray-200 before:content-['']">
        <h1 className="z-1 relative mx-auto w-fit bg-white px-2 text-center text-xl font-normal text-primary">
          {title}
        </h1>
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

      <div className="mt-2 grid grid-cols-2 gap-1">
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
        <ProductCard product={"a"} />
      </div>
    </div>
  );
};

export default ProductList;
