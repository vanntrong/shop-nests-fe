"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { PATH } from "@/configs/path.config";

import Button from "../button";

interface IDropdownMenuProps {
  username: string;
}

const DropdownMenu: FC<IDropdownMenuProps> = ({ username }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const containerRef = useRef<HTMLUListElement>(null);

  useOnClickOutside(containerRef, () => setIsShow(false));

  const menu = [
    {
      name: "Thông tin cá nhân",
      label: "Thông tin cá nhân",
      href: "#",
    },
    {
      name: "Lịch sử mua hàng",
      label: "Lịch sử mua hàng",
      href: PATH.LICH_SU_MUA_HANG,
    },
    {
      name: "Đăng xuất",
      label: "Đăng xuất",
      href: "#",
    },
  ];

  return (
    <div className="relative pb-2" data-te-dropdown-ref>
      <Button
        className="flex items-center text-white"
        type="button"
        onClick={() => setIsShow(!isShow)}
      >
        <span className="block whitespace-nowrap text-center text-sm font-normal text-white">
          {username}
        </span>
        <span className="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Button>
      <ul
        className={clsx(
          "absolute left-0 top-full z-[1000] m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-sm shadow-lg",
          {
            hidden: !isShow,
            block: isShow,
          }
        )}
        ref={containerRef}
      >
        {menu.map(item => (
          <li key={item.name}>
            <Link
              className="mb-2 block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black-900 hover:bg-neutral-100 hover:text-primary active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
              href={item.href}
              data-te-dropdown-item-ref
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
