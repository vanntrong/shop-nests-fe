"use client";

import React, { useEffect } from "react";

import CreatePaymentForm from "@/modules/payment/components/createPaymentForm";
import PaymentInfo from "@/modules/payment/components/paymentInfo";
import { TCreatePaymentData } from "@/modules/payment/validations/createPayment";
import { useAppContext } from "@/providers/appProvider";
import { usePaymentContext } from "@/providers/paymentProvider";

const Payment = () => {
  const { cart } = useAppContext();
  const { paymentInfo, setPaymentInfo } = usePaymentContext();

  const handleSubmit = (data: TCreatePaymentData) => {
    console.log(data);
  };

  useEffect(() => {
    return () => {
      setPaymentInfo?.({});
    };
  }, [setPaymentInfo]);

  return (
    <div className="xl:mx-auto xl:max-w-[1080px]">
      <div className="px-4 pt-4">
        <div className="lg:flex lg:gap-3">
          <div className="lg:basis-2/3">
            <h2 className="text-base font-medium uppercase">thanh toán và giao hàng</h2>
            <CreatePaymentForm onSubmit={handleSubmit} />
          </div>
          <div className="mt-3 lg:basis-1/3">
            <PaymentInfo paymentInfo={paymentInfo} products={cart?.products ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
