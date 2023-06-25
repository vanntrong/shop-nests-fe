"use client";

import clsx from "clsx";
import { Lora } from "next/font/google";
import { usePathname } from "next/navigation";
import React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { PATH } from "@/configs/path.config";

const lora = Lora({ subsets: ["latin"] });

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isAtAuth = pathname === PATH.DANG_NHAP || pathname === PATH.DANG_KY;
  return (
    <body className={clsx(lora.className, "bg-white")}>
      {!isAtAuth && <Header />}
      <main>{children}</main>
      {!isAtAuth && <Footer />}
    </body>
  );
};

export default LayoutProvider;
