"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { GoArrowRight } from "react-icons/go";

import Button from "@/components/button";
import { TCategory } from "@/types/category";

interface INavigationSubItemProps {
  nav: TCategory;
}

const NavigationSubItem: FC<INavigationSubItemProps> = ({ nav }) => {
  return (
    <div className={clsx("group/item relative px-3")}>
      <Button className="w-full">
        <div className="group/sub flex items-center justify-between">
          <Link href={`/danh-muc-san-pham/${nav.slug}`}>
            <span className="text-sm font-normal group-hover/sub:text-primary">{nav.name}</span>
          </Link>
          {nav.subCategories && nav.subCategories.length > 0 && (
            <div>
              <GoArrowRight size={12} />
            </div>
          )}
        </div>
      </Button>

      {nav.subCategories && nav.subCategories.length > 0 && (
        <div
          className={clsx(
            "pointer-events-none invisible absolute left-full top-0 flex w-full min-w-[160px] translate-y-[100px] select-none flex-col gap-3 rounded-xl border border-primary bg-white p-3 opacity-0 shadow-sm transition-all duration-300",
            `group-hover/item:pointer-events-auto group-hover/item:visible group-hover/item:translate-y-[-0.75rem] group-hover/item:opacity-100`
          )}
        >
          {nav.subCategories.map(child => (
            <Link
              href={`/danh-muc-san-pham/${child.slug}`}
              key={child.name}
              className="hover:text-primary"
            >
              <span className="">{child.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface INavigationSubMenuProps {
  navs: TCategory[];
}

const NavigationSubMenu: FC<INavigationSubMenuProps> = ({ navs }) => {
  return (
    <div className="relative z-[5] flex flex-col gap-4 rounded-xl border border-primary bg-white py-3 shadow-sm">
      {navs.map(nav => (
        <NavigationSubItem nav={nav} key={nav.id} />
      ))}
    </div>
  );
};

export default NavigationSubMenu;
