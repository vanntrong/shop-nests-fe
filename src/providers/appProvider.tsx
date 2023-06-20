"use client";

import React, { createContext, useMemo } from "react";

import useGetCategories from "@/modules/home/features/services/useGetCategories";
import { TCategory } from "@/types/category";

interface IAppContext {
  categories: TCategory[];
  sidebarCategories: TCategory[];
  orderCategories: TCategory[];
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
    <AppContext.Provider value={{ categories: data, sidebarCategories, orderCategories }}>
      {children}
    </AppContext.Provider>
  );
};
