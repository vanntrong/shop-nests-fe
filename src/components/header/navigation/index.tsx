"use client";

import { take } from "lodash";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

import DropdownMenu from "@/components/dropdownMenu";
import { PATH } from "@/configs/path.config";
import { useAppContext } from "@/providers/appProvider";
import { useAuthContext } from "@/providers/authProvider";

import NavigationItem from "./navigationItem";

const MAX_DISPLAY_CATEGORY = 8;

const Navigation = () => {
  const { sidebarCategories, cart } = useAppContext();
  const { user } = useAuthContext();
  return (
    <div className="flex items-center justify-between gap-3 2xl:justify-center 2xl:gap-5">
      {take(sidebarCategories, MAX_DISPLAY_CATEGORY).map(nav => (
        <NavigationItem nav={nav} key={nav.name} />
      ))}
      {user ? (
        <>
          <Link className="flex items-center gap-2 pb-2" href={PATH.GIO_HANG}>
            <div className="relative">
              <BsCart4 color="white" size={20} />
              {cart?.products && cart.products.length > 0 && (
                <div className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-[10px] font-bold text-white">
                  {cart.products.length}
                </div>
              )}
            </div>
          </Link>
          <DropdownMenu username={user.name} />
        </>
      ) : (
        <Link
          href={PATH.DANG_NHAP}
          className="mb-0 block pb-2 text-sm font-normal text-white 2xl:whitespace-nowrap"
        >
          Đăng nhập
        </Link>
      )}
    </div>
  );
};

export default Navigation;
