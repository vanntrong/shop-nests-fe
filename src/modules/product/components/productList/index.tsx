"use client";
import { FC, useState } from "react";

import { TGetAllProductsParams } from "@/apis/product/getAllProducts";
import { TProduct } from "@/modules/product/types/product.type";
import { IPaginationResponse } from "@/types/common";
import { TVariant } from "@/types/variant";

import useGetProducts from "../../services/useGetProducts";
import ButtonVariant from "../buttonVariant";
import ProductCard from "../productCard";

interface IProductListProps {
  variants?: TVariant[] | null;
  title?: string;
  products: IPaginationResponse<TProduct>;
  variantTitle?: string;
}

const ProductList: FC<IProductListProps> = ({ variants, title, products, variantTitle }) => {
  const [params, setParams] = useState<TGetAllProductsParams>({
    category: variants ? variants[0].value : undefined,
    offset: 0,
    limit: 10,
  });

  const { data } = useGetProducts(
    {
      ...params,
    },
    {
      initialData: products,
    }
  );

  return (
    <div>
      <div className="before:center-by-position relative before:z-0 before:h-[1px] before:w-full before:bg-gray-200 before:content-['']">
        {title && (
          <h1 className="z-1 relative mx-auto w-fit bg-white px-2 text-center text-xl font-normal text-primary sm:text-2xl">
            {title}
          </h1>
        )}
      </div>

      {variantTitle && variants && variants?.length > 1 && (
        <h4 className="w-full text-center text-lg font-normal uppercase">{variantTitle}</h4>
      )}

      {variants && variants.length > 1 && (
        <div className="flex-center mt-2 gap-3">
          {variants.map(variant => (
            <ButtonVariant
              key={variant.value}
              variant={variant}
              handleSelected={value => setParams(prev => ({ ...prev, category: value }))}
              isActive={variant.value === params.category}
            />
          ))}
        </div>
      )}

      <div className="mt-2 grid grid-cols-2 gap-1 sm:mt-4 sm:grid-cols-3 lg:grid-cols-4">
        {data?.data.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
