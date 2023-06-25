import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

import Button from "@/components/button";
import QuantityInput from "@/components/quantityInput";
import { PATH } from "@/configs/path.config";
import useUpdateCart from "@/modules/cart/services/useUpdateCart";
import { TProductWithQuantity } from "@/modules/product/types/product.type";
import { getPriceAfterSale, numberToVND } from "@/utils/number";

interface ICartTableProps {
  products: TProductWithQuantity[];
}

const CartTable: FC<ICartTableProps> = ({ products }) => {
  const navigate = useRouter();
  const { mutate: updateCart, isLoading } = useUpdateCart();

  const deleteProductFromCart = useCallback(
    (productId: string) => {
      updateCart({
        cartProducts: [
          {
            id: productId,
            quantity: 0,
          },
        ],
      });
    },
    [updateCart]
  );

  const updateProductFromCart = useCallback(
    (productId: string, quantity: number) => {
      updateCart({
        cartProducts: [
          {
            id: productId,
            quantity,
          },
        ],
      });
    },
    [updateCart]
  );
  return (
    <div className="relative">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b border-neutral-200 font-medium">
              <tr>
                <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                  SẢN PHẨM
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                  GIÁ
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                  SỐ LƯỢNG
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                  TẠM TÍNH
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr className="border-b border-neutral-200" key={product.id}>
                  <td className="flex w-[60vw] items-center gap-2 px-3 py-2 md:w-[unset]">
                    <Button className="group" onClick={() => deleteProductFromCart(product.id)}>
                      <AiOutlineCloseCircle
                        size={18}
                        className="text-gray-400 group-hover:text-black-900"
                      />
                    </Button>
                    <div className="flex w-full flex-1 items-center gap-2">
                      <Image src={product.thumbnailUrl} width={80} height={60} alt={product.name} />
                      <Link href={`${PATH.SAN_PHAM}/${product.slug}`}>
                        <span className="text-sm text-gray-600">{product.name}</span>
                      </Link>
                    </div>
                  </td>
                  {product.quantity > product.inventory && (
                    <p className="mb-2 ml-4 text-xs text-red-500">
                      Sản phẩm này chỉ còn {product.inventory} mặt hàng
                    </p>
                  )}
                  <td className="whitespace-nowrap px-3 py-2 text-sm font-medium">
                    {numberToVND(
                      getPriceAfterSale(product.price, product.salePrice, product.saleEndAt)
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2">
                    <QuantityInput
                      value={product.quantity}
                      onChange={value => updateProductFromCart(product.id, value)}
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm font-medium">
                    {numberToVND(
                      getPriceAfterSale(product.price, product.salePrice, product.saleEndAt) *
                        product.quantity
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button
          className="ml-auto mt-3 block w-fit rounded-md bg-primary px-2 py-2 text-sm font-medium text-white hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
          onClick={() => navigate.push(PATH.HOME)}
        >
          Tiếp tục mua sắm
        </Button>
      </div>

      {isLoading && (
        <div
          className={clsx(
            "absolute left-0 top-0 z-[1] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.005)]"
          )}
        >
          <div>
            <FaSpinner className="animate-spin text-primary" size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;
