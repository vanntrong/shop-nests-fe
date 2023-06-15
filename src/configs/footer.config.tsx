import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const BRAND_BENEFIT = ["/shipping.png", "/dambao.png", "/chatluong.png"];
export const FOOTER_BACKGROUND_IMAGE = "/footer-bg.jpeg";
export const CONTACTS = [
  {
    type: "phone",
    value: "tel:01234567891",
  },
  {
    type: "phone",
    value: "tel:0123456789",
  },
  {
    type: "email",
    value: "mailto:abc@gmail.com",
  },
];
export const FOOTER_CONTACT_ICON: Record<string, React.ReactNode> = {
  phone: <AiFillPhone color="#FDEB95" size={18} />,
  email: <MdEmail color="#FDEB95" size={18} />,
};
