"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "@/components/input";
import Select from "@/components/select";
import Textarea from "@/components/textarea";
import {
  TCreatePaymentData,
  createPaymentSchema,
} from "@/modules/payment/validations/createPayment";
import { TDistrict, TProvince, TWard } from "@/modules/province/types/province.type";
import { TUser } from "@/types/user";

interface ICreatePaymentFormProps {
  onSubmit: (data: TCreatePaymentData) => void;
  onChangeProvince: (provinceCode: number) => void;
  onChangeDistrict: (districtCode: number) => void;
  provinces: TProvince[];
  districts: TDistrict[];
  wards: TWard[];
  userPoint?: number;
  pointUsed?: number;
  onChangePointUsed?: (pointUsed?: number) => void;
  user?: TUser;
}

const CreatePaymentForm: FC<ICreatePaymentFormProps> = props => {
  const {
    onSubmit: _onSubmit,
    provinces,
    onChangeProvince,
    districts,
    onChangeDistrict,
    wards,
    userPoint = 0,
    pointUsed,
    onChangePointUsed,
    user,
  } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TCreatePaymentData>({
    resolver: yupResolver(createPaymentSchema),
    defaultValues: {
      ...user,
      phone: user?.phone.replace("+84", "0"),
    },
  });
  const provinceWatch = watch("province");
  const districtWatch = watch("district");

  const [isUsePoint, setIsUsePoint] = useState<boolean>(false);

  useEffect(() => {
    if (!provinceWatch) return;
    const province = JSON.parse(provinceWatch);
    onChangeProvince(Number(province.code));
  }, [provinceWatch, onChangeProvince]);

  useEffect(() => {
    if (!districtWatch) return;
    const district = JSON.parse(districtWatch);
    onChangeDistrict(Number(district.code));
  }, [districtWatch, onChangeDistrict]);

  useEffect(() => {
    if (!isUsePoint) onChangePointUsed?.(undefined);
    else onChangePointUsed?.(userPoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUsePoint]);

  const onSubmit = useCallback(
    (data: TCreatePaymentData) => {
      _onSubmit(data);
    },
    [_onSubmit]
  );

  return (
    <form
      className="mt-6 flex flex-col gap-3 lg:pb-20"
      id="myform"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          label="Họ và tên"
          required
          id="name"
          placeholder="Họ tên của bạn"
          {...register("name")}
          error={errors.name?.message}
        />
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="w-full">
          <Input
            label="Số điện thoại"
            required
            id="phone"
            placeholder="Số điện thoại của bạn"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>
        <div className="w-full">
          <Input
            label="Email"
            required
            type="email"
            id="email"
            placeholder="Email của bạn"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="w-full">
          <Select
            id="city"
            required
            label="Tỉnh/Thành phố"
            placeholder="Tỉnh/Thành phố của bạn"
            options={provinces.map(province => ({
              label: province.name,
              value: JSON.stringify({ code: province.code, name: province.name }),
            }))}
            {...register("province")}
            error={errors.province?.message}
          />
        </div>
        <div className="w-full">
          <Select
            id="district"
            required
            label="Quận/Huyện"
            placeholder="Quận/Huyện của bạn"
            options={districts.map(district => ({
              label: district.name,
              value: JSON.stringify({ code: district.code, name: district.name }),
            }))}
            {...register("district")}
            error={errors.district?.message}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="w-full">
          <Select
            id="ward"
            required
            label="Phường/Xã"
            placeholder="Phường/Xã của bạn"
            options={wards.map(ward => ({
              label: ward.name,
              value: ward.code,
            }))}
            {...register("ward")}
            error={errors.ward?.message}
          />
        </div>
        <div className="w-full">
          <Input
            label="Địa chỉ"
            required
            id="address"
            placeholder="Địa chỉ của bạn"
            {...register("address")}
            className="flex flex-col"
            error={errors.address?.message}
          />
        </div>
      </div>
      {userPoint > 20 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="use_point"
              id="use_point"
              checked={isUsePoint}
              onChange={e => setIsUsePoint(e.target.checked)}
            />
            <label htmlFor="use_point" className="select-none">
              Bạn đang có <span className="font-semibold">{userPoint} điểm</span> trong tài khoản (1
              điểm = 1.000đ)
            </label>
          </div>
          {isUsePoint && (
            <p>
              Bạn đang sử dụng <span className="font-semibold">{pointUsed || userPoint} điểm</span>
            </p>
          )}
          {isUsePoint && (
            <input
              type="range"
              className="price-range pointer-events-none relative right-0 z-[1] m-0 h-[5px] w-full max-w-[200px] appearance-none rounded-[5px] bg-[#f1f1f1]"
              min={20}
              max={userPoint}
              step={1}
              defaultValue={userPoint}
              onChange={e => onChangePointUsed?.(Number(e.target.value))}
            />
          )}
        </div>
      )}
      <div>
        <Textarea
          label="Ghi chú"
          id="note"
          placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
          {...register("note")}
          rows={4}
          error={errors.note?.message}
        />
      </div>
    </form>
  );
};

export default CreatePaymentForm;
