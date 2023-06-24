"use client";

import React, { useState } from "react";

import { TUser } from "@/types/user";

interface IAuthProvider {
  user?: TUser;
  setUser?: React.Dispatch<React.SetStateAction<TUser | undefined>>;
}

export const AuthContext = React.createContext<IAuthProvider>({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser>();

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
