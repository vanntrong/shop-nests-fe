import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";

import { TLoginResponse, login } from "@/apis/auth/login";
import { PATH } from "@/configs/path.config";
import { useAuthContext } from "@/providers/authProvider";
import { axiosInstance } from "@/utils/axios";
import { setCookie } from "@/utils/cookies";
import { getQueryKey } from "@/utils/queryKey";

import { TLoginData } from "../validations/login";

const useLogin = (configs?: UseMutationOptions<TLoginResponse, AxiosError, TLoginData>) => {
  const key = getQueryKey("login");
  const { setUser } = useAuthContext();
  const searchParams = useSearchParams();
  const navigate = useRouter();

  return useMutation<TLoginResponse, AxiosError, TLoginData>(
    key,
    (body: TLoginData) => login(body),
    {
      onSuccess(data) {
        setUser?.(data.data);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.tokens.access_token}`;
        setCookie("access_token", data.tokens.access_token, {
          expires: new Date().getTime() + data.tokens.exp * 1000,
        });
        setCookie("refresh_token", data.tokens.refresh_token);
        const redirect = searchParams.get("redirect");

        if (redirect) {
          navigate.push(redirect);
          return;
        }

        navigate.push(PATH.HOME);
      },
      ...configs,
    }
  );
};

export default useLogin;
