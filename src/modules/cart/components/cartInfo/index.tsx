"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { AiFillTag } from "react-icons/ai";

import Button from "@/components/button";
import Input from "@/components/input";
import { PATH } from "@/configs/path.config";
import useGetPromotion from "@/modules/promotion/services/useGetPromotion";
import { useAppContext } from "@/providers/appProvider";
import { usePaymentContext } from "@/providers/paymentProvider";
import { numberToVND } from "@/utils/number";

const CartInfo = () => {
  const { cart } = useAppContext();
  const { setPaymentInfo } = usePaymentContext();
  const {
    mutate,
    data: {
      data: { reduce, code } = { reduce: { reduceMoney: 0, isFreeShip: false }, code: "" },
    } = {},
  } = useGetPromotion();

  const [promotionInput, setPromotionInput] = useState<string>();
  const navigate = useRouter();

  const totalValue = useMemo(() => {
    const value =
      cart?.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0;

    return value;
  }, [cart?.products]);

  const totalValueAfterPromotion = useMemo(() => {
    if (reduce && reduce.reduceMoney) {
      return totalValue - reduce.reduceMoney;
    }
    return undefined;
  }, [reduce, totalValue]);

  const getPromotion = () => {
    if (!promotionInput || promotionInput === code) return;
    mutate({ code: promotionInput, total: totalValue });
  };

  const navigateToPayment = () => {
    setPaymentInfo?.({
      totalValue,
      totalValueAfterPromotion,
      promotionCode: code,
      isFreeShip: reduce?.isFreeShip ?? false,
    });
    navigate.push(PATH.THANH_TOAN);
  };

  return (
    <div className="border-l border-solid border-neutral-200 px-6 py-2">
      <h2 className="font-medium">Tổng cộng</h2>
      <div className="mt-2 h-[1px] w-full bg-neutral-200"></div>

      <div
        className={clsx("mt-2 flex items-center justify-between", {
          "before:center-by-position relative opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']":
            totalValueAfterPromotion,
        })}
      >
        <h4 className="text-sm">Tạm tính</h4>
        <span className="text-sm">{numberToVND(totalValue)}</span>
      </div>

      <div className="mt-2 h-[1px] w-full bg-neutral-200"></div>

      {totalValueAfterPromotion && (
        <>
          <div className="mt-2 flex items-center justify-between">
            <h4 className="text-sm">Giá giảm</h4>
            <span className="text-sm">{numberToVND(totalValueAfterPromotion)}</span>
          </div>
          <div className="mt-2 h-[1px] w-full bg-neutral-200"></div>
        </>
      )}

      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-xs text-gray-500">Giao hàng</h4>
        <span className="text-xs text-gray-500">
          {(reduce?.isFreeShip || totalValue > 2000000) && "Miễn phí"}
        </span>
      </div>

      <div className="mt-2 h-[1px] w-full bg-neutral-200"></div>

      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-sm">Tổng</h4>
        <span className="text-sm">{numberToVND(totalValue ?? 0)}</span>
      </div>

      <div className="mt-6">
        <Button
          className="w-full rounded-md bg-green-500 py-2 text-sm font-medium text-white hover:opacity-75"
          onClick={navigateToPayment}
        >
          Thanh toán
        </Button>
      </div>

      <div className="mt-6">
        <h3 className="flex items-center gap-2 text-sm">
          <AiFillTag className="text-sm" />
          Mã giảm giá
        </h3>
        <div className="mt-2 h-[1px] w-full bg-neutral-200"></div>
        <Input
          id="sale"
          className="mt-3"
          placeholder="Nhập mã giảm giá của bạn"
          value={promotionInput}
          onChange={e => setPromotionInput(e.target.value)}
          maxLength={15}
        />

        <Button
          className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
          onClick={getPromotion}
          disabled={!promotionInput}
        >
          Áp dụng
        </Button>
      </div>
    </div>
  );
};

export default CartInfo;
