"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider, { Settings } from "react-slick";

import Button from "@/components/button";

const ProductDetailSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    nextArrow: <ArrowRightButton />,
    prevArrow: <ArrowLeftButton />,
    beforeChange(currentSlide, nextSlide) {
      setActiveIndex(nextSlide);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    console.log({ activeIndex });
  }, [activeIndex]);

  return (
    <div>
      <div className="px-8 sm:px-0">
        <Slider {...settings}>
          <div className="relative h-[320px] w-full">
            <Image
              src={"/images/home/product-1.jpeg"}
              fill
              className="absolute h-full w-full object-cover object-center"
              alt="abc"
            />
          </div>
          <div className="relative h-[320px] w-full">
            <Image
              src={"/images/home/product-1.jpeg"}
              fill
              className="absolute h-full w-full object-cover object-center"
              alt="abc"
            />
          </div>
        </Slider>
      </div>

      <div className="mt-4 flex items-center gap-2 px-2">
        <div className="border border-solid border-gray-200 p-1">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src={"/images/home/product-1.jpeg"}
              fill
              className="absolute h-full w-full object-cover object-center"
              alt="abc"
            />
          </div>
        </div>
        <div className="p-1">
          <div className="relative h-[80px] w-[80px] border opacity-60">
            <Image
              src={"/images/home/product-1.jpeg"}
              fill
              className="absolute h-full w-full object-cover object-center"
              alt="abc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;

interface IButtonProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const ArrowLeftButton = ({ className, style, ...props }: IButtonProps) => {
  return (
    <Button
      className={clsx(className, "before:hidden")}
      style={{
        ...style,
        width: 32,
        height: 32,
      }}
      {...props}
    >
      <RiArrowLeftSLine color="#111" size={32} />
    </Button>
  );
};

const ArrowRightButton = ({ className, style, ...props }: IButtonProps) => {
  return (
    <Button
      className={clsx(className, "before:hidden")}
      style={{
        ...style,
        width: 32,
        height: 32,
      }}
      {...props}
    >
      <RiArrowRightSLine color="#111" size={32} />
    </Button>
  );
};
