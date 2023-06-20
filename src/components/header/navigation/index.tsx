"use client";

import { take } from "lodash";
import { BsCart4 } from "react-icons/bs";

import Button from "@/components/button";
import { useAppContext } from "@/providers/appProvider";

import NavigationItem from "./navigationItem";

const Navigation = () => {
  const { sidebarCategories } = useAppContext();

  return (
    <div className="flex items-center justify-between gap-3 2xl:justify-center 2xl:gap-5">
      {take(sidebarCategories, 8).map(nav => (
        <NavigationItem nav={nav} key={nav.name} />
      ))}
      <Button className="flex items-center gap-2 pb-2">
        <span className="block text-center text-sm font-normal text-white">Giỏ hàng</span>
        <BsCart4 color="white" size={20} />
      </Button>
    </div>
  );
};

export default Navigation;
