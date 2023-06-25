import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSearchParams, useRouter } from "next/navigation";

import { TRegisterResponse, register } from "@/apis/auth/register";
import { PATH } from "@/configs/path.config";
import { useAuthContext } from "@/providers/authProvider";
import { axiosInstance } from "@/utils/axios";
import { setCookie } from "@/utils/cookies";
import { getQueryKey } from "@/utils/queryKey";

import { TRegisterData } from "../validations/register";

const useRegister = (
  configs?: UseMutationOptions<TRegisterResponse, AxiosError, TRegisterData>
) => {
  const key = getQueryKey("register");
  const { setUser } = useAuthContext();
  const searchParams = useSearchParams();
  const navigate = useRouter();

  return useMutation<TRegisterResponse, AxiosError, TRegisterData>(
    key,
    (body: TRegisterData) => register(body),
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

export default useRegister;
