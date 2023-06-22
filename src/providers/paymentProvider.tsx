"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

export type TPaymentInfo = {
  totalValue?: number;
  totalValueAfterPromotion?: number;
  promotionCode?: string;
  isFreeShip?: boolean;
};

interface IPaymentContext {
  paymentInfo: TPaymentInfo;
  setPaymentInfo?: (paymentInfo: TPaymentInfo) => void;
}

export const PaymentContext = createContext<IPaymentContext>({
  paymentInfo: {},
});

export const usePaymentContext = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [paymentInfo, setPaymentInfo] = useState<TPaymentInfo>({});

  return (
    <PaymentContext.Provider value={{ paymentInfo, setPaymentInfo }}>
      {children}
    </PaymentContext.Provider>
  );
};
