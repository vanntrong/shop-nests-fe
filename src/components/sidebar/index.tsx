"use client";

import clsx from "clsx";
import { ComponentProps, FC } from "react";
import { BiMenu } from "react-icons/bi";

import { useAppContext } from "@/providers/appProvider";

import NavigationItem from "../header/navigation/navigationItem";

type TSidebarProps = ComponentProps<"input">;

const Sidebar: FC<TSidebarProps> = ({ className, ...props }) => {
  const { sidebarCategories } = useAppContext();

  return (
    <div className={clsx("w-full rounded-xl bg-white px-4 shadow-lg", className)} {...props}>
      <div className="flex items-center gap-2 rounded-md bg-primary p-2">
        <BiMenu color="white" size={24} />
        <h2 className="text-center text-base font-bold uppercase text-white">danh mục sản phẩm</h2>
      </div>
      <div className="mt-2 flex flex-col gap-2 pb-4">
        {sidebarCategories.map(nav => (
          <NavigationItem nav={nav} key={`${nav.id}-sidebar`} variant="sidebar" />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
