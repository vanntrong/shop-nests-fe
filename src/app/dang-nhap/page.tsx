import { Metadata } from "next";
import React from "react";

import { DOMAIN } from "@/configs/app.config";
import { PATH } from "@/configs/path.config";
import Login from "@/modules/auth/features/login";
import { getMetaData } from "@/utils/metadata";

export const metadata: Metadata = getMetaData({
  title: "Đăng nhập - Yến sào Khánh Hoà",
  description: "Đăng nhập vào tài khoản của bạn",
  openGraph: {
    url: DOMAIN + PATH.DANG_NHAP,
  },
});

const Index = () => {
  return <Login />;
};

export default Index;
