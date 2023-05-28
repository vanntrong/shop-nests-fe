"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { FC, useCallback, useRef, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import { useOnClickOutside } from "usehooks-ts";

import Button from "@/components/button";
import { TNavigation } from "@/types/navigation";

import NavigationSubMenu from "../navigationSubMenu";

interface INavigationItemProps {
  nav: TNavigation;
  variant?: "header" | "sidebar";
}

const NavigationItem: FC<INavigationItemProps> = ({ nav, variant = "header" }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isShowSub, setIsShowSub] = useState(false);

  const handleClickOutSide = useCallback(() => {
    setIsShowSub(false);
  }, []);

  useOnClickOutside(ref, handleClickOutSide);

  return (
    <div
      className={clsx("relative w-full flex-1 pb-2 2xl:w-fit 2xl:flex-[unset]", {
        "z-[5]": variant === "sidebar",
        "z-[6]": variant === "header",
      })}
    >
      <Button onClick={() => setIsShowSub(true)} className="w-full">
        <div className={clsx("flex w-full items-center justify-center gap-2")}>
          <Link
            href={nav.href}
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
              {nav.title}
            </span>
          </Link>
          {nav.children && (
            <div className="flex items-center">
              <GoArrowDown color={variant === "header" ? "white" : "black"} size={12} />
            </div>
          )}
        </div>
      </Button>
      {nav.children && (
        <div
          className={clsx("absolute w-max transition-all duration-300", {
            "opacity-1 pointer-events-auto visible translate-y-0": isShowSub,
            "pointer-events-none invisible translate-y-[100px] select-none opacity-0": !isShowSub,
            "left-full top-0 translate-x-4": variant === "sidebar",
            "left-0 top-full": variant === "header",
          })}
          ref={ref}
        >
          <NavigationSubMenu navs={nav.children} />
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
