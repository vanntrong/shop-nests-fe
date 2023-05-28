import clsx from "clsx";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import React, { FC } from "react";

import { HOME_RESOURCES } from "@/modules/home/configs/resources.config";

const dancingScript = Dancing_Script({ subsets: ["vietnamese"] });

interface IFlashSaleBannerProps {
  src: string;
  alt: string;
  classNames?: string;
}

const FlashSaleBanner: FC<IFlashSaleBannerProps> = ({ src, alt, classNames }) => {
  return (
    <div
      className={clsx(
        `relative h-[160px] w-full bg-cover bg-left sm:h-[115px] 2xl:h-full`,
        classNames
      )}
      style={{
        backgroundImage: `url('${src}')`,
      }}
    >
      <Image
        src={HOME_RESOURCES.flashSaleText}
        alt={alt}
        className="z-1 absolute left-1/2 top-2 h-[85px] w-[100px] translate-x-[-50%] object-cover sm:top-0 sm:h-[60px] sm:w-[70px]"
        width={1920}
        height={1080}
      />
      <p
        className={clsx(
          "absolute bottom-2 left-0 w-full text-center text-4xl text-yellow sm:text-5xl",
          dancingScript.className
        )}
      >
        Tuần Lễ Vàng 22.5 - 31.5
      </p>
    </div>
  );
};

export default FlashSaleBanner;
