import { Metadata } from "next";
import React from "react";

import { DOMAIN } from "@/configs/app.config";
import { PATH } from "@/configs/path.config";
import Register from "@/modules/auth/features/register";
import { getMetaData } from "@/utils/metadata";

export const metadata: Metadata = getMetaData({
  title: "Đăng ký - Yến sào Khánh Hoà",
  description: "Đăng ký tài khoản mới",
  openGraph: {
    url: DOMAIN + PATH.DANG_KY,
  },
});

const Index = () => {
  return <Register />;
};

export default Index;
