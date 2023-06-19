"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, useCallback, useRef, useState } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import { useOnClickOutside } from "usehooks-ts";

import Button from "@/components/button";
import { TCategory } from "@/types/category";

import NavigationSubMenu from "../navigationSubMenu";

interface INavigationItemProps {
  nav: TCategory;
  variant?: "header" | "sidebar";
}

const NavigationIcon = {
  header: <GoArrowDown color="white" size={12} />,
  sidebar: <GoArrowRight color="black" size={12} />,
};

const NavigationItem: FC<INavigationItemProps> = ({ nav, variant = "header" }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isShowSub, setIsShowSub] = useState(false);

  const handleClickOutSide = useCallback(() => {
    setIsShowSub(false);
  }, []);

  useOnClickOutside(ref, handleClickOutSide);

  return (
    <div
      className={clsx("relative w-full flex-1 pb-2 xl:w-fit xl:flex-[unset]", {
        "z-[5] xl:w-full": variant === "sidebar",
        "z-[6]": variant === "header",
      })}
    >
      <Button onClick={() => setIsShowSub(true)} className="w-full">
        <div
          className={clsx("flex w-full items-center justify-center gap-2", {
            "justify-between": variant === "sidebar",
          })}
        >
          <Link
            href={`/danh-muc-san-pham/${nav.slug}`}
            className={clsx("pointer-events-none", {
              "pointer-events-auto": isShowSub,
            })}
          >
            <span
              className={clsx("block text-sm font-normal", {
                "text-left text-black": variant === "sidebar",
                "text-center text-white": variant === "header",
              })}
            >
              {nav.name}
            </span>
          </Link>
          {nav.subCategories && nav.subCategories.length > 0 && (
            <div className="flex items-center">{NavigationIcon[variant]}</div>
          )}
        </div>
      </Button>
      {nav.subCategories && nav.subCategories.length > 0 && (
        <div
          className={clsx("absolute w-max transition-all duration-300", {
            "opacity-1 pointer-events-auto visible translate-y-0": isShowSub,
            "pointer-events-none invisible translate-y-[100px] select-none opacity-0": !isShowSub,
            "left-full top-0 translate-x-4": variant === "sidebar",
            "left-0 top-full": variant === "header",
          })}
          ref={ref}
        >
          <NavigationSubMenu navs={nav.subCategories} />
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
