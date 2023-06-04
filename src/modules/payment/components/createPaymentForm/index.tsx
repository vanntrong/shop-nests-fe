"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useCallback } from "react";
import { useForm } from "react-hook-form";

import Input from "@/components/input";
import Select from "@/components/select";
import { TOption } from "@/components/select/option.type";
import Textarea from "@/components/textarea";
import {
  TCreatePaymentData,
  createPaymentSchema,
} from "@/modules/payment/validations/createPayment";

const cityOptions: TOption[] = [
  {
    label: "Hà Nội",
    value: "hanoi",
  },
  {
    label: "Hồ Chí Minh",
    value: "hochiminh",
  },
];

interface ICreatePaymentFormProps {
  onSubmit: (data: TCreatePaymentData) => void;
}

const CreatePaymentForm: FC<ICreatePaymentFormProps> = props => {
  const { onSubmit: _onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreatePaymentData>({
    resolver: yupResolver(createPaymentSchema),
  });

  const onSubmit = useCallback(
    (data: TCreatePaymentData) => {
      _onSubmit(data);
    },
    [_onSubmit]
  );

  console.log(errors);

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
            options={cityOptions}
            {...register("city")}
            error={errors.city?.message}
          />
        </div>
        <div className="w-full">
          <Select
            id="district"
            required
            label="Quận/Huyện"
            placeholder="Quận/Huyện của bạn"
            options={cityOptions}
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
            options={cityOptions}
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
