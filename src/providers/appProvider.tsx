"use client";

import React, { createContext } from "react";

import useGetCategories from "@/modules/home/features/services/useGetCategories";
import { TCategory } from "@/types/category";

interface IAppContext {
  categories: TCategory[];
}

export const AppContext = createContext<IAppContext>({
  categories: [],
});

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: { data = [] } = {} } = useGetCategories();
  return <AppContext.Provider value={{ categories: data }}>{children}</AppContext.Provider>;
};
