import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";

import Logo from "@/components/logo";
import { BRAND_SERVICES } from "@/configs/header.config";

import Button from "../button";
import InputSearch from "../inputSearch";

import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center bg-yellow py-2 xl:px-12">
        <p className="text-xs">HOTLINE: 0901 610 929 | Mở cửa: 8:00 - 20:00 T2-CN</p>
      </div>

      <div className="flex h-[70px] w-full flex-wrap items-center justify-between bg-primary px-3 sm:h-[90px] xl:justify-start xl:gap-6 xl:px-12 2xl:justify-center">
        <Button className="flex h-8 w-8 items-center justify-center rounded-lg border-[1px] border-white px-0 py-0 sm:w-fit sm:gap-1 sm:px-2 lg:hidden">
          <BiMenu color="white" />
          <span className="hidden text-xs font-medium text-white sm:inline-block">MENU</span>
        </Button>

        <div className="">
          <Logo />
        </div>

        <div className="flex items-center">
          <InputSearch placeholder="Tìm kiếm..." />
          <Button className="lg:hidden">
            <BsCart4 color="white" size={20} />
          </Button>
        </div>

        <div className="ml-5 hidden items-center gap-3 lg:flex">
          {BRAND_SERVICES.map(service => (
            <div className="flex items-center" key={service.title}>
              <Image
                src="/images/check-icon.png"
                alt={service.desc}
                width={512}
                height={512}
                className="h-[35px] w-[35px] object-cover"
              />
              <div className="ml-3">
                <h2 className="text-sm font-normal uppercase text-yellow">{service.title}</h2>
                <p className="text-sm font-normal capitalize text-white">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-full bg-primary px-3 pb-2 lg:block xl:px-12">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
