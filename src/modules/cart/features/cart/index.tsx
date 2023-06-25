"use client";

import clsx from "clsx";
import React from "react";

import CartInfo from "@/modules/cart/components/cartInfo";
import CartTable from "@/modules/cart/components/cartTable";
import NoProductInCart from "@/modules/cart/components/noProductInCart";
import { useAppContext } from "@/providers/appProvider";
import { numberToCurrency } from "@/utils/currency";
import { numberToVND } from "@/utils/number";

const CartPage = () => {
  const { cart } = useAppContext();

  const totalPrice = React.useMemo(() => {
    const value =
      cart?.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0;

    return value;
  }, [cart?.products]);

  const isNeedBuyMore = React.useMemo(() => {
    return totalPrice < numberToCurrency(2, "million");
  }, [totalPrice]);
  return (
    <div className="section-min-height px-4 xl:mx-auto xl:max-w-[1080px]">
      {isNeedBuyMore && (
        <p className="ml-8 mt-8">
          Mua thêm {numberToVND(numberToCurrency(2, "million") - totalPrice)} để được miễn phí giao
          hàng
        </p>
      )}
      {!cart?.products ||
        (cart.products.length === 0 ? (
          <NoProductInCart />
        ) : (
          <div
            className={clsx("mt-12", {
              "mt-4": isNeedBuyMore,
            })}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex basis-2/3 flex-col overflow-x-auto">
                <CartTable products={cart?.products} />
              </div>

              <div className="basis-1/3">
                <CartInfo />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartPage;
