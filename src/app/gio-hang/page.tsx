import { Metadata } from "next";
import React from "react";

import CartPage from "@/modules/cart/features/cart";
import { getMetaData } from "@/utils/metadata";

export const metadata: Metadata = getMetaData({
  title: "Giỏ hàng - Yến sào Khánh Hoà",
  description: "Giỏ hàng của bạn",
});

const Index = () => {
  return <CartPage />;
};

export default Index;
