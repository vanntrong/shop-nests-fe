"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider, { Settings } from "react-slick";

import Button from "@/components/button";

interface IProductDetailSliderProps {
  images: string[];
  alt: string;
}

const ProductDetailSlider: FC<IProductDetailSliderProps> = ({ images, alt }) => {
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
          {images.map(image => (
            <div className="relative h-[320px] w-full" key={image}>
              <Image
                src={image}
                fill
                className="absolute h-full w-full object-cover object-center"
                alt={alt}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-4 flex items-center gap-2 px-2">
        {images.map((image, index) => (
          <div
            className={clsx("p-1", {
              "border border-solid border-gray-200": activeIndex === index,
            })}
            key={image + "sub"}
          >
            <div className="relative h-[80px] w-[80px]">
              <Image
                src={image}
                fill
                className="absolute h-full w-full object-cover object-center"
                alt={alt}
              />
            </div>
          </div>
        ))}
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
