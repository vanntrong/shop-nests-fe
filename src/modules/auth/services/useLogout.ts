import { useMutation } from "@tanstack/react-query";

import { logout } from "@/apis/auth/logout";
import { ETokenName } from "@/types/common";
import { removeCookie } from "@/utils/cookies";

export const useLogout = () => {
  return useMutation(["logout"], logout, {
    onSuccess: () => {
      removeCookie(ETokenName.ACCESS_TOKEN);
      removeCookie(ETokenName.REFRESH_TOKEN);
      window.location.reload();
    },
  });
};
