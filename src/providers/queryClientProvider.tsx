"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { queryClient } from "@/configs/query.config";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
