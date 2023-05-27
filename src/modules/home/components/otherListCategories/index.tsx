import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";

import { TCategory } from "@/types/category";

interface IOtherListCategoriesProps {
  listCategories: TCategory[];
}

const OtherListCategories: FC<IOtherListCategoriesProps> = ({ listCategories }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {listCategories.map((category, index) => (
        <div
          className={clsx("flex-center relative w-full py-5", {
            "h-[380px]": index === 0,
          })}
          key={category.title}
        >
          <Image
            src={category.image}
            alt={category.title}
            width={1024}
            height={700}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <h2 className="z-1 relative w-fit max-w-[50%] text-center text-6xl font-medium uppercase leading-[1.1] text-white">
            {category.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default OtherListCategories;
