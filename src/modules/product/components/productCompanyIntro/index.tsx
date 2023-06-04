import React from "react";
import { BsCheckLg } from "react-icons/bs";

const ProductCompanyIntro = () => {
  return (
    <div className="my-[2px] w-full rounded-[5px] border border-solid border-red-400 bg-white p-[10px] text-[15px]">
      <div className="mt-[-24px] flex w-full max-w-[207px] items-center gap-2 rounded-full bg-[#ffb201] px-[20px] py-[2px] text-[15px] font-medium text-white">
        <BsCheckLg size={18} /> <strong>Tổ Yến Khánh Hòa</strong>
      </div>
      <ul>
        <div className="flex">
          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#32C671] text-white">
            <BsCheckLg size={12} />
          </div>
          <li className="mb-3 ml-2 text-sm">
            Giao hàng miễn phí toàn quốc với đơn hàng từ 2.000.000đ
          </li>
        </div>
        <div className="flex">
          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#32C671] text-white">
            <BsCheckLg size={12} />
          </div>
          <li className="mb-3 ml-2 text-sm">Nhận ngay siêu tốc trong nội thành TP.HCM</li>
        </div>
        <div className="flex">
          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#32C671] text-white">
            <BsCheckLg size={12} />
          </div>
          <li className="mb-3 ml-2 text-sm">
            Kèm theo đường phèn hữu cơ cùng bộ hộp và túi giấy sang trọng.
          </li>
        </div>
        <div className="flex">
          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#32C671] text-white">
            <BsCheckLg size={12} />
          </div>
          <li className="mb-3 ml-2 text-sm">Bồi hoàn 1000% nếu sản phẩm không như cam kết.</li>
        </div>
      </ul>
    </div>
  );
};

export default ProductCompanyIntro;
