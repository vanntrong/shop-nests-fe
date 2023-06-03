import clsx from "clsx";
import React, { ComponentProps, FC } from "react";
import { BiMenu } from "react-icons/bi";

import { NAVIGATION_CONFIGS } from "@/configs/header.config";

import NavigationItem from "../header/navigation/navigationItem";

type TSidebarProps = ComponentProps<"input">;

const Sidebar: FC<TSidebarProps> = ({ className, ...props }) => {
  return (
    <div className={clsx("w-full rounded-xl bg-white px-4 shadow-lg", className)} {...props}>
      <div className="flex items-center gap-2 rounded-md bg-primary p-2">
        <BiMenu color="white" size={24} />
        <h2 className="text-center text-base font-bold uppercase text-white">danh mục sản phẩm</h2>
      </div>
      <div className="mt-2 flex flex-col gap-4 pb-4">
        {NAVIGATION_CONFIGS.map(nav => (
          <NavigationItem nav={nav} key={`${nav.title}-sidebar`} variant="sidebar" />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
