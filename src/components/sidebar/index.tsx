import React from "react";
import { BiMenu } from "react-icons/bi";

import { NAVIGATION_CONFIGS } from "@/configs/header.config";

import NavigationItem from "../header/navigation/navigationItem";

const Sidebar = () => {
  return (
    <div className="w-full rounded-xl bg-white px-4 shadow-lg">
      <div className="flex items-center gap-2 rounded-md bg-primary p-2">
        <BiMenu color="white" size={24} />
        <h2 className="text-center text-base font-bold uppercase text-white">danh mục sản phẩm</h2>
      </div>
      <div className="mt-2 flex flex-col items-center gap-4 pb-4">
        {NAVIGATION_CONFIGS.map(nav => (
          <NavigationItem nav={nav} key={`${nav.title}-sidebar`} variant="sidebar" />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
