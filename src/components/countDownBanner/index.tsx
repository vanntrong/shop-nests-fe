"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const saleTime = new Date(Date.now() + 60 * 60 * 24 * 2 * 1000).getTime();

type TTime = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};

const getTime = (time: number): TTime => {
  const day = Math.floor((time / (1000 * 60 * 60 * 24)) % 24);
  const hour = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((time / (1000 * 60)) % 60);
  const second = Math.floor((time / 1000) % 60);
  return { day, hour, minute, second };
};

const CountDownBanner = () => {
  const [time, setTime] = useState<TTime>(getTime(saleTime - Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime(saleTime - Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="h-[110px] w-full rounded-lg bg-cover bg-center p-3"
      style={{ backgroundImage: "url('/bg-flashsale.jpg')" }}
    >
      <div className="relative mx-auto h-[21px] w-[108px]">
        <Image fill src={"/flashsale-text.svg"} alt="" className="absolute inset-0 h-full w-full" />
      </div>

      <div className="mt-4 flex items-stretch gap-2">
        <div className="flex min-h-[42px] w-full flex-1 flex-col items-center justify-center rounded-lg bg-[rgba(0,0,0,0.85)]">
          <span className="text-base font-bold leading-[1] text-white">{time.day}</span>
          <span className="text-[10px] text-gray-300">Ngày</span>
        </div>
        <div className="flex min-h-[42px] w-full flex-1 flex-col items-center justify-center rounded-lg bg-[rgba(0,0,0,0.85)]">
          <span className="text-base font-bold leading-[1] text-white">{time.hour}</span>
          <span className="text-[10px] text-gray-300">Giờ</span>
        </div>
        <div className="flex min-h-[42px] w-full flex-1 flex-col items-center justify-center rounded-lg bg-[rgba(0,0,0,0.85)]">
          <span className="text-base font-bold leading-[1] text-white">{time.minute}</span>
          <span className="text-[10px] text-gray-300">Phút</span>
        </div>
        <div className="flex min-h-[42px] w-full flex-1 flex-col items-center justify-center rounded-lg bg-[rgba(0,0,0,0.85)]">
          <span className="text-base font-bold leading-[1] text-white">{time.second}</span>
          <span className="text-[10px] text-gray-300">Giây</span>
        </div>
      </div>
    </div>
  );
};

export default CountDownBanner;
