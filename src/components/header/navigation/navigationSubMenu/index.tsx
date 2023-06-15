"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { FC, useCallback, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useOnClickOutside } from "usehooks-ts";

import Button from "@/components/button";
import { TNavigation } from "@/types/navigation";

interface INavigationSubItemProps {
  nav: TNavigation;
}

const NavigationSubItem: FC<INavigationSubItemProps> = ({ nav }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isShowSub, setIsShowSub] = useState(false);

  const handleClickOutSide = useCallback(() => {
    setIsShowSub(false);
  }, []);

  useOnClickOutside(ref, handleClickOutSide);

  return (
    <div className="relative">
      <Button className="w-full" onClick={() => setIsShowSub(true)}>
        <div className="flex items-center justify-between">
          <Link
            href={nav.href}
            className={clsx("pointer-events-none", {
              "pointer-events-auto": isShowSub,
            })}
          >
            <span className="text-sm font-normal">{nav.title}</span>
          </Link>
          {nav.children && (
            <div>
              <GoArrowRight size={12} />
            </div>
          )}
        </div>
      </Button>

      {nav.children && (
        <div
          className={clsx(
            "absolute left-full top-0 flex w-full min-w-[160px] flex-col gap-3 rounded-xl border border-primary bg-white p-3 shadow-sm transition-all duration-300",
            {
              "opacity-1 pointer-events-auto visible translate-x-[0.75rem] translate-y-[-0.75rem]":
                isShowSub,
              "pointer-events-none invisible translate-y-[100px] select-none opacity-0": !isShowSub,
            }
          )}
          ref={ref}
        >
          {nav.children.map(child => (
            <Link href={child.href} key={child.title} className="">
              <span className="">{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface INavigationSubMenuProps {
  navs: TNavigation[];
}

const NavigationSubMenu: FC<INavigationSubMenuProps> = ({ navs }) => {
  return (
    <div className="relative z-[5] flex flex-col gap-4 rounded-xl border border-primary bg-white p-3 shadow-sm">
      {navs.map(nav => (
        <NavigationSubItem nav={nav} key={nav.title} />
      ))}
    </div>
  );
};

export default NavigationSubMenu;
