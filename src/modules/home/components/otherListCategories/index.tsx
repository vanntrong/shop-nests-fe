import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { TCategory } from "@/types/category";

interface IOtherListCategoriesProps {
  listCategories: TCategory[] | Partial<TCategory>[];
}

const OtherListCategories: FC<IOtherListCategoriesProps> = ({ listCategories }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-3 xl:grid-rows-2">
      {listCategories.map((category, index) => (
        <Link
          className={clsx(
            "flex-center relative w-full py-5",
            {
              "h-[380px]": index === 0,
            },
            "group sm:min-h-[280px]",
            { "h-full lg:col-span-2 lg:row-span-2 xl:col-span-1": index === 0 },
            { "lg:col-span-2 xl:col-span-1": index === 3 || index === 1 },
            { "lg:col-span-2 lg:row-span-2 xl:col-span-1 xl:row-span-1": index === 2 },
            { "lg:col-span-4 lg:row-span-2 xl:col-span-1 xl:row-span-1": index === 4 }
          )}
          href={`/danh-muc-san-pham/${category.slug ?? ""}`}
          key={category.slug}
        >
          <Image
            src={category.image ?? ""}
            alt={category.name ?? ""}
            width={1024}
            height={700}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <h2 className="z-1 relative w-fit max-w-[50%] text-center text-6xl font-medium uppercase leading-[1.1] text-white group-hover:text-primary">
            {category.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default OtherListCategories;
