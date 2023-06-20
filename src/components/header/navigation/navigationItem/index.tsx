"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";

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
  return (
    <div
      className={clsx("group relative w-full flex-1 pb-2 xl:w-fit xl:flex-[unset]", {
        "z-[5] xl:w-full": variant === "sidebar",
        "z-[6]": variant === "header",
      })}
    >
      <Button className="w-full">
        <div
          className={clsx("flex w-full items-center gap-2", {
            "justify-start px-3": variant === "sidebar",
            "justify-center": variant === "header",
          })}
        >
          <Link href={`/danh-muc-san-pham/${nav.slug}`}>
            <span
              className={clsx("block text-sm font-normal 2xl:whitespace-nowrap", {
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
          className={clsx(
            "pointer-events-none invisible absolute w-max translate-y-[100px] select-none opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
            {
              "left-full top-0": variant === "sidebar",
              "left-0 top-full": variant === "header",
            }
          )}
        >
          <NavigationSubMenu navs={nav.subCategories} />
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
