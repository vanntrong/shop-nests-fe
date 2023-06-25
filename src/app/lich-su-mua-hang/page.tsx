import { Metadata } from "next";
import React from "react";

import PaymentHistory from "@/modules/payment/features/paymentHistory";
import { getMetaData } from "@/utils/metadata";

export const metadata: Metadata = getMetaData({
  title: "Lịch sử mua hàng - Yến sào Khánh Hoà",
  description: "Lịch sử mua hàng của bạn",
});

const Index = () => {
  return <PaymentHistory />;
};

export default Index;
