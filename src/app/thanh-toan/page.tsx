import { Metadata } from "next";
import React from "react";

import Payment from "@/modules/payment/features/payment";
import { getMetaData } from "@/utils/metadata";

export const metadata: Metadata = getMetaData({
  title: "Thanh toán - Yến sào Khánh Hoà",
  description: "Thanh toán đơn hàng của bạn",
});

const Index = () => {
  return <Payment />;
};

export default Index;
