import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  BRAND_BENEFIT,
  CONTACTS,
  FOOTER_BACKGROUND_IMAGE,
  FOOTER_CONTACT_ICON,
} from "@/configs/footer.config.tsx";
import { formatLinkValue } from "@/utils/formatLink";

const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-2">
      <div className="flex sm:justify-center lg:hidden">
        {BRAND_BENEFIT.map((benefit, index) => (
          <div key={`benefit-${index}`} className="basis-4/12 sm:max-w-[160px]">
            <Image
              src={benefit}
              width={768}
              height={345}
              alt="benefit"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="h-full bg-primary pb-6">
        <div className="flex-center relative px-4 pt-4 sm:min-h-[153px] lg:min-h-[100px] lg:pt-2">
          <Image
            src={FOOTER_BACKGROUND_IMAGE}
            alt="abc"
            width={1400}
            height={471}
            className="absolute inset-0 h-full w-full object-cover object-center lg:object-left"
          />
          <h2 className="z-1 relative text-center text-lg font-normal text-white sm:text-sm lg:max-w-[70%] lg:text-xl lg:text-yellow-500">
            <strong>Tổ Yến Khánh Hòa</strong> phân phối bởi <strong>YẾN VÀNG</strong>® luôn đảm bảo{" "}
            <strong>100% YẾN SÀO NGUYÊN CHẤT</strong>&nbsp;và <strong>KHÔNG PHA, TẨM ĐƯỜNG</strong>.
          </h2>
        </div>
        <div className="bg-primary px-2 pt-4 sm:pt-8 lg:flex lg:gap-20">
          <div className="lg:flex-1">
            <Image src={"/logo.svg"} alt="abc" width={167} height={83} className="mx-auto" />
            <p className="mt-4 text-center text-sm leading-[1.5] text-white">
              Điều đặc biệt làm nên và chỉ có duy nhất ở Yến Vàng là khách hàng không còn phải đau
              đầu chọn lựa và lo lắng về chất lượng, hiệu quả hay mẫu mã của sản phẩm nữa mà vẫn có
              giá thành luôn tốt nhất.
            </p>
            <h2 className="mt-4 text-center text-base font-medium text-yellow">
              Tổ Yến Khánh Hòa - Yến Vàng
            </h2>
          </div>

          <div className="mt-8 lg:flex-1">
            <h2 className="text-lg font-normal uppercase text-white">thông tin liên hệ</h2>
            <div className="my-3 h-[2px] w-8 bg-gray-100"></div>
            <div className="flex flex-col">
              {CONTACTS.map(contact => (
                <Link href={contact.value} key={contact.value} className="flex items-center gap-1">
                  {FOOTER_CONTACT_ICON[contact.type]}
                  <span className="text-sm font-normal tracking-widest text-yellow">
                    {formatLinkValue(contact.value)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
