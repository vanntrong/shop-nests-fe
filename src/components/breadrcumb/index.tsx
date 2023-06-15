"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type TBreadcrumb = {
  name: string;
  href: string;
};

interface IBreadcrumbProps {
  data: TBreadcrumb[];
}

const Breadcrumb: FC<IBreadcrumbProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex flex-wrap justify-center lg:justify-start">
          {data.map((item, index) => (
            <>
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "transition duration-150 ease-in-out hover:text-primary focus:text-primary",
                    {
                      "text-primary": pathname === item.href,
                      "text-neutral-400": pathname !== item.href,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
              {index !== data.length - 1 && (
                <li>
                  <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                </li>
              )}
            </>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
