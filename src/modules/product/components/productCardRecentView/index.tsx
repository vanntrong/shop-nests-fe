import Image from "next/image";

const ProductCardRecentView = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-start">
        <div className={"relative h-[60px] w-[60px] shrink-0"}>
          <Image
            src={"/images/home/product-1.jpeg"}
            fill
            className="absolute h-full w-full object-cover object-center"
            alt="abc"
          />
        </div>
        <div className="px-4 pb-5">
          <h4 className="text-base font-normal leading-[1.3] text-black-900">
            Yến Tinh Chế Vụn 100gr
          </h4>
          <p className="before:center-by-position relative w-fit text-sm font-normal text-black-900 opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']">
            4.000.000đ
          </p>
          <p className="text-base font-bold leading-[16px] text-black-900">3.100.000đ</p>
          <div className="mt-1 w-fit rounded-2xl bg-red-500 py-1 pl-2 pr-3 text-[15px] font-bold text-white">
            <p>Giảm 23%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardRecentView;
