"use client";

import { take } from "lodash";
import { useRouter } from "next/navigation";
import { BsCart4 } from "react-icons/bs";

import Button from "@/components/button";
import { PATH } from "@/configs/path.config";
import { useAppContext } from "@/providers/appProvider";

import NavigationItem from "./navigationItem";

const Navigation = () => {
  const { sidebarCategories, cart } = useAppContext();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-3 2xl:justify-center 2xl:gap-5">
      {take(sidebarCategories, 8).map(nav => (
        <NavigationItem nav={nav} key={nav.name} />
      ))}
      <Button className="flex items-center gap-2 pb-2" onClick={() => router.push(PATH.GIO_HANG)}>
        <span className="block whitespace-nowrap text-center text-sm font-normal text-white">
          Giỏ hàng
        </span>
        <div className="relative">
          <BsCart4 color="white" size={20} />
          {cart?.products && cart.products.length > 0 && (
            <div className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-[10px] font-bold text-white">
              {cart.products.length}
            </div>
          )}
        </div>
      </Button>
    </div>
  );
};

export default Navigation;
