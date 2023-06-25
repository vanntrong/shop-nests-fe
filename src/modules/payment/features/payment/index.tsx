"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { useInvalidateGetCart } from "@/modules/cart/services/useGetCart";
import useCreateOrder from "@/modules/order/services/useCreateOrder";
import CreatePaymentForm from "@/modules/payment/components/createPaymentForm";
import PaymentComplete from "@/modules/payment/components/paymentComplete";
import PaymentInfo from "@/modules/payment/components/paymentInfo";
import { TCreatePaymentData } from "@/modules/payment/validations/createPayment";
import useGetProvince from "@/modules/province/services/useGetCity";
import useGetDistricts from "@/modules/province/services/useGetDistrict";
import useGetWards from "@/modules/province/services/useGetWards";
import { useAppContext } from "@/providers/appProvider";
import { usePaymentContext } from "@/providers/paymentProvider";

const Payment = () => {
  const { cart } = useAppContext();
  const { paymentInfo, setPaymentInfo } = usePaymentContext();
  const { data: { data: provinces } = {} } = useGetProvince();
  const [province, setProvince] = useState<number>();
  const [district, setDistrict] = useState<number>();
  const { data: { data: districts } = {} } = useGetDistricts(province, { enabled: !!province });
  const { data: { data: wards } = {} } = useGetWards(province, district, {
    enabled: !!province && !!district,
  });
  const invalidateCart = useInvalidateGetCart();
  const { mutate, isLoading, isSuccess } = useCreateOrder({
    onSuccess: async () => {
      setPaymentInfo?.({});
      await invalidateCart();
    },
  });

  const handleSubmit = (data: TCreatePaymentData) => {
    const formData = { ...data };
    formData.province = JSON.parse(formData.province).name;
    formData.district = JSON.parse(formData.district).name;

    if (formData.phone.startsWith("0")) {
      formData.phone = "+84" + formData.phone.slice(1);
    }

    const products =
      cart?.products.map(product => ({
        productId: product.id,
        quantity: product.quantity,
      })) ?? [];

    mutate({
      ...formData,
      products,
      promotionCode: paymentInfo.promotionCode,
      deliver_option: "none",
    });
  };

  useEffect(() => {
    return () => {
      setPaymentInfo?.({});
    };
  }, [setPaymentInfo]);

  return (
    <>
      {isSuccess ? (
        <PaymentComplete />
      ) : (
        <div className="relative xl:mx-auto xl:max-w-[1080px]">
          <div className="px-4 pt-4">
            <div className="lg:flex lg:gap-3">
              <div className="lg:basis-2/3">
                <h2 className="text-base font-medium uppercase">thanh toán và giao hàng</h2>
                <CreatePaymentForm
                  onSubmit={handleSubmit}
                  provinces={provinces ?? []}
                  districts={districts ?? []}
                  wards={wards ?? []}
                  onChangeProvince={provinceCode => setProvince(provinceCode)}
                  onChangeDistrict={districtCode => setDistrict(districtCode)}
                />
              </div>
              <div className="mt-3 lg:basis-1/3">
                <PaymentInfo paymentInfo={paymentInfo} products={cart?.products ?? []} />
              </div>
            </div>
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
      )}
    </>
  );
};

export default Payment;
