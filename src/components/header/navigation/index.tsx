import React from "react";
import { BsCart4 } from "react-icons/bs";

import Button from "@/components/button";
import { NAVIGATION_CONFIGS } from "@/configs/header.config";

import NavigationItem from "./navigationItem";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between gap-3 2xl:justify-center 2xl:gap-5">
      {NAVIGATION_CONFIGS.map(nav => (
        <NavigationItem nav={nav} key={nav.title} />
      ))}
      <Button className="flex items-center gap-2 pb-2">
        <span className="block text-center text-sm font-normal text-white">Giỏ hàng</span>
        <BsCart4 color="white" size={20} />
      </Button>
    </div>
  );
};

export default Navigation;
