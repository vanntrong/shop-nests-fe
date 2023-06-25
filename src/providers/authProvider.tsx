"use client";

import React, { useState } from "react";

import useGetMe from "@/modules/auth/services/useGetMe";
import { ETokenName } from "@/types/common";
import { TUser } from "@/types/user";
import { getCookie } from "@/utils/cookies";

interface IAuthProvider {
  user?: TUser;
  setUser?: React.Dispatch<React.SetStateAction<TUser | undefined>>;
}

export const AuthContext = React.createContext<IAuthProvider>({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser>();
  const token = getCookie(ETokenName.ACCESS_TOKEN);
  useGetMe(token, {
    enabled: !!token,
    onSuccess: res => {
      setUser(res.data);
    },
  });

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
