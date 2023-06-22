"use client";

import React from "react";

import CartInfo from "@/modules/cart/components/cartInfo";
import CartTable from "@/modules/cart/components/cartTable";
import { useAppContext } from "@/providers/appProvider";

const CartPage = () => {
  const { cart } = useAppContext();
  return (
    <div className="section-min-height px-4 xl:mx-auto xl:max-w-[1080px]">
      {!cart?.products || (cart.products.length === 0 && <p>no cart</p>)}
      {cart && (
        <div className="mt-12">
          <div className="flex">
            <div className="flex basis-2/3 flex-col overflow-x-auto">
              <CartTable products={cart?.products} />
            </div>

            <div className="basis-1/3">
              <CartInfo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
