import { useRouter } from "next/navigation";
import React from "react";

import Button from "@/components/button";
import { PATH } from "@/configs/path.config";

const NoProductInCart = () => {
  const navigate = useRouter();

  return (
    <div className="mt-10 flex h-full w-full flex-col items-center justify-center">
      <p>Chưa có sản phẩm trong giỏ hàng của bạn</p>

      <Button
        className="mt-2 rounded-md bg-primary px-2 py-2 text-sm font-medium text-white hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
        onClick={() => navigate.push(PATH.HOME)}
      >
        Tiếp tục mua sắm
      </Button>
    </div>
  );
};

export default NoProductInCart;
