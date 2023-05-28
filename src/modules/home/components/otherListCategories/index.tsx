import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";

import { TCategory } from "@/types/category";

interface IOtherListCategoriesProps {
  listCategories: TCategory[];
}

const OtherListCategories: FC<IOtherListCategoriesProps> = ({ listCategories }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-3 xl:grid-rows-2">
      {listCategories.map((category, index) => (
        <div
          className={clsx(
            "flex-center relative w-full py-5",
            {
              "h-[380px]": index === 0,
            },
            "sm:min-h-[280px]",
            { "h-full lg:col-span-2 lg:row-span-2 xl:col-span-1": index === 0 },
            { "lg:col-span-2 xl:col-span-1": index === 3 || index === 1 },
            { "lg:col-span-2 lg:row-span-2 xl:col-span-1 xl:row-span-1": index === 2 },
            { "lg:col-span-4 lg:row-span-2 xl:col-span-1 xl:row-span-1": index === 4 }
            // { "xl:col-span-1": index === 3 }
          )}
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
