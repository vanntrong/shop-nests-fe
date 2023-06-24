import * as yup from "yup";

export const createPaymentSchema = yup.object().shape({
  name: yup.string().required("Họ và tên bắt buộc"),
  phone: yup
    .string()
    .required("Số điện thoại bắt buộc")
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
  email: yup.string().email("Email không hợp lệ").required("Email bắt buộc"),
  province: yup.string().required("Tỉnh/Thành phố bắt buộc"),
  district: yup.string().required("Quận/Huyện bắt buộc"),
  ward: yup.string().required("Phường/Xã bắt buộc"),
  address: yup.string().required("Địa chỉ bắt buộc"),
  note: yup.string(),
});

export type TCreatePaymentData = yup.InferType<typeof createPaymentSchema>;
