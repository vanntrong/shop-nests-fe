import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().required("Tên người dùng bắt buộc"),
  phone: yup
    .string()
    .required("Số điện thoại bắt buộc")
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
  email: yup.string().email("Email không hợp lệ").required("Email bắt buộc"),
  password: yup.string().required("Mật khẩu bắt buộc").min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export type TRegisterData = yup.InferType<typeof registerSchema>;
