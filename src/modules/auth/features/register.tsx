"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Button from "@/components/button";
import Input from "@/components/input";
import Logo from "@/components/logo";
import { PATH } from "@/configs/path.config";

import useRegister from "../services/useRegister";
import { TRegisterData, registerSchema } from "../validations/register";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: yupResolver(registerSchema),
  });
  const { mutate, isLoading } = useRegister();

  const onSubmit = (data: TRegisterData) => {
    const formData = { ...data };
    if (formData.phone.startsWith("0")) formData.phone = "+84" + formData.phone.slice(1);
    mutate(formData);
  };

  return (
    <div className="relative h-screen xl:mx-auto xl:max-w-[1080px]">
      <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng ký tài khoản
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tên đăng nhập
              </label>
              <div className="mt-2">
                <Input id="username" error={errors.username?.message} {...register("username")} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Địa chỉ email
              </label>
              <div className="mt-2">
                <Input id="email" error={errors.email?.message} {...register("email")} />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Số điện thoại
              </label>
              <div className="mt-2">
                <Input id="phone" error={errors.phone?.message} {...register("phone")} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-primary hover:text-primary-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  type="password"
                  error={errors.password?.message}
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                isLoading={isLoading}
              >
                Đăng ký
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn đã có tài khoản?{" "}
            <Link
              href={PATH.DANG_NHAP}
              className="font-semibold leading-6 text-primary hover:text-primary-300"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
