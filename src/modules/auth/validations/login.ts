import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email không hợp lệ").required("Email bắt buộc"),
  password: yup.string().required("Mật khẩu bắt buộc").min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export type TLoginData = yup.InferType<typeof loginSchema>;
