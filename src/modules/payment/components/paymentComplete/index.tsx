import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import AnimationData from "@/assets/lotties/loading-success.json";
import Button from "@/components/button";
const PaymentComplete = () => {
  const [redirectTime, setRedirectTime] = useState(5);

  useEffect(() => {
    if (redirectTime === 0) {
      window.location.href = "/";
      return;
    }
    const timer = setInterval(() => {
      setRedirectTime(prev => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [redirectTime]);

  return (
    <div className="section-min-height flex flex-col items-center justify-center">
      <div>
        <Lottie
          options={{
            animationData: AnimationData,
            loop: true,
            autoplay: true,
          }}
        />
      </div>

      <div className="text-center">
        <h2 className="mb-2 text-2xl">Đặt hàng thành công</h2>
        <p className="mx-auto mb-4 px-2 md:max-w-[70%]">
          Cảm ơn bạn đã tin tưởng và mua hàng ở Yến Sào Khánh Hoà. Bạn sẽ được chuyển hướng đến
          trang mua sắm sau <span className="font-semibold">{redirectTime}</span> giây
        </p>

        <Button className="rounded-md bg-primary px-3 py-2 text-sm text-white hover:opacity-75">
          <a href="/">Tiếp tục mua sắm</a>
        </Button>
      </div>
    </div>
  );
};

export default PaymentComplete;
