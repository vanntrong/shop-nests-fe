"use client";

import React, { createContext, useMemo } from "react";

import { TGetCartResponse } from "@/apis/cart/getCart";
import useGetCart from "@/modules/cart/services/useGetCart";
import useGetCategories from "@/modules/home/features/services/useGetCategories";
import { TCategory } from "@/types/category";

interface IAppContext {
  categories: TCategory[];
  sidebarCategories: TCategory[];
  orderCategories: TCategory[];
  cart?: TGetCartResponse;
}

export const AppContext = createContext<IAppContext>({
  categories: [],
  sidebarCategories: [],
  orderCategories: [],
});

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: { data = [] } = {} } = useGetCategories({
    sortOrder: "asc",
    maxLevel: 1,
    minLevel: 1,
  });

  const { data: cartData } = useGetCart();

  const [sidebarCategories, orderCategories] = useMemo(() => {
    const sidebar: TCategory[] = [];
    const order: TCategory[] = [];

    data.forEach(ca => {
      if (ca.isAtSidebar) {
        sidebar.push(ca);
      } else {
        order.push(ca);
      }
    });

    return [sidebar, order];
  }, [data]);

  return (
    <AppContext.Provider
      value={{ categories: data, sidebarCategories, orderCategories, cart: cartData?.data }}
    >
      {children}
    </AppContext.Provider>
  );
};
